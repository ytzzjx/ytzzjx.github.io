// 从 lucide-static 抓取站内实际用到的图标，生成自托管的 icons.js。
// 平时不需要运行；只有新增/删除 data-lucide 图标时才重新执行：
//   node scripts/build-icons.mjs
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const LUCIDE_VERSION = "1.37.0";
const ROOT = path.resolve(import.meta.dirname, "..");
const OUTPUT = path.join(ROOT, "icons.js");

// 与 index.html / 子页面 / app.js 中的 data-lucide 保持一致。
const ICONS = [
  "activity",
  "arrow-left",
  "arrow-up-right",
  "badge-check",
  "battery-charging",
  "book-open",
  "coins",
  "gauge",
  "gift",
  "globe",
  "history",
  "plug",
  "route",
  "sparkles",
  "timer",
  "triangle-alert",
  "user-round",
  "user-round-plus",
];

const fetchIcon = async (name) => {
  const url = `https://unpkg.com/lucide-static@${LUCIDE_VERSION}/icons/${name}.svg`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const svg = await response.text();
  const body = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1];
  if (!body) throw new Error(`${name}: 无法解析 SVG 内容`);
  // 压掉换行和缩进，属性之间只保留一个空格。
  return body.replace(/\s+/g, " ").replace(/> </g, "><").trim();
};

const bodies = await Promise.all(ICONS.map(fetchIcon));
const entries = ICONS.map((name, index) => `    "${name}": '${bodies[index]}',`).join("\n");

const file = `// 由 scripts/build-icons.mjs 生成，请勿手改。
// 图标来自 lucide-static v${LUCIDE_VERSION}（ISC 许可），只打包站内实际用到的 ${ICONS.length} 个。
(() => {
  const paths = {
${entries}
  };

  const ATTRS =
    'xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ' +
    'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

  // 把 [data-lucide] 占位元素替换成内联 SVG，接口与 lucide.createIcons() 一致。
  const createIcons = (root = document) => {
    root.querySelectorAll("[data-lucide]").forEach((element) => {
      const name = element.dataset.lucide;
      const body = paths[name];
      if (!body) return;
      const svg = \`<svg class="lucide lucide-\${name}" \${ATTRS} aria-hidden="true" focusable="false">\${body}</svg>\`;
      element.outerHTML = svg;
    });
  };

  window.lucide = { createIcons, iconNames: Object.keys(paths) };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => createIcons(), { once: true });
  } else {
    createIcons();
  }
})();
`;

await writeFile(OUTPUT, file, "utf8");
console.log(`icons.js: ${ICONS.length} 个图标, ${file.length} 字节`);
