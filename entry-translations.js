// 站点条目的英文翻译。由 app.js 在切到英文时按需加载（见 loadEntryTranslations），
// 中文用户不会下载这个文件。键名与 siteConfig.entries / archivedEntries 的 name 一一对应。
// 缓存版本号由 scripts/build-site-meta.mjs 管理，写在 index.html 的 app.js 标签 data-translations-src 上。
window.entryTranslationsData = {
  "HyxAPI": {
    name: "HyxAPI",
    kind: "Public service / about 15 per check-in",
    updateNote: "New listing: a public service with no sign-up bonus and a check-in worth about 15 (per user report); it supports email, GitHub, and Linux DO login, with credit displayed in USD.",
    summary: "A public service with no sign-up bonus and a check-in worth about 15 (per user report). It supports email, GitHub, and Linux DO login, with credit displayed in USD. Models include the DeepSeek V4 series, GLM 5.x, and GPT 5.6.",
    details:
      "The service calls itself HyxAPI (hyxware.com), runs on New API, and displays credit in USD. Registration works through email (with email verification), GitHub, or Linux DO login, with no Turnstile captcha. There is no sign-up bonus, and the daily check-in is worth about 15 (both per user report). The model page lists public prices: deepseek-v4-flash-0731 at $0.44 in / $1.32 out per 1M, deepseek-v4-pro at $0.66/$1.98, deepseek-v4-pro-0813 at $0.6918/$2.0754, deepseek-v4.1-flash at $0.165/$0.66, glm-5 at $0.59758/$2.68911, glm-5.1 at $0.89637/$3.58548, plus glm-5.2, glm-5.3, gpt-5.6-luna and more; the DeepSeek group's first token lands in about 2.7 seconds. Model cards show live success rate, latency, and throughput.",
    registration: "Register with an email address (email verification required) or log in with GitHub / Linux DO through the referral link.",
    signupBonus: "None",
    dailyCheckin: "About 15 (per user report)",
    models: "DeepSeek V4 series (v4-flash-0731, v4-pro, v4-pro-0813, v4.1-flash) / GLM 5, 5.1, 5.2, 5.3 / GPT 5.6-luna and more",
    experience: "No sign-up bonus and about 15 per check-in (per user report); the model page shows public prices and live status",
    caveat: "The absence of a sign-up bonus and the check-in amount are per user report — confirm them on the service. Models and prices follow the in-site model page and may change at any time.",
    benefits: ["Public service", "Email / GitHub / Linux DO login", "No sign-up bonus", "About 15 per check-in", "DeepSeek V4 series", "GLM 5.x", "Live status panel"],
  },
  "长春叙": {
    name: "Changchun Xu",
    kind: "Public service / 4.16 on registration (1 from tomorrow)",
    updateNote: "Added the check-in worth about 0.2 (per user report).",
    summary: "A public service granting 4.16 on sign-up, dropping to 1 from tomorrow, with a check-in worth about 0.2 (per user report). gemini-3.8-flash costs 0.01 per request and gemini-4-argon 0.2; 44 models split across five groups: ds per-request, Hachimi per-request / per-token, and Claude per-request / per-token.",
    details:
      "The service calls itself Changchun Xu (changchunxu.xyz), runs on New API, and displays credit in CNY (￥) at a 7.3 rate. Registration uses email with email verification and no GitHub or Linux DO login; it grants 4.16 on sign-up, dropping to 1 from tomorrow, with a daily check-in worth about 0.2 (all per user report). The model plaza lists 44 models in 5 groups: ds per-request, Hachimi per-request, Hachimi per-token, Claude per-request, and Claude per-token. Gemini per request: gemini-3.8-flash 0.01, gemini-4-argon 0.2, gemini-3.5-flash 0.01, gemini-2.5-flash 0.01, gemini-2.5-pro 0.06; Gemini per token: the 3.x series at about 0.0247/0.0904 per 1M (input/output); Claude per request splits by channel (kiro, enterprise, tavern, anti-gravity), with kiro opus/sonnet around 0.06, enterprise around 0.5, and claude-fable-5 enterprise at 1.0; Claude per token: opus 4-6 to 5-5 about 0.274/1.37 per 1M, sonnet 4-6/5 about 0.593/2.96 per 1M, fable-5 about 1.37/6.92 per 1M; DeepSeek per request: deepseek-v4.1-flash, v4-flash, v3.2, and the 0.01-per-request entry all at 0.01. In-site note: pick a group when creating an API key, or the model list will not load.",
    registration: "Register with an email address and email verification through the referral link.",
    signupBonus: "4.16, dropping to 1 from tomorrow (per user report)",
    dailyCheckin: "About 0.2 (per user report)",
    models: "44 models: Gemini (3.8-flash, 4-argon, 3.5-flash, 2.5 series) / Claude (opus 4-6 to 5-5, sonnet 4-5 to 5, fable-5, split by kiro / enterprise / tavern / anti-gravity channels) / DeepSeek (v4.1-flash, v4-flash, v3.2)",
    experience: "4.16 on registration (1 from tomorrow) and about 0.2 per check-in; Gemini from 0.01 per request",
    caveat: "The sign-up credit, the switch to 1, and the check-in amount are per user report — confirm them on the service. You must pick a group when creating an API key, or the model list will not load. Per-request and per-token billing coexist with large differences between channels, so actual charges follow your usage records.",
    benefits: ["Public service", "4.16 on registration (1 from tomorrow)", "About 0.2 per check-in", "gemini-3.8-flash at 0.01 per request", "gemini-4-argon at 0.2 per request", "44 models", "Claude billed per channel"],
  },
  "狸猫 AI": {
    name: "Limao AI",
    kind: "Public service / 1 on registration / 0.1 yuan per check-in",
    updateNote: "New listing: a public service with QQ email registration only, granting 1 on sign-up and 0.1 yuan per check-in (per user report); the model plaza lists 25 models, and the default / domestic / image groups all run at 1x.",
    summary: "A public service with QQ email registration only, granting 1 on sign-up and 0.1 yuan per check-in (per user report). The model plaza lists 25 models covering Claude, GPT, Gemini, DeepSeek, Grok, Kimi, and image generation, with the default / domestic / image groups all at 1x.",
    details:
      "The service calls itself Limao AI (limao-api.com), runs on New API, and displays credit in the custom currency ฅ. Only QQ email registration is allowed, with email verification and no GitHub / Linux DO / Telegram login; it grants 1 on sign-up and 0.1 yuan per daily check-in (both per user report). The model plaza lists 25 models by vendor: Anthropic 8, Google 6, DeepSeek 4, xAI 3, Moonshot AI 2, OpenAI 2; groups are default ×1, domestic ×1, image ×1, and a test group (some promo models live only in the test group). Coverage includes Claude ([metered] claude-opus-4-6 at 0.75/3.75 per 1M, [promo] claude-opus-4-6 at 0.05 per request), GPT (gpt-image-2 at 0.03 per image, gpt-image-2.5 at 0.025 per image), Gemini ([promo] gemini-4-argon at 0.08 per request, test group, gemini / openai endpoints), DeepSeek (0.2/1 per 1M), Grok (grok-imagine-image series at 0.025 per image), and Kimi (kimi-k3 at 4/20 per 1M, kimi-k3-c at 0.07 per request). Official QQ group 1128305622, where redemption codes, feedback, and model updates are handled; virtual goods are non-refundable after redemption. Opening limited-time event (through Oct 21): post a review on Xiaohongshu with the #airp and #AI工具 tags; a post that stays up 12 hours earns 3 credit or a 2-yuan red packet, 30 likes plus 5 comments earns another 3 credit or 2-yuan red packet, and every further 30 likes earns the same again.",
    registration: "QQ email registration only, with email verification through the referral link; check spam if the code does not arrive.",
    signupBonus: "1 (per user report)",
    dailyCheckin: "0.1 yuan (per user report)",
    models: "25 models: Claude (opus 4-6 etc.) / GPT (gpt-image-2 series) / Gemini (4-argon etc.) / DeepSeek / Grok (grok-imagine series) / Kimi (k3, k3-c)",
    experience: "1 on registration and 0.1 yuan per check-in (per user report); the model plaza shows live status, latency, and throughput",
    caveat: "The sign-up credit and check-in amount are per user report — confirm them on the service. Only QQ email registration is supported, so check spam if the verification code does not arrive; virtual goods are non-refundable after redemption and keys should not be shared. The opening event's rules and end date follow the in-site notice.",
    benefits: ["Public service", "QQ email registration only", "1 on registration", "0.1 yuan per check-in", "25 models", "default / domestic / image groups at 1x", "QQ group 1128305622"],
  },
  "汐のAPI": {
    name: "Shio API",
    kind: "Public service / 15 on registration / 10 per check-in",
    updateNote: "The referral link was switched to a new invite code; bans are strict, so watch your IP, and it connects directly from mainland China (per user report).",
    summary: "A public service with QQ email registration, granting 15 on sign-up and 10 per check-in (per user report). 101 models, with the default group at 1x, VIP 0.8x, and SVIP 0.6x, plus separate Claude / GPT / Gemini groups and a domestic wb group. **Bans are strict, so watch your IP; it connects directly from mainland China** (per user report).",
    details:
      "The service calls itself Shio API (api.203236.xyz), runs on New API, and displays credit in the site's custom currency 🕯. Registration uses QQ email with email verification and no GitHub / Linux DO / Telegram login; it grants 15 on sign-up with 10 per daily check-in (both per user report). The model plaza lists 101 models: the default group at 1x (45 models), VIP 0.8x, and SVIP 0.6x; vendor groups split out Claude_default 8 / Claude_vip 6 / Claude_svip 4, GPT_default 8 / GPT_vip 6 / GPT_svip 4, Gemini_default 3 / Gemini_vip 2.5 / Gemini_svip 2, plus a domestic wb group at 1x (22 models with the cn: prefix). Coverage includes Claude (fable-5 / fable-5-1 / opus 4.5 / 4.6 / sonnet 4-5 / sonnet 5 / 5-5), GPT (6-astra / 6-sol / 5.6-sol / gpt-image-2 series), Gemini (3.6 / 3.8-flash / 4-argon-low), DeepSeek (V4-Flash / V4-Flash-Vision-Exp / v3.2), GLM 5.3 / 5.3-flash, Grok 4.6, Kimi, Qwen3.8-27B, step-5-preview, gpt-oss-20b, and the agnes series. Operator notice: two or more accounts on one residential IP keep only the earliest one, accounts on datacenter or proxy IPs are all banned, and the check runs every 15 minutes.",
    registration: "Register with a QQ email address and email verification through the referral link; it connects directly from mainland China (per user report).",
    signupBonus: "15 (per user report)",
    dailyCheckin: "10 (per user report)",
    models: "101 models: Claude (fable-5 / opus 4.5-4.6 / sonnet 4-5 to 5-5) / GPT (6-astra, 6-sol, 5.6-sol, gpt-image-2 series) / Gemini (3.6, 3.8-flash, 4-argon-low) / DeepSeek V4 / GLM 5.3 / Grok 4.6 / Kimi / Qwen and more",
    experience: "15 on registration and 10 per check-in (per user report); group rates are public, with SVIP lowest at 0.6x; connects directly from mainland China",
    caveat: "**Bans are strict, so watch your IP; it connects directly from mainland China** (per user report). Multiple accounts on one IP get banned (residential IPs keep only the earliest account; datacenter or proxy IPs are all banned, checked every 15 minutes), and an invitee tripping risk control also wipes 5 of the inviter's candles. The sign-up credit and check-in amount are per user report — confirm them on the service. Credit is displayed in the custom currency 🕯.",
    benefits: ["Public service", "QQ email registration", "15 on registration", "10 per check-in", "101 models", "SVIP 0.6x", "Domestic wb group", "Direct connection from mainland China"],
  },
  "晚晚舟": {
    name: "WanWanZhou",
    kind: "Public service / 1 on registration / 1 yuan per check-in after 5 referrals",
    updateNote: "New listing: 1 on registration, and after referring 5 people a daily check-in pays 1 yuan (per user report); the Hachimi flash series runs at 0.01 and the Claude-O series at 0.05.",
    summary: "A public service granting 1 on registration; after referring 5 people, a daily check-in pays 1 yuan (per user report). The Hachimi flash series runs at 0.01 and the Claude-O series at 0.05.",
    details:
      "The service calls itself WanWanZhou (wanwanzhou.top), describes itself as a tavern-focused long-form companion line, and runs on Sub2API. Registration accepts QQ email only (email verification required, no captcha), with no GitHub or Linux DO login. It grants 1 on registration, and after referring 5 people a daily check-in pays 1 yuan (both per user report). Rates: the Hachimi flash series at 0.01 and the Claude-O series at 0.05 (per user report); the in-site model plaza is not public, so confirm the full list after logging in. Referral rebates are enabled and the payment entry is closed.",
    registration: "Register with a QQ email address and email verification through the referral link.",
    signupBonus: "1 (per user report)",
    dailyCheckin: "1 yuan per day after referring 5 people (per user report)",
    models: "Hachimi flash series at 0.01 and Claude-O series at 0.05 (per user report); confirm the full list after logging in",
    experience: "1 on registration; 1 yuan per daily check-in after referring 5 people (per user report)",
    caveat: "The sign-up credit, check-in condition, and rates are per user report — confirm them on the service. The check-in only unlocks after referring 5 people, and the in-site model plaza is not public, so the model list follows what the site shows after login.",
    benefits: ["Public service", "QQ email registration", "1 on registration", "1 yuan daily check-in after 5 referrals", "Hachimi flash at 0.01", "Claude-O series at 0.05"],
  },
  "星云智联API": {
    name: "Xingyun Zhilian API",
    kind: "Public service / 1 on registration / about 2 per check-in / free group at 0x",
    updateNote: "Added the group verification requirement: you must join group 2 (1124978261) and tag the bot with \"/验证 binding-code\" to activate, otherwise calls report no available channel and the account is cleaned up.",
    summary: "A public service granting 1 on registration with a check-in worth about 2 (per user report). **You must join group 2 (1124978261) and tag the bot with a verification command to activate**, otherwise calls report no available channel and the account is cleaned up. It has a 0x free group, and the operator's notice says some models run as a public service and explicitly says not to top up. 36 models cover DeepSeek, GLM, Kimi, Qwen, Gemini, and gpt-5.3.",
    details:
      "The service calls itself Xingyun Zhilian API (api.xincloud.top), runs on New API, and displays credit in CNY (¤). Registration uses email with email verification and no GitHub or Linux DO login; it grants 1 on sign-up with a check-in worth about 2 (both per user report). The operator's notice says some models currently run as a public service, asks users to click the in-site ad button to help, and explicitly says not to top up. Group rates are public: free group 0x (10 requests per minute, 5 successful), Standard 1x, Fast 1.5x, High-speed 2x, Extreme 2.5x, and High-end Productivity 6x (marked as a last resort). The 36 models include free-group entries such as 公益-200k上下文, 公益-星云智联, free-deepseek-v4.1-flash, free-glm-5.3, free-glm-5.3-flash, free-kimi-k3, free-kimi-k2.6, free-gpt-oss-20b, 公益-mimo-v2.6-flash, 公益-muse-spark-1.3, 公益-fast, and several free-test models; paid groups carry deepseek-v4.1-flash, deepseek-v4-pro, DeepSeek-V4-Pro(2), DeepSeek-V4-Flash, glm-5.2, glm-5.3, glm-5.3-flash, kimi-k3, qwen3.8-max, qwen3.8-flash, gpt-5.3, gemini-2.5-flash, gemini-3.5-flash-lite, gemini-3.6-flash, gemini-3.8-flash, and gemini-3-flash. There is also a referral event: 10 yuan per invitee for the inviter and 1 yuan for the newcomer, until 2026-10-31. Group verification (operator notice): all regular accounts are behind an activation gate, and unactivated calls report no available channel; you must join group 2 (1124978261), open the verification center at api.xincloud.top/verify/ after logging in to get your binding code, then send \"@用户验证 /验证 your-binding-code\" in the group and enter the code to activate. Each QQ account can bind and activate only one account; after activation your credit, rates, and history stay unchanged, and accounts that stay out of the group or unactivated are cleaned up.",
    registration: "Register with an email address and email verification through the referral link; afterwards you must join group 2 (1124978261) and complete verification by tagging the bot, or you cannot call the API and the account is cleaned up.",
    signupBonus: "1 (per user report)",
    dailyCheckin: "About 2 (per user report)",
    models: "36 models including a 0x free group plus paid DeepSeek / GLM / Kimi / Qwen / Gemini / gpt-5.3 groups",
    experience: "1 on registration and about 2 per check-in (per user report); a 0x free group is available; group verification is required before calling",
    caveat: "**You must join group 2 (1124978261) and activate by tagging the bot with \"/验证 binding-code\"**, otherwise calls report no available channel and unactivated accounts are cleaned up; each QQ account can bind only one account. The sign-up credit and check-in amount are per user report — confirm them on the service. The operator's notice says some models run as a public service, explicitly says not to top up, and asks users to click the in-site ad button to help; the free group is limited to 10 requests per minute with 5 successes. Group rates and models follow the in-site model plaza and may change at any time.",
    benefits: ["Public service", "1 on registration", "About 2 per check-in", "Group verification required", "QQ group 1124978261", "0x free group", "36 models", "DeepSeek / GLM / Kimi / Qwen / Gemini", "Operator says not to top up"],
  },
  "OmniRush": {
    name: "OmniRush",
    kind: "Public service / 10M gpt-6-astra per day",
    updateNote: "New listing: a public service offering 10M gpt-6-astra per day (per user report); it requires binding Discord and GitHub, and the GitHub account must be at least 7 days old.",
    summary: "A public service offering 10M gpt-6-astra per day (per user report). It requires binding Discord and GitHub, and the GitHub account must be at least 7 days old.",
    details:
      "The service calls itself OmniRush (omnirush.ai) and ships an AI coding client (desktop app plus CLI), with a free allowance that refills daily and no paid tier. It offers 10M gpt-6-astra per day (per user report). Registration requires binding Discord and GitHub, and the GitHub account must be at least 7 days old (per user report; the official FAQ also states the 7-day requirement). The site also lists GPT 6 Astra, GPT 6.1 Sol, and GPT 6 Sol, and its Discord is discord.gg/hACMSrEm4h.",
    registration: "Bind Discord and GitHub; the GitHub account must be at least 7 days old (per user report).",
    signupBonus: "Not provided",
    dailyCheckin: "Not provided; 10M gpt-6-astra per day (per user report)",
    models: "gpt-6-astra (10M per day, per user report); the site also lists GPT 6.1 Sol and GPT 6 Sol",
    experience: "10M gpt-6-astra per day (per user report); the free allowance refills daily",
    caveat: "The daily allowance and models are per user report — confirm them on the service. Registration requires a GitHub account at least 7 days old plus a bound Discord (per user report, matching the official FAQ); some sign-ups are held for manual review.",
    benefits: ["Public service", "10M gpt-6-astra per day", "Discord binding required", "GitHub binding required", "GitHub account ≥ 7 days", "Daily refilling allowance"],
  },
  "421-API": {
    name: "421-API",
    kind: "Public service / 0.5 yuan trial on registration / about 0.5 per check-in",
    updateNote: "New listing: a public service with QQ email registration, granting 0.5 yuan of trial credit on sign-up and about 0.5 per check-in (per user report).",
    summary: "A public service with QQ email registration, granting new users 0.5 yuan of trial credit on sign-up and about 0.5 per check-in (per user report).",
    details:
      "The service calls itself 421-API (421api.xyz), runs on New API, and displays credit in CNY (¤). Registration uses a QQ email address with email verification, and there is no GitHub or Linux DO login. New users receive 0.5 yuan of trial credit on sign-up, and the daily check-in is worth about 0.5 (both per user report). Available models and rates follow the in-site model plaza.",
    registration: "Register with a QQ email address and email verification through the referral link.",
    signupBonus: "0.5 yuan of trial credit (per user report)",
    dailyCheckin: "About 0.5 (per user report)",
    models: "Follow the in-site model plaza",
    experience: "0.5 yuan of trial credit on sign-up and about 0.5 per check-in (per user report)",
    caveat: "The sign-up credit and check-in amount are per user report — confirm them on the service; available models and rates follow the in-site model plaza.",
    benefits: ["Public service", "QQ email registration", "0.5 yuan on registration", "About 0.5 per check-in"],
  },
  "风绘 API": {
    name: "Fenghui API",
    kind: "Public service / 2 on registration / 0.3 per check-in",
    updateNote: "Registration corrected: GitHub only, no email sign-up (per user report).",
    summary: "A public service with GitHub-only registration, granting 2 on sign-up with a 0.3 check-in (per user report). It currently carries only DeepSeek, and deepseek-flash is already on the latest 1017 build.",
    details:
      "The service calls itself Fenghui API (api.huidev.com), runs on New API, and displays credit in CNY (¤). Registration is GitHub-only (per user report); it grants 2 on sign-up and 0.3 per daily check-in (both per user report). Only two DeepSeek models are listed: deepseek-flash, updated to the 1017 build of DeepSeek V4.1 Flash (the operator says it improves noticeably on benchmarks versus the previous build), and deepseek-v4-pro. The public pricing API shows deepseek-flash as free for a limited time, while deepseek-v4-pro bills peak hours on weekdays 09:00-12:00 and 14:00-18:00 and off-peak at other times; confirm actual charges in your usage records.",
    registration: "Register with GitHub only (per user report) through the referral link.",
    signupBonus: "2 (per user report)",
    dailyCheckin: "0.3 (per user report)",
    models: "deepseek-flash (V4.1 Flash 1017 build, currently free for a limited time) / deepseek-v4-pro",
    experience: "2 on registration and 0.3 per check-in (per user report); only two DeepSeek models for now",
    caveat: "The registration method, sign-up credit, and check-in amount are per user report — confirm them on the service. The limited-time free status of deepseek-flash and the peak/off-peak pricing of deepseek-v4-pro come from the public pricing API and may change at any time; actual charges follow your usage records.",
    benefits: ["Public service", "GitHub-only registration", "2 on registration", "0.3 per check-in", "deepseek-flash 1017 build", "deepseek-v4-pro"],
  },
  "慧慧云": {
    name: "HuiHuiYun",
    kind: "Public service / free group available / 4 models",
    updateNote: "No check-in (per user report).",
    summary: "A public service granting 1 on registration, with a free group (per user report). The free group returned 4 models in testing: auto (random-routed advanced model), grok-4.7, grok-composer-2.5-fast, and sensenova-6.8-flash-lite. No check-in.",
    details:
      "The service calls itself HuiHuiYun (api.huihuiyun.top) and runs an AI API gateway. Registration grants 1 (per user report), and there is no check-in. It has a free group (per user report); a key for that group returned 4 models from /v1/models in testing: auto (random-routed advanced model), grok-4.7, grok-composer-2.5-fast, and sensenova-6.8-flash-lite. The model plaza also lists four paid groups: the Gemini group at 0.15x (gemini-3.1-pro-preview / 3.1-pro / 3.6-flash / 3.8-flash / 3.7-flash), the Claude (kiro) group at 0.15x (claude-fable-5 / opus 5 / opus 4-8 / 4-7 / 4-6 / 4-5 / sonnet 4-6 / sonnet-5 / haiku-4-5), a per-request Gemini group (3.1-pro-preview and 3.1-pro at 0.04 each, 3.6 / 3.7 / 3.8-flash at 0.02 each), and a per-request DeepSeek group (deepseek-v4.1-flash / v4-pro / v4-flash plus a 0.01-per-request entry, all at 0.01 each).",
    registration: "Register through the referral link; registration grants 1.",
    signupBonus: "1 (per user report)",
    dailyCheckin: "None",
    models: "Free group: auto (random-routed advanced model), grok-4.7, grok-composer-2.5-fast, sensenova-6.8-flash-lite; paid groups add Gemini, Claude, and DeepSeek series",
    experience: "Has a free group (per user report); a free-group key successfully listed 4 models in testing; no check-in",
    caveat: "The sign-up bonus and the lack of a check-in are per user report. The free group's model list comes from testing and may change at any time; paid group rates and models follow the in-site model plaza.",
    benefits: ["Public service", "1 on registration", "Free group available", "auto random routing", "grok-4.7", "grok-composer-2.5-fast", "sensenova-6.8-flash-lite", "No check-in"],
  },
  "10API": {
    name: "10API",
    kind: "Public service / 10M tokens per check-in",
    updateNote: "Added QQ group 1085268015 (per user report).",
    summary: "A public service with a daily check-in of 10M tokens, offering deepseek-v4.1-flash and glm-5.3-flash (per user report). QQ group 1085268015.",
    details:
      "The page title reads 10API (nextapi.store). The daily check-in grants 10M tokens, and the available models include deepseek-v4.1-flash and glm-5.3-flash (all per user report); confirm the rest on the service. QQ group 1085268015 (per user report).",
    registration: "Register through the referral link; QQ group 1085268015.",
    signupBonus: "Not provided",
    dailyCheckin: "10M tokens (per user report)",
    models: "deepseek-v4.1-flash / glm-5.3-flash (per user report)",
    experience: "10M tokens per daily check-in (per user report)",
    caveat: "The check-in amount and available models are per user report — confirm them on the service.",
    benefits: ["Public service", "10M tokens per check-in", "deepseek-v4.1-flash", "glm-5.3-flash", "QQ group 1085268015"],
  },
  "1412's API": {
    name: "1412's API",
    kind: "Registration paused",
    updateNote: "Registration is now closed (per user report); GPT had already stopped working, and the 92 on registration and the check-in worth about 10 describe the state before the closure.",
    summary: "Registration is currently closed (per user report) and the entry has been moved to the back of the list; it will be updated once registration reopens. Before the closure it granted 92 on registration with a check-in worth about 10, and GPT had stopped working.",
    details:
      "The service calls itself 1412's API (napi.kid1412.qzz.io) and runs on New API. Registration is closed (per user report) and the reopening time is unknown. Before the closure it granted 92 on registration with a daily check-in worth about 10 (per user report); GPT is no longer usable (per user report), and the remaining models follow what the site shows.",
    registration: "Registration is currently paused; wait for a reopening announcement.",
    signupBonus: "92 before the closure (per user report)",
    dailyCheckin: "About 10 before the closure (per user report)",
    models: "GPT is no longer usable (per user report); confirm the remaining models on the service",
    experience: "Registration is currently closed",
    caveat: "Registration is closed (per user report) and the reopening time is unknown. The pre-closure sign-up credit, check-in, and models should be re-confirmed on the service once it reopens.",
    benefits: ["Registration paused", "92 on registration before the closure", "About 10 per check-in before the closure"],
  },
  "大肥鱼公益站": {
    name: "Big Fat Fish Public Service",
    kind: "Public service / self-hosted chat app + OpenAI-compatible API / newly opened",
    updateNote:
      "New listing: a new public service (a self-hosted chat app), QQ email registration only (per user report); a chat UI plus an OpenAI-compatible /v1 endpoint, with 85 models verified callable through the API; a base plan usable right after registration with no usage limit currently shown, a daily check-in, and a reset card after five consecutive check-ins; an opening milestone event is in progress.",
    summary:
      "A new public service — a self-hosted chat app rather than New API — with QQ email registration only. It offers a chat UI plus an OpenAI-compatible /v1 endpoint, with 85 models (Claude / GPT / Gemini / DeepSeek / GLM / Grok / Kimi and more) verified callable in testing. A base plan works right after registration with no usage limit currently shown; there is a daily check-in and a reset card after five consecutive check-ins, plus an opening milestone event that unlocks site-wide rewards as the user count grows.",
    details:
      "The service calls itself \"大肥鱼公益站\" (arc.103-121-95-72.sslip.io) and runs the self-hosted open-source app Obsidian Arc (github.com/OnyxAxiOwO/ObsidianArc, MIT) — a self-hosted AI chat server that offers an OpenAI-compatible /v1 endpoint alongside its chat UI; /v1/models returned 85 models and a chat completion smoke test succeeded. Registration accepts QQ email only, with email verification and a captcha. New accounts get the default \"base plan\": all verified models, valid permanently, with no usage limit currently shown on the site; there is a daily check-in, and five consecutive check-ins grant one reset card (valid 30 days) that resets a usage window. The opening milestone event works in stages: at 50 users every user received one reset card (all windows, 30 days); at 100 users all plan quotas double (base plan 100 → 200 requests per day, Go plan 1,000 → 2,000 per 5 hours); at 150 users two more reset cards each; at 200 users another doubling on top of the previous stage — settled automatically with no application needed, per the in-site announcement. Model coverage includes Claude (fable-5, haiku-4-5, opus 4-6 / 4-8 / 5 / 5-5, sonnet 4-6 / 5 / 5-5), GPT (5.5, 5.6-luna / sol / terra, 6-astra / luna / sol, 6.1-sol), the Gemini 2.5-3.8 series, DeepSeek (V4.1-Flash / V4-Pro / V4-Flash), GLM 5.1-5.3, Grok 4.6 / 4.7 / 4.20, Kimi K2.7-Code / K3, Qwen 3.6-3.8, MiniMax M2-M3.1, and gpt-image generation; upstream channels include apigoto / vyceai / sensenova among others.",
    registration: "Register with a QQ email only, with email verification and a captcha (through the referral link).",
    signupBonus: "The base plan works right after registration: all verified models, valid permanently (no usage limit currently shown)",
    dailyCheckin: "A check-in is available; five consecutive check-ins grant one reset card (valid 30 days)",
    models:
      "85 models (verified via API): Claude fable-5 / haiku-4-5 / opus 4-6, 4-8, 5, 5-5 / sonnet 4-6, 5, 5-5; GPT 5.5 / 5.6-luna, sol, terra / 6-astra, luna, sol / 6.1-sol; Gemini 2.5-3.8; DeepSeek V4.1-Flash / V4-Pro / V4-Flash; GLM 5.1-5.3; Grok 4.6 / 4.7 / 4.20; Kimi K2.7-Code / K3; Qwen 3.6-3.8; MiniMax M2-M3.1; gpt-image generation",
    experience: "A newly opened service with an opening milestone event in progress; both the chat UI and the API work, and the API was verified callable in testing",
    caveat:
      "A new service (the in-site announcement was posted the day before listing); the operator notes that channels shown as healthy in the availability feature may still fail on real calls and that a fix is in progress. The opening milestone event is a staged promotion, so the tiers and payout rules follow the in-site announcement. Registration requires a QQ email plus email verification and a captcha; many models carry upstream suffixes (apigoto / vyceai / sensenova and others), so confirm availability in the service.",
    benefits: [
      "Public service",
      "QQ email registration",
      "Base plan usable right after registration",
      "No usage limit currently shown",
      "Daily check-in",
      "Reset card after five consecutive check-ins",
      "Opening milestone event in progress",
      "85 models",
      "OpenAI-compatible /v1 endpoint",
      "Verified callable in testing",
    ],
  },
  SheApi: {
    name: "SheApi",
    kind: "Paid service / 33 models in 13 groups / full-power cc-max",
    updateNote:
      "New listing: a paid service granting 1 on registration with a check-in; 33 models in 13 groups, where the grok group is a grok-heavy account pool that runs undumbed and plus_0720 is at a 0.04 rate. Registration accepts QQ email only.",
    summary:
      "A paid service granting 1 on registration, with a check-in worth about 0.2. It carries 33 models across 13 groups: the cheapest are plus_0720 at 0.04 and deepseek / glm / kimi at 0.07, the grok group at 0.09 is a **grok-heavy account pool and runs undumbed** (this is Grok, not GPT); cc-max is full-powered with anti-ban micro-injection. Registration accepts QQ email only.",
    details:
      "The service calls itself SheApi (www.sheapi.top, footer © 2026 SheApi), runs on New API, and displays credit in USD at about 7.3. Registration accepts QQ email only, with email verification and no human verification; registration grants 1 and the site has a check-in. Per the operator: do not use a VPN while registering, check spam first if no verification code arrives, add QQ 3355691290 for manual registration if none shows up, and the Telegram notice group is t.me/chengcheng2026_bot. The public model list shows 33 models in 13 groups: cc-max (1.2x, described as \"full-power ccmax, with anti-ban micro-injection\"), gpt-max (0.6x, \"full-power official keys, immune to official routing, no dumbing-down\"), pro (0.2x, \"stable and fast, Pro account pool, not dumbed\"), grok (0.09x, \"grok-heavy account pool, not dumbed\"), luna (0.3x, a dedicated group for gpt-5.6-luna and gpt-6-luna), plus_0720 (0.04x, \"value for money, GPT series, more stable\"), deepseek / glm / kimi (all 0.07x, described as self-developed special channels), gpt-image-2 (1x, $0.04 per image, 1k/2k/4k), gpt-image-2-native (1.5x, $0.06 per image, high-quality 4k close to native), plus a \"special test group\" (99x, marked by the operator as admin-testing only and not to be selected). An announcement says the cc-max group has been taken offline. Model coverage includes Claude opus 5-5 / 5 / 4-8 / 4-7 / 4-6, sonnet 5 / 4-6, fable 5 / 5-1; GPT 6-astra / 6-sol / 6.1-sol / 6-luna / 5.6-luna / 5.6-sol / 5.6-terra / 5.5; Grok 4.5 / 4.6 / 4.7; DeepSeek v4-pro / v4-flash / v4.1-flash; GLM 5.2 / 5.3; Kimi k3; and the gpt-image-2 image series (billed per image). Top-ups go through pay.ldxp.cn/shop/QYHYA5BR or customer service on QQ 3355691290, and refunds pay 90% of the remaining balance.",
    registration: "Register with a QQ email address, with email verification and no human verification; registration grants 1 and the daily check-in is worth about 0.2.",
    signupBonus: "1",
    dailyCheckin: "About 0.2 per check-in (per user report)",
    models:
      "33 models in 13 groups: cc-max 1.2x (full power, anti-ban micro-injection) / gpt-max 0.6x (full-power official keys) / pro 0.2x (Pro account pool) / grok 0.09x / luna 0.3x / plus_0720 0.04x / deepseek, glm, kimi 0.07x; gpt-image-2 at $0.04 per image and the native version at $0.06",
    experience:
      "A paid service granting 1 on registration with a check-in; 33 models in 13 groups, with cc-max full-powered and anti-injected and plus_0720 the cheapest at 0.04x",
    caveat:
      "A paid service: top-ups require buying a redemption code (pay.ldxp.cn/shop/QYHYA5BR) or contacting customer service, and refunds pay 90% of the remaining balance. Registration accepts QQ email only, and the operator explicitly bans distillation — offenders are removed immediately with no refund; if no verification code arrives you must add QQ 3355691290 for manual registration. When first-token latency is high or requests fail often, the operator suggests switching to us.lax.sheapi.top/v1 or www.sheapi.cc/v1. The \"special test group\" runs at 99x and is marked do-not-select. Confirm group rates and availability on the in-site model page.",
    benefits: [
      "Paid service",
      "1 on registration",
      "Check-in about 0.2",
      "33 models in 13 groups",
      "cc-max full power",
      "Anti-ban micro-injection",
      "plus_0720 at 0.04x",
      "Grok-heavy pool, undumbed",
      "gpt-image-2 image generation",
      "QQ email only",
    ],
  },
  "DZH Smart AI": {
    name: "DZH Smart AI",
    kind: "Paid service / undumbed GPT / frequent red packets",
    updateNote: "The referral link was switched to a new invite code; registration grants 0.1, and an AWS Bedrock group at 0.4x plus undumbed astra at 0.08x (about 80% cache hit) were added, all per user report.",
    summary: "A paid service granting 0.1 on registration, with undumbed GPT; QQ group 613833653 frequently sends red packets (per user report). Undumbed astra runs at 0.08x with about an 80% cache hit rate, and there is an AWS Bedrock group at 0.4x (per user report). No check-in; a daily draw of $0-1 requires spending that day, and top-ups only add extra draws.",
    details:
      "The page title reads cccccc (dzhsmartai.com). It runs on Sub2API with prepaid top-ups and email registration, granting 0.1 on registration (per user report), and QQ group 613833653 frequently sends red packets (per user report). There is no check-in; instead a daily draw pays $0-1 once a day, but only after you have spent that day — top-ups only add extra draws. The model plaza lists 88 models. Undumbed GPT is the ChatGPT-PRO Enterprise group at 0.18x, which the operator marks 100% undumbed for gpt-6-astra and gpt-6.1-sol with cache intact; the ChatGPT-PRO Stable group at 0.05x is marked 90%+ undumbed for gpt-6-astra, though its cache may break. Undumbed astra at 0.08x hits cache about 80% of the time, and an AWS Bedrock group runs at 0.4x (all per user report). Other groups: Zero-go 0.001x, ChatGPT-Plus Stable 0.08x, ChatGPT-ProMax Enterprise 0.1x, Claude-kiro Stable 0.1x, Claude-kiro Enterprise 0.25x, Claude 0.25x, Claude-Max full power 1.2x, Gemini Anti-gravity 0.25x, gemin4 0.35x, DeepSeek 0.12x, grok 0.12x, Kimi 0.35x, plus one-cent image generation and a gpt-2.5 image group billed per image.",
    registration: "Register with an email address through the referral link; registration grants 0.1.",
    signupBonus: "0.1 on registration; QQ group 613833653 frequently sends red packets (per user report)",
    dailyCheckin: "None; a daily draw of $0-1 (requires spending that day; top-ups only add extra draws)",
    models: "Undumbed GPT: undumbed astra at 0.08x (about 80% cache hit, per user report); ChatGPT-PRO Enterprise at 0.18x (marked 100% undumbed by the operator); ChatGPT-PRO Stable at 0.05x (marked 90%+); AWS Bedrock at 0.4x (per user report); plus Claude / Gemini / DeepSeek / grok / Kimi among 88 models",
    experience: "Undumbed astra at 0.08x hits cache about 80% of the time (per user report); QQ group 613833653 frequently sends red packets; no check-in, and the daily draw requires spending that day",
    caveat:
      "A paid, prepaid service. The 0.1 on registration, the AWS Bedrock group at 0.4x, and the undumbed astra at 0.08x with its roughly 80% cache hit are per user report — confirm them on the service and in real calls. The red packets are handed out in QQ group 613833653 (per user report) — confirm the rules and amounts against what the group actually sends. The undumbed percentages are the operator's labels on the model plaza, so verify with real calls. The daily draw requires spending that day; top-ups only add extra draws.",
    benefits: ["Paid service", "0.1 on registration", "Undumbed GPT", "Undumbed astra at 0.08x", "About 80% cache hit", "AWS Bedrock at 0.4x", "QQ group 613833653 sends red packets", "ChatGPT-PRO Enterprise at 0.18x", "Daily draw of $0-1", "No check-in"],
  },
  "Prime Relay": {
    name: "Prime Relay",
    kind: "Paid service / multi-group low rates / $10 referral bonus",
    updateNote: "The referral link was switched to a new invite code (per user report).",
    summary:
      "A paid service: one key reaches Claude, GPT, Gemini and other mainstream models, with published rates — GPT welfare group 0.015, Claude welfare group 0.02, DeepSeek 0.015, Kimi 0.025, Grok / Gemini 0.015. Register with a QQ email; **referral perk: invite a friend who registers and joins the QQ group and both sides get $10 in credit (up to 10 invites per account)**; top-ups convert 1:10; check-in pays $1-3 per day.",
    details:
      "The service calls itself Prime Relay (primerelay.online), runs on Sub2API, and pitches \"one key, many AI models\"; registration accepts QQ email only (no captcha). The public model plaza shows 12 groups and 36 models: Qwen 0.01x, DeepSeek 0.015x, GLM 0.015x, GPT welfare 0.015x (5.6 series only), Gemini / Gemma / Grok 0.015x, Claude welfare 0.02x, Seed 0.02x, Kimi 0.025x, DALL-E image generation (1K/2K at 0.6 yuan per image, 4K at 0.8), and a CC-MAX full-power group at 0.9x; some groups also have peak-hour rates. Claude coverage runs from fable-5 / fable-5-1 through opus 4-6 to 5-5 and sonnet 5; GPT covers 5.5 / 5.5-pro / 5.6-luna / 5.6-sol / 5.6-terra; plus DeepSeek V4 series, Grok 4.5 / 4.6, Kimi K2.6 / K3, GLM 5.2 / 5.3, Qwen 3.7 / 3.8, Gemini 3.1-3.7, Seed 2.1, and the gpt-image series. Top-ups convert 1:10 (1 yuan = 10 USD of credit); the daily check-in pays $1-3 and requires at least 5 yuan in cumulative top-ups plus one successful API call that day. Official QQ group: 239561070 (a bot answers; after joining, send \"/绑定 your-registration-email\" to verify). Referral rebates: when an invitee tops up, the inviter earns rebate credit that can be transferred to balance.",
    registration: "Register with a QQ email through the referral link; no captcha.",
    signupBonus: "Referral perk: invite a friend who registers and joins the QQ group and both sides get $10 in credit (up to 10 invites per account)",
    dailyCheckin: "$1-3 per check-in (requires at least 5 yuan in cumulative top-ups and one successful API call that day)",
    models:
      "12 groups, 36 models: Claude (fable-5 / fable-5-1 / opus 4-6 to 5-5 / sonnet 5, welfare group 0.02x) / GPT (5.5, 5.5-pro, 5.6-luna / sol / terra, welfare group 0.015x) / DeepSeek V4 series (0.015x) / Grok 4.5 / 4.6 (0.015x) / Gemini 3.1-3.7 (0.015x) / Kimi K2.6 / K3 (0.025x) / GLM 5.2 / 5.3 (0.015x) / Qwen 3.7 / 3.8 (0.01x) / Seed 2.1 (0.02x) / gpt-image generation (0.6 yuan per 1K/2K image, 0.8 per 4K)",
    experience: "Rates are published and the model plaza labels each group's combined rate; multiple upstreams with automatic failover; a bot answers in the QQ group",
    caveat:
      "A paid service — rates and groups follow the in-site model plaza (some groups have peak-hour rates). The check-in has requirements: at least 5 yuan in cumulative top-ups plus one successful API call that day. Registration accepts QQ email only. The $10 referral credit requires both sides to register and join the group with a bound email, up to 10 invites per account. Thirty consecutive check-ins let you apply to refund the full 50 yuan (manually reviewed).",
    benefits: [
      "Paid service",
      "QQ email registration",
      "$10 referral credit for both sides",
      "GPT welfare group 0.015",
      "Claude welfare group 0.02",
      "DeepSeek 0.015",
      "Kimi 0.025",
      "Top-ups convert 1:10",
      "Check-in $1-3 per day",
      "36 models",
    ],
  },
  "STA1N API": {
    name: "STA1N API",
    kind: "Paid service / source service / tavern-oriented / 30 cookies on registration",
    updateNote:
      "New listing: a paid tavern-oriented source service granting 30 cookies on registration with a QQ email (per user report); 115 models, with per-request pricing at 1.6 cookies for Claude Opus 5-5 and 0.22 for Gemini 3.8 Flash, and no check-in. 30,000-user perk: a free 500-cookie subscription for a limited two-day window.",
    summary:
      "A paid tavern-oriented source service (per user report). Register with a QQ email for 30 cookies; billing is per request or per usage: Claude Opus 5-5 at 1.6 cookies, Sonnet 5 at 1.1, and Gemini 3.8 Flash at 0.22 per request. It carries 115 models including Claude (Kiro channel), Gemini 3.1-3.8, DeepSeek, Kimi-K3, GLM, Doubao, and NAI image generation. **30,000-user perk: a free limited-time 500-cookie subscription (two days, covering all Gemini models and the discounted DeepSeek)**.",
    details:
      "The service calls itself STA1N API (cdn.sta1n.cn), runs on New API, and displays credit in cookies (🍪) at about ¥0.1 each (100 cookies sell for 10 yuan on the card shop). An operator announcement describes it as a source service and the largest upstream of AIRP, claiming a 100x refund for diluted or non-upstream models and no data retention; an October announcement says it has run for about seven months with 30,000 users. 30,000-user perk (limited-time event): a 500-cookie subscription for every user, covering all Gemini models and the discounted DeepSeek (equal to 200 yuan of official credit), valid for 48 hours and claimable in the wallet before 2:00 on October 11. The public model list shows 115 models: Claude via the Kiro channel (Opus 5-5 / 5 / 4-8 / 4-7 / 4-6 and Sonnet 5-5 / 5 / 4-6), the Gemini 3.1-3.8 series, DeepSeek V4.1 Flash (discounted) and V4 Pro, Kimi-K3, GLM-5.2 / 5.3, Doubao, MiniMax, Xiaomi MiMo, and NAI image generation (nai-diffusion-4-5 / 5). Models are split across the default / Lite / Max / Plus / Pro / Pro+ subscription groups and a free group (3 free Gemini lite models). Direct connection in China is cdn.sta1n.cn, with api.sta1n.site for coastal and overseas users; the shop also sells NAI image keys (1,100 requests from ¥9.9).",
    registration: "Register with a QQ email (per user report) and email verification; the referral link shows a dialog that must confirm the inviter is an acquaintance before you can continue.",
    signupBonus: "30 cookies on registration (per user report); plus a limited-time 30,000-user perk of a 500-cookie subscription (valid 48 hours)",
    dailyCheckin: "None",
    models:
      "Claude (Kiro) Opus 5-5 / 5 / 4-8 / 4-7 / 4-6 and Sonnet 5-5 / 5 / 4-6; Gemini 3.1-3.8; DeepSeek V4.1 Flash (discounted) / V4 Pro; Kimi-K3; GLM-5.2 / 5.3; Doubao, MiniMax, MiMo; NAI image generation",
    experience: "Tavern-oriented, with NAI image keys sold in the shop; a source service (per user report)",
    caveat:
      "A paid service — prices follow the in-site model page (1 cookie is about ¥0.1; 100 cookies sell for 10 yuan on the card shop). The 500-cookie subscription is a limited-time event: valid 48 hours and must be claimed in the wallet before 2:00 on October 11, with rules and deadlines following the group announcement and the service. The operator strictly bans sharing referral links with strangers: the sign-up dialog requires confirming the inviter is an acquaintance, and accounts are permanently banned if a link is verified as spread by strangers in comment sections or QQ groups; bulk registration is banned as well. WeChat Pay requires buying a redemption code on the card shop. The source-service and 100x-refund claims are the operator's own and have not been independently verified.",
    benefits: [
      "Paid service",
      "Source service",
      "Tavern-oriented",
      "30 cookies on registration",
      "30,000-user perk: 500-cookie subscription (limited)",
      "Claude Opus 5-5",
      "Kiro channel",
      "115 models",
      "NAI image keys",
      "QQ email registration",
    ],
  },
  "Joja Token": {
    name: "Joja Token",
    kind: "Paid service / 1 on registration / 0.25x undumbed GPT",
    updateNote:
      "The sign-up credit is 1 as currently shown on the service (per user report); priority lowered and the entry moved to the bottom of the paid section. The 0.25x undumbed GPT rate and the lack of a daily check-in are unchanged.",
    summary:
      "A new paid service: signing up through the referral link grants 1, and GPT runs undumbed at a 0.25 rate (per user report). Credit is displayed in USD, and registration accepts email verification or GitHub login.",
    details:
      "The service calls itself Joja Token (jojatoken.com), runs on New API, and displays credit in USD. GPT runs at a 0.25 rate and is undumbed (per user report). The public model list currently shows 8 GPT-family models — gpt-5.5, gpt-5.6-terra, gpt-5.6-sol, gpt-5.6-luna, gpt-6-sol, gpt-6-luna, gpt-6-astra, and gpt-6.1-sol — plus the gpt-image series, split between the ChatGPT Pro and ChatGPT Image groups; an announcement says GPT-6.1 Sol and GPT-6 Sol / Luna are now live. Registration accepts email verification or GitHub login and uses a captcha; there is no daily check-in. Official groups: QQ group 376060423 and the Telegram group t.me/JojaToken.",
    registration: "Register through the referral link with email verification or GitHub login; a captcha is required.",
    signupBonus: "1 on registration (per user report)",
    dailyCheckin: "None",
    models:
      "0.25x undumbed GPT (per user report); 8 GPT-family models (5.5, 5.6-terra/sol/luna, 6-sol/luna/astra, 6.1-sol) and the gpt-image series",
    experience: "1 on registration and 0.25x undumbed GPT (both per user report); no check-in",
    caveat:
      "A paid service: the sign-up credit, the 0.25 rate, and the undumbed claim are all per user report — confirm against the in-site model page and consumption records. There is no daily check-in, and registration uses a captcha and email verification; the exact requirements follow the sign-up page.",
    benefits: [
      "Paid service",
      "1 on registration",
      "0.25x undumbed GPT",
      "8 GPT-family models",
      "gpt-image generation",
      "GitHub login",
    ],
  },
  "Aotera": {
    name: "Aotera",
    kind: "Paid service / 0.1x undumbed GPT / opening promotion",
    updateNote:
      "Check-in removed: the opening promotion's \"6 on the first day of check-ins\" has ended and the service no longer has a check-in (per user report).",
    summary:
      "A paid service: the Plus group runs undumbed GPT at 0.1x, with Pro at 0.17x and Pro 500 at 0.24x. Registration needs a captcha and email verification. No check-in. Opening promotion: red packets as group membership hits each stage.",
    details:
      "The service calls itself Aotera (aotera.cc), runs on New API, and displays credit in CNY (¥). The Plus group runs at a 0.1 rate and is undumbed (confirmed); Pro runs at 0.17x and Pro 500 at 0.24x. The public model list currently shows 7 models, all GPT-family: gpt-6-astra, gpt-6-sol, gpt-6-luna, gpt-6.1-sol, gpt-5.6-luna, gpt-5.6-sol, and gpt-5.6-terra, all available in the three groups. Registration needs email verification and a Turnstile captcha, with no GitHub or Linux DO login; the service no longer has a check-in (the opening promotion's 6 on the first day has ended). Opening promotion: red packets as group membership hits each stage — the stage rules, amounts, and end date follow the group announcement and the service.",
    registration: "Register with email verification and complete the Turnstile captcha through the referral link.",
    signupBonus: "Opening promotion: red packets as group membership hits each stage (see the group announcement)",
    dailyCheckin: "None",
    models: "Plus 0.1x (undumbed) / Pro 0.17x / Pro 500 0.24x; 7 GPT-family models (6-astra, 6-sol, 6-luna, 6.1-sol, 5.6-luna/sol/terra)",
    experience: "A paid service; undumbed GPT at 0.1x on the Plus group; no check-in; red packets as group membership hits each stage",
    caveat:
      "A paid service. The opening promotion's 6 on the first-day check-in has ended and the service no longer has a check-in (per user report). The promotion's group red packets follow the group announcement and the service; the stage rules, amounts, and end date may change at any time. Registration uses a captcha. Models are currently GPT-family, so confirm rates and availability on the in-site model page.",
    benefits: [
      "Paid service",
      "0.1x undumbed GPT",
      "Pro at 0.17x",
      "Pro 500 at 0.24x",
      "7 GPT-family models",
      "Newly opened",
      "Red packets as group membership hits each stage",
    ],
  },
  "Edge API": {
    name: "Edge API",
    kind: "Paid service / 0.1 on registration and 1 in the QQ group / 0.07x undumbed GPT",
    updateNote:
      "The sign-up credit was corrected: 0.1 through the referral link and 1 issued by an admin in the QQ group; the undumbed GPT rate is 0.07x. Registration uses email verification.",
    summary:
      "A paid service granting 0.1 on sign-up through the referral link, plus 1 issued by an admin in the QQ group; it has undumbed GPT at a 0.07 rate (per user report). Credit is displayed in CNY.",
    details:
      "The service calls itself Edge API (ai.lffm.cn, with ai.mxmt.cn and ai.femkj.cn as additional entry points), runs on New API, and displays credit in CNY. Registration uses email verification: signing up through the referral link grants 0.1, and an admin issues 1 once you join the QQ group. The 0.07x undumbed GPT is per user report.",
    registration: "Register with email verification through the referral link; signing up through the referral link grants 0.1, and an admin issues 1 once you join the QQ group.",
    signupBonus: "0.1 (through the referral link); 1 issued by an admin in the QQ group",
    dailyCheckin: "Go by what the service shows",
    models:
      "0.07x undumbed GPT (per user report); the operator announcement lists deepseek / GLM at 0.10x and full-power Claude-MAX at 0.80x",
    experience:
      "A paid service; 0.1 on sign-up through the referral link plus 1 from a QQ group admin; 0.07x undumbed GPT",
    caveat:
      "A paid service — verify with a small top-up first. The sign-up credits (0.1 through the referral link and 1 from a QQ group admin) and the 0.07 rate come from a user report; the operator notes rates are not official discounts and are subject to the model price page and consumption records. Use ai.mxmt.cn as the primary and ai.femkj.cn or ai.lffm.cn as backups.",
    benefits: [
      "Paid service",
      "0.1 on sign-up and 1 in the QQ group",
      "0.07x undumbed GPT",
      "deepseek / GLM at 0.10x",
      "Full-power Claude-MAX at 0.80x",
      "Cheap image generation",
      "Three switchable entry points",
      "Domestic ICP-registered entry point",
      "QQ group 1094759296",
    ],
  },
  "xxzl 公益站": {
    name: "xxzl",
    kind: "Public service / one-year GitHub account required / 23 models in 8 groups",
    updateNote:
      "Registration has been tightened: new registrations need a GitHub account at least one year old, and email registration will no longer be open; users who registered by email should bind GitHub soon or their accounts will be deleted. Otherwise unchanged (moved to ai.1tim.com, 23 models in 8 groups, contributor-backed high-availability groups and a Kimi channel, astra is full-powered and passes candy-level questions). Added: the operator of this service previously ran a paid service called 「新云」 with a poor reputation, ended on bad terms, and is now gone.",
    summary:
      "A public service where new registrations require a GitHub account at least one year old and email registration will no longer be open; users who registered by email should bind GitHub soon or their accounts will be deleted. Sign-up through the invite link grants 200 and the daily check-in grants 5. Models grew to 23 across 8 groups, adding \"contributor-backed high-availability\" groups and a Kimi channel; users report astra is full-powered and passes candy-level questions.",
    details:
      "The service calls itself xxzl (footer xxzlAPI) and now lives at ai.1tim.com (the old ai.wv4.cn stopped resolving; both pointed at the same server). It runs on New API. Sign-up through the invite link grants 200 and the daily check-in grants 5 (per user report). Registration currently uses GitHub accounts only, with no account-age limit (per user report); the API shows both GitHub OAuth and email registration enabled, so go by what the sign-up page actually shows. The public model list now shows 23 models across 8 groups: the Claude group has 6 (opus 5-5, sonnet 5, opus 5, opus 4-8, opus 4-7, sonnet 4-6), with the operator stating it \"does not guarantee advanced models — go to the contributor group if unavailable, but lower-tier ones work, and long high-intelligence sessions are not guaranteed\"; the GPT group has 8 (gpt-6-astra, gpt-6-sol, gpt-6.1-sol, gpt-6-luna, gpt-5.5, gpt-5.6-luna/sol/terra), with the operator saying \"GPT availability is low as everyone knows — if this fails use the contributor group; 6-astra or the 6-series sol drop in at random, luna is guaranteed, and astra is not dumbed down\"; the DeepSeek group has 2 (deepseek-v4.1-flash plus the -2 backup), described as \"ultra-fast deepseek-v4.1-flash on official keys, not dumbed down and highly stable, with a shared pool of $1,000 a day that runs out\"; the GLM group has 1 (glm-5.3-flash), described as \"can be cut at any time, with only 5.3-flash guaranteed and stable while a 5.3 channel is being sourced and drops in at random\"; the Kimi group has 1 (kimi-k3-1), described as \"a mystery channel for kimi3.1 with high intelligence and stability that passes candy-level questions, thanks to a company contribution, on a shared pool of $1,000 a day\". The Claude, GPT, and DeepSeek groups each have a \"contributor-backed high-availability\" variant, which the operator describes as needing one \"真寻酱捏\" in the group for high availability and high intelligence, unlocking some advanced groups — but the GPT variant notes a 5-hour wait when there are no accounts available, and the Claude variant has a concurrency limit. Quota is displayed in USD. The service has a check-in, image generation, and a task feature.",
    registration: "New registrations require a GitHub account at least one year old; email registration will no longer be open, and users who registered by email should bind GitHub soon or their accounts will be deleted (per user report).",
    signupBonus: "200",
    dailyCheckin: "5",
    models:
      "23 models in 8 groups: Claude (opus 5-5, sonnet 5, opus 5, opus 4-8, opus 4-7, sonnet 4-6) / GPT (6-astra, 6-sol, 6.1-sol, 6-luna, 5.5, 5.6-luna/sol/terra) / DeepSeek (v4.1-flash on official keys, $1,000 daily shared pool) / GLM (5.3-flash) / Kimi (k3-1 on a mystery channel, $1,000 daily shared pool); plus a contributor-backed high-availability variant for Claude, GPT, and DeepSeek",
    experience:
      "New registrations need a GitHub account at least one year old; email registration will no longer be open and existing email users must bind GitHub; 23 models in 8 groups with contributor-backed high-availability variants for Claude, GPT, and DeepSeek; users report astra is full-powered and passes candy-level questions",
    caveat:
      "Public service. Quota is displayed in USD; the sign-up grant and check-in amount come from a user report, so confirm them in the service. Registration has been tightened: new registrations need a GitHub account at least one year old, email registration will no longer be open, and existing email users should bind GitHub soon or their accounts will be deleted (per user report). The per-group limits are the operator's own wording: the standard Claude and GPT groups have low availability with models dropping in at random, the GLM group can be cut at any time, and both the DeepSeek and Kimi groups run on a $1,000 daily shared pool that runs out. The contributor-backed high-availability groups require sending \"真寻酱捏\" in the group; the GPT variant has a 5-hour wait when no accounts are available and the Claude variant has a concurrency limit. Operator history: the operator of this service previously ran a paid service called 「新云」 with a poor reputation, ended on bad terms, and is now gone (per user report). The model list and grouping are subject to the in-site model page.",
    benefits: [
      "Public service",
      "200 on invite sign-up",
      "Check-in 5",
      "One-year GitHub account required",
      "Email registration closing",
      "Existing email users must bind GitHub",
      "23 models in 8 groups",
      "Astra passes candy-level questions",
      "Contributor-backed high-availability groups",
      "Kimi channel",
      "DeepSeek official keys",
      "Image generation",
    ],
  },
  "Axis AI 公益站": {
    name: "Axis AI",
    kind: "Public-benefit API relay / OpenAI-compatible / 8 models",
    updateNote:
      "Added the benefit system from the QQ group announcement: Go is 10x the free tier, a GitHub star earns Go, and open-source contributions earn Pro For OSS; the announcement states these are permanent. Otherwise unchanged.",
    summary:
      "A free public-benefit API relay with an OpenAI-compatible endpoint (/v1), currently offering 8 models: claude-opus-5.5, claude-sonnet-5.5, gpt-6-astra, gpt-6.1-sol, gpt-6-sol, gpt-6-luna, gpt-5.6-sol, and gpt-5.6-luna. Registration goes through OneAuth (QQ login) OAuth and needs an email and QQ number, with submissions manually reviewed. Benefits split into Go and Pro: **Go is 10x the free tier** — star and follow the author on GitHub (five stars plus a follow is enough) to apply; developers with open-source contributions can apply directly for Pro For OSS. National Day benefits are generous, and five consecutive days of check-ins grant a reset card (per user report).",
    details:
      "The service calls itself Axis AI (ai.onyxaxis.org) and describes itself as \"a completely free public-benefit AI platform\". It is in fact an API relay, exposing an OpenAI-compatible /v1 endpoint — an earlier version of this entry wrongly described it as a chat platform with no API, and that has been corrected. Testing /v1/models shows 8 models available right now: claude-opus-5.5, claude-sonnet-5.5, gpt-6-astra, gpt-6.1-sol, gpt-6-sol, gpt-6-luna, gpt-5.6-sol, and gpt-5.6-luna (all under the obsidian-arc channel group). Registration: only OneAuth (QQ login) OAuth is enabled, a username is mandatory, email is required though not force-verified, the QQ number is required, and invites are open. Turnstile human verification covers sign-up and API-key creation, and submissions go through a manual review. The service also has a reset-card mechanism where a card resets the 5-hour, weekly, monthly, or full usage window; National Day benefits are generous, and five consecutive days of check-ins grant a reset card (per user report). The QQ group announcement also lays out a benefit system described as \"permanently valid — if the announcement is still up, it is valid\": Go gives 10x the free tier's quota, earned by starring and following the author at github.com/OnyxAxisOwO/ObsidianArc (five stars plus a follow grants Go, then apply via the in-site upgrade button); Pro For OSS is for anyone who has contributed to Obsidian Arc or Axis AI, or who owns their own open-source project — apply in-site and an admin will set requirements based on your repositories. The official QQ group is 309623044.",
    registration: "Register through OneAuth (QQ login) OAuth with a username, email (required), and QQ number; invites are open. Turnstile verification covers sign-up and API-key creation, and submissions go through a manual review.",
    signupBonus: "Go is 10x the free tier (star and follow the author on GitHub, five stars grants it); developers can apply for Pro For OSS; plus National Day benefits and the five-day check-in reset card",
    dailyCheckin: "A check-in is available; five consecutive days grant a reset card (per user report)",
    models:
      "OpenAI-compatible /v1 with 8 models: claude-opus-5.5 / claude-sonnet-5.5 / gpt-6-astra / gpt-6.1-sol / gpt-6-sol / gpt-6-luna / gpt-5.6-sol / gpt-5.6-luna; GPT is not dumbed down (per user report)",
    experience:
      "A free public-benefit relay; 8 models spanning Claude opus/sonnet and GPT 6-series, with GPT not dumbed down; Go is 10x the free tier and is earned via a GitHub star, while Pro For OSS targets open-source developers; verified callable in testing",
    caveat:
      "Per the operator's notice, the API must not be wired into role-play frontends such as SillyTavern, RisuAI, or Agnai, and keys must not be resold or shared for others to use. Jailbreaking, role-play bypasses, forged system instructions, encoding obfuscation, \"developer mode\" tricks, pornographic or borderline content, malicious code, and network attacks are likewise banned. Detection is automatic and violations lead to an immediate permanent ban with no appeal. The QQ number is required, so skip it if that bothers you; sign-ups are manually reviewed and are not approved instantly. The model list changes with the service, so confirm what is actually callable.",
    benefits: [
      "Public service",
      "Completely free",
      "API relay",
      "OpenAI-compatible endpoint",
      "claude-opus-5.5",
      "claude-sonnet-5.5",
      "gpt-6-astra",
      "gpt-6-sol",
      "gpt-6-luna",
      "GPT not dumbed down",
      "Verified callable",
      "National Day benefits",
      "Reset card after five days of check-ins",
      "Reset cards reset usage windows",
      "Go is 10x the free tier",
      "GitHub star earns Go",
      "Pro For OSS for open-source contributors",
      "QQ group 309623044",
    ],
  },

  "Artbloom 公益站": {
    name: "Artbloom",
    kind: "Public service / one-year GitHub sign-up / $100 on registration",
    updateNote:
      "New listing: a public service granting $100 instantly when signing up through the referral link with GitHub (accounts must be at least one year old); offers claude-opus-5, claude-opus-5-5, DeepSeek-V4-Flash, kimi-k3, and image models over an OpenAI-compatible API.",
    summary:
      "A public service granting $100 instantly on sign-up through the referral link with GitHub (accounts must be at least one year old). Offers claude-opus-5, claude-opus-5-5, DeepSeek-V4-Flash, kimi-k3, and image models over an OpenAI-compatible API with transparent pricing.",
    details:
      "The service calls itself Artbloom (api.artbloom.tech), a custom-built gateway (not New API) whose footer reads \"OpenAI-compatible · Self-hosted\". The homepage states that all new accounts start with $100 in free credit (no card required), and signing up through a referral link activates an invited-user bonus at registration; besides the sign-up grant and referrals, no check-in, redemption-code, or other credit-earning entry points appear on the public pages. GitHub accounts must be at least one year old. Models and prices are listed transparently on the public models page: language models are billed per million tokens — claude-opus-5 and claude-opus-5-5 at $2 input / $10 output, DeepSeek-V4-Flash and kimi-k3 at $1 input / $3 output; the gpt-image-2.5 image series (including flare and sunburst variants) is billed per image at $0.02 / $0.1 / $0.5 for low/medium/high quality. The API is OpenAI-compatible: /v1/chat/completions, /v1/images/generations, and /v1/images/edits.",
    registration: "Sign up with GitHub through the referral link (the GitHub account must be at least one year old).",
    signupBonus: "$100 (added instantly on sign-up)",
    dailyCheckin: "Not provided",
    models:
      "claude-opus-5 / claude-opus-5-5 (both $2 input, $10 output per 1M tokens) / DeepSeek-V4-Flash / kimi-k3 (both $1 input, $3 output); gpt-image-2.5 image series $0.02-0.5 per image",
    experience: "Custom-built gateway with an OpenAI-compatible API and transparent public pricing",
    caveat:
      "Language models are billed at official rates per million tokens, so work out the $100 in token volume at those prices rather than expecting a discount multiplier. The GitHub account must be at least one year old. Within the public pages, credit comes only from the sign-up grant and referrals — confirm any in-dashboard extras after registering. Models and prices are subject to the public models page.",
    benefits: [
      "Public service",
      "$100 on sign-up",
      "One-year-old GitHub account required",
      "claude-opus-5-5",
      "claude-opus-5",
      "DeepSeek-V4-Flash",
      "kimi-k3",
      "Image models",
      "OpenAI-compatible API",
    ],
  },
  "星桥 公益站": {
    name: "Xingqiao Public Service",
    kind: "Public service / Gemini only / per-call billing",
    updateNote:
      "New listing: a public service granting 200 calls on invite-code sign-up, another 100 per person referred, and 20 per daily check-in; Gemini models only at a flat ¥0.02/call, with no top-ups.",
    summary:
      "A public service granting 200 calls on invite-code sign-up, another 100 for each person you refer, and 20 per daily check-in. Gemini models only, all priced at ¥0.02 per call, and no top-ups.",
    details:
      "The service calls itself \"星桥\" (Xingqiao, xingqiao.chat). Credit is measured in calls: invite-code sign-up grants 200 calls, each referred registration adds 100, and the daily check-in gives 20. Gemini models only, all priced at ¥0.02 per call. Top-ups are not supported — credit comes entirely from the sign-up grant, referrals, and check-ins. Registration is by email verification, with no GitHub or Linux DO sign-in and no captcha; the check-in is live (confirmed via the status API).",
    registration: "Register with email verification through the referral link; no captcha.",
    signupBonus: "200 calls (invite-code sign-up); another 100 per person referred",
    dailyCheckin: "20 calls",
    models: "Gemini series only (all models ¥0.02/call)",
    experience: "Per-call billing, with credit measured in number of calls",
    caveat: "Gemini models only — look elsewhere if you need Claude or GPT. Call counts and pricing rules may change; confirm them on the service.",
    benefits: [
      "Public service",
      "200 calls on sign-up",
      "100 per person referred",
      "20 per daily check-in",
      "Gemini only",
      "¥0.02/call",
      "No top-ups",
    ],
  },
  "玖时API 半公益站": {
    name: "Jiushi API Freemium Service",
    kind: "Freemium / ¥3 on sign-up / very large lineup, per-call billing",
    updateNote:
      "New listing: a freemium service granting ¥3 on sign-up with an about-¥0.1 daily check-in; a very large lineup of 164 models focused on the Claude family, billed per call — k-特惠 opus at ¥0.1078/call and sonnet at ¥0.0539/call.",
    summary:
      "A freemium service: ¥3 on sign-up with an about-¥0.1 daily check-in. A very large lineup of 164 models focused on the Claude family, billed per call — k-特惠 opus at ¥0.1078/call and sonnet at ¥0.0539/call, plus gemini, GPT, Grok, and web-reverse series.",
    details:
      "The service calls itself \"玖时API\" (api.jiushi.xin), with credit displayed in yuan. Sign-up grants ¥3 and the daily check-in adds about ¥0.1; registration is by email verification only, with no GitHub or Linux DO sign-in and no captcha. The public model marketplace lists 164 models dominated by the Claude family — opus 4.5/4.6/4.7/4.8/5, sonnet, and fable across multiple channel groups — plus gemini series, GPT, and Grok. Billing is per call and varies by channel group: a September 26 announcement cut k-特惠 prices to opus VIP ¥0.1078/call and sonnet VIP ¥0.0539/call; the web-reverse series runs at ¥0.085/call (described by the operator as not officially connected — avoid it if you mind reverse-engineered channels); the 官混 series was repriced to ¥0.98/call in September amid heavy risk control. An online top-up system is available, with after-sales QQ group 822106149 and a notice-only group 1126699954.",
    registration: "Register with email verification; no captcha.",
    signupBonus: "¥3",
    dailyCheckin: "About ¥0.1",
    models:
      "164 models, dominated by the Claude family (opus 4.5-5 / sonnet / fable across channel groups); also gemini series, GPT, and Grok; k-特惠 opus ¥0.1078/call, sonnet ¥0.0539/call",
    experience: "Per-call billing with prices varying by channel group; several price changes within September",
    caveat:
      "The web-reverse series is, per the operator, not officially connected — avoid it if you mind reverse-engineered channels. The 官混 series was repriced to ¥0.98/call amid heavy risk control, and prices fluctuate with upstream risk control, so confirm them on the service. Check-in amounts may change; confirm them on the service.",
    benefits: [
      "Freemium",
      "¥3 on sign-up",
      "About ¥0.1 daily check-in",
      "Very large lineup (164 models)",
      "Claude-focused",
      "Per-call billing",
      "k-特惠 opus ¥0.1078/call",
      "Online top-up",
      "After-sales QQ group",
    ],
  },
  "Camila 公益站": {
    name: "Camila Public Service",
    kind: "Public service / 5000 points on sign-up / about 200 daily check-in",
    updateNote:
      "New listing: 5000 points on sign-up and an about-200 daily check-in; the 11-model public group is mostly at a 0x rate, with per-call groups (gemini about 0.015/call, grok and GPT 0.01/call); email-verified or GitHub sign-up.",
    summary:
      "A public service granting 5000 points on sign-up with an about-200 daily check-in. The public model marketplace lists 51 models: the 11-model public group is mostly at a 0x rate, with per-call groups (gemini about 0.015/call, grok and GPT 0.01/call). Email-verified or GitHub sign-up.",
    details:
      "The in-site name is literally \"公益站\" (public service), so it is listed here as Camila after its domain free.camila.qzz.io (running New API). Credit is measured in points (✨). Sign-up grants 5000 points and the daily check-in adds about 200 (per user report; the status API confirms the check-in is live). Registration is by email verification or GitHub, with no captcha at sign-up. The model marketplace is viewable without logging in and lists 51 models: the 11-model public group (glm-5.2, glm-5.3-flash, step-3.7-flash, mimo-v2.5, deepseek-v4.1-flash, and more, mostly at a 0x rate); per-call groups — gemini-dedicated at about 0.015/call (27 gemini models), the ds group at 0.019/call, grok-dedicated at 0.01/call, gpt-dedicated at 0.01/call, and the glm group at 0.029/call; plus vip/ssvip/svip/recharge paid groups and 5 image models. An August 22 announcement said gemini runs on a single account with a 5-hour limit that runs out quickly and that a pool would be added after 7 days; the current pinned announcement offers free access to all models in the temporary \"Mid-Autumn carnival\" group for three days over the holiday.",
    registration: "Register with email verification or via GitHub.",
    signupBonus: "5000 points",
    dailyCheckin: "About 200",
    models:
      "Public group of 11 (glm-5.2 / glm-5.3-flash / step-3.7-flash / mimo-v2.5 / deepseek-v4.1-flash and more, mostly 0x rate); per-call groups gemini about 0.015/call, grok and GPT 0.01/call, ds 0.019/call, glm 0.029/call; 51 models in total",
    experience: "The model marketplace is public; most public-group models are at a 0x rate",
    caveat:
      "An August announcement said gemini runs on a single account with a 5-hour limit that runs out fast (a pool was promised after 7 days; check current status on the site). Most public-group models are at a 0x rate and per-call prices are shown in the marketplace. The vip/ssvip/svip/recharge groups are paid tiers. The free \"Mid-Autumn carnival\" group is a limited-time event and reverts afterwards.",
    benefits: [
      "Public service",
      "5000 points on sign-up",
      "About 200 daily check-in",
      "11-model public group",
      "Mostly 0x rate",
      "gemini about 0.015/call",
      "grok and GPT 0.01/call",
      "GitHub sign-up",
      "Email-verified sign-up",
      "Image models included",
    ],
  },
  "Ovo 半公益站": {
    name: "Ovo Freemium Service",
    kind: "Freemium / SillyTavern-oriented / check-in changed to spending rebate",
    updateNote:
      "Check-in rule changed: the previous \"flat 1 credit per daily check-in\" is now a \"yesterday's-spending rebate\" — 5% of the previous day's actual API spending for regular users and 10% for VIP users. The ¥5 sign-up credit, models, and prices are unchanged.",
    summary:
      "A freemium SillyTavern-oriented service granting ¥5 on sign-up; **the daily check-in is now a \"yesterday's-spending rebate\": regular users get 5% of the previous day's actual API spending and VIP users 10%**. Claude and Gemini are available — gemini at ¥0.04 per call and claude-opus-4-6 at ¥0.3 per call.",
    details:
      "The service calls itself ovo (ovoapi.cn) and is oriented toward SillyTavern users, with credit displayed in yuan. Sign-up grants ¥5. The check-in rule has changed: instead of a flat 1 credit it now pays a \"yesterday's-spending rebate\" — 5% of the previous day's actual API spending for regular users and 10% for VIP users, so you need to have spent something to earn the rebate. Claude and Gemini are available: gemini at ¥0.04 per call and claude-opus-4-6 at ¥0.3 per call, both billed per request.",
    registration: "Register through the referral link.",
    signupBonus: "¥5",
    dailyCheckin: "Yesterday's-spending rebate: 5% for regular users, 10% for VIP",
    models: "Claude / Gemini (gemini ¥0.04 per call, claude-opus-4-6 ¥0.3 per call)",
    experience: "SillyTavern-oriented, billed per request; the check-in is now a spending rebate, so credit only comes back if you spend",
    caveat:
      "The check-in changed from a flat amount to a \"yesterday's-spending rebate\" (5% regular, 10% VIP), so it is no longer unconditional — confirm the rules and percentages on the service. Model prices may change; the available model list is subject to what the site shows.",
    benefits: [
      "Freemium",
      "SillyTavern-oriented",
      "¥5 on sign-up",
      "Check-in now a spending rebate (5% regular)",
      "10% for VIP",
      "Claude",
      "Gemini",
      "gemini ¥0.04 per call",
      "claude-opus-4-6 ¥0.3 per call",
    ],
  },
  hiyo: {
    name: "hiyo",
    kind: "Public service / GitHub or Linux DO sign-up / luna and gpt-6-luna",
    updateNote:
      "gpt-6-luna has launched, and a backup invite-code sign-up link was added. Otherwise unchanged: GitHub or Linux DO sign-up, 20 on registration, a daily check-in, and possibly slightly slow speed.",
    summary:
      "A public service with GitHub or Linux DO sign-up, 20 on registration, and a daily check-in. gpt-6-luna has launched, and speed may be slightly slow.",
    details:
      "Registration is via GitHub or Linux DO, granting 20 on sign-up, and the site has a daily check-in. gpt-6-luna has launched (it was previously announced for later). Speed may be slightly slow, so do not expect too much if you are in a hurry. Confirm the units for sign-up and check-in credit on the site. The card also carries a backup invite-code sign-up link.",
    registration: "Sign up with GitHub or Linux DO.",
    signupBonus: "20",
    dailyCheckin: "A daily check-in is available (confirm the amount on the site)",
    models: "luna / gpt-6-luna",
    experience: "gpt-6-luna has launched; speed may be slightly slow",
    caveat: "luna and gpt-6-luna are now available, but the lineup is still narrow; speed may be slightly slow. Confirm sign-up and check-in amounts on the site.",
    benefits: ["Public service", "GitHub sign-up", "Linux DO sign-up", "20 on sign-up", "Daily check-in", "gpt-6-luna launched", "Backup invite-code link", "Slightly slow"],
    altLabel: "Backup invite-code sign-up link",
  },
  zquant: {
    name: "zquant",
    kind: "Paid service / GPT and Grok / about 0.15 rate / 1:1.1 top-ups for National Day",
    updateNote: "Top-ups convert at 1:1.1 during the National Day promotion.",
    summary:
      "A paid service I have topped up over 20 on, with an about-0.15 rate and the full GPT lineup plus Grok, **with GPT not dumbed down**. It includes dumbing-down detection and a dumbing-down radar — GPT risk control has been strict lately and dumbing-down heavily affects the experience, so check the radar before use; join QQ group 738420477 for a 1-yuan trial, and an on-site check-in adds 0.1-1 each time, but it now requires a top-up of at least 20. During the National Day promotion, top-ups convert at 1:1.1.",
    details:
      "A paid service I have topped up over 20 on. The rate is around 0.15, with models focused on the full GPT lineup and Grok. This one includes dumbing-down detection: GPT risk control has been strict lately, and dumbing-down heavily affects the experience, so check the in-site dumbing-down radar first and confirm there is no dumbing-down before committing. To try it out first, join the official QQ group 738420477 for a 1-yuan trial; an on-site check-in is also live, worth 0.1-1 each time, but it now requires a top-up of at least 20. During the National Day promotion, top-ups convert at 1:1.1.",
    registration: "Register through the referral link; join the official QQ group 738420477 for a 1-yuan trial.",
    signupBonus: "1-yuan trial in QQ group 738420477",
    dailyCheckin: "0.1-1 each time (requires a top-up of at least 20)",
    models: "Full GPT lineup / Grok; GPT is not dumbed down",
    experience: "Topped up over 20 personally; GPT is not dumbed down, though risk control has been strict lately and the radar is still worth checking",
    caveat:
      "Dumbing-down is the thing to watch most here: when GPT risk control is strict, the experience drops sharply, so use the 1-yuan trial and the dumbing-down radar before paying. The rate is about 0.15 and dumbing-down tracks upstream risk control; confirm current values in the service.",
    benefits: ["Paid service", "Topped up over 20 personally", "About 0.15 rate", "Full GPT lineup", "Grok", "Dumbing-down detection", "Dumbing-down radar", "GPT not dumbed down", "Daily check-in 0.1-1", "Check-in requires a top-up of at least 20", "1:1.1 top-ups for National Day", "1-yuan trial in the QQ group"],
  },
  "星见雅": {
    name: "Xinjianya",
    kind: "Public service / GitHub or Linux DO sign-up / about 1000 daily check-in",
    updateNote:
      "New listing: a long-running public service with GitHub or Linux DO sign-up and an about-1000 daily check-in; includes gpt-5.6-sol, gpt-5.6-terra, z-ai/glm-5.3, z-ai/glm-5.3-flash, moonshotai/kimi-k3, and deepseek-ai/deepseek-v4-flash-0731.",
    summary:
      "A long-running public service with GitHub or Linux DO sign-up and an about-1000 daily check-in. Available models include gpt-5.6-sol, gpt-5.6-terra, z-ai/glm-5.3, z-ai/glm-5.3-flash, moonshotai/kimi-k3, and deepseek-ai/deepseek-v4-flash-0731.",
    details:
      "The service calls itself \"Xinjianya API\" (星见雅 API). Registration is via GitHub or Linux DO, and a daily check-in is available. Available models include gpt-5.6-sol, gpt-5.6-terra, z-ai/glm-5.3, z-ai/glm-5.3-flash, moonshotai/kimi-k3, and deepseek-ai/deepseek-v4-flash-0731.",
    registration: "Sign up with GitHub or Linux DO.",
    signupBonus: "Claim the sign-up credit in QQ group 547911817",
    dailyCheckin: "About 1000",
    models: "gpt-5.6-sol / gpt-5.6-terra / z-ai/glm-5.3 / z-ai/glm-5.3-flash / moonshotai/kimi-k3 / deepseek-ai/deepseek-v4-flash-0731",
    experience: "gpt-5.6-sol behaves oddly in use (per user report)",
    caveat: "gpt-5.6-sol does not behave as expected — a user reported it \"feels weird\" — so test it lightly first if you depend on that model. Confirm check-in amounts, model availability, and rates on the service.",
    benefits: [
      "Public service",
      "Long-running public service",
      "GitHub sign-up",
      "Linux DO sign-up",
      "About 1000 daily check-in",
      "gpt-5.6-sol",
      "gpt-5.6-terra",
      "z-ai/glm-5.3",
      "z-ai/glm-5.3-flash",
      "moonshotai/kimi-k3",
      "deepseek-ai/deepseek-v4-flash-0731",
    ],
  },
  "墨白公益站": {
    name: "Hinswu Public Service",
    kind: "Public service / email sign-up / OIDC binding required / 1-10 daily check-in",
    updateNote:
      "Binding OIDC is now required, or the account will be deleted (per user report). Otherwise unchanged: email-only registration, a 1-10 daily check-in with a second one after joining the QQ group, and DeepSeek V4.1 Flash usable for free.",
    summary:
      "A public service that requires binding OIDC, or the account will be deleted (per user report). Registration is limited to gmail / 163 / qq / foxmail / icloud email with email verification and a captcha; the daily check-in grants 1-10, and joining the official QQ group 444158239 (entry answer zakozako) after registering adds a second one — two check-ins a day. DeepSeek V4.1 Flash is usable for free.",
    details:
      "The service calls itself \"Mobai API\" (墨白 API), runs on New API, and is credited to the 2026 HAGP Team. Credit is measured in \"cat food\" (猫粮) and displayed in US dollars at an exchange rate of about 7. Although the model marketplace publicly lists 936 models, few are actually usable for free — DeepSeek V4.1 Flash is the main one currently; confirm what is available on the service. Check-ins: the on-site daily check-in grants 1-10, and joining the official QQ group 444158239 (entry answer zakozako, per user report) adds a second, so two check-ins a day are possible. Per the operator's announcements, the premium group was taken offline after users abused models for jailbreaking, reverse engineering, and pornographic content, causing the upstream to end cooperation; it returned on September 18 but only for \"formal users\", who must bind with /绑定 [site ID] inside the official QQ group, and some models have not returned. Some free models will later require joining the group to unlock, and unfriendly speech in the group leads to a platform ban plus a ban on the inviting user. Besides email and password, sign-in also supports Passkey and OIDC (HINS Auth); per user report, binding OIDC is now required or the account will be deleted.",
    registration: "Register with an email address limited to gmail.com / 163.com / qq.com / foxmail.com / icloud.com, with email verification and a captcha; Passkey and OIDC (HINS Auth) sign-in are also supported. Binding OIDC is required, or the account will be deleted (per user report).",
    signupBonus: "No fixed sign-up credit",
    dailyCheckin: "1-10 on the site; joining the official QQ group 444158239 (entry answer zakozako) adds a second — two a day",
    models: "DeepSeek V4.1 Flash (the marketplace lists 936 models, but few are usable for free; confirm on the service)",
    experience: "OIDC binding is required or the account will be deleted; opened for free use, with the operator stating availability is not guaranteed; free models are shared, so 429s are possible under load",
    caveat:
      "Binding OIDC is required, or the account will be deleted (per user report). Per the operator's announcements, abuse of models for jailbreaking, reverse engineering, and pornographic content caused the upstream to end cooperation; the premium group returned but only for group-bound formal users, with some models still missing. Some free models will later require joining the group to unlock, and unfriendly speech in the group leads to a ban plus a ban on the inviting user. Grok models have been unavailable since September 17 due to a server disconnect. Confirm check-in amounts, the free-model lineup, and rate-limit rules on the service.",
    benefits: [
      "Public service",
      "Email sign-up",
      "1-10 daily check-in",
      "A second check-in after joining the QQ group",
      "Two check-ins a day",
      "DeepSeek V4.1 Flash",
      "OIDC binding required or the account is deleted",
      "Passkey / OIDC sign-in",
    ],
  },
  "StarBridge 公益站": {
    name: "StarBridge Public Service",
    kind: "Freemium / GitHub sign-up / ¥20 on sign-up, ¥10 daily check-in",
    updateNote:
      "The service's server lapsed due to a missed renewal, so re-registration is required; the registration link has been updated.",
    summary:
      "A public service granting ¥20 on GitHub sign-up and ¥10 per daily check-in; 15 models including gemini-3.8-flash-high, gpt-6-astra, and gpt-5.6-sol, with credit displayed in yuan. The service's server lapsed due to a missed renewal, so re-registration is required.",
    details:
      "The service calls itself StarBridge (api.careke.cn). GitHub sign-up grants ¥20 and the daily check-in adds ¥10. The model marketplace is viewable without logging in and lists 15 models: besides gemini-3.8-flash-high, gpt-6-astra, and gpt-5.6-sol, there are claude-sonnet-4-6, gpt-5.6-terra, gpt-5.6-luna, gpt-5.5, and several Gemini Flash variants. Note that the service's server lapsed due to a missed renewal, so existing accounts need to re-register. A September 18 announcement also said some endpoints would be time-limited, some models limited in supply, and new-user registration paused, with sign-up moved to GitHub, while warning about Google-service rate limits and accounts running out of credit. Verify registration and model availability on the service.",
    registration: "Register via GitHub; the service's server lapsed due to a missed renewal, so existing accounts need to re-register.",
    signupBonus: "¥20",
    dailyCheckin: "¥10",
    models: "gemini-3.8-flash-high / gpt-6-astra / gpt-5.6-sol / claude-sonnet-4-6 / gpt-5.6-terra / gpt-5.6-luna / gpt-5.5 and more — 15 in total (verified on the public model marketplace)",
    experience: "No hands-on speed feedback yet; the announcement warns some models are limited supply",
    caveat:
      "The service's server lapsed due to a missed renewal, so existing accounts need to re-register. A September 18 in-site announcement said new-user registration was paused, some endpoints were time-limited, and some models were limited in supply, with sign-up moved to GitHub. Gemini models make up a large share, so the Google rate-limit adjustment may affect availability. Credit, check-in rewards, and models are subject to what the service displays.",
    benefits: [
      "Public service",
      "GitHub sign-up",
      "¥20 on sign-up",
      "¥10 daily check-in",
      "gemini-3.8-flash-high",
      "gpt-6-astra",
      "gpt-5.6-sol",
      "Claude plus Gemini/GPT lineup",
      "Public model marketplace",
      "Re-registration required",
    ],
  },
  "Orevx Engine 半公益站": {
    name: "Orevx Engine Freemium Service",
    kind: "Freemium / email or phone sign-up / 100-200 compute daily check-in",
    updateNote: "New listing: a freemium service granting 100 compute on sign-up and a random 100-200 compute daily check-in, covering common domestic models plus GPT and Claude, with fast calls.",
    summary:
      "A freemium service: email or phone sign-up grants 100 compute and the daily check-in randomly adds 100-200 compute. Common domestic models plus GPT and Claude are all available, calls are fast, and the model console is at /llm-dashboard.",
    details:
      "An all-in-one AI creation and work platform that bundles chat, drawing, video, music, and workflow features alongside the LLM API. Credit is measured in \"compute\": new users get 100 on sign-up and the daily check-in randomly grants 100-200 (the random mode and its bounds are confirmed by the service's public configuration). Alipay and WeChat subscriptions are sold, so it is freemium rather than purely free. Registration is by email or phone, with email restricted to qq.com / 163.com / gmail.com / outlook.com / hotmail.com, and both an email and a phone number must be bound. The model console is at https://orevx.ai/llm-dashboard/ .",
    registration: "Sign up with an email or phone number (email limited to qq.com / 163.com / gmail.com / outlook.com / hotmail.com); both an email and a phone number must be bound afterwards.",
    signupBonus: "100 compute",
    dailyCheckin: "Random 100-200 compute",
    models: "Common domestic models / GPT / Claude (many models available, not listed item by item; see the in-site llm-dashboard)",
    experience: "Fast calls per user report",
    caveat: "Many models are available and are not listed item by item; confirm the lineup in the in-site llm-dashboard. Check-in credit is random, so the amount varies. The service also sells paid subscriptions, so free-credit rules may change.",
    benefits: ["Freemium", "Email or phone sign-up", "100 compute on sign-up", "Random 100-200 daily check-in", "Common domestic models plus GPT/Claude", "Fast", "llm-dashboard console", "Alipay/WeChat subscriptions"],
  },
  "Ksir的小饭锅": {
    name: "Ksir's Little Rice Pot",
    kind: "Public service / $0.2 referral credit / SillyTavern-oriented",
    updateNote: "New listing: $0.2 on referral sign-up and a $5 daily check-in, with Claude and DeepSeek available; oriented toward SillyTavern users, coding allowed but no jailbreaking.",
    summary:
      "A public service oriented toward SillyTavern users. Referral sign-up grants $0.2 and the daily check-in adds $5; Claude and DeepSeek are available, coding is allowed, but jailbreaking is not.",
    details:
      "A public service for SillyTavern users. Registration through the referral link grants $0.2 and the daily check-in adds $5, so credit is mainly sustained by checking in; Claude and DeepSeek are available. Coding is fine, but jailbreaking (bypassing content moderation) is not allowed. Rates and the model lineup should be verified on the service.",
    registration: "Register through the referral link.",
    signupBonus: "$0.2",
    dailyCheckin: "$5",
    models: "Claude / DeepSeek",
    experience: "SillyTavern-oriented; coding allowed, no jailbreaking",
    caveat: "Jailbreaking (bypassing content moderation) is not allowed — avoid this service for that kind of content. Rates, the model lineup, and rules may change; verify them on the service.",
    benefits: ["Public service", "SillyTavern-oriented", "$0.2 referral sign-up credit", "$5 daily check-in", "Coding allowed", "No jailbreaking", "Claude", "DeepSeek"],
  },
  "Txcxgzs 公益站": {
    name: "Txcxgzs Public Service",
    kind: "Public service / GitHub sign-up / no payment required",
    updateNote: "New listing: GitHub sign-up, no payment required, and a daily check-in of about 0.1.",
    summary:
      "GitHub sign-up with no payment required. The main models are free2-glm-5.3-flash, free2-qwen3.8-flash, and free2-mimo-v2.5, plus nvd-minimaxai/minimax-m3; the daily check-in is about 0.1.",
    details:
      "The main models are free2-glm-5.3-flash, free2-qwen3.8-flash, and free2-mimo-v2.5, with nvd-minimaxai/minimax-m3 also available. The service supports GitHub registration, currently requires no payment, and offers a daily check-in of about 0.1.",
    registration: "Sign up with GitHub.",
    signupBonus: "No payment required",
    dailyCheckin: "About 0.1",
    models: "free2-glm-5.3-flash / free2-qwen3.8-flash / free2-mimo-v2.5 / nvd-minimaxai/minimax-m3",
    experience: "Mainly the first three free2 models; currently free to use",
    caveat: "Credit, check-in rewards, and model availability may change; verify the current values on the service.",
    benefits: ["GitHub sign-up", "No payment required", "About 0.1 daily check-in", "free2-glm-5.3-flash", "free2-qwen3.8-flash", "free2-mimo-v2.5", "nvd-minimaxai/minimax-m3"],
  },
  "咕嘎咕嘎": {
    name: "Guga Guga",
    kind: "Freemium service / WeChat sign-up / temporary credit resets monthly",
    updateNote: "New listing: WeChat sign-up and about ¥1 in temporary check-in credit, cleared at the end of each month.",
    summary:
      "WeChat sign-up with about ¥1 in temporary credit from check-ins, cleared at the end of each month. Models include Gemini-3.7-Flash, GLM-5.3-Flash, GPT-5.6-sol, GPT-Image-2, Grok-4.6, and Qwen3.8-Flash.",
    details:
      "The service supports WeChat sign-up. Check-ins grant about ¥1 in temporary credit, which is cleared at the end of every month. Known models include Gemini-3.7-Flash, GLM-5.3-Flash, GPT-5.6-sol, GPT-Image-2, Grok-4.6, and Qwen3.8-Flash. Pricing is 1/1/0.1 for input/output/cache.",
    registration: "Sign up with WeChat.",
    signupBonus: "Temporary check-in credit",
    dailyCheckin: "About ¥1 in temporary credit",
    models: "Gemini-3.7-Flash / GLM-5.3-Flash / GPT-5.6-sol / GPT-Image-2 / Grok-4.6 / Qwen3.8-Flash",
    experience: "Check-in credit resets at month-end; model pricing is 1/1/0.1",
    caveat: "Check-in rewards are temporary and cleared at the end of each month. Model availability, pricing, and credit rules may change; verify them on the service.",
    benefits: ["WeChat sign-up", "About ¥1 temporary check-in credit", "Cleared at month-end", "Gemini-3.7-Flash", "GLM-5.3-Flash", "GPT-5.6-sol", "GPT-Image-2", "Grok-4.6", "Qwen3.8-Flash", "1/1/0.1 pricing"],
  },
  "Hyper 公益站": {
    name: "Hyper Public Service",
    kind: "Public service / GitHub sign-up / daily pass",
    updateNote: "New listing: GitHub sign-up, 5 credits on registration, and 15-25 from daily check-ins.",
    summary:
      "GitHub sign-up with 5 credits on registration and 15-25 from daily check-ins. Models include gpt-5.6-sol, gpt-5.6-terra, gpt-5.6-luna, gpt-5.3-codex-spark, gpt-5.5, and several free models.",
    details:
      "GitHub registration grants 5 credits, and daily check-ins give 15-25. Known models include gpt-5.6-sol, gpt-5.6-terra, gpt-5.6-luna, gpt-5.3-codex-spark, gpt-5.5, free2-glm-5.3-flash, free2-qwen3.8-flash, grok-4.5, and deepseek-ai/DeepSeek-V4-Flash-0731. A global proxy can be used, but regional restrictions apply. Before use, buy a daily pass in Wallet; a balance of 5 can activate 20 in usage.",
    registration: "Sign up with GitHub.",
    signupBonus: "5 credits",
    dailyCheckin: "15-25",
    models: "gpt-5.6-sol / gpt-5.6-terra / gpt-5.6-luna / gpt-5.3-codex-spark / gpt-5.5 / free2-glm-5.3-flash / free2-qwen3.8-flash / grok-4.5 / deepseek-ai/DeepSeek-V4-Flash-0731",
    experience: "A global proxy can be used, but regional restrictions apply",
    caveat: "Buy a daily pass in Wallet before use; a balance of 5 can activate 20 in usage. Regional restrictions, proxy requirements, and pass rules may change; verify them on the service.",
    benefits: ["GitHub sign-up", "5 sign-up credits", "15-25 daily check-in", "Global proxy supported", "Regional restrictions", "Daily pass: 5 balance activates 20", "gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna", "gpt-5.3-codex-spark", "gpt-5.5"],
  },
  MotoMoto: {
    kind: "Unavailable / waiting for recovery",
    updateNote: "The service is unreachable; removed from the live recommendations and moved to the unavailable archive.",
    archivedAt: "2026-10-26",
    archivedReason: "The service is unreachable, so at the user's request it was removed from the live recommendations and moved to the unavailable archive pending recovery; registration, bonuses, and models must be re-verified once it returns.",
    summary:
      "Registration grants $50 ($30 on sign-up plus $20 for the invite code) at a 1x rate, with a daily check-in of about $50. Password registration is closed, so new users must sign up through GitHub; older accounts can still log in with a password but have to bind GitHub soon or be treated as farming accounts. Note that the operator restricts OpenAI models to use inside Codex — wiring them into other agents counts as a violation.",
    details:
      "An OpenAI-compatible endpoint at https://motomoto.lol/v1, with tokens created in the console. Known models are gpt-5.5 and gpt-5.6-sol. Sign-up grants $30 and the referral link adds $20, for $50 total, at a 1x rate. The daily check-in is now a flat $50, matching the operator's 3 September announcement; whether the earlier two tiers ($50 with data authorisation, $10 without) still apply has not been verified, and the training-data authorisation clause remains in the privacy policy, so check the switch yourself before sensitive work. Registration changed on 7 September: password registration was closed and new users go through GitHub authorisation (the site runs a Turnstile check). Accounts created earlier with a username and password can still log in that way, but must bind GitHub under Personal Settings or be suspended as farming accounts. Referrals pay $100 once the invitee has genuinely spent about $2, capped at 3 people per day and 20 in total. The operator states plainly that credit is internal accounting rather than cash, and that balances on long-idle accounts are cleared.",
    registration: "GitHub authorisation (password registration closed on 2026-09-07). Existing accounts can still log in with their old password but must bind GitHub under Personal Settings, or be suspended for farming.",
    signupBonus: "$50 ($30 sign-up + $20 invite code)",
    dailyCheckin: "About $50",
    models: "gpt-5.5, gpt-5.6-sol (OpenAI-compatible, 1x rate)",
    experience: "1x rate with an about-$50 check-in; OpenAI models limited to Codex",
    caveat: "**The operator restricts OpenAI models to use inside Codex, and wiring them into any other third-party agent is treated as a violation** — running them through something like Claude Code breaks the rules, so watch out. The rules also forbid multiple accounts, scripted registration or check-ins, credit farming, reselling keys or credit, jailbreak prompts, and bypassing content moderation; confirmed violations mean an immediate ban with credit voided and nothing refunded. A wave of accounts was banned on 5 September after widespread abuse, briefly taking the service down; appeals go through /appeal. The privacy policy contains a training-data authorisation clause: with it on, the operator may store or sample your prompts, model outputs, and tool calls for training, fine-tuning, distillation, and evaluation, and whatever has entered training generally cannot be removed afterwards — check the switch yourself before sensitive work (the check-in is now a flat $50, and whether it still depends on that switch is unverified). Credit is internal accounting rather than cash, and long-idle balances are cleared. The service launched recently, so stability and credit policy may change.",
    benefits: ["GitHub sign-up", "Older accounts must bind GitHub", "$50 sign-up credit", "1x rate", "About $50 check-in", "OpenAI for Codex only", "No multi-accounting or farming", "Idle balances cleared"],
    tutorialLabel: "Read the training-data authorisation terms in the privacy policy first",
  },
  "BaaaAI 公益站": {
    kind: "Models unavailable / waiting for recovery",
    name: "BaaaAI Public Service",
    updateNote: "Models have been unavailable for several days; removed from the live recommendations.",
    archivedReason: "Models have been unavailable for several days, so the service was removed from the live recommendations and moved to the unavailable archive pending recovery.",
    summary:
      "Calls to the service's models have been failing for several days. It previously focused on less common GPT models, with 20 credits claimable daily in the console, at least one call required, and a concurrency limit of 2.",
    details:
      "The models have been unavailable for several days. The original mechanics: after registering through the referral link, claim the daily 20 credits yourself in the console, with at least one request required to maintain the daily benefit; the console is the source of truth for the uncommon GPT-model lineup.",
    registration: "Register through the referral link.",
    dailyCheckin: "Claim 20 daily in the console (at least one call required)",
    models: "Previously uncommon GPT models; currently not responding",
    experience: "Models unavailable for several days",
    caveat: "Calls have been failing for several days with no known recovery date, so do not rely on it for daily usage. The daily credits have to be claimed in the console with at least one call, and concurrency is two. Model availability, credit amounts, and usage rules may change.",
    benefits: ["Models currently down", "Claim 20 credits daily", "At least one call required", "Concurrency 2", "Uncommon GPT models"],
  },
  KKToken: {
    kind: "No models available / waiting for recovery",
    updateNote: "No models are left on the service; removed from the live recommendations.",
    archivedReason: "No models are available, so the service was removed from the live recommendations and moved to the unavailable archive pending recovery.",
    summary:
      "No models are available on the service any more. It previously offered $100 in sign-up credit and $20 daily check-ins, with Claude Opus 4.8 and Opus 5 as the main models.",
    details:
      "There are no models left to call, so treat this as a service to wait on rather than a primary route. It is run by the same operator as JustWoker Public Service; both lost their models at the same time, but JustWoker has since recovered with GPT only while KKToken remains unavailable. The previous offer was $100 on sign-up and $20 per daily check-in, with Claude Opus 4.8 and Opus 5 available; a GitHub account is required, and the exact requirement is shown on the registration page. Registration and check-ins appear to still work, so you can register to hold a spot and accumulate credit, but usability depends on the models coming back. After a recovery the Claude Code CLI may still return an \"Attention Required! | Cloudflare\" page — that is the network route being blocked: turn on a proxy and set HTTPS_PROXY / HTTP_PROXY in the env block of ~/.claude/settings.json (which applies to every terminal you start), or switch the proxy client to TUN mode. The same fix applies to TabiToken and GoRouter.",
    registration: "A GitHub account is required; the exact restriction and the current registration status are shown on the registration page.",
    signupBonus: "Previously $100 credit",
    dailyCheckin: "Previously $20",
    models: "Previously Claude Opus 4.8 / Opus 5; no models available now",
    experience: "No models left to call; waiting for recovery",
    caveat: "No models are available and there is no known recovery date, so do not rely on this as your only route. Whether registration and check-ins stay as they were, and whether credit and rates change on recovery, is up to what the service actually shows. If a recovered service returns an \"Attention Required! | Cloudflare\" page in the Claude Code CLI, that is the network route, not the endpoint and not the CLI request headers: turn on a proxy and set HTTPS_PROXY / HTTP_PROXY in the env block of ~/.claude/settings.json, or switch the proxy client to TUN mode. Claude Desktop is not required.",
    benefits: ["No models available", "Waiting for recovery", "Same operator as JustWoker", "Previously $100 sign-up credit", "Previously $20 daily check-in", "Previously Claude Opus 4.8 / Opus 5", "GitHub requirement"],
  },
  "Piu酱": {
    name: "Piu Jiang",
    kind: "Public service / referral sign-up / 20 credits on sign-up, 1-10 daily check-in",
    updateNote:
      "New listing: registration is open again, granting 20 credits on sign-up and a random 1-10 daily check-in; 14 models including Gemini, DeepSeek, and GLM-5.3-Flash, with both metered and per-request billing (0.2 per call).",
    summary:
      "A public service with registration open again (first come, first served): 20 credits on sign-up and a random 1-10 daily check-in. It offers 14 models including gemini-3.8-flash-medium, gemini-3-pro, DeepSeek V4.1 Flash, and GLM-5.3-Flash, with both metered and per-request billing at 0.2 per call.",
    details:
      "A New API service called \"Piu Jiang\" that opened for testing on August 31, 2026 and set up check-in credit on September 3, so it is a fairly new service. Registration goes through the referral link, requires email verification, and has no captcha; registration reopened on September 20. The model marketplace is viewable without logging in and lists 14 models: gemini-3.8-flash-medium, gemini-3.7-flash-medium, gemini-3-pro, gemini-3.1-pro, deepseek/deepseek-v4.1-flash, deepseek-ai/DeepSeek-V4-Flash-0731, zai-org/GLM-5.3-Flash, z-ai/glm-5.3-flash, mimo-v2.5-pro, and others. Billing works two ways: the four Gemini models with a 次 suffix (gemini-3-pro次, gemini-3.1-pro次, gemini-3.8-flash-medium次, gemini-3.7-flash-medium次) are billed per request at a flat 0.2 regardless of token usage, while the rest are billed by multiplier, with GLM-5.3-Flash, DeepSeek, and MiMo among those at a 0x rate. Sign-up grants 20 credits and the daily check-in adds a random 1-10. The in-site announcement also links a roughly ¥2 thank-you card worth 100 in credit.",
    registration: "Register through the referral link with email verification (registration reopened on 2026-09-20).",
    signupBonus: "20 credits",
    dailyCheckin: "Random 1-10",
    models: "gemini-3.8-flash-medium / gemini-3-pro / gemini-3.1-pro / deepseek-v4.1-flash / GLM-5.3-Flash / mimo-v2.5-pro and more — 14 in total (verified on the public model marketplace)",
    experience: "0.2 per request; GLM, DeepSeek, and MiMo models are billed at 0x",
    caveat:
      "It only opened at the end of August, so reliability is still being established; users report registration is first come, first served and may close again. Confirm sign-up credit, check-in amounts, and model availability on the service.",
    benefits: [
      "Public service",
      "Registration open again",
      "Referral sign-up",
      "20 credits on sign-up",
      "Random 1-10 daily check-in",
      "gemini-3.8-flash-medium",
      "gemini-3-pro",
      "DeepSeek V4.1 Flash",
      "GLM-5.3-Flash",
      "0.2 per request",
      "Some models at 0x",
    ],
  },
  GcmodAi: {
    kind: "Freemium service / one cent per request",
    updateNote: "Kimi-K3 was added, and the service moved up to the front of the free section.",
    summary:
      "Every model is billed per request at a flat 0.01 yuan regardless of token usage. Sign-up grants 1 yuan, and a check-in is now live at roughly 0.1 yuan a day — about ten requests. Two subscription tiers also offer strong value: ¥5 resets 30 yuan weekly, ¥20 resets 300 yuan daily. Kimi-K3, GPT-5.6-luna, and DeepSeek V4 Pro are available.",
    details:
      "Billing is a flat price per call rather than a rate multiplier: every model costs 0.01 yuan per request no matter how many tokens it used, which makes long-context work comparatively cheap. Sign-up grants 1 yuan, about a hundred requests at that price. The service now has a check-in worth roughly 0.1 yuan a day, which works out to ten requests — not much, but credit does come back on its own now, enough to keep light use going. For volume, subscribe: the Basic tier at ¥5 lasts one month with weekly resets and a 30-yuan quota; the Premium tier at ¥20 lasts one month with daily resets and a 300-yuan quota, both unlocking the VIP group. The Premium tier's 300 yuan that resets daily works out to about 30k requests at one cent each. Regular top-ups are also available at 1:1. Known models include Kimi-K3, GPT-5.6-luna, and DeepSeek V4 Pro.",
    registration: "Register through the referral link; sign-up grants 1 yuan.",
    signupBonus: "1 yuan (about 100 requests)",
    dailyCheckin: "About 0.1 yuan (about 10 requests)",
    models: "Kimi-K3 / GPT-5.6-luna / DeepSeek V4 Pro",
    experience: "One cent per request on every model; the check-in suits light use, subscribe for volume",
    caveat: "The check-in is worth about 0.1 yuan a day, only ten requests, so volume still means subscribing or topping up (1:1). Subscription prices and quotas are both in yuan (¥5 / 30 yuan weekly reset, ¥20 / 300 yuan daily reset); term length is one month for both. Confirm the check-in amount, concurrency limits, and the full model list in the service itself; subscription prices and quotas may also change.",
    benefits: ["One cent per request", "Not token-metered", "1 yuan on sign-up", "Check-in about 0.1 yuan", "¥20 tier resets 300 yuan daily", "¥5 tier resets 30 yuan weekly", "VIP group on subscription", "1:1 top-up", "Kimi-K3", "GPT-5.6-luna", "DeepSeek V4 Pro"],
  },
  Hubway: {
    kind: "Long-term personal use / established relay",
    summary:
      "An established relay I topped up 50 on and use as a long-term backup. Registering and joining the group grants 10, top-ups convert 1:10, and the advertised rate of about 0.6 works out to roughly 0.06 in practice.",
    details:
      "This is the one I put 50 into and keep around; it holds up well as a backup route. Registering and joining the group grants 10. Top-ups convert 1:10. The service advertises a rate of about 0.6, but actual billing works out to roughly 0.06.",
    registration: "Register through the link and join the official group to claim 10.",
    signupBonus: "10 for joining the group",
    dailyCheckin: "Not offered",
    models: "Not itemised",
    experience: "Topped up 50 myself; holds up as a backup route",
    caveat: "Paid service — the only grant is the 10 for joining the group. The advertised and actual rates differ (about 0.6 versus roughly 0.06); rely on actual billing in the service.",
    benefits: ["Long-term use", "Topped up 50", "10 for joining", "1:10 top-up", "Advertised about 0.6", "Actual about 0.06"],
  },
  AIHub: {
    kind: "Long-term personal use / multi-upstream",
    updateNote: "Added: joining the group lets you see each channel's intelligence status, so you can check before picking a channel.",
    summary:
      "Tested personally. It aggregates several upstreams with channel selection and automatic failover, which suits long continuous runs. Joining the group grants $10, a review on L-site grants another $10, and the lowest rate is 0.06. Joining the group also lets you see each channel's intelligence status.",
    details:
      "It aggregates several upstreams and lets you pick a channel; when a channel misbehaves it can switch automatically, which suits work that runs for a long stretch. Joining the group grants $10, and a review on L-site grants another $10. The lowest rate is 0.06. Joining the official group also lets you see each channel's intelligence status, so you can check before picking a channel and avoid ones that are currently degraded or diluted. I have not confirmed how the automatic switching decides, and I have no L-site account, so I never claimed that second $10. The operator states that they actively test channels and refund when they find diluted or poisoned responses.",
    registration: "Join the official group after registering to claim $10; with an L-site account, a review grants another $10.",
    signupBonus: "$10 for joining the group (another $10 for an L-site review)",
    dailyCheckin: "Not offered",
    models: "Several aggregated upstreams with channel selection",
    experience: "Tested personally; automatic failover suits long continuous work; the group shows each channel's intelligence status",
    caveat: "Paid service. The automatic switching policy is unconfirmed, and I never claimed the L-site review bonus — check the terms in the service. Channel intelligence status is whatever the group shows and may lag. The operator's claim about testing channels and refunding for diluted or poisoned responses is their own statement, which I have not verified independently.",
    benefits: ["Long-term use", "Tested personally", "Multi-upstream", "Automatic failover", "The group shows each channel's intelligence status", "$10 for joining", "$10 for L-site review", "Lowest rate 0.06"],
  },
  AbinAPI: {
    kind: "Paid service / Grok Heavy 0.08",
    updateNote: "Joining the official QQ group is now required to claim the sign-up credit; the registration link also changed to the new referral code Q8KA3A9E6CBR (the old 9yXf is retired) and the path is now /register instead of /sign-up. Otherwise unchanged (check-in 0.1-0.5 yuan, Grok Heavy at 0.08).",
    summary:
      "Join the official QQ group 547911817 to claim the sign-up credit. Grok Heavy runs at 0.08; other models are available, but this one is cheaper and works well. Check-in is 0.1-0.5 yuan.",
    details:
      "Join the official QQ group 547911817 to claim the sign-up credit. Grok Heavy runs at a 0.08 rate; other models are available, but this one is cheaper and works well. Check-in is 0.1-0.5 yuan. The service runs on sub2api, and the domain remains www.abinapi.com. The exact sign-up credit amount follows the group notice and the service.",
    registration: "Register through the referral link, then join the official QQ group 547911817 to claim the sign-up credit.",
    signupBonus: "Claim the sign-up credit in QQ group 547911817",
    dailyCheckin: "0.1-0.5 yuan",
    models: "Grok Heavy (0.08) / other models",
    experience: "Grok Heavy at 0.08 is inexpensive and works well",
    caveat:
      "Paid service. The sign-up credit requires joining the official QQ group 547911817; confirm the amount in the group notice and in the service. Grok Heavy is currently 0.08. Other models are available, but this one is cheaper and works well; confirm the current rates and model list in the service.",
    benefits: ["Paid service", "Sign-up credit via the QQ group", "Grok Heavy 0.08", "Other models available", "Inexpensive and works well", "Check-in 0.1-0.5 yuan"],
  },
  Denxio: {
    kind: "Free service stopped / upstream pool banned",
    updateNote: "The entire upstream account pool was banned and the free service stopped; removed from the live recommendations.",
    archivedReason: "The entire upstream account pool was banned and the free service stopped, so it was removed from the live recommendations and moved to the unavailable archive.",
    summary:
      "The entire upstream account pool was banned, so the free service has stopped. It previously focused on GPT, with the Xianchi (仙池) event granting 20 xianyuan per day — xianyuan is equivalent to dollars — plus 0.5-1 from daily check-ins. Registration required a code obtained from Telegram first.",
    details:
      "Someone used the service for pornographic content and model distillation, which got the Pro accounts the operator had bought as upstream banned across the board, and the free service stopped as a result. The registration page is still reachable. The original mechanics: two codes are needed — the referral code is already part of the registration link below, while the registration code (dengxianling, 登仙令) has to be collected from Telegram by joining the t.me/denxio_free channel, going to the dengxianling section, and sending \"登仙令\" to @JieYin_bot, then returning to the registration page. Credit came mainly from the Xianchi event at 20 xianyuan per day, with opening announcements posted only in the Telegram channel and the QQ group.",
    registration:
      "The registration link already contains the referral code. You also need a registration code: join the Telegram channel t.me/denxio_free, go to the dengxianling section, and send \"登仙令\" to @JieYin_bot.",
    signupBonus: "Previously 20 xianyuan per day from the Xianchi event (equivalent to dollars)",
    dailyCheckin: "Previously 0.5-1 xianyuan",
    models: "Previously GPT",
    experience: "Upstream account pool banned; the free service has stopped",
    caveat:
      "Someone used the service for pornographic content and distillation, which got the operator's upstream Pro accounts banned; the free service has stopped — watch the Telegram channel and QQ group for recovery announcements. The original requirements: the registration code had to be collected from Telegram, without which you cannot register, and Xianchi opening announcements were posted only in the Telegram channel and QQ group.",
    benefits: ["Free service stopped", "Upstream pool banned", "GPT", "Previously 20 xianyuan/day", "Previously 0.5-1 check-in", "Telegram code required"],
    tutorialLabel: "Join the Telegram channel for recovery news and the registration code",
  },
  "JustWoker 公益站": {
    kind: "Public service / Claude Opus 4.8 / Kiro channel",
    name: "JustWoker Public Service",
    updateNote:
      "The model lineup changed to Claude Opus 4.8 on a Kiro channel; some users reported data-theft and injection problems, so avoid private scenarios and watch the prompt while using it.",
    summary:
      "The site's models have changed to Claude Opus 4.8 on a Kiro channel; use /v1/messages when calling them. Some users reported data-theft and injection problems, so avoid private scenarios and watch the prompt while using it.",
    details:
      "JustWoker previously came back on a GPT route, and its models have now changed to Claude Opus 4.8 over a Kiro channel. Call the site's models through /v1/messages. Note that some users reported data-theft and injection problems with this channel, so avoid private scenarios, watch the prompt while using it, and stop if something looks off. The previously known registration gate was a GitHub account at least one year old; confirm sign-up credit, daily check-ins, and rates on the site.",
    registration: "It previously required a GitHub account at least one year old; verify the current registration status and gate on the sign-up page.",
    signupBonus: "Check the current value on the site",
    dailyCheckin: "Check the current value on the site",
    models: "Claude Opus 4.8 (Kiro channel; use /v1/messages for calls)",
    experience: "Back online; now Claude Opus 4.8 over a Kiro channel",
    caveat:
      "Some users reported data-theft and injection problems with this channel: avoid private scenarios and watch the prompt while using it; use /v1/messages for model calls. Registration gates, bonuses, check-ins, rates, and stability were not re-verified, so confirm the current rules on the site.",
    benefits: ["Back online", "Claude Opus 4.8", "Kiro channel", "Use /v1/messages", "Verify the GitHub gate on the site", "Not for private scenarios"],
  },
  "Sulmate 半公益站": {
    kind: "Registration code required / freemium service",
    name: "Sulmate Freemium Service",
    updateNote: "Registration now requires a registration code.",
    summary:
      "Registration now requires a registration code. The service previously had a 1x shared public pool and paid VIP calls.",
    details:
      "Registration now requires a registration code. The service previously had a shared public pool and a paid VIP group. Existing users should confirm current group, check-in, and calling rules in the service itself.",
    registration: "Registration now requires a registration code.",
    signupBonus: "Registration code required; previously shared public-pool quota",
    dailyCheckin: "Existing users should verify current rules in the service",
    experience: "Registration code required; public group 1x, VIP group 0.15x",
    caveat: "Registration now requires a registration code. Public-pool, check-in, VIP pricing, and group rules for existing users may change; verify the current notices.",
    benefits: ["Registration code required", "Previously shared public pool", "Paid VIP calls", "VIP 0.15x rate", "Public 1x rate"],
  },
  "PAI 生图公益站": {
    kind: "Public image generation / limited bonus",
    name: "PAI Public Image Generator",
    summary:
      "A nearly free public image-generation service. Signing in grants 2,000 points, registrations on August 18, 2026 receive another 888 limited-time points, and today's tested check-in yielded 620 points.",
    details:
      "Offers GPT Image models with point-based pricing: gpt-image-2-1k costs 100 points, gpt-image-2-2k costs 150 points, and gpt-image-2-4k costs 200 points. The generous point rewards make it useful for trying image generation at volume.",
    registration: "Register through the referral link and sign in. Registrations on August 18, 2026 receive an additional 888 limited-time points.",
    signupBonus: "2,000 on sign-in; 888 extra today",
    dailyCheckin: "620 (tested Aug 18, 2026)",
    models: "gpt-image-2-1k / gpt-image-2-2k / gpt-image-2-4k",
    experience: "Generous point supply and low per-image point cost",
    caveat: "The extra 888 registration points are a same-day promotion. Check-in amounts, model pricing, and promotional rules may change; verify the current values on the service.",
    benefits: ["2,000 sign-in points", "888 extra today", "Check-in yielded 620", "1K image: 100 points", "2K image: 150 points", "4K image: 200 points"],
  },
  "Rinko NAI 生图公益站": {
    kind: "Public image generation / API",
    name: "Rinko NAI Public Image Generator",
    summary:
      "A public-service image generator focused on NAI Diffusion through an API. Daily check-ins grant 25 tokens, and the service includes a public gallery.",
    details:
      "Unlike PAI and Jasperio's browser-based text-to-image workflows, this service is primarily API-based and uses NAI Diffusion models. Its public gallery lets users browse shared generations and prompt ideas.",
    registration: "Register through the referral link.",
    dailyCheckin: "25 tokens",
    models: "NAI Diffusion",
    experience: "API-focused image generation with a public gallery for reference",
    caveat: "Token rules, model capability, API limits, and public-gallery content may change. Confirm the latest notices and live service behavior.",
    benefits: ["Public-service image generation", "API access", "NAI Diffusion", "25-token daily check-in", "Public gallery"],
  },
  Jasperio: {
    kind: "Free image generation / light chat",
    summary:
      "A free image-generation service that currently offers unlimited image2 image generation and unlimited GPT-5.5-mini chat.",
    details:
      "Generated images may be deleted without notice, so download anything you want to keep promptly. Please use the free resources responsibly to help keep the service available.",
    registration: "Open the service directly; no additional registration requirement has been provided.",
    signupBonus: "Free unlimited use",
    dailyCheckin: "Not required",
    models: "image2 / GPT-5.5-mini",
    experience: "Free image generation and light chat; save images promptly",
    caveat: "Generated images may be deleted without notice. Download them promptly, and do not abuse the current free access because it may change.",
    benefits: ["Unlimited image2 generation", "Unlimited GPT-5.5-mini chat", "No check-in required", "Download images promptly", "Please use responsibly"],
  },
  AgentRouter: {
    kind: "Public service / GPT and Claude released daily at 10:00 and 19:00",
    updateNote:
      "DeepSeek appears as deepseek-v4-flash in the service's model list, but it is mapped and equivalent to deepseek-v4.1-flash (per user report).",
    summary:
      "GPT (Azure channel, not dumbed down) and Claude models are released on a schedule at 10:00 and 19:00 daily, and DeepSeek is deepseek-v4.1-flash. New accounts receive $75 and daily check-ins add $25. If the main site is unreachable from mainland China, use the mainland sign-up link on the card.",
    details:
      "GPT runs on the Azure channel and is not dumbed down; like Claude, it is released on a schedule at 10:00 and 19:00 daily and may be unavailable at other times. DeepSeek is served as deepseek-v4.1-flash (the model list shows deepseek-v4-flash, which is the mapped name). New accounts receive $75 and daily check-ins add $25; the service is fast and stable. It requires a GitHub account created before December 2025, or a Linux Do account. Users in mainland China can register directly through the mainland link below the card with no proxy needed; the requirements are identical. Normal use may bring credit top-ups or Core group access, but the exact rules are unconfirmed.",
    registration: "GitHub account created before December 2025, or a Linux Do account; mainland users can use the mainland sign-up link instead.",
    signupBonus: "$75 credit",
    dailyCheckin: "$25",
    models: "GPT not dumbed down (Azure channel) / Claude / DeepSeek V4.1 Flash",
    experience: "Models are released daily at 10:00 and 19:00; fast and stable",
    caveat: "GPT and Claude are released on a schedule at 10:00 and 19:00 daily and may be unavailable at other times. Sign out and back in for check-in credit to take effect; confirm exact rates and available models on the service. The normal-use reward mechanism remains unconfirmed.",
    benefits: ["GPT not dumbed down (Azure channel)", "Models released at 10:00 and 19:00 daily", "Claude models", "DeepSeek V4.1 Flash", "$75 sign-up credit", "$25 daily check-in", "Older account required", "Mainland China link", "Recommended by the webmaster"],
    altLabel: "Mainland China sign-up link (no proxy needed)",
    tutorialLabel: "AgentRouter registration guide for mainland China (no proxy required)",
  },
  AnyRouter: {
    kind: "1M context",
    updateNote: "Moved slightly down the ranking.",
    summary:
      "Referral registration grants $100 and daily check-ins add $25. GPT-5.6-sol supports a 1M context window.",
    details:
      "GPT-5.6-sol supports a 1M context window, making it suitable for long documents and large-context tasks.",
    registration: "Linux Do level 2 account, or an .edu.cn academic email address.",
    signupBonus: "$100 credit",
    dailyCheckin: "$25",
    models: "GPT-5.6-sol (1M context)",
    experience: "Long-context GPT-5.6-sol",
    caveat: "Model coverage, context rules, and service status may change. Refer to the service's current notices.",
    benefits: ["$100 sign-up credit", "$25 daily check-in", "GPT-5.6-sol", "1M context"],
  },
  "Fate New API": {
    kind: "Temporarily unavailable / waiting for recovery",
    updateNote: "The service is temporarily unavailable and has been removed from the live recommendations.",
    archivedReason: "The service is temporarily unavailable, so it was removed from the live recommendations and moved to the unavailable archive; registration, benefits, models, and rates must be re-verified after recovery.",
    summary:
      "The service is temporarily unavailable. It previously offered NodeLoc registration, $150 in sign-up credit, daily check-ins, and access to all models.",
    details:
      "The service is currently unusable with no known recovery date, so do not treat it as an available route. It previously offered NodeLoc registration, $150 in sign-up credit, daily check-ins, and access to all models. Accounts left unused appeared to be deleted — mine was twice — and re-registering through the sign-up link was enough to recover access. All of that is historical information from before the outage; registration, benefits, and model availability need to be verified again after recovery.",
    registration: "Temporarily unavailable; registration previously went through NodeLoc, and deleted accounts could re-register through the sign-up link.",
    signupBonus: "Previously $150 credit",
    dailyCheckin: "Previously available; amount unconfirmed",
    models: "Previously all models; service currently unavailable",
    experience: "Temporarily unavailable; waiting for recovery",
    caveat: "The service is temporarily unavailable with no known recovery date, so do not rely on it as an active route. Unused accounts previously appeared to be deleted, so regular calls may still be advisable after recovery. Re-check registration requirements, sign-up credit, check-ins, models, and rates against the service itself when it returns.",
    benefits: ["Temporarily unavailable", "Waiting for recovery", "Previously NodeLoc registration", "Previously $150 sign-up credit", "Previously daily check-in", "Previously all models", "Previously allowed re-registration after deletion"],
  },
  "GemAI（哈基米公益站）": {
    kind: "Freemium / SillyTavern pick",
    name: "GemAI (Hakimi Public Service)",
    summary:
      "Referral registration grants 200 credits. The daily check-in reward is worthwhile and yielded 13 on August 17, 2026. Per-request billing also makes the free experience useful without topping up.",
    details:
      "Offers newer Gemini models and the full Claude model lineup. Its per-request billing is particularly suitable for SillyTavern users. This is a freemium service, so you can first try it with sign-up and check-in credits.",
    registration: "Register through the referral link to receive 200 credits.",
    signupBonus: "200 credits",
    dailyCheckin: "13 (tested Aug 17, 2026)",
    models: "Newer Gemini models / full Claude lineup",
    experience: "Per-request billing; useful without topping up and recommended for SillyTavern",
    caveat: "This is a freemium service. Check-in amounts may vary, and model availability and billing rules may change; verify the current notices before use.",
    benefits: ["200 referral sign-up credits", "Check-in yielded 13", "Per-request billing", "Newer Gemini models", "Full Claude lineup", "Recommended for SillyTavern"],
  },
  "Zynk 公益站": {
    kind: "New public service",
    name: "Zynk Public Service",
    archivedReason: "The service is dead and its domain no longer works; move it back to the live entries only if it recovers.",
    summary:
      "Contact the group admin after registering to receive 200 credits. Daily check-in rewards are random; August 14 and 15 both yielded 15.",
    details:
      "This is a new service and currently unstable, so treat it as a backup. Accounts must use more than 100 credits each month or may be deleted.",
    registration: "Register through the referral link, then contact the group admin for 200 credits.",
    signupBonus: "200 via group admin",
    dailyCheckin: "Random; last two were 15",
    experience: "New and unstable; start with light usage",
    caveat: "Monthly usage must exceed 100 credits or the account may be deleted. Check-in rewards are random.",
    benefits: ["200 credits via group admin", "Random daily check-in", "Aug 14 check-in: 15", "Aug 15 check-in: 15"],
  },
  TabiToken: {
    kind: "No models available / waiting for recovery",
    updateNote: "No models are left on the service; removed from the live recommendations.",
    archivedReason: "No models are available, so the service was removed from the live recommendations and moved to the unavailable archive pending recovery.",
    summary:
      "No models are available on the service any more. Referral registration previously granted $120, with $5-10 from daily check-ins and Claude Opus 4.8 and Opus 5 as the main models.",
    details:
      "There are no models left to call, so treat this as a service to wait on rather than a primary route. The previous offer was $120 from referral registration plus $5-10 from daily check-ins, focused on Claude Opus 4.8 and Opus 5, and connections used to be fast and stable. To check in, open the profile photo in the top-right and go to Profile. After a recovery the Claude Code CLI may still return an \"Attention Required! | Cloudflare\" page — Cloudflare is blocking the network route rather than the endpoint: turn on a proxy and set HTTPS_PROXY / HTTP_PROXY in the env block of ~/.claude/settings.json (which applies to every terminal you start), or switch the proxy client to TUN mode.",
    registration: "The registration window could close at any time; the current status is shown on the registration page.",
    signupBonus: "Previously $120 credit",
    dailyCheckin: "Previously $5-10",
    models: "Previously Claude Opus 4.8 / Opus 5; no models available now",
    experience: "No models left to call; waiting for recovery",
    caveat: "No models are available and there is no known recovery date, so do not rely on this as your only route. The registration window may close at any time. Accounts were previously said to risk suspension without an early API request, but with no models to call there is nothing to do but wait. If a recovered service returns an \"Attention Required! | Cloudflare\" page, turn on a proxy: set HTTPS_PROXY / HTTP_PROXY in the env block of ~/.claude/settings.json, or use TUN mode.",
    benefits: ["No models available", "Waiting for recovery", "Previously $120 sign-up credit", "Previously $5-10 daily check-in", "Check in from Profile", "Previously Claude Opus 4.8 / Opus 5"],
  },
  GoRouter: {
    kind: "No models available / waiting for recovery",
    updateNote: "No models are left on the service; removed from the live recommendations.",
    archivedReason: "No models are available and reliability had already declined, so the service was removed from the live recommendations and moved to the unavailable archive.",
    summary:
      "No models are available on the service any more. Referral registration previously granted $70 with $5-10 from daily check-ins, and reliability had already been declining since late August.",
    details:
      "There are no models left to call, so treat this as a service to wait on rather than a primary route. The previous offer was $70 from referral registration plus $5-10 from daily check-ins, focused on Claude Opus 4.8 and Opus 5. Speed used to be decent, but reliability had been noticeably worse since August 29, 2026, and now the models are gone entirely. To check in, open the profile photo in the top-right and go to Profile. After a recovery the Claude Code CLI may still return an \"Attention Required! | Cloudflare\" page — Cloudflare is blocking the network route rather than the endpoint: turn on a proxy and set HTTPS_PROXY / HTTP_PROXY in the env block of ~/.claude/settings.json (which applies to every terminal you start), or switch the proxy client to TUN mode.",
    registration: "The registration window could close at any time; the current status is shown on the registration page.",
    signupBonus: "Previously $70 credit",
    dailyCheckin: "Previously $5-10",
    models: "Previously Claude Opus 4.8 / Opus 5; no models available now",
    experience: "No models left to call; reliability was already declining",
    caveat: "No models are available and there is no known recovery date, so do not rely on this as your only route; reliability was already declining before the models disappeared. The registration window may close at any time. Accounts were previously said to risk suspension without an early API request, but with no models to call there is nothing to do but wait. If a recovered service returns an \"Attention Required! | Cloudflare\" page, turn on a proxy: set HTTPS_PROXY / HTTP_PROXY in the env block of ~/.claude/settings.json, or use TUN mode.",
    benefits: ["No models available", "Waiting for recovery", "Previously $70 sign-up credit", "Previously $5-10 daily check-in", "Check in from Profile", "Previously Claude Opus 4.8 / Opus 5", "Reliability was declining"],
  },
  "北执半公益站": {
    kind: "Freemium service",
    name: "Beizhi Freemium Service",
    updateNote: "The domain beizhi.dedyn.io now supports https access.",
    summary:
      "A freemium service with free Chinese models, generous check-in credit, and access to newer Gemini and Claude models.",
    details:
      "Provides a unified OpenAI-compatible API, so you can switch models without writing separate integrations.",
    registration: "Registration supports mainstream email providers, such as QQ Mail.",
    signupBonus: "Free Chinese models",
    dailyCheckin: "Generous credit",
    models: "Free Chinese models / newer Gemini models / Claude",
    experience: "Unified OpenAI-compatible API with one-click model switching",
    caveat: "Limited to 15 requests per minute, so it is not suitable for agents or high-frequency automation. It is personally maintained without a commercial SLA and should not be used in production. The domain has changed to beizhi.dedyn.io, which now supports https access.",
    benefits: ["Free Chinese models", "Generous check-in credit", "Newer Gemini models", "Claude", "Unified OpenAI-compatible API", "One-click model switching"],
  },
  Xingya: {
    kind: "Paid service / check-in",
    updateNote: "Check-in now requires joining the QQ group and using the code from its highlights.",
    summary:
      "A paid token-based service. New users receive a 50 Sprout-point trial, another 80 after a referral joins the QQ group, and 20-50 points from daily check-ins — which now require a check-in code.",
    details:
      "Top-ups use a 1:100 ratio and requests cost about 4 tokens each, making it suitable for SillyTavern users. It offers Claude and newer Gemini models. Checking in has changed: join the QQ group, find the current check-in code in the group's highlighted messages, then use that code to check in. Its priority is lower, but it remains before paused-registration services because daily check-ins are available.",
    registration: "Register through the referral link. Invite a friend who joins the QQ group to receive another 80 points. Joining the QQ group is also required to check in at all.",
    signupBonus: "50-point trial",
    dailyCheckin: "20-50 Sprout points (code from the group highlights)",
    models: "Claude / newer Gemini models",
    experience: "Paid token billing, about 4 tokens per request; suited to SillyTavern",
    caveat: "Check-ins now depend on a code posted in the QQ group's highlighted messages, so you cannot check in without joining, and the code may change at any time. This is a paid service: top-up ratios, token costs, and new-user rewards may change. Check the current rules before paying.",
    benefits: ["Paid service", "50-point trial", "80 more after referral and QQ group join", "20-50 daily check-in", "Check-in code from group highlights", "1:100 top-up ratio", "About 4 tokens/request", "Claude", "Newer Gemini models"],
  },
  ArityFlow: {
    kind: "Registration paused",
    updateNote: "Check-in requires a code; join the QQ group to obtain the current code.",
    summary:
      "Registration is currently closed and this entry has been moved to the back of the list. Daily check-in requires a code obtained from the QQ group.",
    details:
      "Primarily aimed at SillyTavern users with per-request billing. Daily check-ins can reach 50, but you must join the QQ group to obtain the current check-in code. Claude and free models are available. Programming outside the coding group is strictly monitored and may lead to suspension.",
    registration: "Registration is currently paused; wait for a reopening announcement. Join the QQ group to obtain the check-in code.",
    signupBonus: "Available; amount unconfirmed",
    dailyCheckin: "Up to 50 (QQ group code required)",
    models: "Claude / free models",
    experience: "Registration closed; per-request billing, mainly for SillyTavern users",
    caveat: "Registration is closed and reopening timing is unknown. Check-in depends on a code distributed through the QQ group. Programming outside the coding group is strictly monitored and may lead to account suspension.",
    benefits: ["Registration paused", "Previously supported QQ", "Referral bonus", "Daily check-in up to 50", "QQ group code required", "Per-request billing", "Claude", "Free models"],
  },
  "ze（芙芙中转站）": {
    kind: "Re-registration required / free credit daily / earn credit on the forum",
    name: "ze (Fufu Relay)",
    updateNote: "The domain has changed to api2.kscsnkli.site (the old ai.kscsnkli.site now serves a different site); the sign-up page now also offers forum login.",
    summary:
      "After earlier bulk registrations, the service now requires re-registration through a new referral link. Free credit is available every day, capped daily; verify the cap on the site. Ongoing credit mainly comes from completing tasks on the forum at bbs.kscsnkli.site, and there is a check-in too. Models include GLM-5.3-Flash, GPT-5.6-sol, DeepSeek V4 Pro, GLM-5.2, and Kimi-K3.",
    details:
      "The service now runs at api2.kscsnkli.site (the old ai.kscsnkli.site now serves a different site) and was previously listed here as Kscsnkli AI, then as ze, the name the site used; in-site it now goes by \"异常芙芙公益\". According to user feedback, earlier bulk registrations mean users now need to register again through the new referral link. Free credit is available every day, but the daily amount is capped; verify the cap and reset rules on the site. Email verification was previously required, and the current gate should likewise be confirmed on the sign-up page. The main source of ongoing credit is not the check-in but forum tasks: head to bbs.kscsnkli.site (\"异常芙芙\" in-site) and complete tasks to earn credit; a check-in exists as well. The service uses NewAPI, and model status, the model list, and pricing are visible on the site. Known models: GLM-5.3-Flash, GPT-5.6-sol, DeepSeek V4 Pro (0813), GLM-5.2, and Kimi-K3.",
    registration: "Because of earlier bulk registrations, register again through the updated referral link below. Email verification was previously required; verify the current gate on the sign-up page.",
    signupBonus: "Verify on the site",
    dailyCheckin: "Check-in available; free credit every day (capped daily) and most credit comes from forum tasks",
    models: "GLM-5.3-Flash / GPT-5.6-sol / DeepSeek V4 Pro (0813) / GLM-5.2 / Kimi-K3",
    experience: "Re-registration needed; free credit daily but capped, and most credit comes from forum tasks",
    caveat: "Earlier bulk registrations mean re-registration is now required; do not assume old accounts still work, and do not bulk-register accounts. Free credit is available every day, but the daily cap is in place; confirm the amount, reset rules, sign-up grant, email-verification requirement, and other current gates on the site. For a steady credit supply, complete tasks on the forum at bbs.kscsnkli.site; the check-in alone will not carry you. The service has been renamed and re-platformed several times: Kscsnkli AI → ze → currently \"异常芙芙公益\" in-site; the domain was previously ai.kscsnkli.site and has now moved to api2.kscsnkli.site. Check the pricing page for model availability before use.",
    benefits: ["Re-registration needed", "Free credit daily", "Daily cap on credit", "Earn credit via forum tasks", "Check-in available", "GLM-5.3-Flash", "GPT-5.6-sol", "DeepSeek V4 Pro", "GLM-5.2", "Kimi-K3"],
    tutorialLabel: "Complete tasks on the 异常芙芙 forum to earn credit",
    statusLabel: "Open the in-site pricing page for models and rates",
  },
  "sunapi 公益站": {
    kind: "Public service / QQ email only / near-free rates",
    name: "sunapi",
    updateNote:
      "The domain has changed to sunapi.5201201314.top, the in-site name is confirmed as sunapi, and the earlier domain-based listing name Chinahk Public Service has been corrected.",
    summary:
      "QQ email is the only accepted registration, and the invite link is required; joining QQ group 744474016 grants an extra 10 in credit, with a daily check-in and free credit every day. Model rates are very low — most cost 0.0001 per request with a group ratio of 0.05, effectively free. Current models include GPT-5.6-sol, Qwen3.8-Flash, GLM-5.3-Flash, and Muse-1.3, plus DeepSeek-V4.1 on an official key; the site carries about 60 models including image, video, and embedding ones of mediocre quality — see the in-site model square for details.",
    details:
      "The service's official name is sunapi; it was previously listed as Chinahk Public Service after its domain and has now been corrected. The domain has changed to sunapi.5201201314.top (previously newapi.chinahk.qzz.io), still running NewAPI. Registration accepts QQ emails only and must go through the invite link; after signing up, joining QQ group 744474016 grants an extra 10 in credit. A daily check-in is available, and there is free credit every day. Rates are very low: most models cost 0.0001 per request with a group ratio of 0.05, which works out to roughly free. Current models include gpt-5.6-sol, qwen3.8-flash, glm-5.3-flash, and muse-1.3, plus deepseek-v4.1 on an official DeepSeek key; about 60 models in total, with a good number of free ones, covering image generation, video generation, and embeddings — all of mediocre quality, so check the in-site model square for the actual list.",
    registration: "Register through the invite link with a QQ email only; other email providers will fail to register.",
    signupBonus: "An extra 10 in credit for joining QQ group 744474016; any sign-up grant is shown on the site",
    dailyCheckin: "Daily check-in available; free credit every day",
    models: "GPT-5.6-sol / Qwen3.8-Flash / GLM-5.3-Flash / Muse-1.3 / DeepSeek-V4.1 (official key), about 60 models in total including image, video, and embedding ones",
    experience: "Most models cost 0.0001 per request with a 0.05 group ratio — effectively free",
    caveat: "QQ email is the only accepted registration, so other providers will likely fail; the 10-credit group bonus requires joining QQ group 744474016. Confirm the rates, the group ratio, and the exact daily free credit on the in-site model square, as policies may change at any time. The image, video, and embedding models are of mediocre quality, so keep expectations low. The domain has changed to sunapi.5201201314.top and the previous newapi.chinahk.qzz.io is no longer in use.",
    benefits: ["QQ email only", "Invite link required", "Extra 10 for joining the QQ group", "Daily check-in", "Free credit daily", "Mostly 0.0001 per request", "Group ratio 0.05", "Effectively free", "About 60 models", "GPT-5.6-sol", "Qwen3.8-Flash", "GLM-5.3-Flash", "Muse-1.3", "DeepSeek-V4.1 official key", "Image/video/embedding models"],
    statusLabel: "Open the in-site model square for models and rates",
  },
  "奶酪公益站": {
    name: "Nailao Public Service",
    kind: "Public service / per-request billing / SillyTavern only",
    updateNote: "New listing: register with a QQ email, then bind QQ in the check-in group to claim credit.",
    summary: "A public service that accepts QQ email registration. Join its QQ check-in group and bind your QQ account to claim about ¥0.1 in credit. Models cost about ¥0.01 per request, and no top-up entry was found. Milestone events may grant hundreds of credits. It is intended for SillyTavern and does not allow coding.",
    details: "Register with a QQ email, then join the QQ check-in group and bind your QQ account. Group check-ins grant about ¥0.1 in credit. Models are billed per request at about ¥0.01 each; no top-up entry was found, and the operator may distribute hundreds of credits when user-count milestones are reached. Known models include GLM-5.3-Flash, DeepSeek V4 Pro, GPT-5.6-luna, and Qwen3.8-Flash. This is a SillyTavern-focused service and does not support coding or other programming use. Its public status endpoint shows registration enabled but web check-in disabled; the check-in described here happens through the QQ group.",
    registration: "Register with a QQ email. Join the check-in group and bind QQ before checking in through the group.",
    signupBonus: "Hundreds of credits may be distributed at user-count milestones; verify the normal sign-up grant on the site",
    dailyCheckin: "About ¥0.1 through the QQ group (QQ binding required; web check-in is disabled)",
    models: "GLM-5.3-Flash / DeepSeek V4 Pro / GPT-5.6-luna / Qwen3.8-Flash",
    experience: "About ¥0.01 per request; for SillyTavern, not coding",
    caveat: "The service is specifically intended for SillyTavern and does not allow coding or other programming use. Check-in requires joining the QQ group and binding QQ; the public web check-in switch is currently disabled, so do not confuse the two mechanisms. No top-up entry was found, but whether it remains fully free should be confirmed on the site. Per-request pricing, check-in credit, milestone grants, and model availability may change.",
    benefits: ["QQ email registration", "QQ group check-in with QQ binding", "About ¥0.1 per check-in", "About ¥0.01 per request", "No top-up entry found", "Milestone credit grants", "GLM-5.3-Flash", "DeepSeek V4 Pro", "GPT-5.6-luna", "Qwen3.8-Flash", "SillyTavern only", "No coding"],
    statusLabel: "Open the public status endpoint",
  },
  "SharedChat 公益站": {
    name: "SharedChat Public Service",
    kind: "Public service / QQ registration / strict quotas",
    updateNote: "New listing: QQ registration, GPT-5.6-sol, a daily quota of 50, and strict three-hour and concurrency limits.",
    summary: "QQ registration with GPT-5.6-sol. The daily quota is 50; each user gets 15 per three hours, while the whole site also has a shared three-hour cap. Single concurrency only, with IP restrictions that require turning off your proxy.",
    details: "Register with QQ. GPT-5.6-sol is currently available, with a daily quota of 50 and a per-user limit of 15 every three hours. The whole service also has a separate shared three-hour quota, so it can run out even when your personal quota remains. Only one concurrent request is allowed. The service restricts by IP, so turn off your proxy before use to avoid triggering the restriction.",
    registration: "Register with QQ. Turn off your proxy and access it from your local IP.",
    signupBonus: "Not provided",
    dailyCheckin: "Not provided; daily usage quota is 50",
    models: "GPT-5.6-sol",
    experience: "50 daily; 15 per user every three hours; separate site-wide three-hour cap; single concurrency",
    caveat: "The service restricts by IP, so turn off your proxy. Each user gets 15 per three hours, but the site has an independent shared three-hour cap that may be exhausted during busy periods. Single concurrency makes it unsuitable for parallel tasks or high-frequency automation. Quotas and models may change.",
    benefits: ["QQ registration", "GPT-5.6-sol", "Daily quota 50", "15 per user every three hours", "Site-wide three-hour cap", "Single concurrency", "IP restriction", "Proxy must be off"],
  },
  "XXS 公益站": {
    name: "XXS Public Service",
    kind: "Public service / Claude 0.16x / QQ group check-in",
    updateNote: "New listing: Claude at 0.16x, QQ group check-ins for egg credits, and several newly added Chinese models.",
    summary: "A public service with Claude at a 0.16x rate, though Claude opens only intermittently. Its QQ group offers check-ins for egg credits. It also has Image-2, DeepSeek V4.1 Flash, Qwen3.8 Flash, GLM-5.3 Flash, DeepSeek V4 Flash, GLM-5-3, and Kimi-K3. GPT at 0.16x and Grok 4.6 at 0.5x are planned, not live.",
    details: "Claude is priced at 0.16x but is only opened intermittently, so watch the site or group notices. Users can check in through the QQ group and receive in-site egg credits. Current models also include Image-2, DeepSeek V4.1 Flash (originally labelled expires-on-0910), Qwen3.8 Flash, GLM-5.3 Flash, DeepSeek V4 Flash, GLM-5-3, and Kimi-K3. The operator plans GPT at 0.16x and Grok 4.6 at 0.5x; neither should be treated as currently available.",
    registration: "Register through the referral link; join the QQ group to check in and collect egg credits.",
    signupBonus: "Not provided",
    dailyCheckin: "QQ group check-in grants egg credits",
    models: "Claude (0.16x, intermittent) / Image-2 / DeepSeek V4.1 Flash / Qwen3.8 Flash / GLM-5.3 Flash / DeepSeek V4 Flash / GLM-5-3 / Kimi-K3",
    experience: "Public service; low-rate Claude opens intermittently, with egg credits from QQ group check-ins",
    caveat: "Claude is not continuously available and should not be treated as a dependable always-on route. GPT at 0.16x and Grok 4.6 at 0.5x are plans, not launched models. The DeepSeek V4.1 Flash name includes expires-on-0910 and may expire or be removed on 10 September 2026, so check the live model list before use. Models, rates, and egg-credit check-in rules may change.",
    benefits: ["Public service", "Claude 0.16x", "Intermittent Claude availability", "QQ group egg-credit check-in", "Image-2", "DeepSeek V4.1 Flash", "Qwen3.8 Flash", "GLM-5.3 Flash", "DeepSeek V4 Flash", "GLM-5-3", "Kimi-K3", "Planned GPT 0.16x", "Planned Grok 4.6 0.5x"],
  },
  SeekAI: {
    kind: "Use with caution",
    updateNote: "Telegram sign-up is now supported.",
    summary:
      "Generous credits: $200 on registration and $20 from daily check-ins; sign-up works with GitHub or Telegram. DeepSeek is currently the only available model; the service may use a web-proxy backend and tool calls can fail.",
    details:
      "Only DeepSeek is currently available. Reliability and output quality fluctuate and may be degraded. Better suited to basic chat or backup use.",
    registration: "Register with a GitHub account (new accounts are accepted) or a Telegram account.",
    signupBonus: "$200 credit",
    dailyCheckin: "$20",
    models: "DeepSeek only",
    experience: "DeepSeek only; possible web proxy and tool-calling issues",
    caveat: "DeepSeek is currently the only available model. Tool calls may fail, and stability and output quality can fluctuate. Use as a backup only.",
    benefits: ["$200 sign-up credit", "$20 daily check-in", "Telegram sign-up supported", "DeepSeek only", "Possible web proxy", "Tool-calling issues"],
  },
  Nofx: {
    kind: "Free tab / no top-up option found",
    name: "Nofx",
    updateNote: "No top-up option was found on the site, so it moved to the free tab and to the front of the list.",
    summary: "$20 signup credit plus $5 for joining the Discord. Daily check-in is $5 with a $50 daily max, and GPT-5.6-sol is available at 0.6x. No top-up option was found on the site, so it is listed under the free tab.",
    details:
      "It was previously listed as a paid service, but no top-up option could be found on the site, so it has moved to the free tab. New users receive $20 on signup and another $5 after joining the Discord, daily check-in earns $5 with a $50 cap, and GPT-5.6-sol is listed at 0.6x. Outside of heavy professional development, the daily allowance is usually enough.",
    registration: "Register via referral link, then join the Discord to claim another $5.",
    signupBonus: "$20 credit (+$5 Discord)",
    dailyCheckin: "$5 (daily cap $50)",
    models: "GPT-5.6-sol",
    experience: "Currently usable; the daily allowance suits non-professional use",
    caveat: "No top-up option was found on the site; whether it genuinely does not accept top-ups is best confirmed there. The check-in cap and multiplier may change — verify in the latest site notices.",
    benefits: ["No top-up found", "Referral link ref=PWF8Z79Q", "$20 signup credit", "$5 for joining Discord", "$5 daily check-in", "Daily cap $50", "GPT-5.6-sol 0.6x"],
  },

  "TokenForge（tokengate）": {
    kind: "Recovered / re-registration required",
    name: "TokenForge (formerly TokenGate)",
    updateNote: "Still the main Claude Opus 5 route with a $20 daily check-in.",
    summary:
      "The service is back to normal with a $20 daily check-in and remains the main Claude Opus 5 route here. Accounts were wiped by the operator, so you have to register again. The injection found in earlier testing — the model locked to English-only replies — has not been re-tested, so check it on your first call.",
    details:
      "On 2 September 2026 the operator deleted every user account; the service is now back to normal with a $20 daily check-in. Deleted accounts do not come back, so you have to go through the sign-up link again, and the sign-up grant is unverified — go by what the site shows. One thing from before the wipe: testing found injection, with the model answering only in English and returning English even for a Chinese prompt, meaning extra instructions were inserted before the request reached the model. I have not re-tested that since the recovery; one Chinese prompt on your first call will tell you, and it is worth doing before any work where the output has to be trustworthy.",
    registration: "Re-registration is required: earlier accounts were wiped by the operator, so sign up again through the link. The previous requirements were GitHub registration with a Google or Microsoft primary email, an account older than 14 days, and Discord verification — confirm the current ones on the registration page.",
    signupBonus: "Unverified (check the site after re-registering)",
    dailyCheckin: "$20",
    models: "Claude Opus 5 available",
    experience: "Back to normal with a $20 check-in; the injection has not been re-tested",
    caveat: "Accounts were rebuilt after the operator wiped them, so you must register again; old accounts and their credit do not return. The injection found in earlier testing (the model restricted to English-only replies, returning English even for Chinese prompts) has not been re-tested, so its status is unknown — verify it yourself before work where the output has to be trustworthy. Check-in and grant rules are whatever the site currently shows. It has renamed and changed domains; stop using the old manus.space address.",
    benefits: ["Back to normal", "$20 daily check-in", "Re-registration required", "Claude Opus 5", "Injection not re-tested", "Discord verification"],
    tutorialLabel: "Join the TokenForge Discord community and complete verification",
    statusLabel: "Open the TokenForge model-status page and check availability",
  },
};
