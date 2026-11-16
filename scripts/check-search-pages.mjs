// 检查原始 HTML，确保内容可直接抓取、链接参数保留、中英文地址互相配对。
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { loadSearchConfig, orderedEntries, ORIGIN, ROOT, SEARCH_ROUTES, TOPICS } from "./search-pages.mjs";

const decode = (value) => value.replace(/&(?:amp|quot|lt|gt|#39);/g, (entity) => ({
  "&amp;": "&", "&quot;": '"', "&lt;": "<", "&gt;": ">", "&#39;": "'",
})[entity]);

export const checkSearchPages = async () => {
  const config = await loadSearchConfig();
  const allEntries = orderedEntries(config);
  const routes = [{ path: "/", file: "index.html" }, ...SEARCH_ROUTES];
  const sitemap = await readFile(path.join(ROOT, "sitemap.xml"), "utf8");
  const versions = Object.fromEntries(await Promise.all(["styles.css", "app.js", "icons.js", "entry-translations.js"].map(async (asset) => [asset, createHash("sha256").update(await readFile(path.join(ROOT, asset))).digest("hex").slice(0, 8)])));

  for (const route of routes) {
    const source = await readFile(path.join(ROOT, route.file), "utf8");
    const locale = route.path.startsWith("/en/") ? "en" : "zh-CN";
    const topic = TOPICS.find(({ slug }) => route.path.endsWith(`/topics/${slug}/`));
    const expectedEntries = topic ? allEntries.filter((entry) => entry.pricing !== "paid" && topic.select(entry)) : allEntries;
    const names = [...source.matchAll(/<article\b[^>]*data-entry-name="([^"]+)"/g)].map((match) => decode(match[1]));
    assert.equal(new Set(names).size, names.length, `${route.file} 出现重复站点`);
    assert.deepEqual([...names].sort(), expectedEntries.map(({ name }) => name).sort(), `${route.file} 原始 HTML 中的站点缺失或分组错误`);
    const blocks = [...source.matchAll(/<script type="application\/ld\+json" id="structured-data">([\s\S]*?)<\/script>/g)];
    assert.equal(blocks.length, 1, `${route.file} 需要且只能有一份目录结构化数据`);
    const data = JSON.parse(blocks[0][1]);
    assert.equal(data.numberOfItems, expectedEntries.length, `${route.file} 结构化数据总数不一致`);
    assert.deepEqual(data.itemListElement.map(({ url }) => url), expectedEntries.map(({ url }) => url), `${route.file} 邀请链接或参数被改动`);
    assert.match(source, new RegExp(`<html lang="${locale}">`));
    assert.equal((source.match(/<h1\b/g) || []).length, 1, `${route.file} 需要一个主标题`);
    assert.match(source, /<meta\s+name="description"\s+content="[^"]+"/);
    assert.ok(source.includes(`rel="canonical" href="${ORIGIN}${route.path}"`), `${route.file} canonical 错误`);
    assert.ok(sitemap.includes(`<loc>${ORIGIN}${route.path}</loc>`), `${route.file} 未写入 sitemap`);
    const zhPath = route.path.replace(/^\/en\//, "/");
    assert.ok(source.includes(`hreflang="zh-Hans" href="${ORIGIN}${zhPath}"`));
    assert.ok(source.includes(`hreflang="en" href="${ORIGIN}/en${zhPath}"`));
    for (const match of source.matchAll(/(?:href|src|data-translations-src)="(\/[^"#]*)"/g)) {
      const target = new URL(decode(match[1]), ORIGIN);
      let file = target.pathname.slice(1);
      if (!file || file.endsWith("/")) file += "index.html";
      await access(path.join(ROOT, file));
      const asset = Object.keys(versions).find((name) => target.pathname === `/${name}`);
      if (asset && asset !== "favicon.svg") assert.equal(target.searchParams.get("v"), versions[asset], `${route.file} 的 ${asset} 版本未同步`);
    }
    if (!topic) {
      for (const hook of ["data-brand", "data-language-switcher", "data-feed-search", "data-topic-path", "data-static-paid"]) assert.ok(source.includes(hook), `${route.file} 缺少 ${hook}`);
      assert.equal((source.match(/data-brand(?:\s|>)/g) || []).length, 1, `${route.file} 品牌挂载点缺失`);
      assert.ok(source.includes('class="static-language-link"'), `${route.file} 缺少无需脚本的语言入口`);
    }
  }
  console.log(`搜索页面检查通过：${routes.length} 个页面的静态内容、结构化数据、链接、语言配对和资源版本一致。`);
};
