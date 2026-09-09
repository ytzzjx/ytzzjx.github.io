// 提交前的一致性检查：新增/下线站点时最容易漏掉某一处，这里一次性全查出来。
//   node scripts/check-consistency.mjs
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const problems = [];
const notes = [];

const fail = (message) => problems.push(message);
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
const parseDateOnly = (value) => {
  if (!DATE_ONLY.test(String(value))) return null;
  const [year, month, day] = String(value).split("-").map(Number);
  const parsed = new Date(year, month - 1, day);
  if (parsed.getFullYear() !== year || parsed.getMonth() !== month - 1 || parsed.getDate() !== day) return null;
  return parsed;
};

// app.js 是普通脚本而不是模块，用受控的桩对象把它执行一遍，取出里面的配置。
const loadConfig = async () => {
  const source = await readFile(path.join(ROOT, "app.js"), "utf8");
  const factory = new Function(
    "window",
    "document",
    `${source}\nreturn { siteConfig, entryTranslations, pageCopy, toneLabels };`,
  );
  const documentStub = {
    addEventListener() {},
    querySelector: () => null,
    querySelectorAll: () => [],
    documentElement: {},
    head: { append() {} },
    createElement: () => ({}),
  };
  const windowStub = {
    localStorage: { getItem: () => null, setItem() {} },
    location: { search: "", href: "https://ytzzjx.github.io/" },
    history: { replaceState() {} },
  };
  return factory(windowStub, documentStub);
};

const { siteConfig, entryTranslations, pageCopy, toneLabels } = await loadConfig();
const entryNames = siteConfig.entries.map((entry) => entry.name);
const archivedEntries = siteConfig.archivedEntries ?? [];
const archivedNames = archivedEntries.map((entry) => entry.name);

// 0. 归档站点不能同时出现在在线列表或排序里，否则会被重新渲染出来。
for (const name of archivedNames) {
  if (entryNames.includes(name)) fail(`「${name}」同时存在于 entries 和 archivedEntries`);
  if (siteConfig.displayOrder.includes(name)) fail(`「${name}」已归档，但还留在 displayOrder 里`);
}
for (const entry of archivedEntries) {
  if (!entry.archivedAt) fail(`归档条目「${entry.name}」缺少 archivedAt`);
  if (!entry.archivedReason) fail(`归档条目「${entry.name}」缺少 archivedReason`);
  if (!entryTranslations[entry.name]) fail(`归档条目「${entry.name}」缺少英文翻译`);
  if (!entryTranslations[entry.name]?.archivedReason) fail(`归档条目「${entry.name}」缺少英文 archivedReason`);
}
for (const entry of siteConfig.entries) {
  if (entry.archivedAt !== undefined || entry.archivedReason !== undefined) {
    fail(`在线条目「${entry.name}」不应携带 archivedAt 或 archivedReason`);
  }
}
if (archivedNames.length) notes.push(`已归档 ${archivedNames.length} 个站点：${archivedNames.join("、")}`);

// 1. displayOrder 与 entries 必须一一对应，否则新站会被挤到列表末尾。
const orderSet = new Set(siteConfig.displayOrder);
if (orderSet.size !== siteConfig.displayOrder.length) {
  const seen = new Set();
  const duplicates = siteConfig.displayOrder.filter((name) => (seen.has(name) ? true : (seen.add(name), false)));
  fail(`displayOrder 有重复项：${[...new Set(duplicates)].join("、")}`);
}
for (const name of entryNames) {
  if (!orderSet.has(name)) fail(`displayOrder 缺少「${name}」，该站会被排到列表最后`);
}
for (const name of siteConfig.displayOrder) {
  if (!entryNames.includes(name)) fail(`displayOrder 里的「${name}」在 entries 中不存在`);
}

// 2. 站点名在在线和归档数据中都必须全局唯一，否则排序、翻译和恢复都会对错。
const nameCounts = new Map();
for (const name of [...entryNames, ...archivedNames]) nameCounts.set(name, (nameCounts.get(name) ?? 0) + 1);
for (const [name, count] of nameCounts) {
  if (count > 1) fail(`entries + archivedEntries 里「${name}」出现了 ${count} 次`);
}

// 3. 英文翻译缺失时，英文模式会静默显示中文。归档站点的翻译保留不动，方便恢复。
for (const name of entryNames) {
  if (!entryTranslations[name]) fail(`entryTranslations 缺少「${name}」，英文模式会显示中文`);
}
for (const name of Object.keys(entryTranslations)) {
  if (!entryNames.includes(name) && !archivedNames.includes(name)) {
    fail(`entryTranslations 里的「${name}」既不在 entries 也不在 archivedEntries 中`);
  }
}

// 4. 中英文案键必须齐平，否则切语言会出现 undefined。
const zhKeys = Object.keys(pageCopy["zh-CN"]);
const enKeys = new Set(Object.keys(pageCopy.en));
for (const key of zhKeys) {
  if (!enKeys.has(key)) fail(`pageCopy.en 缺少键「${key}」`);
}
for (const key of enKeys) {
  if (!zhKeys.includes(key)) fail(`pageCopy["zh-CN"] 缺少键「${key}」`);
}

// 5. URL 必须是合法 http(s)，tone 必须是已定义的取值（归档条目一起查，恢复时才不会带着坏数据回来）。
const validTones = new Set(Object.keys(toneLabels["zh-CN"]));
for (const entry of [...siteConfig.entries, ...archivedEntries]) {
  try {
    const url = new URL(entry.url);
    if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("protocol");
  } catch {
    fail(`「${entry.name}」的 url 非法：${entry.url}`);
  }
  if (entry.tone && !validTones.has(entry.tone)) {
    fail(`「${entry.name}」的 tone「${entry.tone}」未在 toneLabels 中定义`);
  }
}

// 5b. updatedAt / updateNote：时效标记和「最近变更」都靠它们算，格式错了会静默不显示。
for (const entry of siteConfig.entries) {
  if (entry.updateNote && !entry.updatedAt) {
    fail(`「${entry.name}」有 updateNote 但缺 updatedAt，说明不会显示`);
  }
  if (!entry.updatedAt) continue;
  const updated = parseDateOnly(entry.updatedAt);
  if (!updated) {
    fail(`「${entry.name}」的 updatedAt 必须是真实的 YYYY-MM-DD，当前是「${entry.updatedAt}」`);
    continue;
  }
  const published = parseDateOnly(String(entry.publishedAt).slice(0, 10));
  if (published && updated < published) {
    fail(`「${entry.name}」的 updatedAt（${entry.updatedAt}）早于 publishedAt（${entry.publishedAt}）`);
  }
  if (updated > new Date()) {
    fail(`「${entry.name}」的 updatedAt 是未来日期：${entry.updatedAt}`);
  }
}

// 归档条目的 archivedAt 同样会进「最近变更」，必须是真实、非未来且不早于首次记录的日期。
for (const entry of archivedEntries) {
  if (!entry.archivedAt) continue;
  const archived = parseDateOnly(entry.archivedAt);
  if (!archived) {
    fail(`归档条目「${entry.name}」的 archivedAt 必须是真实的 YYYY-MM-DD，当前是「${entry.archivedAt}」`);
    continue;
  }
  if (archived > new Date()) fail(`归档条目「${entry.name}」的 archivedAt 是未来日期：${entry.archivedAt}`);
  const firstRecorded = parseDateOnly(String(entry.addedAt ?? entry.publishedAt ?? "").slice(0, 10));
  if (firstRecorded && archived < firstRecorded) {
    fail(`归档条目「${entry.name}」的 archivedAt（${entry.archivedAt}）早于首次记录（${entry.addedAt ?? entry.publishedAt}）`);
  }
}

const withNote = siteConfig.entries.filter((entry) => entry.updateNote);
const missingEnNote = withNote.filter((entry) => !entryTranslations[entry.name]?.updateNote);
if (missingEnNote.length) {
  // 英文说明是可选的：缺了英文页整行不渲染，不会漏中文，所以只提示不报错。
  notes.push(`以下条目只有中文 updateNote，英文页不会显示说明：${missingEnNote.map((e) => e.name).join("、")}`);
}

// 5c. quietUpdate 只用来把小改动挡在「最近变更」外面，没有 updatedAt 时它没有意义。
for (const entry of siteConfig.entries) {
  if (entry.quietUpdate && !entry.updatedAt) {
    fail(`「${entry.name}」有 quietUpdate 但缺 updatedAt，该字段不会起作用`);
  }
}
const quiet = siteConfig.entries.filter((entry) => entry.quietUpdate);
if (quiet.length) notes.push(`不进「最近变更」的静默更新：${quiet.map((e) => e.name).join("、")}`);

// 5d. addedAt 是「首次收录日期」，只在新增站点时填。不要用 publishedAt 代替：那个字段
//     历史上被当作「信息最后成稿时间」改过，拿它判断会把改过文案的老站认成新站。
for (const entry of siteConfig.entries) {
  if (!entry.addedAt) continue;
  const added = parseDateOnly(entry.addedAt);
  if (!added) {
    fail(`「${entry.name}」的 addedAt 必须是真实的 YYYY-MM-DD，当前是「${entry.addedAt}」`);
    continue;
  }
  if (added > new Date()) fail(`「${entry.name}」的 addedAt 是未来日期：${entry.addedAt}`);
  if (entry.updatedAt) {
    const updated = parseDateOnly(entry.updatedAt);
    if (updated && updated < added) {
      fail(`「${entry.name}」的 updatedAt（${entry.updatedAt}）早于 addedAt（${entry.addedAt}）`);
    }
  }
}

// 5e. 新收录和改动都在「最近变更」里。addedAt / updatedAt 同日时按新收录显示；
//     updatedAt 晚于 addedAt 时按改动显示。同一个站始终只显示一次。
const RECENT_WINDOW_DAYS = 7;
const daysFromToday = (text) => {
  if (!text) return null;
  const parsed = new Date(`${String(text).slice(0, 10)}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return null;
  const now = new Date();
  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.round((startOfDay(now) - startOfDay(parsed)) / 86400000);
};
const inWindow = (days) => days !== null && days >= 0 && days <= RECENT_WINDOW_DAYS;
for (const entry of siteConfig.entries) {
  if (!entry.addedAt || !entry.quietUpdate) continue;
  if (inWindow(daysFromToday(entry.updatedAt)) && inWindow(daysFromToday(entry.addedAt))) {
    notes.push(`「${entry.name}」的 addedAt 和 updatedAt 都在窗口内，且标了 quietUpdate，两条都不会显示`);
  }
}
const recentlyAdded = siteConfig.entries.filter((entry) => inWindow(daysFromToday(entry.addedAt)));
if (recentlyAdded.length) {
  notes.push(`近 ${RECENT_WINDOW_DAYS} 天新收录：${recentlyAdded.map((e) => e.name).join("、")}`);
}

// 5f. 新收录进「最近变更」时说明直接用 kind，所以 kind 不能缺。
for (const entry of siteConfig.entries) {
  if (!entry.kind) fail(`「${entry.name}」缺少 kind，新收录进「最近变更」时会没有说明`);
}

// 5g. 「公益 / 付费」分区靠 pricing 区分：只有纯付费站写 "paid"，不写即公益。
//     写错值会被当成公益，站点静默出现在错误的分区里，所以这里卡住。
for (const entry of [...siteConfig.entries, ...archivedEntries]) {
  if (entry.pricing !== undefined && entry.pricing !== "paid") {
    fail(`「${entry.name}」的 pricing 只能是 "paid" 或不写，当前是「${entry.pricing}」`);
  }
}
const paidEntries = siteConfig.entries.filter((entry) => entry.pricing === "paid");
const publicEntries = siteConfig.entries.filter((entry) => entry.pricing !== "paid");
if (!paidEntries.length) fail("付费分区没有任何站点，切到付费会是空列表");
if (!publicEntries.length) fail("公益分区没有任何站点，默认打开会是空列表");
notes.push(`分区：公益 ${publicEntries.length} 个，付费 ${paidEntries.length} 个`);

// 6. 两份 README 都要覆盖到每个站点。英文 README 用英文名，且两份都带直达链接，
//    所以中文名、英文名、URL 命中任意一个就算已覆盖。
for (const readme of ["README.md", "README_EN.md"]) {
  const text = await readFile(path.join(ROOT, readme), "utf8");
  const missing = siteConfig.entries
    .filter((entry) => {
      const aliases = [entry.name, entryTranslations[entry.name]?.name, entry.url].filter(Boolean);
      return !aliases.some((alias) => text.includes(alias));
    })
    .map((entry) => entry.name);
  if (missing.length) fail(`${readme} 未收录：${missing.join("、")}`);

  // 已归档的站点不能还留在「现在开放注册」那张表里，否则等于继续推荐一个死站。
  const openSection = text.split(/^## /m).find((section) => /^(现在开放注册的站点|Sites open for registration)/.test(section));
  if (!openSection) {
    fail(`${readme} 缺少开放注册章节`);
  } else {
    for (const entry of archivedEntries) {
      const aliases = [entry.name, entryTranslations[entry.name]?.name, entry.url].filter(Boolean);
      if (aliases.some((alias) => openSection.includes(alias))) {
        fail(`${readme} 的「现在开放注册」表里还留着已归档的「${entry.name}」`);
      }
    }
  }

  const archiveSection = text.split(/^## /m).find((section) => /^(已失效的站点|Delisted sites)/.test(section));
  if (!archiveSection) {
    fail(`${readme} 缺少归档章节`);
  } else {
    for (const entry of archivedEntries) {
      const aliases = [entry.name, entryTranslations[entry.name]?.name].filter(Boolean);
      if (!aliases.some((alias) => archiveSection.includes(alias))) {
        fail(`${readme} 的归档章节未收录「${entry.name}」`);
      }
    }
  }
}

// 7. 生成归档、首页挂载点和自托管图标也必须保持一致。
const archiveDoc = await readFile(path.join(ROOT, "失效站点/README.md"), "utf8");
if (!archiveDoc.includes(`共 ${archivedEntries.length} 个。`)) {
  fail(`失效站点/README.md 的归档总数不是 ${archivedEntries.length}`);
}
for (const entry of archivedEntries) {
  const section = archiveDoc.split(/^## /m).find((part) => part.startsWith(`${entry.name}\n`));
  if (!section) {
    fail(`失效站点/README.md 未收录「${entry.name}」`);
    continue;
  }
  for (const [label, value] of [
    ["下架日期", entry.archivedAt],
    ["下架原因", entry.archivedReason],
    ["原分类", entry.kind],
    ["首次收录", entry.publishedAt],
    ["注册方式", entry.registration],
    ["注册赠送", entry.signupBonus],
    ["每日签到", entry.dailyCheckin],
    ["可用模型", entry.models],
    ["速度与稳定性", entry.experience],
    ["当时的注意事项", entry.caveat],
  ]) {
    if (value && !section.includes(`| ${label} | ${value} |`)) {
      fail(`失效站点/README.md 中「${entry.name}」的${label}未同步`);
    }
  }
  if (entry.summary && !section.includes(entry.summary)) fail(`失效站点/README.md 中「${entry.name}」的简介未同步`);
  if (entry.url && !section.includes(`| 原链接（不再推荐访问） | \`${entry.url}\` |`)) {
    fail(`失效站点/README.md 中「${entry.name}」的原链接未同步`);
  }
  if (entry.benefits?.length && !section.includes(`当时记录的福利：${entry.benefits.join("、")}`)) {
    fail(`失效站点/README.md 中「${entry.name}」的福利记录未同步`);
  }
}

const sitemapSource = await readFile(path.join(ROOT, "sitemap.xml"), "utf8");
if (!sitemapSource.includes(`<lastmod>${siteConfig.lastUpdated}</lastmod>`)) {
  fail(`sitemap.xml 的 lastmod 未同步为 ${siteConfig.lastUpdated}`);
}

const indexSource = await readFile(path.join(ROOT, "index.html"), "utf8");
const ledgerSource = await readFile(path.join(ROOT, "运营推广/站点状态核实台账.csv"), "utf8");
for (const entry of archivedEntries) {
  const ledgerName = entry.name === "Zynk 公益站" ? "Zynk公益站" : entry.name;
  const row = ledgerSource.split(/\r?\n/).find((line) => line.startsWith(`${ledgerName},`));
  if (!row) {
    fail(`站点状态核实台账.csv 缺少归档条目「${entry.name}」`);
    continue;
  }
  if (entry.name === "Zynk 公益站") {
    if (!row.includes("已失效") || !row.includes("无需再核实")) fail("Zynk 公益站的台账归档状态未同步");
  } else if (!row.includes("已归档") || !row.includes("archivedEntries") || !row.includes("首页失效区")) {
    fail(`站点状态核实台账.csv 中「${entry.name}」未标记为已归档并迁入首页失效区`);
  }
}

const assetVersions = {};
for (const asset of ["styles.css", "app.js", "icons.js"]) {
  const content = await readFile(path.join(ROOT, asset));
  assetVersions[asset] = createHash("sha256").update(content).digest("hex").slice(0, 8);
}
for (const page of ["index.html", "guide/index.html", "faq/index.html", "faq/agentrouter/index.html"]) {
  const source = page === "index.html" ? indexSource : await readFile(path.join(ROOT, page), "utf8");
  for (const [asset, version] of Object.entries(assetVersions)) {
    const pattern = new RegExp(`(?:\\.\\./)*${asset.replace(".", "\\.")}\\?v=${version}(?:[\"'])`);
    const mentionsAsset = new RegExp(`(?:\\.\\./)*${asset.replace(".", "\\.")}\\?v=`).test(source);
    if (mentionsAsset && !pattern.test(source)) fail(`${page} 中 ${asset} 的资源哈希未同步为 ${version}`);
  }
}
for (const hook of [
  "data-archive-section",
  "data-archive-drawer",
  "data-archive-title",
  "data-archive-count",
  "data-archive-note",
  "data-archive-list",
]) {
  if (!indexSource.includes(hook)) fail(`index.html 缺少失效区挂载点 ${hook}`);
}
if (/data-archive-drawer[^>]*\sopen(?:\s|>|=)/.test(indexSource)) {
  fail("index.html 的失效区默认不应带 open 属性");
}
const iconsSource = await readFile(path.join(ROOT, "icons.js"), "utf8");
const availableIcons = new Set([...iconsSource.matchAll(/^\s{4}"([a-z0-9-]+)":/gm)].map((match) => match[1]));
const pages = ["index.html", "guide/index.html", "faq/index.html", "faq/agentrouter/index.html", "app.js"];
const usedIcons = new Set();
for (const page of pages) {
  const text = await readFile(path.join(ROOT, page), "utf8");
  // 覆盖当前所有调用形式：静态 data-lucide、infoRow(...) 首参、资源链接的 icon: 字段。
  for (const pattern of [/data-lucide="([a-z0-9-]+)"/g, /infoRow\("([a-z0-9-]+)"/g, /icon:\s*"([a-z0-9-]+)"/g]) {
    for (const match of text.matchAll(pattern)) usedIcons.add(match[1]);
  }
}
for (const icon of usedIcons) {
  if (!availableIcons.has(icon)) {
    fail(`icons.js 缺少图标「${icon}」，请加入 scripts/build-icons.mjs 的 ICONS 后重新生成`);
  }
}
const unusedIcons = [...availableIcons].filter((icon) => !usedIcons.has(icon));
if (unusedIcons.length) notes.push(`icons.js 里有未使用的图标：${unusedIcons.join("、")}`);

console.log(`检查完成：在线 ${entryNames.length} 个（公益 ${publicEntries.length}、付费 ${paidEntries.length}），归档 ${archivedEntries.length} 个，${availableIcons.size} 个图标。`);
for (const note of notes) console.log(`提示  ${note}`);
for (const problem of problems) console.error(`错误  ${problem}`);
if (problems.length) {
  console.error(`\n共 ${problems.length} 处需要修复。`);
  process.exit(1);
}
console.log("没有发现不一致。");
