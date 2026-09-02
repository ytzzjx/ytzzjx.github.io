// 提交前的一致性检查：新增/下线站点时最容易漏掉某一处，这里一次性全查出来。
//   node scripts/check-consistency.mjs
import { readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const problems = [];
const notes = [];

const fail = (message) => problems.push(message);

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

// 2. 站点名不能重复，否则 displayOrder 和翻译都会对错。
const nameCounts = new Map();
for (const name of entryNames) nameCounts.set(name, (nameCounts.get(name) ?? 0) + 1);
for (const [name, count] of nameCounts) {
  if (count > 1) fail(`entries 里「${name}」出现了 ${count} 次`);
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
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;
for (const entry of siteConfig.entries) {
  if (entry.updateNote && !entry.updatedAt) {
    fail(`「${entry.name}」有 updateNote 但缺 updatedAt，说明不会显示`);
  }
  if (!entry.updatedAt) continue;
  if (!DATE_ONLY.test(entry.updatedAt)) {
    fail(`「${entry.name}」的 updatedAt 必须是 YYYY-MM-DD，当前是「${entry.updatedAt}」`);
    continue;
  }
  const updated = new Date(`${entry.updatedAt}T00:00:00`);
  if (Number.isNaN(updated.getTime())) {
    fail(`「${entry.name}」的 updatedAt 不是合法日期：${entry.updatedAt}`);
    continue;
  }
  const published = new Date(String(entry.publishedAt).slice(0, 10) + "T00:00:00");
  if (!Number.isNaN(published.getTime()) && updated < published) {
    fail(`「${entry.name}」的 updatedAt（${entry.updatedAt}）早于 publishedAt（${entry.publishedAt}）`);
  }
  if (updated > new Date()) {
    fail(`「${entry.name}」的 updatedAt 是未来日期：${entry.updatedAt}`);
  }
}

// 归档条目的 archivedAt 同样会进「最近变更」，格式一起校验。
for (const entry of archivedEntries) {
  if (entry.archivedAt && !DATE_ONLY.test(entry.archivedAt)) {
    fail(`归档条目「${entry.name}」的 archivedAt 必须是 YYYY-MM-DD，当前是「${entry.archivedAt}」`);
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
  if (!DATE_ONLY.test(entry.addedAt)) {
    fail(`「${entry.name}」的 addedAt 必须是 YYYY-MM-DD，当前是「${entry.addedAt}」`);
    continue;
  }
  const added = new Date(`${entry.addedAt}T00:00:00`);
  if (Number.isNaN(added.getTime())) {
    fail(`「${entry.name}」的 addedAt 不是合法日期：${entry.addedAt}`);
    continue;
  }
  if (added > new Date()) fail(`「${entry.name}」的 addedAt 是未来日期：${entry.addedAt}`);
  if (entry.updatedAt) {
    const updated = new Date(`${entry.updatedAt}T00:00:00`);
    if (!Number.isNaN(updated.getTime()) && updated < added) {
      fail(`「${entry.name}」的 updatedAt（${entry.updatedAt}）早于 addedAt（${entry.addedAt}）`);
    }
  }
}

// 5e. 新收录和改动都在「最近变更」里，同一个站两者都落在窗口内时只会按改动显示，
//     此时 addedAt 白填了，提示一下免得以为自己漏了什么。
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
  if (openSection) {
    for (const entry of archivedEntries) {
      if (openSection.includes(entry.url)) {
        fail(`${readme} 的「现在开放注册」表里还留着已归档的「${entry.name}」`);
      }
    }
  }
}

// 7. 自托管的 icons.js 必须包含所有用到的图标，漏掉会静默渲染成空白。
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

console.log(`检查完成：${entryNames.length} 个站点，${availableIcons.size} 个图标。`);
for (const note of notes) console.log(`提示  ${note}`);
for (const problem of problems) console.error(`错误  ${problem}`);
if (problems.length) {
  console.error(`\n共 ${problems.length} 处需要修复。`);
  process.exit(1);
}
console.log("没有发现不一致。");
