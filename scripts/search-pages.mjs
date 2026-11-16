// 从同一份目录数据生成可直接抓取的首页与专题；不发布 guide/、faq/ 本地草稿。
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export const ROOT = path.resolve(import.meta.dirname, "..");
export const ORIGIN = "https://ytzzjx.github.io";
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[char]);
const json = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

export const TOPICS = [
  {
    slug: "claude",
    select: (entry) => /claude|opus/i.test(entry.models || ""),
    zh: {
      title: "Claude 公益 API 与免费额度导航",
      description: "整理目录中注明 Claude 或 Opus 模型的公益、半公益 API 中转站，对照注册赠送、签到额度、注册条件与使用限制。",
      paragraphs: [
        "这里收录现有模型说明中提到 Claude 或 Opus 的公益、半公益 API 中转站。免费额度可能来自注册赠送、签到或任务，具体来源和限制请看各站记录。",
        "公益额度不代表所有 Claude 模型免费，也不保证无限调用。分组倍率、模型供应、并发限制和注册门槛可能变化，使用前请看站内模型页和公告。",
        "目录保留用户提供、站方公告和待确认等来源说明。站点标注的模型名称不等于已验证模型真实性；重要任务建议先用少量额度检查输出。",
      ],
    },
    en: {
      title: "Claude API Services with Free Credit",
      description: "Compare free and freemium API relay services listing Claude or Opus, including sign-up credit, check-ins, registration requirements, and limits.",
      paragraphs: [
        "These free and freemium relay services mention Claude or Opus in their model records. Credit may come from registration, check-ins, or tasks; each record explains the available benefits and conditions.",
        "Free credit does not make every Claude model free or allow unlimited calls. Group rates, model supply, concurrency limits, and registration requirements may change; check each service's model page and notices.",
        "User reports, operator notices, and unconfirmed details remain labeled in the records. Listed model names do not prove model authenticity. Try a small amount of credit before relying on a service for important work.",
      ],
    },
  },
  {
    slug: "daily-checkin",
    // 仅收录有具体额度或明确签到说明的条目；「无」「未提供」「待确认」不冒充签到福利。
    select: (entry) => {
      const value = String(entry.dailyCheckin || "").trim();
      return !/^(?:无|没有|不支持|未提供|未核实|待确认|以站内显示为准)/.test(value)
        && /\d|有签到|签到|随机/.test(value);
    },
    zh: {
      title: "AI API 每日签到与免费额度导航",
      description: "比较公益、半公益 AI API 中转站的每日签到、免费额度来源、注册条件与领取限制，保留金额单位和待确认说明。",
      paragraphs: [
        "这里整理已有明确每日签到或额度记录的公益、半公益 AI API 中转站，方便比较领取方式。部分站点需要在 QQ 群、Discord 或控制台领取，也可能先完成调用或充值条件。",
        "签到数字不能直接比较：有的使用美元或人民币，有的使用积分、自定义货币或临时额度，还要结合模型倍率、有效期和每日上限看。金额单位和限制以各站原始说明为准。",
        "签到福利可能调整或取消。注册前先确认当前规则，不要把目录里的历史记录当作长期承诺；金额待确认的条目会保留说明。",
      ],
    },
    en: {
      title: "AI API Daily Check-ins and Free Credit",
      description: "Compare recorded daily check-ins, free credit, registration requirements, and claim conditions for free and freemium AI API relay services.",
      paragraphs: [
        "These free and freemium API relay services have explicit daily check-in or credit records. Some require a QQ group, Discord, a console request, prior API usage, or a top-up before credit can be claimed.",
        "Credit amounts are not directly comparable. Services may use USD, CNY, points, custom currencies, or temporary credit. Model rates, expiry dates, and daily caps also matter; keep the recorded units and conditions in mind.",
        "Check-in benefits may change or disappear. Confirm current rules before registering. Historical records are not permanent promises, and unconfirmed amounts remain labeled.",
      ],
    },
  },
  {
    slug: "registration",
    select: (entry) => Boolean(entry.registration),
    zh: {
      title: "公益 AI API 邮箱注册与账号绑定条件",
      description: "对照公益、半公益 AI API 中转站的邮箱、QQ 邮箱、GitHub、Linux DO、Discord 和加群验证等注册条件，查看邀请码与激活要求。",
      paragraphs: [
        "这里集中对照公益、半公益 AI API 中转站的注册条件，包括邮箱、QQ 邮箱、GitHub、Linux DO、Discord、加群验证和邀请码要求。邮箱注册不一定免验证，也不一定注册后就能调用。",
        "优先检查三个条件：允许使用哪种账号或邮箱、是否需要额外绑定或加群激活、注册赠送额度是否有领取条件。只允许 QQ 邮箱或要求账号年龄的站点，应先确认自己满足门槛。",
        "注册条件和开放时间可能变化，关闭注册的条目仍会明确标注。请通过各站允许的方式注册，避免批量注册；注册链接中的邀请参数保持原样。",
      ],
    },
    en: {
      title: "Free AI API Email Registration and Account Requirements",
      description: "Compare email, QQ email, GitHub, Linux DO, Discord, invitation, and group-verification requirements for free and freemium AI API relay services.",
      paragraphs: [
        "Compare registration requirements for free and freemium API relay services, including email, QQ email, GitHub, Linux DO, Discord, group verification, and invitations. Email registration may still require verification or activation before API calls work.",
        "Check the allowed account or email type, extra binding or group activation, and any conditions for claiming sign-up credit. Confirm eligibility first when a service requires QQ email or a minimum account age.",
        "Registration rules and opening times may change; closed registration remains labeled. Use only the methods the service allows, avoid bulk registration, and retain the recorded invitation parameters.",
      ],
    },
  },
];

export const SEARCH_ROUTES = [
  { path: "/en/", file: "en/index.html", localized: true },
  ...TOPICS.flatMap(({ slug }) => [
    { path: `/topics/${slug}/`, file: `topics/${slug}/index.html`, localized: true },
    { path: `/en/topics/${slug}/`, file: `en/topics/${slug}/index.html`, localized: true },
  ]),
].map((route) => ({ ...route, generated: true, changefreq: "weekly", priority: "0.7" }));

export const loadSearchConfig = async () => {
  const source = await readFile(path.join(ROOT, "app.js"), "utf8");
  const translations = await readFile(path.join(ROOT, "entry-translations.js"), "utf8");
  const window = {
    localStorage: { getItem: () => null, setItem() {} },
    location: { search: "", pathname: "/", href: `${ORIGIN}/` },
    history: { replaceState() {} },
  };
  const document = {
    addEventListener() {}, querySelector: () => null, querySelectorAll: () => [],
    documentElement: {}, head: { append() {} }, createElement: () => ({}),
  };
  const config = new Function("window", "document", `${source}\n${translations}\nreturn { siteConfig, pageCopy, toneLabels };`)(window, document);
  config.translations = window.entryTranslationsData;
  return config;
};

export const orderedEntries = ({ siteConfig }) => {
  const entries = new Map(siteConfig.entries.map((entry) => [entry.name, entry]));
  return siteConfig.displayOrder.map((name) => {
    if (!entries.has(name)) throw new Error(`displayOrder 中的 ${name} 没有对应条目`);
    return entries.get(name);
  });
};

const localize = (entry, locale, config) => locale === "en"
  ? { ...entry, ...config.translations[entry.name] } : entry;
const url = (value) => {
  if (!value) return "";
  const parsed = new URL(value);
  if (!/^https?:$/.test(parsed.protocol)) throw new Error(`非法站点链接：${value}`);
  return escape(parsed.href);
};

const renderCard = (source, locale, config) => {
  const entry = localize(source, locale, config);
  const copy = config.pageCopy[locale];
  const field = (label, value) => value ? `<div class="entry-info-row"><span class="entry-info-label">${escape(label)}</span><p class="registration-text">${escape(value)}</p></div>` : "";
  const quota = (label, value) => value ? `<div class="quota-cell"><span class="quota-label">${escape(label)}</span><strong class="quota-value">${escape(value)}</strong></div>` : "";
  const resources = [[entry.altUrl, entry.altLabel], [entry.tutorialUrl, entry.tutorialLabel], [entry.statusUrl, entry.statusLabel]]
    .filter(([href, label]) => href && label)
    .map(([href, label]) => `<a class="entry-resource-link" href="${url(href)}" target="_blank" rel="noreferrer">${escape(label)}</a>`).join("");
  return `<article class="feed-item" data-tone="${escape(source.tone || "active")}" data-entry-name="${escape(source.name)}">
    <div class="feed-card"><div class="entry-content">
      <p class="entry-kind">${escape(entry.kind)} / ${escape(config.toneLabels[locale][source.tone || "active"] || "")}</p>
      <h3><a class="static-entry-link" href="${url(entry.url)}" target="_blank" rel="noreferrer">${escape(entry.name)}</a></h3>
      <p class="entry-description">${escape(entry.summary)}</p>
      <div class="entry-quota">${quota(copy.signupBonus, entry.signupBonus)}${quota(copy.dailyCheckin, entry.dailyCheckin)}</div>
      ${field(copy.models, entry.models)}
      ${field(copy.registration, entry.registration)}
      <details class="static-entry-details"><summary>${escape(copy.expandDetails)}</summary>
        <p class="entry-details">${escape(entry.details)}</p>
        ${field(copy.experience, entry.experience)}${field(copy.caution, entry.caveat)}
        ${entry.benefits?.length ? `<ul class="benefit-tags">${entry.benefits.map((value) => `<li>${escape(value)}</li>`).join("")}</ul>` : ""}
      </details>
    </div></div>${resources}
  </article>`;
};

const schema = (entries, locale, config, title, description, canonical) => `<script type="application/ld+json" id="structured-data">${json({
  "@context": "https://schema.org", "@type": "ItemList", name: title, description,
  url: canonical, inLanguage: locale, numberOfItems: entries.length,
  itemListElement: entries.map((source, index) => {
    const entry = localize(source, locale, config);
    return { "@type": "ListItem", position: index + 1, name: entry.name, description: entry.summary, url: entry.url };
  }),
})}</script>`;

const topicLinks = (locale, copy) => `<nav class="topic-links" aria-label="${escape(copy.topicsLabel)}">
  <span>${escape(copy.topicsLabel)}</span>
  ${TOPICS.map(({ slug }, index) => `<a href="${locale === "en" ? "/en" : ""}/topics/${slug}/">${escape([copy.topicClaude, copy.topicCheckin, copy.topicRegistration][index])}</a>`).join("\n")}
</nav>`;

const replaceText = (html, hook, text) => html.replace(
  new RegExp(`(<([a-z][a-z0-9]*)\\b[^>]*\\b${hook}(?![\\w-])(?:="[^"]*")?[^>]*>)[\\s\\S]*?(</\\2>)`, "g"),
  (_, open, tag, close) => `${open}${escape(text)}${close}`,
);
const replaceRegion = (html, name, content) => {
  const pattern = new RegExp(`(<!-- ${name}:start -->)[\\s\\S]*?(<!-- ${name}:end -->)`);
  if (!pattern.test(html)) throw new Error(`index.html 缺少 ${name} 生成区域`);
  return html.replace(pattern, (_, start, end) => `${start}\n${content}\n${end}`);
};

const renderHome = (template, locale, config) => {
  const copy = config.pageCopy[locale];
  const entries = orderedEntries(config);
  const publicEntries = entries.filter((entry) => entry.pricing !== "paid");
  const paidEntries = entries.filter((entry) => entry.pricing === "paid");
  let html = template.replace(/<html lang="[^"]*">/, `<html lang="${locale}">`);
  const hooks = {
    "data-brand": copy.brand, "data-title": copy.title, "data-intro": copy.intro,
    "data-eyebrow": copy.eyebrow, "data-nav-copy": copy.nav, "data-update-status": copy.updateStatus,
    "data-site-count": publicEntries.length, "data-site-count-label": copy.siteCountLabel,
    "data-feed-title": copy.feedTitle, "data-section-eyebrow": copy.sectionEyebrow,
    "data-section-note": copy.pricingPublicNote, "data-footer": copy.brand,
    "data-last-updated": `${copy.lastUpdated} ${config.siteConfig.lastUpdated.replaceAll("-", ".")}`,
    "data-disclaimer": copy.disclaimer, "data-usage-notice": copy.usageNotice,
    "data-topics-label": copy.topicsLabel, "data-topic-claude": copy.topicClaude,
    "data-topic-checkin": copy.topicCheckin, "data-topic-registration": copy.topicRegistration,
    "data-filter-label": copy.filterLabel,
  };
  for (const [hook, value] of Object.entries(hooks)) html = replaceText(html, hook, value);
  for (const [tag, key] of Object.entries({ all: "filterAll", claude: "filterClaude", openai: "filterOpenAI", checkin: "filterCheckin", draw: "filterDraw", easyreg: "filterEasyReg", nodumbgpt: "filterNoDumbGpt", recommended: "filterRecommended", egg: "filterEgg" })) {
    html = replaceText(html, `data-filter-tag="${tag}"`, copy[key]);
  }
  html = replaceText(html, 'data-pricing-option="public"', `${copy.pricingPublic} ${publicEntries.length}`);
  html = replaceText(html, 'data-pricing-option="paid"', `${copy.pricingPaid} ${paidEntries.length}`);
  html = html.replace(/(<input[\s\S]*?data-feed-search[\s\S]*?>)/, (input) => input.replace(/placeholder="[^"]*"/, `placeholder="${escape(copy.searchPlaceholder)}"`).replace(/aria-label="[^"]*"/, `aria-label="${escape(copy.searchPlaceholder)}"`));
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript><p class="site-disclaimer">${locale === "en" ? "The full directory is available below. Open a service or expand its details. Enable JavaScript for search, filters, and theme switching." : "当前显示完整静态目录，可直接打开站点或展开详情。启用 JavaScript 后可搜索、筛选和切换主题。"}</p></noscript>`);
  // 绝对路径让 /en/ 和 History API 切换后的资源请求仍指向同一份文件。
  html = html.replace(/(href|src|data-translations-src)="(styles\.css|app\.js|icons\.js|entry-translations\.js|favicon\.svg)/g, '$1="/$2');
  html = html.replace(/href="(?:\/en)?\/topics\//g, `href="${locale === "en" ? "/en" : ""}/topics/`);
  html = html.replace(/aria-label="按需求浏览"/, `aria-label="${escape(copy.topicsLabel)}"`);
  html = replaceRegion(html, "static-directory", publicEntries.map((entry) => renderCard(entry, locale, config)).join("\n"));
  html = replaceRegion(html, "static-paid", `<details class="static-paid" data-static-paid><summary>${escape(copy.pricingPaid)} ${paidEntries.length}</summary><p class="site-disclaimer">${escape(copy.pricingPaidNote)}</p><div class="feed-list">${paidEntries.map((entry) => renderCard(entry, locale, config)).join("\n")}</div></details>`);
  const canonical = `${ORIGIN}${locale === "en" ? "/en/" : "/"}`;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(copy.documentTitle)}</title>`);
  html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*/, `$1${escape(copy.metaDescription)}`);
  for (const property of ["og:title", "twitter:title"]) html = html.replace(new RegExp(`((?:property|name)="${property}"\\s+content=")[^"]*`), `$1${escape(copy.documentTitle)}`);
  for (const property of ["og:description", "twitter:description"]) html = html.replace(new RegExp(`((?:property|name)="${property}"\\s+content=")[^"]*`), `$1${escape(copy.metaDescription)}`);
  html = html.replace(/(rel="canonical" href=")[^"]*/, `$1${canonical}`);
  html = html.replace(/(property="og:url" content=")[^"]*/, `$1${canonical}`);
  html = html.replace(/(property="og:site_name" content=")[^"]*/, `$1${escape(copy.brand)}`);
  html = html.replace(/(property="og:image:alt" content=")[^"]*/, `$1${escape(`${copy.brand} · ${copy.feedTitle}`)}`);
  html = html.replace(/(hreflang="en" href=")[^"]*/, `$1${ORIGIN}/en/`);
  html = html.replace(/(property="og:locale" content=")[^"]*/, `$1${locale === "en" ? "en_US" : "zh_CN"}`);
  html = html.replace(/(property="og:locale:alternate" content=")[^"]*/, `$1${locale === "en" ? "zh_CN" : "en_US"}`);
  html = html.replace(/<script type="application\/ld\+json" id="structured-data">[\s\S]*?<\/script>\s*/, "");
  html = html.replace(/<a class="static-language-link"[\s\S]*?<\/a>\s*/, "");
  html = html.replace('<div class="language-switcher"', `<a class="static-language-link" href="${locale === "en" ? "/" : "/en/"}" lang="${locale === "en" ? "zh-CN" : "en"}">${locale === "en" ? "中文" : "English"}</a>\n        <div class="language-switcher"`);
  html = html.replace("</head>", `${schema(entries, locale, config, copy.documentTitle, copy.metaDescription, canonical)}\n  </head>`);
  return html.replace(/[ \t]+$/gm, "").trimEnd() + "\n";
};

const renderTopic = (topic, locale, config) => {
  const content = topic[locale === "en" ? "en" : "zh"];
  const copy = config.pageCopy[locale];
  const entries = orderedEntries(config).filter((entry) => entry.pricing !== "paid" && topic.select(entry));
  const zhPath = `/topics/${topic.slug}/`;
  const enPath = `/en/topics/${topic.slug}/`;
  const canonical = `${ORIGIN}${locale === "en" ? enPath : zhPath}`;
  return `<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escape(content.title)}｜${escape(copy.brand)}</title>
  <meta name="description" content="${escape(content.description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="zh-Hans" href="${ORIGIN}${zhPath}">
  <link rel="alternate" hreflang="en" href="${ORIGIN}${enPath}">
  <link rel="alternate" hreflang="x-default" href="${ORIGIN}${zhPath}">
  <meta property="og:type" content="website"><meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${escape(content.title)}"><meta property="og:description" content="${escape(content.description)}">
  <meta property="og:image" content="${ORIGIN}/og-cover.png">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/styles.css?v=build">
  ${schema(entries, locale, config, content.title, content.description, canonical)}
</head>
<body>
  <header class="site-header"><a class="brand" href="${locale === "en" ? "/en/" : "/"}">${escape(copy.brand)}</a>
    <a href="${locale === "en" ? zhPath : enPath}" lang="${locale === "en" ? "zh-CN" : "en"}">${locale === "en" ? "中文" : "English"}</a>
  </header>
  <main>
    <section class="intro-section"><div class="intro-copy"><h1>${escape(content.title)}</h1><p class="intro-text">${escape(content.description)}</p></div></section>
    ${topicLinks(locale, copy)}
    <section class="topic-guide" aria-label="${locale === "en" ? "How to use this list" : "使用说明"}">${content.paragraphs.map((text) => `<p>${escape(text)}</p>`).join("\n")}</section>
    <section class="feed-section" aria-labelledby="topic-services"><div class="section-heading"><h2 id="topic-services">${escape(copy.feedTitle)} · ${entries.length}</h2></div><div class="feed-list">${entries.map((entry) => renderCard(entry, locale, config)).join("\n")}</div></section>
    <p class="site-disclaimer">${escape(copy.disclaimer)}</p>
    <p><a href="${locale === "en" ? "/en/#feed" : "/#feed"}">${locale === "en" ? "Browse the full directory" : "返回完整目录，搜索更多站点"}</a></p>
  </main>
  <footer class="site-footer"><span>${escape(copy.brand)}</span><span>${escape(copy.lastUpdated)} ${config.siteConfig.lastUpdated}</span></footer>
</body></html>
`.replace(/[ \t]+$/gm, "").trimEnd() + "\n";
};

export const buildSearchPages = async () => {
  const config = await loadSearchConfig();
  const template = (await readFile(path.join(ROOT, "index.html"), "utf8")).replace(/\r\n/g, "\n");
  await writeFile(path.join(ROOT, "index.html"), renderHome(template, "zh-CN", config), "utf8");
  await mkdir(path.join(ROOT, "en"), { recursive: true });
  await writeFile(path.join(ROOT, "en/index.html"), renderHome(template, "en", config), "utf8");
  for (const topic of TOPICS) {
    for (const locale of ["zh-CN", "en"]) {
      const dir = path.join(ROOT, locale === "en" ? "en" : "", "topics", topic.slug);
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, "index.html"), renderTopic(topic, locale, config), "utf8");
    }
  }
  console.log(`静态目录：中英文首页与 ${TOPICS.length * 2} 个专题页已生成`);
  return config;
};
