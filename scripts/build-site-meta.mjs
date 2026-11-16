// 生成中英文静态目录、专题、sitemap 和归档，并刷新 HTML 的资源缓存参数。
// 提交前跑一次即可：
//   node scripts/build-site-meta.mjs
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { buildSearchPages, SEARCH_ROUTES } from "./search-pages.mjs";

const ORIGIN = "https://ytzzjx.github.io";
const ROOT = path.resolve(import.meta.dirname, "..");

// 需要打版本号的静态资源，以及引用它们的页面。
// entry-translations.js 由 app.js 按需加载，版本号写在 index.html 的 data-translations-src 上。
const VERSIONED_ASSETS = ["styles.css", "app.js", "icons.js", "entry-translations.js"];
const PAGES = ["index.html", ...SEARCH_ROUTES.map((route) => route.file), "guide/index.html", "faq/index.html", "faq/agentrouter/index.html"];

// sitemap 收录的页面；changefreq 按实际更新节奏给。
// 草稿页用 file 判断是否被 git 跟踪；generated 页面由本脚本保证生成。
const ROUTES = [
  { path: "/", file: "index.html", changefreq: "daily", priority: "1.0", localized: true },
  ...SEARCH_ROUTES,
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

const hashAsset = async (name) => {
  const content = await readFile(path.join(ROOT, name));
  return createHash("sha256").update(content).digest("hex").slice(0, 8);
};

const ARCHIVE_DIR = path.join(ROOT, "失效站点");

// 归档说明完全由 archivedEntries 生成，避免和 app.js 里的记录各说一套。
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
然后重新跑一次 \`node scripts/build-site-meta.mjs\`。英文文案一直留在 \`entry-translations.js\` 里，不需要搬。

共 ${entries.length} 个。

${sections}`;
};

const buildSitemap = (lastmod, routes) => {
  const entries = routes.map(({ path: route, changefreq, priority, localized }) => {
    const url = `${ORIGIN}${route}`;
    // 中英文各有独立静态地址；配对首页和专题页。
    const zhRoute = route.startsWith("/en/") ? route.replace(/^\/en\//, "/") : route;
    const zhUrl = `${ORIGIN}${zhRoute}`;
    const enUrl = `${ORIGIN}/en${zhRoute}`;
    const alternates = localized
      ? [
          `    <xhtml:link rel="alternate" hreflang="zh-Hans" href="${zhUrl}" />`,
          `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${zhUrl}" />`,
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

const config = await buildSearchPages();
const lastUpdated = config.siteConfig.lastUpdated;
const versions = Object.fromEntries(
  await Promise.all(VERSIONED_ASSETS.map(async (name) => [name, await hashAsset(name)])),
);

const tracked = listTrackedFiles();
// 专题和英文首页每次构建必定生成；草稿仍须被 git 跟踪才会写进 sitemap。
const publishedRoutes = tracked ? ROUTES.filter((route) => route.generated || tracked.has(route.file)) : ROUTES;
const skippedRoutes = ROUTES.filter((route) => !publishedRoutes.includes(route));

await writeFile(path.join(ROOT, "sitemap.xml"), buildSitemap(lastUpdated, publishedRoutes), "utf8");

const archivedEntries = config.siteConfig.archivedEntries ?? [];
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
