// 生成 sitemap.xml 和 失效站点/README.md，并按文件内容哈希刷新各 HTML 里的 ?v= 缓存参数。
// 提交前跑一次即可：
//   node scripts/build-site-meta.mjs
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ORIGIN = "https://ytzzjx.github.io";
const ROOT = path.resolve(import.meta.dirname, "..");

// 需要打版本号的静态资源，以及引用它们的页面。
const VERSIONED_ASSETS = ["styles.css", "app.js", "icons.js"];
const PAGES = ["index.html", "guide/index.html", "faq/index.html", "faq/agentrouter/index.html"];

// sitemap 收录的页面；changefreq 按实际更新节奏给。
// file 用来判断这一页是否已经提交进 git——没提交就不会部署，写进 sitemap 只会得到 404。
const ROUTES = [
  { path: "/", file: "index.html", changefreq: "daily", priority: "1.0", localized: true },
  { path: "/guide/", file: "guide/index.html", changefreq: "monthly", priority: "0.6", localized: false },
  { path: "/faq/", file: "faq/index.html", changefreq: "weekly", priority: "0.6", localized: false },
  {
    path: "/faq/agentrouter/",
    file: "faq/agentrouter/index.html",
    changefreq: "weekly",
    priority: "0.5",
    localized: false,
  },
];

// 只保留已被 git 跟踪的页面。不在 git 仓库里时退化成「全部保留」。
const listTrackedFiles = () => {
  try {
    const output = execFileSync("git", ["ls-files"], { cwd: ROOT, encoding: "utf8" });
    return new Set(output.split("\n").map((line) => line.trim()).filter(Boolean));
  } catch {
    return null;
  }
};

const readLastUpdated = async () => {
  const source = await readFile(path.join(ROOT, "app.js"), "utf8");
  const match = source.match(/lastUpdated:\s*"(\d{4}-\d{2}-\d{2})"/);
  if (!match) throw new Error("app.js 里找不到 siteConfig.lastUpdated");
  return match[1];
};

const hashAsset = async (name) => {
  const content = await readFile(path.join(ROOT, name));
  return createHash("sha256").update(content).digest("hex").slice(0, 8);
};

const ARCHIVE_DIR = path.join(ROOT, "失效站点");

// 归档目录里的说明文件完全由 archivedEntries 生成，避免和 app.js 里的记录各说一套。
const loadArchivedEntries = async () => {
  const source = await readFile(path.join(ROOT, "app.js"), "utf8");
  const factory = new Function("window", "document", `${source}\nreturn siteConfig;`);
  const config = factory(
    {
      localStorage: { getItem: () => null, setItem() {} },
      location: { search: "", href: "https://ytzzjx.github.io/" },
      history: { replaceState() {} },
    },
    {
      addEventListener() {},
      querySelector: () => null,
      querySelectorAll: () => [],
      documentElement: {},
      head: { append() {} },
      createElement: () => ({}),
    },
  );
  return config.archivedEntries ?? [];
};

const buildArchiveDoc = (entries) => {
  if (!entries.length) {
    return `# 失效站点

由 \`scripts/build-site-meta.mjs\` 生成，请勿手改。

当前没有已归档的站点。
`;
  }

  const sections = entries
    .slice()
    .sort((left, right) => String(right.archivedAt).localeCompare(String(left.archivedAt)))
    .map((entry) => {
      const rows = [
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
        ["原链接（不再推荐访问）", entry.url ? `\`${entry.url}\`` : ""],
      ]
        .filter(([, value]) => value)
        .map(([label, value]) => `| ${label} | ${value} |`)
        .join("\n");

      const benefits = Array.isArray(entry.benefits) && entry.benefits.length
        ? `\n当时记录的福利：${entry.benefits.join("、")}\n`
        : "";

      return `## ${entry.name}

${entry.summary ?? ""}

| 项目 | 记录 |
| --- | --- |
${rows}
${benefits}`;
    })
    .join("\n");

  return `# 失效站点

由 \`scripts/build-site-meta.mjs\` 从 \`app.js\` 的 \`siteConfig.archivedEntries\` 生成，请勿手改。

这里存放已经从页面下架的站点，只作留档。**下面的链接都不再推荐访问。**
站点恢复时，把 \`archivedEntries\` 里对应的对象移回 \`siteConfig.entries\`，并把名字加回 \`displayOrder\`，
然后重新跑一次 \`node scripts/build-site-meta.mjs\`。英文文案一直留在 \`entryTranslations\` 里，不需要搬。

共 ${entries.length} 个。

${sections}`;
};

const buildSitemap = (lastmod, routes) => {
  const entries = routes.map(({ path: route, changefreq, priority, localized }) => {
    const url = `${ORIGIN}${route}`;
    // 中英文共用同一 URL，只有首页需要 hreflang 声明两个变体。
    const alternates = localized
      ? [
          `    <xhtml:link rel="alternate" hreflang="zh-Hans" href="${url}" />`,
          `    <xhtml:link rel="alternate" hreflang="en" href="${url}?lang=en" />`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />`,
        ].join("\n")
      : "";
    return [
      "  <url>",
      `    <loc>${url}</loc>`,
      alternates,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n");
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- 由 scripts/build-site-meta.mjs 生成，请勿手改。 -->
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${entries}
</urlset>
`;
};

const stampPages = async (versions) => {
  const stamped = [];
  for (const page of PAGES) {
    const file = path.join(ROOT, page);
    const original = await readFile(file, "utf8");
    let updated = original;
    for (const [asset, version] of Object.entries(versions)) {
      // 匹配任意相对前缀（如 ../ 或 ../../）后的资源名，只替换 ?v= 的值。
      updated = updated.replace(
        new RegExp(`((?:\\.\\./)*${asset.replace(".", "\\.")})\\?v=[^"']*`, "g"),
        `$1?v=${version}`,
      );
    }
    if (updated !== original) {
      await writeFile(file, updated, "utf8");
      stamped.push(page);
    }
  }
  return stamped;
};

const lastUpdated = await readLastUpdated();
const versions = Object.fromEntries(
  await Promise.all(VERSIONED_ASSETS.map(async (name) => [name, await hashAsset(name)])),
);

const tracked = listTrackedFiles();
const publishedRoutes = tracked ? ROUTES.filter((route) => tracked.has(route.file)) : ROUTES;
const skippedRoutes = ROUTES.filter((route) => !publishedRoutes.includes(route));

await writeFile(path.join(ROOT, "sitemap.xml"), buildSitemap(lastUpdated, publishedRoutes), "utf8");

const archivedEntries = await loadArchivedEntries();
await mkdir(ARCHIVE_DIR, { recursive: true });
await writeFile(path.join(ARCHIVE_DIR, "README.md"), buildArchiveDoc(archivedEntries), "utf8");

const stamped = await stampPages(versions);

console.log(`sitemap.xml: ${publishedRoutes.length} 条, lastmod ${lastUpdated}`);
if (skippedRoutes.length) {
  console.log(`  跳过未提交的页面（提交后会自动收录）：${skippedRoutes.map((route) => route.path).join("、")}`);
}
console.log(`失效站点/README.md: ${archivedEntries.length} 个归档站点`);
console.log(`版本号: ${Object.entries(versions).map(([name, hash]) => `${name}=${hash}`).join(", ")}`);
console.log(stamped.length ? `已更新页面: ${stamped.join(", ")}` : "页面版本号已是最新");
