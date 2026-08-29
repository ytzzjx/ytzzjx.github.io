// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。我会尽量更新最新情况，欢迎多多关注。",
  githubUrl: "https://github.com/ytzzjx",
  lastUpdated: "2026-08-29",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  displayOrder: [
    "KKToken",
    "JustWoker 公益站",
    "BaaaAI 公益站",
    "AgentRouter",
    "AnyRouter",
    "Fate New API",
    "TabiToken",
    "GoRouter",
    "北执半公益站",
    "TokenGate",
    "GemAI（哈基米公益站）",
    "AgentRouter 国内入口",
    "Sulmate 半公益站",
    "PAI 生图公益站",
    "Rinko NAI 生图公益站",
    "Jasperio",
    "ze",
    "SeekAI",
    "一梦五千年",
    "Xingya",
    "Nofx",
    "ArityFlow",
  ],
  // 已失效的站点搬到这里：页面不再渲染，但数据完整保留，万一恢复就把对象移回 entries
  // 并把名字加回 displayOrder。英文文案仍留在 entryTranslations 里，不用来回搬。
  archivedEntries: [
    {
      archivedAt: "2026-08-29",
      archivedReason: "站点已失效，域名无法正常使用；若恢复再移回 entries。",
      publishedAt: "2026-08-15 10:38",
      kind: "公益新站",
      name: "Zynk 公益站",
      summary: "注册后联系群主可领取 200 额度；支持每日签到，签到金额随机，8 月 14 日和 8 月 15 日实测均为 15。",
      details:
        "新站目前暂不稳定，适合作为备用。账号每个月必须使用超过 100 额度，未达到使用要求可能会被删除。",
      registration: "通过邀请链接注册，进入后联系群主领取 200 额度。",
      signupBonus: "联系群主送 200",
      dailyCheckin: "随机；最近两次均为 15",
      experience: "新站暂不稳定，建议先小量使用",
      caveat: "每个月必须使用超过 100 额度，否则可能删号；签到金额为随机值。",
      benefits: ["联系群主送 200", "每日随机签到", "8 月 14 日签到 15", "8 月 15 日签到 15"],
      url: "https://gy.leyanshi.me/sign-up?aff=lorI",
      tone: "notice",
    },
  ],
  entries: [
    {
      publishedAt: "2026-08-28 00:00",
      kind: "公益站 / 少见 GPT 模型",
      name: "BaaaAI 公益站",
      summary: "公益 API 站，提供较少见的 GPT 模型；每日可在控制台申请 20 额度，但需至少调用一次，并发限制为 2。",
      details:
        "通过邀请链接注册后，可在控制台自行申请每日 20 额度。为保持每日权益，需要至少完成一次调用。站内包含较少见的 GPT 模型，具体可用列表以控制台为准。",
      registration: "通过邀请链接注册。",
      dailyCheckin: "每日控制台申请 20（需至少调用一次）",
      models: "少见的 GPT 模型（以控制台为准）",
      experience: "适合作为少见 GPT 模型的补充来源；并发为 2。",
      caveat: "每日额度需在控制台自行申请且要至少调用一次；并发只有 2。模型列表、额度与使用规则可能调整，请以控制台实际显示为准。",
      benefits: ["公益站", "每日申请 20 额度", "需至少调用一次", "并发 2", "少见 GPT 模型"],
      url: "https://baaaai.com/register?aff=MDTFQQRGCR2X",
      tone: "active",
    },
    {
      publishedAt: "2026-08-28 17:39",
      kind: "新站 / 当前开放",
      name: "KKToken",
      summary: "JustWoker 站长的新站，注册送 100 刀、每日签到 20 刀，主打 Claude Opus 4.8 与 Opus 5；注册有 GitHub 限制。",
      details:
        "与 JustWoker 公益站为同一站长。目前已知福利为注册送 100 刀、每日签到 20 刀，可用 Claude Opus 4.8 和 Opus 5。注册需要 GitHub 账号，具体门槛以注册页提示为准。",
      registration: "需要 GitHub 账号，有账号限制，具体门槛以注册页提示为准。",
      signupBonus: "100 刀",
      dailyCheckin: "20 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "新站刚上线，速度与稳定性待观察",
      caveat: "新站上线时间不长，额度、签到与模型规则可能调整；注册有 GitHub 限制，具体门槛以注册页为准。",
      benefits: ["新站", "JustWoker 同站长", "注册送 100 刀", "每日签到 20 刀", "Claude Opus 4.8", "Claude Opus 5", "GitHub 限制"],
      url: "https://kktoken.cc/sign-up?aff=vrZc",
      tone: "active",
    },
    {
      publishedAt: "2026-08-20 18:05",
      kind: "当前开放",
      name: "TabiToken",
      summary: "目前已开放注册，邀请注册额度为 120 刀，每日签到 5-10 刀；注册窗口可能随时关闭，建议尽快尝试。",
      details:
        "主打 Claude Opus 4.8 和 Opus 5，速度快、连接稳定。签到入口：点击右上角个人头像，进入个人资料后签到。",
      registration: "当前开放注册，窗口可能随时关闭，建议尽快尝试。",
      signupBonus: "120 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度快、稳定",
      caveat: "注册窗口可能随时关闭；已注册用户请尽快调用，否则有封号风险。",
      benefits: ["当前开放", "注册送 120 刀", "每日签到 5-10 刀", "个人资料内签到", "已注册请尽快调用"],
      url: "https://tabitoken.com/sign-up?aff=AQDR",
      tone: "active",
    },
    {
      publishedAt: "2026-08-20 10:15",
      kind: "新公益 / 当前可尝试",
      name: "JustWoker 公益站",
      summary: "新公益站，注册赠送 90 刀，支持 Claude；需要注册满 1 年的 GitHub 账号。",
      details:
        "目前已知福利为注册赠送 90 刀、每日签到 20 刀，可使用 Claude 系列模型。注册需要 GitHub 账号，且账号注册时间需满 1 年。",
      registration: "使用注册满 1 年的 GitHub 账号注册。",
      signupBonus: "90 刀",
      dailyCheckin: "20 刀",
      models: "Claude",
      experience: "新公益站，当前信息待持续观察",
      caveat: "GitHub 账号注册年限是当前已知门槛；模型范围、签到规则、倍率和稳定性可能调整，请以站内实际规则为准。",
      benefits: ["新公益站", "注册送 90 刀", "每日签到 20 刀", "Claude", "GitHub 账号满 1 年"],
      url: "https://api.justwoker.icu/sign-up?aff=T5tm",
      tone: "active",
    },
    {
      publishedAt: "2026-08-19 20:26",
      kind: "当前开放",
      name: "GoRouter",
      summary: "目前已开放注册，邀请注册额度为 70 刀，每日签到 5-10 刀；近期稳定性有所下降，注册窗口也可能随时关闭。",
      details:
        "主打 Claude Opus 4.8 和 Opus 5，速度仍然不错，但 2026 年 8 月 29 日起稳定性明显不如此前。签到入口：点击右上角个人头像，进入个人资料后签到。",
      registration: "当前开放注册，窗口可能随时关闭，建议尽快尝试。",
      signupBonus: "70 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度尚可，但近期稳定性下降",
      caveat: "近期稳定性下降，建议留一个备用线路，不要作为唯一依赖；注册窗口可能随时关闭；已注册用户请尽快调用，否则有封号风险。",
      benefits: ["当前开放", "注册送 70 刀", "每日签到 5-10 刀", "个人资料内签到", "已注册请尽快调用", "近期稳定性下降"],
      url: "https://gorouter.app/sign-up?aff=e9NL",
      tone: "active",
    },
    {
      publishedAt: "2026-08-18 17:13",
      kind: "半公益 / 公益池",
      name: "Sulmate 半公益站",
      summary: "公益池全站共享 1x，标称每日共享 1,000 刀；每天签到通常送 10，2026 年 8 月 18 日今日页面显示 800+，但属于免费额度。",
      details:
        "站点分为公益组和 VIP 组：公益组使用全站共享额度，VIP 组支持付费调用。充值升级 VIP 后，可在调用时选择分组；公益池用尽后，切换到 VIP 分组即可继续调用并消耗钱包余额。",
      registration: "通过邀请链接注册；先使用公益组共享额度，需要付费调用时再充值升级 VIP。",
      signupBonus: "公益池共享 1,000 刀/日",
      dailyCheckin: "通常 10；今日显示 800+（免费额度）",
      experience: "公益组 1x；VIP 组 0.15x",
      caveat: "今日 800+ 是页面显示的免费额度，不代表固定签到值；公益池、签到奖励、VIP 价格和分组规则可能调整，请以站内实际说明为准。",
      benefits: ["公益组全站共享", "每日共享 1,000 刀", "签到通常送 10", "VIP 付费调用", "VIP 倍率 0.15x", "公益倍率 1x"],
      url: "https://free.sulmate.cn/sign-up?aff=E4io",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-18 16:00",
      kind: "公益生图 / 限时福利",
      name: "PAI 生图公益站",
      summary: "近乎免费的公益生图站；登录赠送 2,000 积分，2026 年 8 月 18 日注册送 888 限时积分，今日签到实测获得 620 积分。",
      details:
        "提供 GPT Image 系列生图模型，按图片规格扣除积分：gpt-image-2-1k 为 100 积分、gpt-image-2-2k 为 150 积分、gpt-image-2-4k 为 200 积分。签到奖励较多，适合需要批量体验 AI 生图的用户。",
      registration: "通过邀请链接注册并登录；2026 年 8 月 18 日注册另送 888 限时积分。",
      signupBonus: "登录送 2,000；今日注册另送 888",
      dailyCheckin: "620（2026-08-18 实测）",
      models: "gpt-image-2-1k / gpt-image-2-2k / gpt-image-2-4k",
      experience: "积分给得多，单次生图成本较低",
      caveat: "注册送 888 为当日限时积分；签到数额、模型定价和活动规则可能随时调整，请以站内实际显示为准。",
      benefits: ["登录送 2,000", "今日注册另送 888", "签到实测 620", "1K 图 100 积分", "2K 图 150 积分", "4K 图 200 积分"],
      url: "https://pai.zaiduyu.top/#/auth?ref=EA5364BCCDE4",
      tone: "active",
    },
    {
      publishedAt: "2026-08-21 16:15",
      kind: "免费生图 / 轻量对话",
      name: "Jasperio",
      summary: "免费生图站，目前可无限量使用 image2 生成图片，也可无限量使用 GPT-5.5-mini 聊天。",
      details:
        "生成的图片会不定时删除，需要保留的内容请尽快下载。免费资源请按需使用，避免滥用影响站点的持续开放。",
      registration: "直接打开站点体验；未提供额外注册门槛信息。",
      signupBonus: "免费无限量使用",
      dailyCheckin: "无需签到",
      models: "image2 / GPT-5.5-mini",
      experience: "免费生图与轻量聊天，图片需及时保存",
      caveat: "生成图片会不定时删除，请尽快下载；当前免费能力可能调整，请勿滥用。",
      benefits: ["image2 无限量生图", "GPT-5.5-mini 无限量聊天", "无需签到", "图片请尽快下载", "请勿滥用"],
      url: "https://jasperio.xyz:8848/",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-28 00:00",
      kind: "公益生图 / API",
      name: "Rinko NAI 生图公益站",
      summary: "专注 AI 生图的公益站，提供 NAI Diffusion API；每日签到可领 25 代币，设有作品广场。",
      details:
        "与 PAI、Jasperio 的网页文生图方式不同，该站以 API 调用为主，使用 NAI Diffusion 模型。站内提供作品广场，可浏览其他用户公开的生图作品与参考提示词。",
      registration: "通过邀请链接注册。",
      dailyCheckin: "25 代币",
      models: "NAI Diffusion",
      experience: "面向 API 生图，带作品广场供参考",
      caveat: "代币规则、模型能力、API 限制和作品广场内容可能调整，请以站内公告与实际页面为准。",
      benefits: ["公益生图", "API 调用", "NAI Diffusion", "每日签到 25 代币", "作品广场"],
      url: "https://nai.rinko.ai/sign-up?aff=OQhG",
      tone: "active",
    },
    {
      publishedAt: "2026-08-26 00:00",
      kind: "国内入口 / GLM-5.3",
      name: "AgentRouter 国内入口",
      summary: "AgentRouter 国内注册地址；现已支持 GLM-5.3，另有 DeepSeek V4 Flash；Claude 倍率上调，GPT-5.6-sol 倍率下调。",
      details:
        "现已支持 GLM-5.3。注册送 175 刀、每日签到 25 刀。注册要求与 AgentRouter 原入口一致：GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以使用 Linux Do 账号。站长鼓励正常使用，有时会补充消耗额度，也可能给予标注“0.8 折”的 Core 分组；具体奖励和获取机制尚未确认。",
      registration: "国内注册地址；GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号。",
      signupBonus: "175 刀",
      dailyCheckin: "25 刀",
      models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude 系列",
      experience: "模型已恢复正常，速度快且稳定",
      caveat: "Claude 倍率已上调、GPT-5.6-sol 倍率已下调，具体倍率以站内显示为准；签到需退出账号后重新登录才会生效。正常使用奖励机制仍待确认。",
      benefits: ["国内注册地址", "GLM-5.3", "DeepSeek V4 Flash", "GPT-5.6-sol 倍率下调", "Claude 倍率上调", "注册送 175 刀", "每日签到 25 刀", "老号门槛"],
      url: "https://ps.air-outer.com/register?aff=i3Xz",
      tutorialUrl: "https://linux.sb/topic/13130",
      tutorialLabel: "国内无需代理注册 AgentRouter 教程",
      tone: "active",
    },
    {
      publishedAt: "2026-08-26 00:00",
      kind: "GLM-5.3 / 模型更新",
      name: "AgentRouter",
      summary: "现已支持 GLM-5.3，另有 DeepSeek V4 Flash；Claude 倍率上调，GPT-5.6-sol 倍率下调。",
      details:
        "现已支持 GLM-5.3。注册送 175 刀、每日签到 25 刀，速度快且稳定。GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以使用 Linux Do 账号。站长表示正常使用可能获得消耗额度补充或 Core 分组（标注 0.8 折）奖励，具体获取和发放规则尚未确认。",
      registration: "GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号。",
      signupBonus: "175 刀",
      dailyCheckin: "25 刀",
      models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude 系列",
      experience: "模型已恢复正常，速度快且稳定",
      caveat: "Claude 倍率已上调、GPT-5.6-sol 倍率已下调，具体倍率以站内显示为准；签到需退出账号后重新登录才会生效。正常使用奖励机制仍待确认。",
      benefits: ["GLM-5.3", "DeepSeek V4 Flash", "GPT-5.6-sol 倍率下调", "Claude 倍率上调", "注册送 175 刀", "每日签到 25 刀", "老号门槛"],
      url: "https://agentrouter.org/register?aff=i3Xz",
      tone: "active",
    },
    {
      publishedAt: "2026-08-26 00:00",
      kind: "1M 上下文",
      name: "AnyRouter",
      summary: "邀请注册送 100，每天签到 25；GPT-5.6-sol 支持 1M 上下文。",
      details:
        "GPT-5.6-sol 支持 1M 上下文，适合长文本和大上下文任务。",
      registration: "Linux Do 二级账号，或 .edu.cn 教育邮箱注册。",
      signupBonus: "100 刀",
      dailyCheckin: "25 刀",
      models: "GPT-5.6-sol（1M 上下文）",
      experience: "GPT-5.6-sol 支持长上下文",
      caveat: "模型范围、上下文规则和服务状态可能调整，请以站内实际说明为准。",
      benefits: ["注册送 100 刀", "每日签到 25 刀", "GPT-5.6-sol", "1M 上下文"],
      url: "https://anyrouter.top/register?aff=LJPP",
      tone: "active",
    },
    {
      publishedAt: "2026-08-24 00:00",
      kind: "NodeLoc 注册 / 有签到",
      name: "Fate New API",
      summary: "通过 NodeLoc 注册，注册送 150 刀，有每日签到，支持全模型。",
      details:
        "模型覆盖范围较广，适合想集中体验多种模型的用户。站点近期清理过一轮此前注册的账号，老账号可以再走一遍注册链接。",
      registration: "通过 NodeLoc 注册。",
      signupBonus: "150 刀",
      dailyCheckin: "有签到，金额待确认",
      models: "全模型",
      experience: "模型覆盖广，具体可用性以站内状态为准",
      caveat: "近期曾清理一批此前注册的账号；老账号可以再走一遍注册链接。签到金额、模型可用性、倍率和服务规则也可能调整，请以站内实际说明为准。",
      benefits: ["NodeLoc 注册", "注册送 150 刀", "每日签到", "全模型", "老账号可重新走注册链接"],
      url: "https://fatenewapi.xxxxo.bond/sign-up?aff=DW0d",
      tone: "active",
    },
    {
      publishedAt: "2026-08-17 15:56",
      kind: "半公益 / 酒馆推荐",
      name: "GemAI（哈基米公益站）",
      summary: "邀请注册送 200，每日签到奖励数额可观，2026 年 8 月 17 日实测签到为 13；采用按次计费，不充值也有不错的体验。",
      details:
        "提供 Gemini 新模型和 Claude 全模型，按次计费的方式比较适合酒馆用户。属于半公益站，可先使用注册赠送与签到额度体验。",
      registration: "通过邀请链接注册，邀请注册即送 200。",
      signupBonus: "200 额度",
      dailyCheckin: "13（2026-08-17 实测）",
      models: "Gemini 新模型 / Claude 全模型",
      experience: "按次计费，不充值体验也不错；推荐酒馆用户",
      caveat: "半公益站；签到金额可能浮动，模型范围和计费规则也可能调整，请以站内公告为准。",
      benefits: ["邀请注册送 200", "签到实测 13", "按次计费", "Gemini 新模型", "Claude 全模型", "推荐酒馆用户"],
      url: "https://api.gemai.cc/sign-up?aff=8Ouk3uT6",
      tone: "active",
    },
    {
      publishedAt: "2026-08-24 00:00",
      kind: "半公益站",
      name: "北执半公益站",
      summary: "半公益站，提供免费的国产模型；签到额度较多，并支持 Gemini 新模型和 Claude。",
      details:
        "提供统一 OpenAI 格式接口，无需为不同模型编写多套代码，可一键切换模型。",
      registration: "仅支持主流邮箱注册，例如 QQ 邮箱。",
      signupBonus: "免费国产模型",
      dailyCheckin: "额度较多",
      models: "免费国产模型 / Gemini 新模型 / Claude",
      experience: "统一 OpenAI 格式接口，一键切换模型",
      caveat: "每分钟最多 15 次请求，不适合 Agent 或自动化高频任务；站点由个人维护，不提供商业 SLA，请勿用于生产环境。",
      benefits: ["免费国产模型", "签到额度较多", "Gemini 新模型", "Claude", "统一 OpenAI 格式接口", "一键切换模型"],
      url: "https://beizhi.sylu.cc/sign-up?aff=hk5Q",
      tone: "active",
    },
    {
      publishedAt: "2026-08-24 00:00",
      kind: "付费站 / 有签到",
      name: "Xingya",
      summary: "付费代币站，注册可领取试吃 50 芽点，邀请好友注册并加入 QQ 群再送 80 芽点；每日签到可领取 20-50 芽点，但现在必须用签到码。",
      details:
        "采用代币模式，充值比例 1:100，按次计费，约 4 代币/请求，适合酒馆用户。提供小克和 Gemini 新模型。签到方式已改：需要先加入 QQ 群，在群精华里找到当期签到码，再用签到码完成签到。优先级已下调，但因保留签到福利，仍放在暂停注册站点之前。",
      registration: "通过邀请链接注册；邀请好友注册并加入 QQ 群后，可再领取 80 芽点。想签到也必须先进 QQ 群。",
      signupBonus: "试吃 50 芽点",
      dailyCheckin: "20-50 芽点（需群精华里的签到码）",
      models: "小克 / Gemini 新模型",
      experience: "付费代币模式，约 4 代币/请求，适合酒馆用户",
      caveat: "签到现在依赖 QQ 群精华里的签到码，不进群就签不了，签到码也可能随时更换。这是付费站；充值比例、代币消耗和新用户福利可能调整，请以站内实际规则为准。",
      benefits: ["付费站", "试吃 50 芽点", "邀请注册并入 QQ 群再送 80", "每日签到 20-50", "签到需群精华签到码", "充值比例 1:100", "约 4 代币/请求", "小克", "Gemini 新模型"],
      url: "https://xingya.site/sign-up?aff=SV10",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-28 00:00",
      kind: "换型 sub2api / 需重新注册",
      name: "ze",
      summary: "站长已把站点类型换成 sub2api，原有额度与签到数据不再准确；老账号需要通过新的注册链接重新注册。目前注册送 10,000，站长可能改回去。",
      details:
        "站点域名为 ai.kscsnkli.site，此前在本合集里记作 Kscsnkli AI，现按站点自己的名称显示为 ze。换型后，此前记录的注册送 20,000,000 额度与每日签到 20,000 已不适用，账号里的额度数据会显示不正确。当前注册赠送为 10,000，这个数额可能随时被改回原来的设置，以站内实际显示为准。站点此前以国产模型为主，GPT、Claude 和 DeepSeek 限量供应；使用模型前仍建议先在游乐场确认模型是否正常。",
      registration: "已换型为 sub2api，需通过新的邀请链接重新注册；老账号数据不准。",
      signupBonus: "10,000（可能调整）",
      dailyCheckin: "换型后待核实",
      models: "国产模型为主 / GPT / Claude / DeepSeek（待复核）",
      experience: "换型 sub2api 后额度数据不准，重新注册后再看实际情况",
      caveat: "站点类型已换成 sub2api，此前的额度和签到数据都不能参考，需要重新注册；当前注册送 10,000 但可能被改回去，换型后的模型范围与计费规则也尚未核实。",
      benefits: ["已换型 sub2api", "需重新注册", "注册送 10,000（可能调整）", "原额度数据不再准确", "国产模型为主（待复核）", "游乐场状态检查"],
      url: "https://ai.kscsnkli.site/register?aff=X9LDUXSBPHYE",
      tone: "active",
    },
    {
      publishedAt: "2026-08-13 22:12",
      kind: "谨慎使用",
      name: "SeekAI",
      summary: "额度给得大方，注册送 200、每天签到 20；目前仅支持 DeepSeek，疑似网页反代，工具调用有些问题。",
      details:
        "目前仅能使用 DeepSeek，实际体验不太稳定，也存在降智。疑似采用网页反代，工具调用可能无法正常工作，更适合普通对话或备用。",
      registration: "GitHub 账号注册，新号即可。",
      signupBonus: "200 刀",
      dailyCheckin: "20 刀",
      models: "DeepSeek",
      experience: "目前仅支持 DeepSeek；疑似网页反代，工具调用有问题",
      caveat: "目前仅支持 DeepSeek；工具调用可能异常，稳定性和输出质量也有波动，建议仅作备用。",
      benefits: ["注册送 200 刀", "每日签到 20 刀", "仅支持 DeepSeek", "疑似网页反代", "工具调用异常"],
      url: "https://seekai.cc/sign-up?aff=NzMk",
      tone: "caution",
    },
    {
      publishedAt: "2026-08-17 16:03",
      kind: "限量开放",
      name: "一梦五千年",
      summary: "新放出 31 个注册名额，2026 年 8 月 17 日 16:03 核对时注册开关已开启，可以尝试注册；剩余资格以页面实际结果为准。",
      details:
        "支持 QQ、163 或 Outlook 邮箱注册，注册奖励为 10 刀，GPT-5.6-sol 与 GPT-5.6-luna 为 1x 倍率，也提供其他国产模型。",
      registration: "限量开放 31 个名额；当前注册开关已开启，剩余资格以注册页面为准。",
      signupBonus: "10 刀",
      dailyCheckin: "随机奖励",
      models: "GPT-5.6-sol / GPT-5.6-luna / 国产模型",
      experience: "2026-08-17 16:03 核对时注册开关已开启，可尝试注册",
      caveat: "共放出 31 个名额，公开状态接口虽显示注册已开启，但不返回剩余数量；不要批量测活，可能会被拉黑 IP。",
      benefits: ["限量开放 31 个名额", "注册送 10 刀", "1x 倍率", "随机签到奖励"],
      url: "https://fapi.leileihog.top/sign-up?aff=ZR02",
      tone: "limited",
    },
    {
      publishedAt: "2026-08-26 00:00",
      kind: "模型恢复 / 使用前检查",
      name: "TokenGate",
      summary: "注册送 50 额度，每日签到 15 额度；DeepSeek V4 Pro 和 Claude Opus 5 当前已恢复可用。",
      details:
        "模型数量多且规格较高，但状态可能随时变化。建议每次使用前打开模型状态页自行检查可用性，再选择模型调用。",
      registration: "使用 GitHub 注册；GitHub 主账号邮箱需为 Google 或 Microsoft 邮箱，账号注册时间需超过 14 天。注册后还需通过 Discord 认证，似乎必须加入社区。",
      signupBonus: "50 额度",
      dailyCheckin: "15 额度",
      models: "DeepSeek V4 Pro / Claude Opus 5 / 其他高级模型",
      experience: "DeepSeek V4 Pro 与 Claude Opus 5 当前可用；状态可能变化",
      caveat: "使用前请先打开模型状态页检查可用性；GitHub 邮箱、账号年龄和 Discord 社区认证均有门槛。",
      benefits: ["注册送 50", "每日签到 15", "DeepSeek V4 Pro 当前可用", "Claude Opus 5 当前可用", "模型状态页", "需 Discord 认证"],
      url: "https://tokengate-cqt9ivzs.manus.space/sign-up?aff=ep0v",
      tutorialUrl: "https://discord.gg/fhQKyxnsC",
      tutorialLabel: "加入 TokenGate Discord 社区并完成认证",
      statusUrl: "https://tokengate-cqt9ivzs.manus.space/dashboard/models",
      statusLabel: "打开 TokenGate 模型状态页检查可用性",
      tone: "active",
    },
    {
      publishedAt: "2026-08-28 00:00",
      kind: "付费站 / 可用",
      name: "Nofx",
      summary: "付费站；注册链接可得 20 刀，日签到 5 刀（上限 50），GPT-5.6-sol 0.6x。",
      details:
        "该站为付费服务但可用。注册链接可领 20 刀，日签到 5 刀（当日上限 50），GPT-5.6-sol 显示倍率 0.6x。",
      registration: "使用邀请注册链接注册。",
      signupBonus: "20 刀",
      dailyCheckin: "5 刀（上限 50）",
      models: "GPT-5.6-sol",
      experience: "付费站，当前可用；建议先实测后再大规模使用",
      caveat: "付费站；请以站内公告和实际调用为准，签到上限与倍率可能调整。",
      benefits: ["付费站", "注册链接 ref=PWF8Z79Q", "注册送 20 刀", "每日签到 5（签到上限 50）", "GPT-5.6-sol 0.6x"],
      url: "https://nofx.one/zh-CN/sign-in?ref=PWF8Z79Q",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-19 23:14",
      kind: "暂停注册",
      name: "ArityFlow",
      summary: "目前已关闭注册，已移到列表后部；恢复开放后再更新。此前支持 QQ 注册，邀请码注册有额度赠送。",
      details:
        "站点主要面向酒馆用户，采用按次计费，每日签到最高 50，并提供小克和免费模型。除 coding 分组外，站方会严格检查编程行为，违规可能导致封号。",
      registration: "目前暂停注册，等待重新开放。",
      signupBonus: "有赠送，数额待确认",
      dailyCheckin: "最高 50",
      models: "小克 / 免费模型",
      experience: "目前已关闭注册；按次计费，主要面向酒馆用户",
      caveat: "注册已关闭；恢复时间未知。严查除 coding 分组以外的编程行为，违规可能封号。",
      benefits: ["暂停注册", "原支持 QQ 注册", "邀请码赠送额度", "每日签到最高 50", "按次计费", "小克", "免费模型"],
      url: "https://www.arityflow.top/sign-up?aff=PTiI",
      tone: "limited",
    },
  ],
};

const pageCopy = {
  "zh-CN": {
    brand: siteConfig.brand,
    eyebrow: siteConfig.eyebrow,
    title: siteConfig.title,
    intro: siteConfig.intro,
    nav: "精选站点 · 点击直达",
    updateStatus: "持续更新中",
    directoryLabel: "站点汇总",
    siteCountLabel: "当前收录",
    sectionEyebrow: "HANDPICKED",
    feedTitle: "站点推荐",
    sectionNote: "整张卡片均可点击",
    disclaimer: siteConfig.disclaimer,
    documentTitle: "公益中转分享 | 站点与福利导航",
    metaDescription: "公益中转分享，集中整理注册方式、活动福利、模型信息与风险提示。",
    lastUpdated: "更新于",
    signupBonus: "注册赠送",
    dailyCheckin: "每日签到",
    registration: "注册方式",
    models: "可用模型",
    experience: "速度与稳定性",
    caution: "注意",
    benefits: "福利",
    noBenefits: "暂无福利说明",
    publishedAt: "发布时间",
    openLink: "打开 {name} 的邀请链接",
    githubLabel: "打开 GitHub 主页",
    githubTitle: "GitHub 主页",
    backToTop: "返回页面顶部",
    languageLabel: "语言选择",
    localeSwitched: "已切换为中文，共 {count} 个站点。",
  },
  en: {
    brand: "Public AI API Directory",
    eyebrow: "PUBLIC BENEFIT DIRECTORY",
    title: "Public AI API Directory",
    intro:
      "Tested AI API services, registration requirements, current bonuses, and risk notes in one place. I update service status whenever possible.",
    nav: "Curated services · Direct links",
    updateStatus: "Actively maintained",
    directoryLabel: "Service directory",
    siteCountLabel: "Services listed",
    sectionEyebrow: "HANDPICKED",
    feedTitle: "Recommended services",
    sectionNote: "Click anywhere on a card",
    disclaimer:
      "Bonuses, check-in rewards, and model availability are for reference only. Rules may change at any time; verify details on each service before use.",
    documentTitle: "Public AI API Directory | Services and bonuses",
    metaDescription:
      "A maintained directory of AI API services with registration requirements, bonuses, model availability, and risk notes.",
    lastUpdated: "Updated",
    signupBonus: "Sign-up bonus",
    dailyCheckin: "Daily check-in",
    registration: "Registration",
    models: "Models",
    experience: "Experience",
    caution: "Caution",
    benefits: "Benefits",
    noBenefits: "No benefit details",
    publishedAt: "Published",
    openLink: "Open the {name} referral link",
    githubLabel: "Open GitHub profile",
    githubTitle: "GitHub profile",
    backToTop: "Back to top",
    languageLabel: "Language",
    localeSwitched: "Switched to English. {count} services listed.",
  },
};

const entryTranslations = {
  "BaaaAI 公益站": {
    kind: "Public service / uncommon GPT models",
    name: "BaaaAI Public Service",
    summary:
      "A public API service with less common GPT models. Claim 20 credits per day in the console, make at least one call to keep the daily benefit, and note the concurrency limit of 2.",
    details:
      "After registering through the referral link, claim the daily 20 credits yourself in the console. At least one request is required to maintain the daily benefit. The console is the source of truth for the current uncommon GPT-model lineup.",
    registration: "Register through the referral link.",
    dailyCheckin: "Claim 20 daily in the console (at least one call required)",
    models: "Uncommon GPT models (see the console for the current list)",
    experience: "A useful supplementary source for uncommon GPT models; concurrency is limited to 2.",
    caveat: "Claim the daily credits in the console and make at least one call. Concurrency is two. Model availability, credit amounts, and usage rules may change.",
    benefits: ["Public service", "Claim 20 credits daily", "At least one call required", "Concurrency 2", "Uncommon GPT models"],
  },
  KKToken: {
    kind: "New service / currently open",
    summary:
      "A new service from the operator behind JustWoker. Sign-up grants $100 and daily check-ins add $20, with Claude Opus 4.8 and Opus 5 as the main models; registration has a GitHub requirement.",
    details:
      "Run by the same operator as JustWoker Public Service. Known bonuses are $100 on sign-up and $20 per daily check-in, with Claude Opus 4.8 and Opus 5 available. A GitHub account is required; check the registration page for the exact requirement.",
    registration: "A GitHub account is required; the exact restriction is shown on the registration page.",
    signupBonus: "$100 credit",
    dailyCheckin: "$20",
    models: "Claude Opus 4.8 / Opus 5",
    experience: "Newly launched; speed and stability still unproven",
    caveat: "The service launched recently, so credit, check-in, and model rules may change. Registration has a GitHub requirement — confirm it on the registration page.",
    benefits: ["New service", "Same operator as JustWoker", "$100 sign-up credit", "$20 daily check-in", "Claude Opus 4.8", "Claude Opus 5", "GitHub requirement"],
  },
  "JustWoker 公益站": {
    kind: "New public service / currently tryable",
    name: "JustWoker Public Service",
    summary:
      "A new public service. New registrations receive $90 and Claude is available. Registration requires a GitHub account that is at least one year old.",
    details:
      "The currently reported offer is $90 in sign-up credit plus $20 from daily check-ins, with access to Claude models. A GitHub account created at least one year ago is required.",
    registration: "Register with a GitHub account that is at least one year old.",
    signupBonus: "$90 credit",
    dailyCheckin: "$20",
    models: "Claude",
    experience: "New public service; status is still being observed",
    caveat: "The GitHub account age requirement is the currently known gate. Model coverage, check-in rules, rates, and stability may change; verify the current service rules.",
    benefits: ["New public service", "$90 sign-up credit", "$20 daily check-in", "Claude", "GitHub account at least one year old"],
  },
  "Sulmate 半公益站": {
    kind: "Freemium / shared public pool",
    name: "Sulmate Freemium Service",
    summary:
      "The public pool is shared site-wide at a 1x rate and is advertised as 1,000 dollars of shared quota per day. Daily check-ins usually grant 10, while the page showed 800+ on August 18, 2026; that amount is free quota, not a fixed check-in reward.",
    details:
      "The service has a public pool and a paid VIP group. The public group draws from shared quota. After topping up and upgrading to VIP, choose the group when making a call; when the public pool is exhausted, switch to VIP to continue using wallet balance.",
    registration: "Register through the referral link. Start with the shared public group and top up only when paid VIP calls are needed.",
    signupBonus: "1,000 dollars/day shared public pool",
    dailyCheckin: "Usually 10; page showed 800+ today (free quota)",
    experience: "Public group 1x; VIP group 0.15x",
    caveat: "The 800+ figure is today's displayed free quota, not a fixed check-in amount. Shared quota, check-in rewards, VIP pricing, and group rules may change; verify the current notices.",
    benefits: ["Shared public group", "1,000 dollars/day shared quota", "Usually 10 check-in", "Paid VIP calls", "VIP 0.15x rate", "Public 1x rate"],
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
  "AgentRouter 国内入口": {
    kind: "Mainland China access / GLM-5.3",
    name: "AgentRouter China access",
    summary:
      "A mainland China registration link for AgentRouter. GLM-5.3 is now available alongside DeepSeek V4 Flash; Claude rates increased while GPT-5.6-sol rates decreased.",
    details:
      "GLM-5.3 is now available. New accounts receive $175 and daily check-ins add $25. Registration requirements match the original AgentRouter link: a GitHub account created before December 2025, or a Linux Do account. Normal use may bring consumed-credit top-ups or Core group access, but the exact rules are unconfirmed.",
    registration: "Mainland China registration link; GitHub account created before December 2025, or a Linux Do account.",
    signupBonus: "$175 credit",
    dailyCheckin: "$25",
    models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude models",
    experience: "Models restored and currently stable",
    caveat: "Claude rates increased and GPT-5.6-sol rates decreased; verify exact rates on the service. Sign out and back in for check-in credit to take effect. The normal-use reward mechanism remains unconfirmed.",
    benefits: ["Mainland China registration", "GLM-5.3", "DeepSeek V4 Flash", "Lower GPT-5.6-sol rate", "Higher Claude rates", "$175 sign-up credit", "$25 daily check-in", "Older account required"],
    tutorialLabel: "AgentRouter registration guide for mainland China (no proxy required)",
  },
  AgentRouter: {
    kind: "GLM-5.3 / model update",
    summary:
      "GLM-5.3 is now available alongside DeepSeek V4 Flash. Claude rates increased, while GPT-5.6-sol rates decreased.",
    details:
      "GLM-5.3 is now available. New accounts receive $175 and daily check-ins add $25. The service is fast and stable. It requires a GitHub account created before December 2025, or a Linux Do account. Normal use may bring credit top-ups or Core group access, but the exact rules are unconfirmed.",
    registration: "GitHub account created before December 2025, or a Linux Do account.",
    signupBonus: "$175 credit",
    dailyCheckin: "$25",
    models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude models",
    experience: "Models restored and currently stable",
    caveat: "Claude rates increased and GPT-5.6-sol rates decreased; verify exact rates on the service. Sign out and back in for check-in credit to take effect. The normal-use reward mechanism remains unconfirmed.",
    benefits: ["GLM-5.3", "DeepSeek V4 Flash", "Lower GPT-5.6-sol rate", "Higher Claude rates", "$175 sign-up credit", "$25 daily check-in", "Older account required"],
  },
  AnyRouter: {
    kind: "1M context",
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
    kind: "NodeLoc registration / check-in",
    summary:
      "Register through NodeLoc to receive $150. Daily check-ins are available, and the service advertises access to all models.",
    details:
      "The model range is broad and may suit users who want to try multiple models in one place. The service recently removed a batch of previously registered accounts, so existing users can go through the sign-up link again.",
    registration: "Register through NodeLoc.",
    signupBonus: "$150 credit",
    dailyCheckin: "Available; amount unconfirmed",
    models: "All models",
    experience: "Broad model coverage; verify live availability on the service",
    caveat: "A batch of previously registered accounts was recently removed; existing users can go through the sign-up link again. Check-in amounts, model availability, rates, and service rules may also change.",
    benefits: ["NodeLoc registration", "$150 sign-up credit", "Daily check-in", "All models", "Existing users can use the sign-up link again"],
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
    kind: "Registration open",
    summary:
      "Registration is currently open. Referral registration grants $120, with $5-10 from daily check-ins. The window may close at any time, so try it soon.",
    details:
      "Focused on Claude Opus 4.8 and Opus 5, with fast and stable connections. To check in, open the profile photo in the top-right and go to Profile.",
    registration: "Registration is currently open and may close at any time; try it soon.",
    signupBonus: "$120 credit",
    dailyCheckin: "$5-10",
    models: "Claude Opus 4.8 / Opus 5",
    experience: "Fast and stable",
    caveat: "The registration window may close at any time. Make an API request soon after registration or the account may be suspended.",
    benefits: ["Registration open", "$120 sign-up credit", "$5-10 daily check-in", "Check in from Profile", "Use soon after registration"],
  },
  GoRouter: {
    kind: "Registration open",
    summary:
      "Registration is currently open. Referral registration grants $70, with $5-10 from daily check-ins. Reliability has declined recently, and the window may close at any time.",
    details:
      "Focused on Claude Opus 4.8 and Opus 5. Speed is still good, but reliability has been noticeably worse since August 29, 2026. To check in, open the profile photo in the top-right and go to Profile.",
    registration: "Registration is currently open and may close at any time; try it soon.",
    signupBonus: "$70 credit",
    dailyCheckin: "$5-10",
    models: "Claude Opus 4.8 / Opus 5",
    experience: "Decent speed, but reliability has declined recently",
    caveat: "Reliability has declined recently, so keep a backup route rather than relying on it alone. The registration window may close at any time, and you should make an API request soon after registration or the account may be suspended.",
    benefits: ["Registration open", "$70 sign-up credit", "$5-10 daily check-in", "Check in from Profile", "Use soon after registration", "Reliability declining"],
  },
  "北执半公益站": {
    kind: "Freemium service",
    name: "Beizhi Freemium Service",
    summary:
      "A freemium service with free Chinese models, generous check-in credit, and access to newer Gemini and Claude models.",
    details:
      "Provides a unified OpenAI-compatible API, so you can switch models without writing separate integrations.",
    registration: "Registration supports mainstream email providers, such as QQ Mail.",
    signupBonus: "Free Chinese models",
    dailyCheckin: "Generous credit",
    models: "Free Chinese models / newer Gemini models / Claude",
    experience: "Unified OpenAI-compatible API with one-click model switching",
    caveat: "Limited to 15 requests per minute, so it is not suitable for agents or high-frequency automation. It is personally maintained without a commercial SLA and should not be used in production.",
    benefits: ["Free Chinese models", "Generous check-in credit", "Newer Gemini models", "Claude", "Unified OpenAI-compatible API", "One-click model switching"],
  },
  Xingya: {
    kind: "Paid service / check-in",
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
    summary:
      "Registration is currently closed and this entry has been moved to the back of the list. It previously supported QQ registration and referral credit; reopen timing is unknown.",
    details:
      "Primarily aimed at SillyTavern users with per-request billing. Daily check-ins can reach 50, with Claude and free models available. Programming outside the coding group is strictly monitored and may lead to suspension.",
    registration: "Registration is currently paused; wait for a reopening announcement.",
    signupBonus: "Available; amount unconfirmed",
    dailyCheckin: "Up to 50",
    models: "Claude / free models",
    experience: "Registration closed; per-request billing, mainly for SillyTavern users",
    caveat: "Registration is closed and reopening timing is unknown. Programming outside the coding group is strictly monitored and may lead to account suspension.",
    benefits: ["Registration paused", "Previously supported QQ", "Referral bonus", "Daily check-in up to 50", "Per-request billing", "Claude", "Free models"],
  },
  ze: {
    kind: "Switched to sub2api / re-registration needed",
    summary:
      "The operator switched the service over to sub2api, so the old credit and check-in figures no longer hold. Existing accounts need to register again through the new link. Sign-up currently grants 10,000 credits, which the operator may revert.",
    details:
      "The service runs at ai.kscsnkli.site and was previously listed here as Kscsnkli AI; it is now shown as ze, the name the site uses itself. After the switch, the previously recorded 20,000,000 sign-up credits and 20,000 daily check-in no longer apply, and the credit balance shown in an account is inaccurate. Sign-up currently grants 10,000 credits, but that amount may be reverted at any time, so treat the in-site value as authoritative. The service previously focused on Chinese models with limited GPT, Claude, and DeepSeek availability; it is still worth checking a model in the Playground before making requests.",
    registration: "Now running sub2api; register again through the new referral link, as existing accounts show incorrect data.",
    signupBonus: "10,000 (may change)",
    dailyCheckin: "To be confirmed after the switch",
    models: "Chinese models / GPT / Claude / DeepSeek (to be re-checked)",
    experience: "Credit data is inaccurate after the sub2api switch; re-register before judging it",
    caveat: "The service now runs on sub2api. Earlier credit and check-in figures cannot be relied on and re-registration is required. The current 10,000 sign-up bonus may be reverted, and the post-switch model lineup and billing rules have not been verified.",
    benefits: ["Switched to sub2api", "Re-registration needed", "10,000 sign-up credits (may change)", "Old credit data unreliable", "Chinese-model focus (to be re-checked)", "Playground status checks"],
  },
  SeekAI: {
    kind: "Use with caution",
    summary:
      "Generous credits: $200 on registration and $20 from daily check-ins. DeepSeek is currently the only available model; the service may use a web-proxy backend and tool calls can fail.",
    details:
      "Only DeepSeek is currently available. Reliability and output quality fluctuate and may be degraded. Better suited to basic chat or backup use.",
    registration: "Register with a GitHub account; new accounts are accepted.",
    signupBonus: "$200 credit",
    dailyCheckin: "$20",
    models: "DeepSeek only",
    experience: "DeepSeek only; possible web proxy and tool-calling issues",
    caveat: "DeepSeek is currently the only available model. Tool calls may fail, and stability and output quality can fluctuate. Use as a backup only.",
    benefits: ["$200 sign-up credit", "$20 daily check-in", "DeepSeek only", "Possible web proxy", "Tool-calling issues"],
  },
  Nofx: {
    kind: "Paid service / usable",
    name: "Nofx",
    summary: "Paid service: $20 signup credit. Daily check-in is $5 with a $50 daily max. GPT-5.6-sol is available at 0.6x.",
    details:
      "This is a paid service but currently usable. New users receive $20 on signup, daily check-in earns $5 with a $50 cap, and GPT-5.6-sol is listed at 0.6x.",
    registration: "Register via referral link.",
    signupBonus: "$20 credit",
    dailyCheckin: "$5 (daily cap $50)",
    models: "GPT-5.6-sol",
    experience: "Paid service, currently usable; test availability before relying heavily",
    caveat: "This is a paid service. Please verify check-in cap and multiplier in the latest site notices.",
    benefits: ["Paid service", "Referral link ref=PWF8Z79Q", "$20 signup credit", "$5 daily check-in", "Daily cap $50", "GPT-5.6-sol 0.6x"],
  },

  "一梦五千年": {
    kind: "Limited registration",
    name: "Yimeng 5000",
    summary:
      "A batch of 31 registration slots has been released. At 16:03 on August 17, 2026, the public registration switch was enabled, so you can try registering; remaining eligibility depends on the registration page.",
    details:
      "Supports QQ, 163, or Outlook email registration. New accounts receive $10, with GPT-5.6-sol and GPT-5.6-luna at a 1x rate, plus additional Chinese models.",
    registration: "Limited batch of 31 slots. The registration switch is currently enabled, but use the page to confirm whether any slots remain.",
    signupBonus: "$10",
    dailyCheckin: "Random reward",
    models: "GPT-5.6-sol / GPT-5.6-luna / Chinese models",
    experience: "Registration switch was enabled at 16:03 on Aug 17, 2026",
    caveat: "Only 31 slots were released. The public status endpoint shows registration enabled but does not return a remaining count. Do not bulk-probe, as your IP may be blocked.",
    benefits: ["31 limited slots", "$10 sign-up credit", "1x rate", "Random check-in reward"],
  },
  TokenGate: {
    kind: "Models restored / check before use",
    summary:
      "New accounts receive 50 credits and daily check-ins add 15. DeepSeek V4 Pro and Claude Opus 5 are currently available again.",
    details:
      "The service lists many advanced models, but status can change at any time. Open the model-status page before each use and confirm availability before selecting a model.",
    registration: "Register with GitHub. The GitHub account's primary email must be from Google or Microsoft, and the account must be more than 14 days old. Discord verification is required after registration, and joining the community appears mandatory.",
    signupBonus: "50 credits",
    dailyCheckin: "15 credits",
    models: "DeepSeek V4 Pro / Claude Opus 5 / other advanced models",
    experience: "DeepSeek V4 Pro and Claude Opus 5 are currently available; status may change",
    caveat: "Check the model-status page before use. GitHub email, account age, and Discord community verification requirements all apply.",
    benefits: ["50 sign-up credits", "15 daily check-in credits", "DeepSeek V4 Pro currently available", "Claude Opus 5 currently available", "Model-status page", "Discord verification required"],
    tutorialLabel: "Join the TokenGate Discord community and complete verification",
    statusLabel: "Open the TokenGate model-status page and check availability",
  },
};

const toneLabels = {
  "zh-CN": {
    active: "推荐",
    limited: "限时",
    notice: "新收录",
    caution: "谨慎",
  },
  en: {
    active: "Recommended",
    limited: "Limited",
    notice: "New",
    caution: "Caution",
  },
};

const defaultLocale = "zh-CN";
const supportedLocales = new Set([defaultLocale, "en"]);
let currentLocale = defaultLocale;

const getStoredLocale = () => {
  try {
    const storedLocale = window.localStorage.getItem("directory-language");
    return supportedLocales.has(storedLocale) ? storedLocale : null;
  } catch {
    return null;
  }
};

const storeLocale = (locale) => {
  try {
    window.localStorage.setItem("directory-language", locale);
  } catch {
    // Language switching still works when browser storage is unavailable.
  }
};

const resolveLocale = () => {
  const requestedLocale = new URLSearchParams(window.location.search).get("lang");
  if (requestedLocale === "en") return "en";
  if (requestedLocale === "zh" || requestedLocale === defaultLocale) return defaultLocale;
  return getStoredLocale() || defaultLocale;
};

const updateLocaleInUrl = (locale) => {
  const url = new URL(window.location.href);
  if (locale === defaultLocale) {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", locale);
  }
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
};

const localizeEntry = (entry) =>
  currentLocale === "en" && entryTranslations[entry.name]
    ? { ...entry, ...entryTranslations[entry.name] }
    : entry;

const escapeHtml = (value) =>
  String(value).replace(/[&<>'"]/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
    return entities[character];
  });

// 链接非法时返回 null，由调用方决定不渲染链接，避免把用户送到无关站点。
const safeHttpUrl = (value) => {
  try {
    const url = new URL(value);
    if (url.protocol === "https:" || url.protocol === "http:") return url.href;
  } catch {
    // 落到下面的告警分支。
  }
  console.warn("[directory] 跳过非法链接：", value);
  return null;
};

const parsePublishedAt = (publishedAt) => new Date(String(publishedAt).replace(" ", "T"));

const formatPublishedAt = (publishedAt) => {
  const parsed = parsePublishedAt(publishedAt);
  if (Number.isNaN(parsed.getTime())) return { date: publishedAt, time: "" };
  const dateLocale = currentLocale === "en" ? "en-US" : "zh-CN";
  return {
    date: new Intl.DateTimeFormat(dateLocale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(parsed),
    time: new Intl.DateTimeFormat(dateLocale, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(parsed),
  };
};

const applyText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const getBenefits = (entry) =>
  Array.isArray(entry.benefits) ? entry.benefits.filter(Boolean).map(String) : [];

// 字段缺失时整行不渲染，方便按站点情况增减信息。
const infoRow = (icon, label, value) =>
  value
    ? `<div class="entry-info-row">
              <span class="entry-info-label"><i data-lucide="${icon}" aria-hidden="true"></i>${escapeHtml(label)}</span>
              <p class="registration-text">${escapeHtml(value)}</p>
            </div>`
    : "";

const quotaCell = (label, value) =>
  value
    ? `<div class="quota-cell">
              <span class="quota-label">${escapeHtml(label)}</span>
              <strong class="quota-value">${escapeHtml(value)}</strong>
            </div>`
    : "";

const renderEntry = (sourceEntry) => {
  const copy = pageCopy[currentLocale];
  const entry = localizeEntry(sourceEntry);
  const localizedTones = toneLabels[currentLocale];
  const tone = localizedTones[entry.tone] ? entry.tone : "active";
  const href = safeHttpUrl(entry.url);
  const safeName = escapeHtml(entry.name);
  const safeAnalyticsName = escapeHtml(sourceEntry.name);
  const datetime = escapeHtml(String(entry.publishedAt).replace(" ", "T"));
  const publishedAt = formatPublishedAt(entry.publishedAt);
  const benefits = getBenefits(entry);
  const benefitTags = benefits.length
    ? benefits.map((benefit) => `<li>${escapeHtml(benefit)}</li>`).join("")
    : `<li>${escapeHtml(copy.noBenefits)}</li>`;
  const openLinkLabel = escapeHtml(copy.openLink.replace("{name}", entry.name));
  const resourceLinks = [
    { url: entry.tutorialUrl, label: entry.tutorialLabel, icon: "book-open", event: "教程" },
    { url: entry.statusUrl, label: entry.statusLabel, icon: "activity", event: "模型状态" },
  ]
    .filter((resource) => resource.url && resource.label)
    .map((resource) => ({ ...resource, href: safeHttpUrl(resource.url) }))
    .filter((resource) => resource.href)
    .map(
      (resource) => `<a class="entry-resource-link" href="${escapeHtml(resource.href)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(resource.label)}" data-umami-event="打开 ${safeAnalyticsName} ${escapeHtml(resource.event)}">
          <span><i data-lucide="${resource.icon}" aria-hidden="true"></i>${escapeHtml(resource.label)}</span>
          <i data-lucide="arrow-up-right" aria-hidden="true"></i>
        </a>`,
    )
    .join("");

  // 链接非法时降级成不可点击的卡片，信息照常展示。
  const cardOpenTag = href
    ? `<a class="feed-card" href="${escapeHtml(href)}" target="_blank" rel="noreferrer" aria-label="${openLinkLabel}" data-umami-event="打开 ${safeAnalyticsName}">`
    : `<div class="feed-card" data-link-missing="true">`;
  const cardCloseTag = href ? "</a>" : "</div>";
  const cardArrow = href
    ? `<span class="entry-arrow" aria-hidden="true"><i data-lucide="arrow-up-right"></i></span>`
    : "";

  return `
    <article class="feed-item" data-tone="${tone}">
      <div class="feed-meta">
        <time datetime="${datetime}" aria-label="${escapeHtml(copy.publishedAt)} ${escapeHtml(entry.publishedAt)}">
          <span>${escapeHtml(publishedAt.date)}</span>
          <span>${escapeHtml(publishedAt.time)}</span>
        </time>
      </div>
      ${cardOpenTag}
        <div class="entry-content">
          <p class="entry-kind">${escapeHtml(entry.kind)} / ${escapeHtml(localizedTones[tone])}</p>
          <h3>${safeName}</h3>
          <p class="entry-description">${escapeHtml(entry.summary)}</p>
          <p class="entry-details">${escapeHtml(entry.details)}</p>
          <div class="entry-quota">
            ${quotaCell(copy.signupBonus, entry.signupBonus)}
            ${quotaCell(copy.dailyCheckin, entry.dailyCheckin)}
          </div>
          <div class="entry-info">
            ${infoRow("user-round-plus", copy.registration, entry.registration)}
            ${infoRow("sparkles", copy.models, entry.models)}
            ${infoRow("gauge", copy.experience, entry.experience)}
            ${infoRow("triangle-alert", copy.caution, entry.caveat)}
            <div class="entry-info-row">
              <span class="entry-info-label"><i data-lucide="gift" aria-hidden="true"></i>${escapeHtml(copy.benefits)}</span>
              <ul class="benefit-tags">${benefitTags}</ul>
            </div>
          </div>
        </div>
        ${cardArrow}
      ${cardCloseTag}
      ${resourceLinks}
    </article>
  `;
};

const SITE_ORIGIN = "https://ytzzjx.github.io";

// 中英文共用同一个 URL（靠 ?lang 区分），所以 canonical 和 Open Graph 要跟着语言走，
// 否则分享出去的卡片语言和实际页面对不上。
const applyMetaForLocale = (copy) => {
  const canonicalUrl = currentLocale === defaultLocale ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/?lang=en`;
  const setMeta = (selector, attribute, value) =>
    document.querySelector(selector)?.setAttribute(attribute, value);

  setMeta("[data-canonical]", "href", canonicalUrl);
  setMeta("[data-og-url]", "content", canonicalUrl);
  setMeta("[data-og-site-name]", "content", copy.brand);
  setMeta("[data-og-title]", "content", copy.documentTitle);
  setMeta("[data-og-description]", "content", copy.metaDescription);
  setMeta("[data-og-image-alt]", "content", `${copy.brand} · ${copy.feedTitle}`);
  setMeta("[data-twitter-title]", "content", copy.documentTitle);
  setMeta("[data-twitter-description]", "content", copy.metaDescription);
  setMeta("[data-og-locale]", "content", currentLocale === "en" ? "en_US" : "zh_CN");
  setMeta("[data-og-locale-alt]", "content", currentLocale === "en" ? "zh_CN" : "en_US");
};

// 目录型页面输出 ItemList 结构化数据，让搜索引擎能读懂这是一份站点清单。
const applyStructuredData = (copy, orderedEntries) => {
  const itemListElement = orderedEntries
    .map((sourceEntry, index) => {
      const entry = localizeEntry(sourceEntry);
      const url = safeHttpUrl(entry.url);
      if (!url) return null;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: entry.name,
        description: entry.summary,
        url,
      };
    })
    .filter(Boolean);

  let script = document.querySelector("#structured-data");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "structured-data";
    document.head.append(script);
  }
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.documentTitle,
    description: copy.metaDescription,
    inLanguage: currentLocale,
    numberOfItems: itemListElement.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement,
  });
};

const renderPage = () => {
  const copy = pageCopy[currentLocale];
  const githubLink = document.querySelector("[data-github-link]");
  const brandLink = document.querySelector("[data-brand-link]");
  const languageSwitcher = document.querySelector("[data-language-switcher]");
  const directorySummary = document.querySelector("[data-directory-summary]");
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = currentLocale;
  document.title = copy.documentTitle;
  metaDescription?.setAttribute("content", copy.metaDescription);
  applyText("[data-brand]", copy.brand);
  applyText("[data-eyebrow]", copy.eyebrow);
  applyText("[data-title]", copy.title);
  applyText("[data-intro]", copy.intro);
  applyText("[data-nav-copy]", copy.nav);
  applyText("[data-update-status]", copy.updateStatus);
  applyText("[data-site-count-label]", copy.siteCountLabel);
  applyText("[data-section-eyebrow]", copy.sectionEyebrow);
  applyText("[data-feed-title]", copy.feedTitle);
  applyText("[data-section-note]", copy.sectionNote);
  applyText("[data-footer]", copy.brand);
  applyText("[data-site-count]", String(siteConfig.entries.length).padStart(2, "0"));
  applyText("[data-last-updated]", `${copy.lastUpdated} ${siteConfig.lastUpdated.replaceAll("-", ".")}`);
  applyText("[data-disclaimer]", copy.disclaimer);

  brandLink?.setAttribute("aria-label", copy.backToTop);
  languageSwitcher?.setAttribute("aria-label", copy.languageLabel);
  directorySummary?.setAttribute("aria-label", copy.directoryLabel);
  document.querySelector(".site-nav")?.setAttribute("aria-label", copy.nav);

  if (githubLink) {
    const githubHref = safeHttpUrl(siteConfig.githubUrl);
    if (githubHref) {
      githubLink.href = githubHref;
      githubLink.hidden = false;
    } else {
      githubLink.removeAttribute("href");
      githubLink.hidden = true;
    }
    githubLink.setAttribute("aria-label", copy.githubLabel);
    githubLink.setAttribute("title", copy.githubTitle);
  }

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langOption === currentLocale));
  });

  const order = new Map(siteConfig.displayOrder.map((name, index) => [name, index]));
  const orderedEntries = siteConfig.entries
    .map((entry, index) => ({ entry, index }))
    .sort((left, right) => {
      const leftOrder = order.has(left.entry.name) ? order.get(left.entry.name) : siteConfig.displayOrder.length + left.index;
      const rightOrder = order.has(right.entry.name) ? order.get(right.entry.name) : siteConfig.displayOrder.length + right.index;
      return leftOrder - rightOrder;
    })
    .map(({ entry }) => entry);
  document.querySelector("#feed-items").innerHTML = orderedEntries.map(renderEntry).join("");

  applyMetaForLocale(copy);
  applyStructuredData(copy, orderedEntries);

  window.lucide?.createIcons();
};

const setLocale = (locale, { updateUrl = true, announce = true } = {}) => {
  if (!supportedLocales.has(locale)) return;
  currentLocale = locale;
  storeLocale(locale);
  if (updateUrl) updateLocaleInUrl(locale);
  renderPage();

  // 列表本身不是 live region，否则每次渲染都会把 23 条全部朗读一遍；
  // 只在用户主动切换语言时播报一句摘要。
  if (announce) {
    const status = document.querySelector("[data-locale-status]");
    if (status) {
      status.textContent = pageCopy[currentLocale].localeSwitched.replace(
        "{count}",
        String(siteConfig.entries.length),
      );
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  currentLocale = resolveLocale();

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => setLocale(button.dataset.langOption));
  });

  renderPage();
});
