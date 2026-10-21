// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。我会尽量更新最新情况，欢迎多多关注。",
  githubUrl: "https://github.com/ytzzjx",
  lastUpdated: "2026-10-21",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  displayOrder: [
    "汐のAPI",
    "晚晚舟",
    "星云智联API",
    "OmniRush",
    "421-API",
    "风绘 API",
    "慧慧云",
    "10API",
    "大肥鱼公益站",
    "Axis AI 公益站",
    "xxzl 公益站",
    "Artbloom 公益站",
    "星桥 公益站",
    "玖时API 半公益站",
    "Camila 公益站",
    "Ovo 半公益站",
    "星见雅",
    "墨白公益站",
    "hiyo",
    "Piu酱",
    "GcmodAi",
    "StarBridge 公益站",
    "Orevx Engine 半公益站",
    "AgentRouter",
    "JustWoker 公益站",
    "Hyper 公益站",
    "ze（芙芙中转站）",
    "sunapi 公益站",
    "Ksir的小饭锅",
    "奶酪公益站",
    "SharedChat 公益站",
    "XXS 公益站",
    "Txcxgzs 公益站",
    "咕嘎咕嘎",
    "MotoMoto",
    "AnyRouter",
    "TokenForge（tokengate）",
    "DZH Smart AI",
    "Prime Relay",
    "STA1N API",
    "Aotera",
    "Edge API",
    "SheApi",
    "zquant",
    "Nofx",
    "AbinAPI",
    "ArityFlow",
    "Sulmate 半公益站",
    "1412's API",
    "Xingya",
    "Rinko NAI 生图公益站",
    "北执半公益站",
    "Jasperio",
    "PAI 生图公益站",
    "GemAI（哈基米公益站）",
    "Hubway",
    "AIHub",
    "Joja Token",
    "SeekAI",
  ],
  // 「公益 / 付费」两个分区靠条目上的 pricing 字段区分：
  // 只有纯付费站要写 pricing: "paid"，不写就是公益区。半公益站（有免费额度、也能充值）
  // 归公益区，因为大家找它们是为了免费额度；但要在文案里说清充值部分。
  // 已失效的站点搬到这里：页面不再渲染，但数据完整保留，万一恢复就把对象移回 entries
  // 并把名字加回 displayOrder。英文文案仍留在 entryTranslations 里，不用来回搬。
  archivedEntries: [
    {
      archivedAt: "2026-09-09",
      archivedReason: "站点暂时无法使用，已从在线推荐下架并移入失效区；恢复后需重新核实注册、福利、模型与倍率。",
      publishedAt: "2026-08-24 00:00",
      updatedAt: "2026-09-09",
      updateNote: "站点暂时失效，已从在线推荐下架并移入失效区。",
      kind: "暂时失效 / 等待恢复",
      name: "Fate New API",
      summary: "站点目前暂时失效。此前通过 NodeLoc 注册，注册送 150 刀，有每日签到并支持全模型。",
      details:
        "站点目前暂时无法使用，恢复时间未知。此前通过 NodeLoc 注册，注册送 150 刀，有每日签到并支持全模型；账号若长期不调用好像会被删除，本人已遇到两次，删号后重新走注册链接即可再注册。以上均为失效前的历史信息，恢复后的注册、福利和模型情况需要重新核实。",
      registration: "站点暂时失效；原为通过 NodeLoc 注册，删号后可重新走注册链接注册。",
      signupBonus: "原为 150 刀",
      dailyCheckin: "原为有签到，金额待确认",
      models: "原为全模型；当前站点暂时失效",
      experience: "站点暂时失效，等待恢复",
      caveat: "站点目前暂时失效，恢复时间未知。此前不使用好像会被删号，恢复后仍建议保持调用；注册门槛、赠送、签到、模型和倍率届时都需以站内实际显示为准。",
      benefits: ["站点暂时失效", "等待恢复", "原 NodeLoc 注册", "原注册送 150 刀", "原每日签到", "原全模型", "原删号后可重新注册"],
      url: "https://fatenewapi.xxxxo.bond/sign-up?aff=eZHA",
      tone: "caution",
    },
    {
      archivedAt: "2026-09-09",
      archivedReason: "上游账号池全部被封，公益服务已停止；已从在线推荐下架并移入失效区。",
      publishedAt: "2026-08-31 00:00",
      addedAt: "2026-08-31",
      updatedAt: "2026-09-02",
      updateNote: "上游号池全部被封，公益服务已停，已从在线推荐下架。",
      kind: "公益服务已停 / 上游号池被封",
      name: "Denxio",
      summary: "上游号池全部被封，公益服务已经停止。原本主打 GPT，仙池活动每天 20 仙缘（仙缘与刀等值），签到另得 0.5-1 仙缘；注册需先去 Telegram 领登仙令。",
      details:
        "有人拿这个站做涩情内容和模型蒸馏，站方买来做上游的 Pro 号因此全部被封，公益服务随之停止。注册页仍可访问。原有机制：注册要两个码，邀请码已经带在注册链接里，注册码（登仙令）要自己去 Telegram 领——进频道 t.me/denxio_free 的登仙令分区，向 @JieYin_bot 发送「登仙令」即可拿到，再回注册页填上完成注册。额度主要来自仙池活动，每天 20 仙缘；开放通知发在 Telegram 频道和 QQ 群。",
      registration: "注册链接已含邀请码；另需去 Telegram 频道 t.me/denxio_free 的登仙令分区向 @JieYin_bot 发送「登仙令」领取注册码。",
      signupBonus: "原为仙池活动每天 20 仙缘（与刀等值）",
      dailyCheckin: "原为 0.5-1 仙缘",
      models: "原为 GPT",
      experience: "上游号池被封，公益服务已停",
      caveat: "有人用这个站做涩情内容和蒸馏，把站方的上游 Pro 号全搞封了，公益服务已停，恢复情况请看 Telegram 频道和 QQ 群公告。原有门槛：注册码（登仙令）必须去 Telegram 领，没有就注册不了；仙池的开放通知也只发在 Telegram 频道和 QQ 群。",
      benefits: ["公益服务已停", "上游号池被封", "GPT", "原仙池每天 20 仙缘", "原签到 0.5-1 仙缘", "需 TG 领登仙令"],
      url: "https://api.denxio.top/register?invite_code=YP9XP5EMB68Q",
      tutorialUrl: "https://t.me/denxio_free",
      tutorialLabel: "进 Telegram 频道看恢复公告、领登仙令注册码",
      tone: "caution",
    },
    {
      archivedAt: "2026-09-09",
      archivedReason: "模型已连续多日无法调用，已从在线推荐下架并移入失效区，等待恢复。",
      publishedAt: "2026-08-28 00:00",
      updatedAt: "2026-09-02",
      updateNote: "模型已连续多日不可用，已从在线推荐下架。",
      kind: "模型不可用 / 等待恢复",
      name: "BaaaAI 公益站",
      summary: "站内模型已经连续几天调不通。原本主打较少见的 GPT 模型，每日可在控制台申请 20 额度，需至少调用一次，并发 2。",
      details:
        "模型不可用已经持续几天。原有机制：通过邀请链接注册后，可在控制台自行申请每日 20 额度，为保持每日权益需要至少完成一次调用；站内包含较少见的 GPT 模型，具体可用列表以控制台为准。",
      registration: "通过邀请链接注册。",
      dailyCheckin: "每日控制台申请 20（需至少调用一次）",
      models: "原为少见的 GPT 模型，当前调不通",
      experience: "模型已连续几天不可用",
      caveat: "模型已经几天调不通，恢复时间未知。每日额度需在控制台自行申请且要至少调用一次；并发只有 2。模型列表、额度与使用规则可能调整，请以控制台实际显示为准。",
      benefits: ["模型当前不可用", "每日申请 20 额度", "需至少调用一次", "并发 2", "少见 GPT 模型"],
      url: "https://baaaai.com/register?aff=MDTFQQRGCR2X",
      tone: "caution",
    },
    {
      archivedAt: "2026-09-09",
      archivedReason: "站内已无可用模型，已从在线推荐下架并移入失效区，等待恢复。",
      publishedAt: "2026-08-28 17:39",
      updatedAt: "2026-09-07",
      updateNote: "站内已无可用模型，已从在线推荐下架。",
      kind: "无可用模型 / 等待恢复",
      name: "KKToken",
      summary: "站内已经没有模型可用。原本是 JustWoker 站长的新站，注册送 100 刀、每日签到 20 刀，主打 Claude Opus 4.8 与 Opus 5。",
      details:
        "站点现在没有模型可调。与 JustWoker 公益站为同一站长；两个站此前一起没了模型，但目前只有 JustWoker 以 GPT 线路恢复，KKToken 仍不可用。原有福利为注册送 100 刀、每日签到 20 刀，可用 Claude Opus 4.8 和 Opus 5；注册需要 GitHub 账号，具体门槛以注册页提示为准。恢复后仍可能遇到 Claude Code CLI 报「Attention Required! | Cloudflare」，那是出网线路被挡：开代理，并把 HTTPS_PROXY / HTTP_PROXY 写进 ~/.claude/settings.json 的 env，或者直接开代理客户端的 TUN 模式。",
      registration: "需要 GitHub 账号，有账号限制，具体门槛以注册页提示为准；注册状态以注册页实际显示为准。",
      signupBonus: "原为 100 刀",
      dailyCheckin: "原为 20 刀",
      models: "原为 Claude Opus 4.8 / Opus 5，当前没有可用模型",
      experience: "站内已无模型可调，等待恢复",
      caveat: "站内没有模型可用，恢复时间未知。恢复后若在 Claude Code CLI 报「Attention Required! | Cloudflare」，开代理并把 HTTPS_PROXY / HTTP_PROXY 写进 ~/.claude/settings.json 的 env（或改用 TUN 模式）即可。",
      benefits: ["当前无可用模型", "等待恢复", "JustWoker 同站长", "原注册送 100 刀", "原每日签到 20 刀", "原 Claude Opus 4.8 / Opus 5", "GitHub 限制"],
      url: "https://kktoken.cc/sign-up?aff=vrZc",
      tone: "caution",
    },
    {
      archivedAt: "2026-09-09",
      archivedReason: "站内已无可用模型，已从在线推荐下架并移入失效区，等待恢复。",
      publishedAt: "2026-08-20 18:05",
      updatedAt: "2026-09-07",
      updateNote: "站内已无可用模型，已从在线推荐下架。",
      kind: "无可用模型 / 等待恢复",
      name: "TabiToken",
      summary: "站内已经没有模型可用。原本注册送 120 刀、每日签到 5-10 刀，主打 Claude Opus 4.8 与 Opus 5。",
      details:
        "站点现在没有模型可调。原有福利为邀请注册 120 刀、每日签到 5-10 刀，主打 Claude Opus 4.8 和 Opus 5，此前速度快、连接稳定。签到入口：点击右上角个人头像，进入个人资料后签到。恢复后仍可能在 Claude Code CLI 里报「Attention Required! | Cloudflare」，那是出网线路被 CF 挡了：开代理，并把 HTTPS_PROXY / HTTP_PROXY 写进 ~/.claude/settings.json 的 env，或者直接开代理客户端的 TUN 模式。",
      registration: "注册窗口此前随时可能关闭，当前状态以注册页实际显示为准。",
      signupBonus: "原为 120 刀",
      dailyCheckin: "原为 5-10 刀",
      models: "原为 Claude Opus 4.8 / Opus 5，当前没有可用模型",
      experience: "站内已无模型可调，等待恢复",
      caveat: "站内没有模型可用，恢复时间未知。注册窗口可能随时关闭；恢复后若报「Attention Required! | Cloudflare」，开代理即可：把 HTTPS_PROXY / HTTP_PROXY 写进 ~/.claude/settings.json 的 env，或改用 TUN 模式。",
      benefits: ["当前无可用模型", "等待恢复", "原注册送 120 刀", "原每日签到 5-10 刀", "个人资料内签到", "原 Claude Opus 4.8 / Opus 5"],
      url: "https://tabitoken.com/sign-up?aff=AQDR",
      tone: "caution",
    },
    {
      archivedAt: "2026-09-09",
      archivedReason: "站内已无可用模型且此前稳定性已下降，已从在线推荐下架并移入失效区。",
      publishedAt: "2026-08-19 20:26",
      updatedAt: "2026-09-07",
      updateNote: "站内已无可用模型，已从在线推荐下架。",
      kind: "无可用模型 / 等待恢复",
      name: "GoRouter",
      summary: "站内已经没有模型可用。原本注册送 70 刀、每日签到 5-10 刀，主打 Claude Opus 4.8 与 Opus 5，且 8 月末起稳定性就已经在下降。",
      details:
        "站点现在没有模型可调。原有福利为邀请注册 70 刀、每日签到 5-10 刀，主打 Claude Opus 4.8 和 Opus 5；速度此前尚可，但 2026 年 8 月 29 日起稳定性已经明显不如更早的时候，这次直接没了模型。签到入口：点击右上角个人头像，进入个人资料后签到。恢复后仍可能在 Claude Code CLI 里报「Attention Required! | Cloudflare」，那是出网线路被 CF 挡了：开代理，并把 HTTPS_PROXY / HTTP_PROXY 写进 ~/.claude/settings.json 的 env，或者直接开代理客户端的 TUN 模式。",
      registration: "注册窗口此前随时可能关闭，当前状态以注册页实际显示为准。",
      signupBonus: "原为 70 刀",
      dailyCheckin: "原为 5-10 刀",
      models: "原为 Claude Opus 4.8 / Opus 5，当前没有可用模型",
      experience: "站内已无模型可调，等待恢复；此前稳定性已在下降",
      caveat: "站内没有模型可用，恢复时间未知；这个站在没模型之前稳定性就已经在下降。注册窗口可能随时关闭；恢复后若报「Attention Required! | Cloudflare」，开代理即可：把 HTTPS_PROXY / HTTP_PROXY 写进 ~/.claude/settings.json 的 env，或改用 TUN 模式。",
      benefits: ["当前无可用模型", "等待恢复", "原注册送 70 刀", "原每日签到 5-10 刀", "个人资料内签到", "原 Claude Opus 4.8 / Opus 5", "此前稳定性下降"],
      url: "https://gorouter.app/sign-up?aff=e9NL",
      tone: "caution",
    },
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
      tone: "closed",
    },
  ],
  entries: [
    {
      publishedAt: "2026-10-21 00:00",
      addedAt: "2026-10-21",
      updatedAt: "2026-10-21",
      updateNote: "新收录：公益站，QQ 邮箱注册，注册送 15 额度、签到 10（用户提供）；101 个模型，默认组 1 倍、vip 0.8、svip 0.6。",
      kind: "公益站 / 注册送 15 / 签到 10",
      name: "汐のAPI",
      summary:
        "公益站，QQ 邮箱注册，注册送 15 额度、签到 10（用户提供）。101 个模型，默认组 1 倍率、VIP 0.8、SVIP 0.6，另有 Claude / GPT / Gemini 独立分组与国内 wb 组。",
      details:
        "站内名称汐のAPI（api.203236.xyz），New API 程序，额度按站内自定义货币 🕯 显示。QQ 邮箱注册，需邮箱验证，无 GitHub / Linux DO / Telegram 登录；注册送 15 额度、每日签到 10（均为用户提供）。模型广场公开 101 个模型：默认组 1 倍（45 个）、VIP 0.8 倍、SVIP 0.6 倍；另按厂商拆出 Claude_default 8 / Claude_vip 6 / Claude_svip 4、GPT_default 8 / GPT_vip 6 / GPT_svip 4、Gemini_default 3 / Gemini_vip 2.5 / Gemini_svip 2，以及国内 wb 组 1 倍（22 个 cn: 前缀模型）。模型覆盖 Claude（fable-5 / fable-5-1 / opus 4.5 / 4.6 / sonnet 4-5 / sonnet 5 / 5-5）、GPT（6-astra / 6-sol / 5.6-sol / gpt-image-2 系列）、Gemini（3.6 / 3.8-flash、4-argon-low）、DeepSeek（V4-Flash / V4-Flash-Vision-Exp / v3.2）、GLM 5.3 / 5.3-flash、Grok 4.6、Kimi、Qwen3.8-27B、step-5-preview、gpt-oss-20b 与 agnes 系列等。站内公告：同一住宅 IP 上有 2 个及以上账号只保留最早的一个，机房或代理 IP 上的账号全部封禁，每 15 分钟执行一次。",
      registration: "QQ 邮箱注册，需邮箱验证（走邀请链接）。",
      signupBonus: "15 额度（用户提供）",
      dailyCheckin: "10（用户提供）",
      models: "101 个模型：Claude（fable-5 / opus 4.5-4.6 / sonnet 4-5~5-5）/ GPT（6-astra、6-sol、5.6-sol、gpt-image-2 系列）/ Gemini（3.6、3.8-flash、4-argon-low）/ DeepSeek V4 / GLM 5.3 / Grok 4.6 / Kimi / Qwen 等",
      experience: "注册送 15、签到 10（用户提供）；分组倍率公开，svip 0.6 最低",
      caveat: "注册赠送与签到金额为用户提供，以站内实际显示为准。同 IP 多账号会被封（住宅 IP 只留最早的一个，机房/代理 IP 全封，每 15 分钟执行）；被邀请人触发风控还会清零邀请人的 5 白蜡。额度以自定义货币 🕯 显示。",
      benefits: ["公益站", "QQ 邮箱注册", "注册送 15", "签到 10", "101 个模型", "SVIP 0.6 倍", "国内 wb 组"],
      url: "https://api.203236.xyz/sign-up?aff=a84i",
      tone: "active",
    },
    {
      publishedAt: "2026-10-20 00:00",
      addedAt: "2026-10-20",
      updatedAt: "2026-10-20",
      updateNote: "新收录：注册送 1，拉 5 人后可每天签到领 1r（用户提供）；哈基米 flash 系列 0.01、克 o 系列 0.05。",
      kind: "公益站 / 注册送 1 / 拉 5 人后每天签到 1r",
      name: "晚晚舟",
      summary:
        "公益站，注册送 1，拉 5 人后可每天签到领 1r（用户提供）。哈基米 flash 系列 0.01、克 o 系列 0.05。",
      details:
        "站内名称晚晚舟（wanwanzhou.top），站内自述「酒馆专线 · 长篇陪伴」，Sub2API 程序。注册只收 QQ 邮箱（需邮箱验证，无人机验证），没有 GitHub / Linux DO 登录。注册送 1，拉 5 人后可每天签到领 1r（均为用户提供）。模型倍率：哈基米 flash 系列 0.01、克 o 系列 0.05（用户提供）；站内模型广场未对外开放，完整清单以登录后站内显示为准。站点开通了邀请返利，支付入口关闭。",
      registration: "QQ 邮箱注册，需邮箱验证（走邀请链接）。",
      signupBonus: "1（用户提供）",
      dailyCheckin: "拉 5 人后可每天签到领 1r（用户提供）",
      models: "哈基米 flash 系列 0.01、克 o 系列 0.05（用户提供）；完整清单以登录后站内为准",
      experience: "注册送 1；拉 5 人后每天签到 1r（用户提供）",
      caveat: "注册赠送、签到条件与倍率均为用户提供，以站内实际显示为准。签到需先拉够 5 人才能解锁；站内模型广场未对外开放，模型清单以登录后站内显示为准。",
      benefits: ["公益站", "QQ 邮箱注册", "注册送 1", "拉 5 人后每天签到 1r", "哈基米 flash 0.01", "克 o 系列 0.05"],
      url: "https://wanwanzhou.top/register?aff=E44252EBQGS2",
      tone: "active",
    },
    {
      publishedAt: "2026-10-19 00:00",
      addedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      updateNote: "新增加群验证：必须加 2 群 1124978261，并在群里 @机器人发「/验证 绑定码」激活，否则调用提示无可用渠道、账号会被清理。",
      kind: "公益站 / 注册送 1 / 签到 2 左右 / 必须加群验证",
      name: "星云智联API",
      summary:
        "公益站，注册送 1、签到 2 左右（用户提供）。**必须加 2 群 1124978261 并在群里 @机器人发验证指令激活**，否则调用提示无可用渠道、账号会被清理。有 0 倍率的免费组，站方公告称部分模型公益运行、明确「不要充值」。36 个模型，含 DeepSeek、GLM、Kimi、Qwen、Gemini 与 gpt-5.3。",
      details:
        "站内名称星云智联API（api.xincloud.top），New API 程序，额度按人民币（¤）显示。邮箱注册，需邮箱验证，无 GitHub / Linux DO 登录；注册送 1、每日签到 2 左右（均为用户提供）。站方公告：部分模型目前公益运行，请点站内广告按钮助力，并明确「不要充值」。分组倍率公开：免费组 0 倍（每分钟 10 次请求 / 5 次成功）、标准1倍、快速1.5倍、高速2倍、极速2.5倍、高阶生产力 6 倍（站方标注非必要不要调用）。36 个模型，免费组含公益-200k上下文、公益-星云智联、free-deepseek-v4.1-flash、free-glm-5.3、free-glm-5.3-flash、free-kimi-k3、free-kimi-k2.6、free-gpt-oss-20b、公益-mimo-v2.6-flash、公益-muse-spark-1.3、公益-fast 与若干 free-test；付费分组含 deepseek-v4.1-flash、deepseek-v4-pro、DeepSeek-V4-Pro(2)、DeepSeek-V4-Flash、glm-5.2、glm-5.3、glm-5.3-flash、kimi-k3、qwen3.8-max、qwen3.8-flash、gpt-5.3、gemini-2.5-flash、gemini-3.5-flash-lite、gemini-3.6-flash、gemini-3.8-flash、gemini-3-flash。另有邀请奖励活动：邀请人每位 ¥10、新人 ¥1，截止 2026-10-31。加群验证（站方通知）：全站普通账号已推入激活门禁，未激活时调用 API 会提示无可用渠道；必须加 2 群 1124978261，登录后打开进群验证中心 api.xincloud.top/verify/ 获取绑定码，在群里发送「@用户验证 /验证 你的绑定码」并输入验证码完成激活，每个 QQ 只能绑定并激活一个账号；验证通过后额度、倍率和历史配置不变，长期不在群或未激活的账号会被系统清理。",
      registration: "邮箱注册，需邮箱验证（走邀请链接）；注册后必须加 2 群 1124978261 并在群里 @机器人完成验证激活，否则无法调用且账号会被清理。",
      signupBonus: "1（用户提供）",
      dailyCheckin: "2 左右（用户提供）",
      models: "36 个模型，含免费组（0 倍率）与 DeepSeek / GLM / Kimi / Qwen / Gemini / gpt-5.3 等付费分组",
      experience: "注册送 1、签到 2 左右（用户提供）；有 0 倍率免费组；必须加群验证后才能调用",
      caveat: "**必须加 2 群 1124978261 并在群里 @机器人发「/验证 绑定码」激活**，否则调用提示无可用渠道，长期未激活会被清理；每个 QQ 只能绑定一个账号。注册赠送与签到金额为用户提供，以站内实际显示为准。站方公告称部分模型公益运行、明确「不要充值」，并请用户点站内广告助力；免费组有每分钟 10 次请求 / 5 次成功限制。分组倍率与模型以站内模型广场为准，可能随时调整。",
      benefits: ["公益站", "注册送 1", "签到 2 左右", "必须加群验证", "QQ 群 1124978261", "免费组 0 倍率", "36 个模型", "DeepSeek / GLM / Kimi / Qwen / Gemini", "站方公告不要充值"],
      url: "https://api.xincloud.top/sign-up?aff=YOv3",
      tone: "active",
    },
    {
      publishedAt: "2026-10-19 00:00",
      addedAt: "2026-10-19",
      updatedAt: "2026-10-19",
      updateNote: "新收录：公益站，每天 10M gpt-6-astra（用户提供）；需绑定 Discord 和 GitHub，GitHub 注册不能短于 7 天。",
      kind: "公益站 / 每天 10M gpt-6-astra",
      name: "OmniRush",
      summary:
        "公益站，每天 10M gpt-6-astra（用户提供）。需绑定 Discord 和 GitHub，GitHub 账号注册时间不能短于 7 天。",
      details:
        "站内名称 OmniRush（omnirush.ai），面向 AI 编程的客户端（桌面应用 + CLI），免费额度每天刷新、无付费档。每天 10M gpt-6-astra（用户提供）。注册需绑定 Discord 和 GitHub，且 GitHub 账号注册时间不能短于 7 天（用户提供；官网 FAQ 同样写明需要至少 7 天号龄）。官网还列出 GPT 6 Astra、GPT 6.1 Sol、GPT 6 Sol 三个模型，Discord 为 discord.gg/hACMSrEm4h。",
      registration: "需绑定 Discord 与 GitHub，GitHub 账号注册时间不能短于 7 天（用户提供）。",
      signupBonus: "未提供",
      dailyCheckin: "未提供；每天 10M gpt-6-astra（用户提供）",
      models: "gpt-6-astra（每天 10M，用户提供）；官网另列 GPT 6.1 Sol、GPT 6 Sol",
      experience: "每天 10M gpt-6-astra（用户提供）；免费额度每天刷新",
      caveat: "每天额度与模型为用户提供，以站内实际显示为准。注册门槛为 GitHub 账号至少 7 天且需绑定 Discord（用户提供，官网 FAQ 一致）；部分注册会转人工审核。",
      benefits: ["公益站", "每天 10M gpt-6-astra", "需绑定 Discord", "需绑定 GitHub", "GitHub 号龄 ≥ 7 天", "免费额度每日刷新"],
      url: "https://omnirush.ai/console?ref=SUS3JHD9",
      tone: "active",
    },
    {
      publishedAt: "2026-10-18 00:00",
      addedAt: "2026-10-18",
      updatedAt: "2026-10-18",
      updateNote: "新收录：公益站，QQ 邮箱注册，注册送 0.5 元试用额度、签到 0.5 左右（用户提供）。",
      kind: "公益站 / 注册送 0.5 元 / 签到 0.5 左右",
      name: "421-API",
      summary:
        "公益站，QQ 邮箱注册，新用户注册送 0.5 元试用额度，签到 0.5 左右（用户提供）。",
      details:
        "站内名称 421-API（421api.xyz），New API 程序，额度按人民币（¤）显示。QQ 邮箱注册，需邮箱验证，没有 GitHub / Linux DO 登录。新用户注册送 0.5 元试用额度，每日签到 0.5 左右（均为用户提供）。可用模型与倍率以站内模型广场为准。",
      registration: "QQ 邮箱注册，需邮箱验证（走邀请链接）。",
      signupBonus: "0.5 元试用额度（用户提供）",
      dailyCheckin: "0.5 左右（用户提供）",
      models: "以站内模型广场为准",
      experience: "注册送 0.5 元试用额度、签到 0.5 左右（用户提供）",
      caveat: "注册赠送与签到金额为用户提供，以站内实际显示为准；可用模型与倍率以站内模型广场为准。",
      benefits: ["公益站", "QQ 邮箱注册", "注册送 0.5 元", "签到 0.5 左右"],
      url: "https://421api.xyz/sign-up?aff=sOMa",
      tone: "active",
    },
    {
      publishedAt: "2026-10-18 00:00",
      addedAt: "2026-10-18",
      updatedAt: "2026-10-18",
      updateNote: "注册方式更正：只能 GitHub 注册，不走邮箱（用户提供）。",
      kind: "公益站 / 注册送 2 / 签到 0.3",
      name: "风绘 API",
      summary:
        "公益站，只能 GitHub 注册，注册送 2、签到 0.3（用户提供）。目前只有 DeepSeek，deepseek-flash 已是最新的 1017 版本。",
      details:
        "站内名称风绘 API（api.huidev.com），New API 程序，额度按人民币（¤）显示。只能 GitHub 注册（用户提供），注册送 2、每日签到 0.3（均为用户提供）。模型目前只有 DeepSeek 两个：deepseek-flash 已更新为 DeepSeek V4.1 Flash 的 1017 版本（站方描述：相比上一版在各项基准测试中提升明显），以及 deepseek-v4-pro；公开价格接口显示 deepseek-flash 当前为限时免费，deepseek-v4-pro 工作日 9-12 点、14-18 点为高峰时段，其余为空闲时段，具体扣费以站内记录为准。",
      registration: "只能 GitHub 注册（用户提供），走邀请链接。",
      signupBonus: "2（用户提供）",
      dailyCheckin: "0.3（用户提供）",
      models: "deepseek-flash（V4.1 Flash 1017 版，当前限时免费）/ deepseek-v4-pro",
      experience: "注册送 2、签到 0.3（用户提供）；目前只有 DeepSeek 两个模型",
      caveat: "注册方式、注册赠送与签到金额为用户提供，以站内实际显示为准。deepseek-flash 的限时免费与 deepseek-v4-pro 的高峰/空闲计价来自公开价格接口，站方可能随时调整，实际扣费以站内记录为准。",
      benefits: ["公益站", "只能 GitHub 注册", "注册送 2", "签到 0.3", "deepseek-flash 1017 版", "deepseek-v4-pro"],
      url: "https://api.huidev.com/sign-up?aff=SPqL",
      tone: "active",
    },
    {
      publishedAt: "2026-10-17 00:00",
      addedAt: "2026-10-17",
      updatedAt: "2026-10-17",
      updateNote: "无签到（用户提供）。",
      kind: "公益站 / 有免费分组 / 注册送 1",
      name: "慧慧云",
      summary:
        "公益站，注册送 1，有免费分组（用户提供）。免费分组实测可调 4 个模型：auto（随机路由高级模型）、grok-4.7、grok-composer-2.5-fast、sensenova-6.8-flash-lite。无签到。",
      details:
        "站内名称慧慧云（api.huihuiyun.top），AI API Gateway 中转。注册送 1（用户提供）。无签到。有免费分组（用户提供），免费分组 key 实测 /v1/models 返回 4 个模型：auto（随机路由高级模型）、grok-4.7、grok-composer-2.5-fast、sensenova-6.8-flash-lite。模型广场另有法王gemini 0.15 倍、高级claude (kiro) 0.15 倍、gemini按次 1 倍、法王d老师 (0.01/次) 四个付费分组：法王gemini 组含 gemini-3.1-pro-preview / 3.1-pro / 3.6-flash / 3.8-flash / 3.7-flash；高级claude 组含 claude-fable-5 / opus 5 / opus 4-8 / 4-7 / 4-6 / 4-5 / sonnet 4-6 / sonnet-5 / haiku-4-5；gemini按次组含 gemini-3.1-pro-preview 与 3.1-pro（0.04/次）、3.6 / 3.7 / 3.8-flash（0.02/次）；法王d老师组含 deepseek-v4.1-flash / v4-pro / v4-flash 与「(0.01/次) 法王d老师」，均 0.01/次。",
      registration: "通过邀请链接注册，注册送 1。",
      signupBonus: "1（用户提供）",
      dailyCheckin: "无",
      models: "免费分组 4 个：auto（随机路由高级模型）、grok-4.7、grok-composer-2.5-fast、sensenova-6.8-flash-lite；付费分组另有 Gemini、Claude 与 DeepSeek 系列",
      experience: "有免费分组（用户提供）；免费分组 key 实测可正常列出 4 个模型；无签到",
      caveat: "注册赠送与无签到为用户提供。免费分组的可用模型为实测结果，站方可能随时调整；付费分组倍率与模型以站内模型广场为准。",
      benefits: ["公益站", "注册送 1", "有免费分组", "auto 随机路由", "grok-4.7", "grok-composer-2.5-fast", "sensenova-6.8-flash-lite", "无签到"],
      url: "https://api.huihuiyun.top/register?aff=AHAL3TAU466P",
      tone: "active",
    },
    {
      publishedAt: "2026-10-16 00:00",
      addedAt: "2026-10-16",
      updatedAt: "2026-10-16",
      updateNote: "补充 QQ 群 1085268015（用户提供）。",
      kind: "公益站 / 每日签到 10M token",
      name: "10API",
      summary: "公益站，每日签到可得 10M token，可用 deepseek-v4.1-flash 与 glm-5.3-flash（用户提供）。QQ 群 1085268015。",
      details:
        "站内页面标题为 10API（nextapi.store）。每日签到可得 10M token，可用模型有 deepseek-v4.1-flash 与 glm-5.3-flash（均为用户提供），其余以站内显示为准。QQ 群 1085268015（用户提供）。",
      registration: "通过邀请链接注册；QQ 群 1085268015。",
      signupBonus: "未提供",
      dailyCheckin: "10M token（用户提供）",
      models: "deepseek-v4.1-flash / glm-5.3-flash（用户提供）",
      experience: "每日签到 10M token（用户提供）",
      caveat: "签到额度与可用模型为用户提供，以站内实际显示为准。",
      benefits: ["公益站", "每日签到 10M token", "deepseek-v4.1-flash", "glm-5.3-flash", "QQ 群 1085268015"],
      url: "https://nextapi.store/login?inv=INVY5KXY1ZN",
      tone: "active",
    },
    {
      publishedAt: "2026-10-15 00:00",
      addedAt: "2026-10-15",
      updatedAt: "2026-10-15",
      updateNote: "注册已关闭（用户提供）；此前 GPT 也不能用了，注册送 92、每日签到 10 左右为关闭前的口径。",
      kind: "暂停注册",
      name: "1412's API",
      summary: "目前已关闭注册（用户提供），已移到列表后部；恢复开放后再更新。关闭前注册送 92、每日签到 10 左右，GPT 不能用了。",
      details:
        "站内名称 1412's API（napi.kid1412.qzz.io），New API 程序。注册已关闭（用户提供），恢复时间未知。关闭前注册送 92，每日签到 10 左右（用户提供）；GPT 不能用了（用户提供），其余模型以站内显示为准。",
      registration: "目前暂停注册，等待重新开放。",
      signupBonus: "关闭前为 92（用户提供）",
      dailyCheckin: "关闭前为 10 左右（用户提供）",
      models: "GPT 不能用了（用户提供）；其余模型以站内显示为准",
      experience: "目前已关闭注册",
      caveat: "注册已关闭（用户提供），恢复时间未知。关闭前的注册赠送、签到与模型情况以恢复后的站内实际显示为准。",
      benefits: ["暂停注册", "关闭前注册送 92", "关闭前每日签到约 10"],
      url: "https://napi.kid1412.qzz.io/sign-up?aff=hHM0",
      tone: "closed",
    },
    {
      publishedAt: "2026-10-15 00:00",
      addedAt: "2026-10-15",
      updatedAt: "2026-10-16",
      updateNote: "邀请链接换成新邀请码；注册送 0.1，新增 AWS Bedrock 0.4 倍与 0.08 倍不降智 astra（缓存命中 80% 左右），均为用户提供。",
      kind: "付费站 / 不降智 GPT / 经常发红包",
      name: "DZH Smart AI",
      egg: true,
      summary:
        "付费站，注册送 0.1，有不降智 GPT，QQ 群 613833653 经常发红包（用户提供）。0.08 倍的不降智 astra，缓存命中 80% 左右；另有 AWS Bedrock 0.4 倍（用户提供）。无签到；每日抽奖 $0-1，需当日产生消费后才能参与，充值只增加次数。",
      details:
        "站内页面标题为 cccccc（dzhsmartai.com），Sub2API 程序，预充值模式，注册走邮箱，注册送 0.1（用户提供）。QQ 群 613833653 经常发红包（用户提供）。无签到，改为每日抽奖：奖池 $0-1，每天 1 次，需当日产生消费后才能参与，充值只增加次数。模型广场 88 个模型，不降智 GPT 在 ChatGPT-PRO企业 组（0.18 倍，站方标注 gpt-6-astra、gpt-6.1-sol 不降智比例 100%、不炸缓存）；ChatGPT-PRO稳定 组 0.05 倍，站方标注 gpt-6-astra 不降智比例 90%+、缓存可能会炸。0.08 倍的不降智 astra，缓存命中 80% 左右；另有 AWS Bedrock 0.4 倍（均为用户提供）。其余分组：零元go 0.001 倍、ChatGPT-Plus稳定 0.08 倍、ChatGPT-ProMax 企业 0.1 倍、Claude-kiro 稳定 0.1 倍、Claude-kiro-企业 0.25 倍、Claude 0.25 倍、Claude-Max 满血 1.2 倍、gemini-反重力 0.25 倍、gemin4 0.35 倍、DeepSeek 0.12 倍、grok 0.12 倍、Kimi 0.35 倍，另有一分钱生图与 gpt2.5画图超分（按张计费）。",
      registration: "邮箱注册（走邀请链接），注册送 0.1。",
      signupBonus: "注册送 0.1；QQ 群 613833653 经常发红包（用户提供）",
      dailyCheckin: "无；每日抽奖 $0-1（需当日消费后才能参与，充值只增加次数）",
      models: "不降智 GPT：0.08 倍不降智 astra（缓存命中 80% 左右，用户提供）；ChatGPT-PRO企业 0.18 倍（站方标注 100% 不降智）；ChatGPT-PRO稳定 0.05 倍（站方标注 90%+）；AWS Bedrock 0.4 倍（用户提供）；另有 Claude / Gemini / DeepSeek / grok / Kimi 等 88 个模型",
      experience: "0.08 倍不降智 astra 缓存命中 80% 左右（用户提供）；QQ 群 613833653 经常发红包；无签到，每日抽奖需当日消费",
      caveat: "付费站，预充值。注册送 0.1、AWS Bedrock 0.4 倍、0.08 倍不降智 astra 及其 80% 左右缓存命中均为用户提供，以站内实际显示和调用为准。红包在 QQ 群 613833653 里发（用户提供），规则与金额以群内实际发放为准。不降智比例为站方在模型广场的标注，以实际调用为准；每日抽奖需当日产生消费后才能参与，充值只增加次数。",
      benefits: ["付费站", "注册送 0.1", "不降智 GPT", "0.08 倍不降智 astra", "缓存命中 80% 左右", "AWS Bedrock 0.4 倍", "QQ 群 613833653 经常发红包", "ChatGPT-PRO企业 0.18 倍", "每日抽奖 $0-1", "无签到"],
      url: "https://dzhsmartai.com/register?aff=Y9UH5YBU33UB",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-10-14 00:00",
      addedAt: "2026-10-14",
      updatedAt: "2026-10-15",
      updateNote: "邀请链接换成新的邀请码（用户提供）。",
      kind: "付费站 / 多分组低倍率 / 拉新送 $10",
      name: "Prime Relay",
      egg: true,
      summary:
        "付费站，一个密钥接 Claude、GPT、Gemini 等主流模型，倍率公开：GPT 福利组 0.015、Claude 福利组 0.02、DeepSeek 0.015、Kimi 0.025、Grok / Gemini 0.015。QQ 邮箱注册；**拉新福利：邀请好友注册并进 QQ 群，双方各得 $10 额度（每账号最多邀请 10 人）**；充值 1:10；签到 $1-3/天。",
      details:
        "站内名称 Prime Relay（primerelay.online），Sub2API 程序，主打「一个密钥，畅用多个 AI 模型」，注册只支持 QQ 邮箱（无人机验证）。模型广场公开可查，12 个分组 36 个模型：Qwen 组 0.01x、DeepSeek 组 0.015x、GLM 组 0.015x、GPT-福利组 0.015x（只支持 5.6 系列）、Gemini / Gemma / Grok 组 0.015x、Claude-福利组 0.02x、Seed 组 0.02x、Kimi 组 0.025x、DALL-E 生图（1K/2K 0.6 元/张、4K 0.8 元/张）、CC-MAX 满血组 0.9x；另有部分分组有高峰倍率。Claude 覆盖 fable-5 / fable-5-1 / opus 4-6 至 5-5 / sonnet 5，GPT 覆盖 5.5 / 5.5-pro / 5.6-luna / 5.6-sol / 5.6-terra，另有 DeepSeek V4 系列、Grok 4.5 / 4.6、Kimi K2.6 / K3、GLM 5.2 / 5.3、Qwen 3.7 / 3.8、Gemini 3.1-3.7、Seed 2.1、gpt-image 生图系列。充值比例 1:10（1 元 = 10 刀额度）；每日签到 $1-3，需先累计充值满 5 元且当天成功调用一次 API。官方 QQ 群 239561070（机器人应答，进群后发送「/绑定 你的注册邮箱」完成验证）。邀请返利：被邀请人充值后邀请人获得返利额度，可转入余额。",
      registration: "QQ 邮箱注册（走邀请链接），无人机验证。",
      signupBonus: "拉新福利：邀请好友注册并进 QQ 群，双方各得 $10 额度（每账号最多邀请 10 人）",
      dailyCheckin: "每日签到 $1-3（需先累计充值满 5 元，且当日成功调用一次 API）",
      models:
        "12 个分组 36 个模型：Claude（fable-5 / fable-5-1 / opus 4-6~5-5 / sonnet 5，福利组 0.02x）/ GPT（5.5、5.5-pro、5.6-luna / sol / terra，福利组 0.015x）/ DeepSeek V4 系列（0.015x）/ Grok 4.5 / 4.6（0.015x）/ Gemini 3.1-3.7（0.015x）/ Kimi K2.6 / K3（0.025x）/ GLM 5.2 / 5.3（0.015x）/ Qwen 3.7 / 3.8（0.01x）/ Seed 2.1（0.02x）/ gpt-image 生图（1K/2K 0.6 元、4K 0.8 元每张）",
      experience: "倍率公开、模型广场标注各分组综合倍率；多上游冗余、自动切换；QQ 群内机器人应答",
      caveat:
        "付费站，倍率与分组以站内模型广场为准（部分分组有高峰倍率）。签到有门槛：需先累计充值满 5 元，且当日成功调用一次 API 后才能签到。注册只支持 QQ 邮箱。拉新 $10 额度需双方完成注册并进群绑定邮箱，每账号最多邀请 10 人。连续签到满 30 天可申请退还全部 50 元（需人工审核）。",
      benefits: ["付费站", "QQ 邮箱注册", "拉新双方各得 $10 额度", "GPT 福利组 0.015", "Claude 福利组 0.02", "DeepSeek 0.015", "Kimi 0.025", "充值 1:10", "签到 $1-3/天", "36 个模型"],
      url: "https://www.primerelay.online/register?aff=W24WQGYYH84S",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-10-13 00:00",
      addedAt: "2026-10-13",
      updatedAt: "2026-10-13",
      updateNote: "新收录：公益新站（自研对话站），仅 QQ 邮箱注册（用户提供）；聊天界面 + OpenAI 兼容 /v1 接口，85 个模型经接口实测、可调通；注册即用基础套餐、当前无用量限制，每日签到连续 5 天领重置卡；开服冲福利进行中。",
      kind: "公益站 / 自研对话站 + OpenAI 兼容接口 / 新站开服",
      name: "大肥鱼公益站",
      summary:
        "公益新站，自研对话站（非 New API），仅 QQ 邮箱注册。聊天界面 + OpenAI 兼容 /v1 接口，85 个模型（Claude / GPT / Gemini / DeepSeek / GLM / Grok / Kimi 等），接口实测可调通。注册即用基础套餐、当前无用量限制；每日签到，连续 5 天领重置卡；开服冲福利按人数解锁全站奖励。",
      details:
        "站内名称「大肥鱼公益站」（arc.103-121-95-72.sslip.io），跑的是自研开源程序 Obsidian Arc（github.com/OnyxAxiOwO/ObsidianArc，MIT），是个自托管 AI 对话站：聊天界面之外也提供 OpenAI 兼容 /v1 接口，/v1/models 实测 85 个模型、聊天接口实测可调通。注册仅支持 QQ 邮箱，需邮箱验证与人机验证。新注册用户默认「基础套餐」：含全部实测可用模型、永久有效，当前站内显示无用量限制；每日签到，连续签到 5 天领 1 张重置卡（30 天有效），重置卡用于重置用量窗口。开服冲福利为阶段活动：满 50 人已给全体用户各发 1 张重置卡（全窗口、30 天有效）；100 人时所有套餐额度翻倍（基础套餐每天 100 → 200 次，Go 套餐每 5 小时 1000 → 2000 次）；150 人再发重置卡 ×2；200 人在前一档基础上再翻倍——自动结算、无需申请，以站内公告为准。模型覆盖 Claude（fable-5、haiku-4-5、opus 4-6 / 4-8 / 5 / 5-5、sonnet 4-6 / 5 / 5-5）、GPT（5.5、5.6-luna / sol / terra、6-astra / luna / sol、6.1-sol）、Gemini 2.5-3.8 系列、DeepSeek（V4.1-Flash / V4-Pro / V4-Flash）、GLM 5.1-5.3、Grok 4.6 / 4.7 / 4.20、Kimi K2.7-Code / K3、Qwen 3.6-3.8、MiniMax M2-M3.1 与 gpt-image 生图等；上游渠道含 apigoto / vyceai / sensenova 等。",
      registration: "仅 QQ 邮箱注册，需邮箱验证与人机验证（走邀请链接）。",
      signupBonus: "注册即用基础套餐：含全部实测可用模型、永久有效（当前无用量限制）",
      dailyCheckin: "有签到；连续签到 5 天领 1 张重置卡（30 天有效）",
      models:
        "85 个（接口实测）：Claude fable-5 / haiku-4-5 / opus 4-6·4-8·5·5-5 / sonnet 4-6·5·5-5；GPT 5.5 / 5.6-luna·sol·terra / 6-astra·luna·sol / 6.1-sol；Gemini 2.5-3.8；DeepSeek V4.1-Flash / V4-Pro / V4-Flash；GLM 5.1-5.3；Grok 4.6 / 4.7 / 4.20；Kimi K2.7-Code / K3；Qwen 3.6-3.8；MiniMax M2-M3.1；gpt-image 生图",
      experience: "新站开服，冲福利进行中；聊天界面与 API 都可用，接口实测可调通",
      caveat:
        "新站（站内公告发布于收录前一天），站方称可用性功能里渠道显示健康但不一定可用、实际调用可能报错，正在修复。开服冲福利是阶段活动，档位与发放规则以站内公告为准。注册需 QQ 邮箱并完成邮箱验证与人机验证；模型多带上游后缀（apigoto / vyceai / sensenova 等），具体可用性以站内为准。",
      benefits: ["公益站", "QQ 邮箱注册", "注册即用基础套餐", "当前无用量限制", "每日签到", "连续签到 5 天领重置卡", "开服冲福利进行中", "85 个模型", "OpenAI 兼容 /v1 接口", "接口实测可调通"],
      url: "https://arc.103-121-95-72.sslip.io/register?invite=XXPSNBJP",
      tone: "active",
    },
    {
      publishedAt: "2026-10-10 00:00",
      addedAt: "2026-10-10",
      updatedAt: "2026-10-10",
      updateNote: "新收录：付费酒馆站（源头站），QQ 邮箱注册送 30 🍪（用户提供）；115 个模型，按次计费 Claude Opus 5-5 1.6🍪/次、Gemini 3.8 Flash 0.22🍪/次，无签到。三万人福利：限时免费领 500🍪 订阅（两天）。",
      kind: "付费站 / 源头站 / 酒馆向 / 注册送 30 🍪",
      name: "STA1N API",
      summary:
        "付费酒馆站、源头站（用户提供）。QQ 邮箱注册送 30 🍪；按次与按量两种计费：Claude Opus 5-5 1.6🍪/次、Sonnet 5 1.1🍪/次、Gemini 3.8 Flash 0.22🍪/次。含 Claude（Kiro 渠道）/ Gemini 3.1-3.8 / DeepSeek / Kimi-K3 / GLM / 豆包 / NAI 生图等 115 个模型。**三万人福利：限时免费领 500🍪 订阅（两天，含全部 Gemini 与特价 DeepSeek）**。",
      details:
        "站内名称 STA1N API（cdn.sta1n.cn），New API 程序，额度以 🍪（饼干）显示，1 🍪 ≈ ¥0.1（卡网 100 🍪 售价 10 元）。站方公告自述「本站为源头站和 AIRP 最大上游站」，称全站模型假一赔百、发现掺水或非上游 100 倍退款、不记录不保留数据；10 月公告称已运营约 7 个月、用户 3 万。三万人福利（限时活动）：为全站用户准备 500🍪 订阅，含全部 Gemini 模型与特价 DeepSeek（= 官方 200 元额度），48 小时有效，10 月 11 日 2:00 前在钱包用余额兑换领取。模型广场公开可查，共 115 个模型：Claude 走 Kiro 渠道（Opus 5-5 / 5 / 4-8 / 4-7 / 4-6，Sonnet 5-5 / 5 / 4-6），Gemini 3.1-3.8 系列，DeepSeek V4.1 Flash（特价）与 V4 Pro，Kimi-K3、GLM-5.2 / 5.3、豆包、MiniMax、小米 MiMo，另有 NAI 生图（nai-diffusion-4-5 / 5）。模型分 default / Lite / Max / Plus / Pro / Pro+ 等订阅分组与「公益/免费」组（3 个 Gemini lite 免费模型）。国内直连 cdn.sta1n.cn，沿海 / 海外直连 api.sta1n.site；站内另售 NAI 生图密钥（1100 次 ¥9.9 起）。",
      registration: "QQ 邮箱注册（用户提供），需邮箱验证；走邀请链接会弹窗确认邀请人是熟人后才能继续。",
      signupBonus: "注册送 30 🍪（用户提供）；另有三万人限时福利 500🍪 订阅（48 小时有效）",
      dailyCheckin: "无",
      models:
        "Claude（Kiro）Opus 5-5 / 5 / 4-8 / 4-7 / 4-6、Sonnet 5-5 / 5 / 4-6；Gemini 3.1-3.8；DeepSeek V4.1 Flash（特价）/ V4 Pro；Kimi-K3；GLM-5.2 / 5.3；豆包、MiniMax、MiMo；NAI 生图",
      experience: "酒馆向，站内另售 NAI 生图密钥；源头站（用户提供）",
      caveat:
        "付费站，价格以站内模型广场为准（1 🍪 ≈ ¥0.1，卡网 100 🍪 售 10 元）。三万人 500🍪 订阅为限时活动：48 小时有效、需在 10 月 11 日 2:00 前于钱包兑换，规则与截止时间以群内公告和站内显示为准。站方严禁用邀请链接拉陌生人：注册弹窗要求确认邀请人是熟人，若核实链接是陌生人在评论区 / Q 群传播，账号会被永久封禁；恶意批量注册同样封禁。微信支付需去卡网购买兑换码。「源头站」「假一赔百」为站方自述，未独立核实。",
      benefits: ["付费站", "源头站", "酒馆向", "注册送 30 🍪", "三万人福利 500🍪 订阅（限时）", "Claude Opus 5-5", "Kiro 渠道", "115 个模型", "NAI 生图密钥", "QQ 邮箱注册"],
      url: "https://cdn.sta1n.cn/sign-up?aff=7zlp",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-10-09 00:00",
      addedAt: "2026-10-09",
      updatedAt: "2026-10-09",
      updateNote: "注册赠送按站内现状更正为 1 刀（用户提供）；优先级下调，移到付费区末尾。0.25 倍率不降智 GPT、无每日签到不变。",
      kind: "付费站 / 注册送 1 刀 / 0.25 倍不降智 GPT",
      name: "Joja Token",
      egg: true,
      summary:
        "付费新站，走邀请链接注册送 1 刀，GPT 0.25 倍率且不降智（用户提供）。额度按美元显示，注册支持邮箱验证或 GitHub 登录。",
      details:
        "站内名称 Joja Token（jojatoken.com），New API 程序，额度按美元（$）显示。GPT 0.25 倍率、不降智（用户提供）。模型广场公开可查，当前为 8 个 GPT 系模型：gpt-5.5、gpt-5.6-terra、gpt-5.6-sol、gpt-5.6-luna、gpt-6-sol、gpt-6-luna、gpt-6-astra、gpt-6.1-sol，另有 gpt-image 生图系列，分 ChatGPT Pro 与 ChatGPT Image 两个分组；站方公告已上线 GPT-6.1 Sol 与 GPT-6 Sol / Luna。注册支持邮箱验证或 GitHub 登录，有人机验证；站内无每日签到。官方群：QQ 群 376060423、TG 群 t.me/JojaToken。",
      registration: "走邀请链接注册，支持邮箱验证或 GitHub 登录，有人机验证。",
      signupBonus: "注册送 1 刀（用户提供）",
      dailyCheckin: "无",
      models:
        "0.25 倍不降智 GPT（用户提供）；8 个 GPT 系模型（5.5、5.6-terra/sol/luna、6-sol/luna/astra、6.1-sol）与 gpt-image 生图系列",
      experience: "注册送 1 刀、0.25 倍不降智 GPT（均为用户提供）；无签到",
      caveat:
        "付费站，注册赠送金额、0.25 倍率与不降智情况均为用户口径，实际以站内模型广场和消费记录为准；站内无每日签到，注册有人机验证与邮箱验证，具体门槛以注册页为准。",
      benefits: ["付费站", "注册送 1 刀", "0.25 倍不降智 GPT", "8 个 GPT 系模型", "gpt-image 生图", "GitHub 登录"],
      url: "https://jojatoken.com/sign-up?aff=kdie",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-10-07 00:00",
      addedAt: "2026-10-07",
      updatedAt: "2026-10-15",
      updateNote: "签到取消：原「开业第一天签到送 6」已停止，站内现无签到（用户提供）。",
      kind: "付费站 / 0.1 倍不降智 GPT / 开业活动",
      name: "Aotera",
      summary:
        "付费站，Plus 分组 0.1 倍率、GPT 不降智；Pro 0.17 倍、Pro 500 0.24 倍。注册有 Turnstile 人机验证与邮箱验证。无签到。开业活动：进群人数每到一个阶段领红包。",
      details:
        "站内名称 Aotera（aotera.cc），New API 程序，额度按人民币（¥）显示。Plus 分组 0.1 倍率，不降智（已确认）；Pro 0.17 倍、Pro 500 0.24 倍。模型广场公开可查，当前 7 个全是 GPT 系：gpt-6-astra、gpt-6-sol、gpt-6-luna、gpt-6.1-sol、gpt-5.6-luna、gpt-5.6-sol、gpt-5.6-terra，三个分组都能用。注册需邮箱验证并开 Turnstile 人机验证，无 GitHub / Linux DO 登录；站内无签到（原开业第一天签到送 6 已取消）。开业活动：进群人数每到一个阶段领红包，具体规则与结束时间以群内公告和站内显示为准。",
      registration: "邮箱验证注册并完成 Turnstile 人机验证（走邀请链接）。",
      signupBonus: "开业活动：进群人数每阶段领红包（以群内公告为准）",
      dailyCheckin: "无",
      models: "Plus ×0.1（不降智）/ Pro ×0.17 / Pro 500 ×0.24；7 个 GPT 系模型（6-astra、6-sol、6-luna、6.1-sol、5.6-luna/sol/terra）",
      experience: "付费站；Plus 组 0.1 倍不降智 GPT；无签到；进群按人数阶段发红包",
      caveat: "付费站。原开业第一天签到送 6 已取消，站内现无签到（用户提供）。开业活动的进群红包以群内公告和站内显示为准，阶段规则、金额和结束时间可能随时调整。注册有人机验证；模型目前以 GPT 系为主，倍率与可用模型以站内模型广场为准。",
      benefits: [
        "付费站",
        "0.1 倍率不降智 GPT",
        "Pro 0.17 倍",
        "Pro 500 0.24 倍",
        "7 个 GPT 系模型",
        "新站开业",
        "进群按人数阶段领红包",
      ],
      url: "https://aotera.cc/sign-up?aff=NYYY",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-10-07 00:00",
      addedAt: "2026-10-07",
      updatedAt: "2026-10-07",
      updateNote: "注册赠送口径更正：走 aff 注册送 0.1，进群由管理发给 1；不降智 GPT 为 0.07 倍率。注册为邮箱验证。",
      kind: "付费站 / 走 aff 送 0.1、进群领 1 / 0.07 倍不降智 GPT",
      name: "Edge API",
      summary:
        "付费站，走 aff 注册送 0.1、进群由管理发给 1；有 0.07 倍率的不降智 GPT（用户提供）。额度按人民币显示。",
      details:
        "站内名称 Edge API（另有 ai.mxmt.cn 与 ai.femkj.cn 备用入口），New API 程序，额度按人民币显示。注册为邮箱验证：走 aff 注册送 0.1，进群后由管理发给 1。0.07 倍率不降智 GPT 为用户提供。",
      registration: "邮箱验证注册（走邀请链接）；走 aff 注册送 0.1，进群后由管理发给 1。",
      signupBonus: "0.1（走 aff 注册）；进群由管理发给 1",
      dailyCheckin: "以站内实际显示为准",
      models:
        "0.07 倍不降智 GPT（用户提供）；站方公告分组倍率 deepseek / GLM 0.10，Claude-MAX 满血 0.80",
      experience:
        "付费站，走 aff 注册送 0.1、进群由管理发给 1，0.07 倍率不降智 GPT",
      caveat:
        "付费站，充值前先小额验证。注册赠送（走 aff 0.1、进群由管理发给 1）与 0.07 倍率均为用户提供，站方注明倍率不是官方折扣、以模型价格页和消费记录为准。主用 ai.mxmt.cn，备用 ai.femkj.cn 与 ai.lffm.cn。",
      benefits: [
        "付费站",
        "走 aff 注册送 0.1、进群领 1",
        "0.07 倍率不降智 GPT",
        "Claude-MAX 满血 0.80 倍",
        "便宜生图",
        "QQ 群 1094759296",
      ],
      url: "https://ai.lffm.cn/sign-up?aff=Xw7r",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-09-25 00:00",
      addedAt: "2026-09-25",
      updatedAt: "2026-10-07",
      updateNote:
        "补充群公告的权益体系：Go 是 free 的 10 倍，GitHub 点赞可领 Go、开源贡献可领 Pro For OSS；公告称永久有效。其余不变。",
      kind: "公益 API 中转站 / OpenAI 兼容 / 8 个模型",
      recommended: true,
      name: "Axis AI 公益站",
      summary:
        "免费的公益 API 中转站，OpenAI 兼容接口（/v1），当前可用 claude-opus-5.5、claude-sonnet-5.5、gpt-6-astra、gpt-6.1-sol、gpt-6-sol、gpt-6-luna、gpt-5.6-sol、gpt-5.6-luna 共 8 个模型。注册走 OneAuth（QQ 登录）OAuth，需邮箱和 QQ 号，提交后需站方审核。权益分 Go 与 Pro：**Go 是 free 的 10 倍**，去 GitHub 给 ObsidianArc 点 Star 并关注作者（满 5 个）即可申请；有开源贡献的开发者可直接申请 Pro For OSS。国庆期间福利较多，连续签到 5 天得一张重置卡（用户提供）。",
      details:
        "站内名称 Axis AI（ai.onyxaxis.org），站内自述「完全免费的公益 AI 平台」，实际是 API 中转站——提供 OpenAI 兼容接口 /v1，本站早期误记为「非 API 中转的对话平台」，现已更正。用 /v1/models 实测当前有 8 个模型：claude-opus-5.5、claude-sonnet-5.5、gpt-6-astra、gpt-6.1-sol、gpt-6-sol、gpt-6-luna、gpt-5.6-sol、gpt-5.6-luna（同一渠道组 obsidian-arc）。注册方面：只开 OneAuth（QQ 登录）OAuth，注册时必须填用户名，邮箱为必填但暂不强制验证，QQ 号必填，邀请模式为开放；注册、创建 API Key 等环节有 Turnstile 人机验证，提交后需站方审核。站内有重置卡机制，卡片可重置 5 小时 / 周 / 月 / 全部窗口；国庆期间福利较多，连续签到 5 天可得一张重置卡（用户提供）。群公告还列出权益体系，公告称「永久有效，公告还在就是有效」：Go 的额度是 free 的 10 倍——去 github.com/OnyxAxisOwO/ObsidianArc 点 Star 并关注作者，满 5 个 Star 加关注即赠 Go，在站内点升级按钮申请；开源支持 Pro For OSS 面向对 Obsidian Arc 或 Axis AI 有过贡献、或拥有自己独立开源项目的开发者，站内直接申请，管理员按仓库情况提出要求并审批。官方 QQ 群 309623044。",
      registration: "OneAuth（QQ 登录）OAuth 注册，需填用户名、邮箱（必填）和 QQ 号，邀请开放；注册与创建 Key 有 Turnstile 验证，提交后需站方审核。",
      signupBonus: "Go 为 free 的 10 倍（GitHub 点 Star 并关注作者，满 5 个赠送）；开发者可申请 Pro For OSS；另有国庆福利与 5 天签到重置卡",
      dailyCheckin: "有签到；连续签到 5 天得一张重置卡（用户提供）",
      models:
        "OpenAI 兼容 /v1，8 个模型：claude-opus-5.5 / claude-sonnet-5.5 / gpt-6-astra / gpt-6.1-sol / gpt-6-sol / gpt-6-luna / gpt-5.6-sol / gpt-5.6-luna；GPT 不降智（用户提供）",
      experience:
        "免费公益中转站；8 个模型覆盖 Claude opus/sonnet 与 GPT 6 系，GPT 不降智；权益体系 Go（free 的 10 倍）靠 GitHub Star 领取、Pro For OSS 面向开源开发者；接口实测可调通",
      caveat:
        "接口严禁接入 SillyTavern（酒馆）、RisuAI、Agnai 等角色扮演前端，也不得转售或分发 Key 给他人接入——这是站方公告明令禁止的。同时禁止破甲 / 破限 / 越狱提示词、色情及擦边内容、恶意代码与网络攻击等，系统自动检测，一经发现直接永久封号且不予申诉。QQ 号必填，介意的话别注册；注册后需站方审核，不保证即时通过。模型清单随站内调整，以实际可调用为准。",
      benefits: [
        "公益站",
        "完全免费",
        "API 中转站",
        "OpenAI 兼容接口",
        "claude-opus-5.5",
        "claude-sonnet-5.5",
        "gpt-6-astra",
        "gpt-6-sol",
        "gpt-6-luna",
        "GPT 不降智",
        "接口实测可调通",
        "国庆福利",
        "5 天签到得重置卡",
        "重置卡可重置用量窗口",
        "Go 是 free 的 10 倍",
        "GitHub Star 领 Go",
        "Pro For OSS 开源贡献",
        "QQ 群 309623044",
      ],
      url: "https://ai.onyxaxis.org/register?invite=AMMRWZ5P",
      tone: "active",
    },
    {
      publishedAt: "2026-10-06 00:00",
      addedAt: "2026-10-06",
      updatedAt: "2026-10-06",
      updateNote: "新收录：付费站，注册送 1，有签到；33 个模型 13 个分组，grok 分组是 grok-heavy 号池不降智、plus_0720 倍率 0.04。注册只支持 QQ 邮箱。",
      kind: "付费站 / 33 个模型 13 分组 / cc-max 满血",
      name: "SheApi",
      egg: true,
      summary:
        "付费站，注册送 1、签到 0.2 左右。33 个模型分成 13 个分组，低倍率分组有 plus_0720 的 0.04 和 deepseek / glm / kimi 的 0.07；grok 分组 0.09 是 **grok-heavy 号池、不降智**（注意是 Grok 而不是 GPT）；cc-max 是满血且有防封微注入。注册只支持 QQ 邮箱。",
      details:
        "站内名称 SheApi（www.sheapi.top），页脚 © 2026 SheApi，New API 程序，额度按美元显示（汇率约 7.3）。注册只支持 QQ 邮箱，注册环节无人机验证，需邮箱验证；注册送 1，每日签到 0.2 左右（用户提供）。官方提示：注册建议别开梯子，收不到验证码先检查垃圾箱，确定没有的加 QQ 3355691290 手工注册，TG 通知群 t.me/chengcheng2026_bot。模型广场公开可查，33 个模型、13 个分组：cc-max（倍率 1.2，站方称「满血 ccmax，有防封微注入」）、gpt-max（0.6，「满血官 key，无惧官方路由，不降智商」）、pro（0.2，「稳定，快速，Pro 号池，不降智」）、grok（0.09，「grok-heavy 号池，不降智」）、luna（0.3，gpt-5.6-luna 与 gpt-6-luna 专用分组）、plus_0720（0.04，「性价比，gpt 系列，更稳定」）、deepseek / glm / kimi（均 0.07，「自研特供渠道」）、gpt-image-2（1，0.04 每张，1k/2k/4k 生图）、gpt-image-2-原生（1.5，0.06 每张，高画质 4k 接近原生），另有「特殊测试组」（99，站方标注「勿选，仅供管理员测试使用」）。cc-max 分组公告已下架。模型覆盖 Claude opus 5-5 / 5 / 4-8 / 4-7 / 4-6、sonnet 5 / 4-6、fable 5 / 5-1，GPT 6-astra / 6-sol / 6.1-sol / 6-luna / 5.6-luna / 5.6-sol / 5.6-terra / 5.5，Grok 4.5 / 4.6 / 4.7，DeepSeek v4-pro / v4-flash / v4.1-flash，GLM 5.2 / 5.3，Kimi k3，以及 gpt-image-2 系列生图（按张计费）。充值与售卡走 pay.ldxp.cn/shop/QYHYA5BR，客服 QQ 3355691290，退款按余额 90%。",
      registration: "注册只支持 QQ 邮箱，需邮箱验证，无人机验证；注册送 1，每日签到 0.2 左右。",
      signupBonus: "1",
      dailyCheckin: "0.2 左右（用户提供）",
      models:
        "33 个模型 13 分组：cc-max ×1.2（满血、有防封微注入）/ gpt-max ×0.6（满血官 key）/ pro ×0.2（Pro 号池）/ grok ×0.09 / luna ×0.3 / plus_0720 ×0.04 / deepseek、glm、kimi ×0.07；gpt-image-2 按张 0.04、原生版 0.06",
      experience:
        "付费站，注册送 1、有签到；33 个模型 13 个分组，cc-max 满血且带防封微注入，plus_0720 倍率 0.04 最便宜",
      caveat:
        "付费站，充值需另购兑换码（pay.ldxp.cn/shop/QYHYA5BR）或联系客服，退款按余额 90%。注册只支持 QQ 邮箱，官方明确禁止跑蒸馏，发现马上清退且不退款；收不到验证码要加 QQ 3355691290 手工注册。首 Token 延迟高或频繁请求失败时，站方公告建议改用 us.lax.sheapi.top/v1 或 www.sheapi.cc/v1。「特殊测试组」倍率 99，站方标注勿选。各分组倍率与可用性以站内模型广场为准。",
      benefits: [
        "付费站",
        "注册送 1",
        "签到 0.2 左右",
        "33 个模型 13 分组",
        "cc-max 满血",
        "防封微注入",
        "plus_0720 倍率 0.04",
        "grok-heavy 号池不降智",
        "gpt-image-2 生图",
        "只支持 QQ 邮箱",
      ],
      url: "https://www.sheapi.top/sign-up?aff=moEE",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-10-04 00:00",
      addedAt: "2026-10-04",
      updatedAt: "2026-10-04",
      updateNote:
        "注册方式收紧：新注册需要注册满一年的 GitHub 账号，原本可以注册的邮箱注册将不再开放；邮箱注册的老用户请尽快绑定 GitHub，否则账号会被删。其余不变（已换域名为 ai.1tim.com，模型 23 个 8 分组，群友贡献高可用分组与 Kimi 渠道，astra 满血可过糖果题）。补充：该站站长以前开过叫「新云」的付费站，风评不好、闹得不愉快，最后没了。",
      kind: "公益站 / 需一年 GitHub 注册 / 23 个模型 8 分组",
      name: "xxzl 公益站",
      summary:
        "公益站，新注册需要注册满一年的 GitHub 账号，邮箱注册将不再开放；邮箱注册的老用户请尽快绑定 GitHub，否则账号会被删。邀请链接注册送 200、每日签到 5。模型增至 23 个、分 8 个分组，新增「群友贡献高可用」分组与 Kimi 渠道；用户反馈 astra 满血可过糖果题。",
      details:
        "站内名称 xxzl（页脚 xxzlAPI），现域名为 ai.1tim.com（原域名 ai.wv4.cn 已停止解析，两者指向同一台服务器），New API 程序。邀请链接注册送 200、每日签到 5（用户提供）。目前仅支持 GitHub 账号注册，且不限制注册时间（用户提供）；接口侧 GitHub OAuth 与邮箱注册开关都显示为开启，实际以注册页为准。模型广场公开可查，现为 23 个模型、分 8 个分组：Claude 组 6 个（opus 5-5、sonnet 5、opus 5、opus 4-8、opus 4-7、sonnet 4-6），站方自述「不保证高级模型可用，不可用去群友贡献，但是低级一点可以的，不保证长时间高智商」；GPT 组 8 个（gpt-6-astra、gpt-6-sol、gpt-6.1-sol、gpt-6-luna、gpt-5.5、gpt-5.6-luna/sol/terra），站方自述「GPT 懂得都懂可用性不高，如果这个用不了去用群友贡献，随机空降 6-astra 或者 6 系列 sol，保证 luna 模型可用，astra 不降智」；DeepSeek 组 2 个（deepseek-v4.1-flash 与备用 -2），站方自述「超高速 deepseek-v4.1-flash 官方 key，不降智高稳定性，每天共享池 1000 刀用完即没」；GLM 组 1 个（glm-5.3-flash），站方自述「随时拉闸，仅保证 5.3-flash 可用高稳定」；Kimi 组 1 个（kimi-k3-1），站方自述「神秘渠道 kimi3.1 高智商高稳定性可过糖果，感谢某企业贡献，每天共享池 1000 刀」。Claude / GPT / DeepSeek 三个分组各有一个「群友贡献高可用」版本，站方自述在群里发一句「真寻酱捏」即可获得高可用性高智商，可用一些高级分组，但 GPT 群友贡献组提示无账号要等 5 小时，Claude 群友贡献组限制并发。额度按美元显示；站内有签到，支持生图功能与任务功能。",
      registration: "新注册需要注册满一年的 GitHub 账号；邮箱注册将不再开放，已用邮箱注册的老用户请尽快绑定 GitHub，否则账号会被删（用户提供）。",
      signupBonus: "200",
      dailyCheckin: "5",
      models:
        "23 个模型 8 分组：Claude（opus 5-5、sonnet 5、opus 5、opus 4-8、opus 4-7、sonnet 4-6）/ GPT（6-astra、6-sol、6.1-sol、6-luna、5.5、5.6-luna/sol/terra）/ DeepSeek（v4.1-flash 官方 key，每天 1000 刀共享池）/ GLM（5.3-flash）/ Kimi（k3-1 神秘渠道，每天 1000 刀共享池）；另有 Claude / GPT / DeepSeek 各一个群友贡献高可用分组",
      experience:
        "新注册需注册满一年的 GitHub 账号，邮箱注册将不再开放、老用户需绑 GitHub；23 个模型 8 分组，Claude / GPT / DeepSeek 各有群友贡献高可用版本；用户反馈 astra 满血可过糖果题",
      caveat:
        "公益站。额度按美元显示，注册赠送与签到金额由用户提供，具体以站内实际显示为准。注册方式收紧：新注册需要注册满一年的 GitHub 账号，邮箱注册将不再开放，邮箱注册的老用户请尽快绑定 GitHub，否则账号会被删（用户提供）。各分组限制是站方自己写的：普通 Claude / GPT 组可用性不高、模型随机空降，GLM 组随时拉闸，DeepSeek 组与 Kimi 组都是每天 1000 刀的共享池、用完即没；群友贡献高可用分组要在群里发「真寻酱捏」领取，GPT 版无账号需等 5 小时、Claude 版限并发。站长历史：该站站长以前开过一个叫「新云」的付费站，风评不好、闹得不愉快，最后没了（用户提供）。模型清单与分组以站内模型广场为准。",
      benefits: [
        "公益站",
        "邀请注册送 200",
        "签到 5",
        "需一年 GitHub 注册",
        "邮箱注册将不再开放",
        "老用户需绑 GitHub",
        "23 个模型 8 分组",
        "astra 满血可过糖果题",
        "群友贡献高可用分组",
        "Kimi 渠道",
        "DeepSeek 官方 key",
        "支持生图",
      ],
      url: "https://ai.1tim.com/sign-up?aff=TyKU",
      tone: "active",
    },
    {
      publishedAt: "2026-09-26 00:00",
      addedAt: "2026-09-26",
      updatedAt: "2026-09-26",
      updateNote:
        "新增收录：公益站，GitHub 注册（需账号满一年）送 100 刀即到账；有 claude-opus-5、claude-opus-5-5、DeepSeek-V4-Flash、kimi-k3 与生图模型，OpenAI 兼容接口。",
      kind: "公益站 / GitHub 注册满一年 / 注册送 100 刀",
      name: "Artbloom 公益站",
      summary:
        "公益站，通过邀请链接用 GitHub 注册（账号需满一年）送 100 刀，即到账。有 claude-opus-5、claude-opus-5-5、DeepSeek-V4-Flash、kimi-k3 与生图模型，OpenAI 兼容接口，模型页透明计价。",
      details:
        "站内名称 Artbloom（api.artbloom.tech），自研网关程序（非 New API），页脚自述「OpenAI-compatible · Self-hosted」。首页明确所有新账号都送 100 刀（无需绑卡），走邀请链接注册会在注册时激活被邀请奖励；除注册赠送与邀请外，公开页面未发现签到、兑换码等其他获取额度的入口。GitHub 账号需注册满一年。模型与价格在公开模型页透明列出：语言模型按每百万 token 计费——claude-opus-5 与 claude-opus-5-5 均为输入 $2 / 输出 $10，DeepSeek-V4-Flash 与 kimi-k3 均为输入 $1 / 输出 $3；生图 gpt-image-2.5 系列（含 flare、sunburst 变体）按张计费，低/中/高画质分别为 $0.02 / $0.1 / $0.5。接口 OpenAI 兼容：/v1/chat/completions、/v1/images/generations、/v1/images/edits。",
      registration: "通过邀请链接以 GitHub 注册（GitHub 账号需注册满一年）。",
      signupBonus: "100 刀（注册即到账）",
      dailyCheckin: "未提供",
      models:
        "claude-opus-5 / claude-opus-5-5（均 $2 输入、$10 输出每百万 token）/ DeepSeek-V4-Flash / kimi-k3（均 $1 输入、$3 输出）；生图 gpt-image-2.5 系列 $0.02-0.5/张",
      experience: "自研网关，OpenAI 兼容接口，模型页公开透明计价",
      caveat:
        "语言模型按官方价每百万 token 计费，100 刀的 token 量要按这个价折算，不是折扣倍率；GitHub 账号需注册满一年；公开范围内额度来源只有注册赠送和邀请，登录区内是否有其他活动需注册后确认；模型与价格以站内模型页为准。",
      benefits: [
        "公益站",
        "注册送 100 刀",
        "GitHub 注册满一年",
        "claude-opus-5-5",
        "claude-opus-5",
        "DeepSeek-V4-Flash",
        "kimi-k3",
        "生图模型",
        "OpenAI 兼容接口",
      ],
      url: "https://api.artbloom.tech/signup?ref=564I5GN2SY",
      tone: "active",
    },
    {
      publishedAt: "2026-09-26 00:00",
      addedAt: "2026-09-26",
      updatedAt: "2026-09-26",
      updateNote:
        "新增收录：公益站，邀请码注册送 200 次、每拉一人送 100 次、每日签到 20 次；只有 Gemini，全模型 0.02 元/次，不支持充值。",
      kind: "公益站 / 只有 Gemini / 按次计费",
      name: "星桥 公益站",
      summary:
        "公益站，邀请码注册送 200 次，每拉一人再送 100 次，每日签到 20 次；只有 Gemini 系模型，全模型 0.02 元/次按次计费，不支持充值。",
      details:
        "站内名称「星桥」（xingqiao.chat）。额度按次计算：走邀请码注册送 200 次，邀请一人注册再送 100 次，每日签到 20 次。只有 Gemini 系模型，全模型定价 0.02 元/次。不支持充值，额度全靠注册赠送、邀请和签到。注册为邮箱验证，没有 GitHub / Linux DO 登录，注册环节无人机验证；签到已开启（接口确认）。",
      registration: "邮箱验证注册（走邀请链接），无人机验证。",
      signupBonus: "200 次（邀请码注册）；每拉一人再送 100 次",
      dailyCheckin: "20 次",
      models: "只有 Gemini 系（全模型 0.02 元/次）",
      experience: "按次计费，额度以次数计",
      caveat: "只有 Gemini 系模型，想用 Claude / GPT 的别选这个站；次数与价格规则可能调整，以站内实际显示为准。",
      benefits: [
        "公益站",
        "注册送 200 次",
        "邀请一人送 100 次",
        "每日签到 20 次",
        "只有 Gemini",
        "0.02 元/次",
        "不支持充值",
      ],
      url: "https://xingqiao.chat/sign-up?aff=11NC",
      tone: "active",
    },
    {
      publishedAt: "2026-09-26 00:00",
      addedAt: "2026-09-26",
      updatedAt: "2026-09-26",
      updateNote:
        "新增收录：半公益站，注册送 3 元、签到 1 毛左右；模型极多（164 个）以 Claude 系为主，按次计费，k-特惠 opus 0.1078 元/次、sonnet 0.0539 元/次。",
      kind: "半公益站 / 注册送 3 / 模型极多按次计费",
      name: "玖时API 半公益站",
      summary:
        "半公益站，注册送 3 元、有签到；模型极多（164 个）以 Claude 系为主，按次计费——k-特惠 opus 0.1078 元/次、sonnet 0.0539 元/次，另有 gemini、GPT、Grok 与网逆系列。",
      details:
        "站内名称「玖时API」（api.jiushi.xin），额度按元显示。注册送 3 元，每日签到 1 毛左右；注册仅支持邮箱验证，没有 GitHub / Linux DO 登录，注册环节无人机验证。模型广场公开可查，共 164 个模型，以 Claude 系为主：opus 4.5/4.6/4.7/4.8/5、sonnet、fable 各有多个渠道分组，另有 gemini 系列、GPT 与 Grok。按次计费，价格随渠道分组不同：9 月 26 日公告 k-特惠降价后 opus VIP 0.1078 元/次、sonnet VIP 0.0539 元/次；网页逆向系列 0.085 元/次（站方自述非官方直连、介意逆向请勿使用）；官混系列因封控严重 9 月调价至 0.98 元/次。站内有在线充值系统，QQ 售后群 822106149、通知群 1126699954。",
      registration: "邮箱验证注册，无人机验证。",
      signupBonus: "3 元",
      dailyCheckin: "1 毛左右",
      models:
        "164 个，Claude 系为主（opus 4.5-5 / sonnet / fable 多渠道分组）；另有 gemini 系列、GPT、Grok；k-特惠 opus 0.1078 元/次、sonnet 0.0539 元/次",
      experience: "按次计费，价格随渠道分组不同；9 月内多次调价",
      caveat:
        "网页逆向系列为站方自述的非官方直连渠道，介意逆向请勿使用；官混系列封控严重曾调价至 0.98 元/次，价格随上游风控波动频繁，以站内实际显示为准；签到金额可能调整，以站内实际显示为准。",
      benefits: [
        "半公益站",
        "注册送 3 元",
        "签到 1 毛左右",
        "模型极多（164 个）",
        "Claude 系为主",
        "按次计费",
        "k-特惠 opus 0.1078 元/次",
        "在线充值",
        "QQ 售后群",
      ],
      url: "https://api.jiushi.xin/register?aff=KQiA",
      tone: "active",
    },
    {
      publishedAt: "2026-09-25 00:00",
      addedAt: "2026-09-25",
      updatedAt: "2026-09-25",
      updateNote:
        "新增收录：注册送 5000 积分、每日签到 200 左右；公益组 11 个模型倍率 0 为主，另有按次分组（gemini 约 0.015/次、grok 与 GPT 0.01/次），邮箱验证或 GitHub 注册。",
      kind: "公益站 / 注册送 5000 积分 / 签到 200 左右",
      name: "Camila 公益站",
      summary:
        "公益站，注册送 5000 积分、每日签到 200 左右；模型广场公开共 51 个，公益组 11 个模型倍率 0 为主，另有按次专用分组（gemini 约 0.015/次、grok 与 GPT 0.01/次）。邮箱验证注册或 GitHub 注册。",
      details:
        "站内名称就叫「公益站」，这里按域名记作 Camila（free.camila.qzz.io，New API 程序）。额度单位是积分（✨）。注册送 5000 积分，每日签到 200 左右（用户提供，接口确认签到已开启）；支持邮箱验证注册或 GitHub 注册，注册环节无人机验证。模型广场无需登录即可查看，共 51 个模型：公益组 11 个（glm-5.2、glm-5.3-flash、step-3.7-flash、mimo-v2.5、deepseek-v4.1-flash 等，多数倍率 0）；按次专用分组——gemini 专用约 0.015/次（27 个 gemini 模型）、ds 分组 0.019/次、grok 专用 0.01/次、gpt 专用 0.01/次、glm 分组 0.029/次；另有 vip/ssvip/svip/recharge 付费分组和 5 个生图模型。8 月 22 日公告称 gemini 只有一个号、5 小时限额很快、7 天后会添加号池；当前置顶公告为中秋三天「中秋狂欢」分组免费使用全模型，属限时活动。",
      registration: "邮箱验证注册或 GitHub 注册。",
      signupBonus: "5000 积分",
      dailyCheckin: "200 左右",
      models:
        "公益组 11 个（glm-5.2 / glm-5.3-flash / step-3.7-flash / mimo-v2.5 / deepseek-v4.1-flash 等，倍率 0 为主）；按次分组 gemini 约 0.015/次、grok 与 GPT 0.01/次、ds 0.019/次、glm 0.029/次；全站 51 个",
      experience: "模型广场公开可查；公益组多数模型倍率 0",
      caveat:
        "8 月公告称 gemini 只有一个号、5 小时限额很快（称 7 天后加号池，现状以站内为准）；公益组多数模型倍率 0，按次分组价格以站内为准；vip/ssvip/svip/recharge 为付费分组；「中秋狂欢」免费分组是限时活动，过后恢复原规则。",
      benefits: [
        "公益站",
        "注册送 5000 积分",
        "每日签到 200 左右",
        "公益组 11 个模型",
        "倍率 0 为主",
        "gemini 约 0.015/次",
        "grok 与 GPT 0.01/次",
        "GitHub 注册",
        "邮箱验证注册",
        "含生图模型",
      ],
      url: "https://free.camila.qzz.io/sign-up?aff=qF18",
      tone: "active",
    },
    {
      publishedAt: "2026-09-25 00:00",
      addedAt: "2026-09-25",
      updatedAt: "2026-10-14",
      updateNote:
        "签到规则调整：原「每日签到固定领取 1 额度」改为「昨日消费返利」——普通用户返前一日实际消费的 5%，VIP 用户返 10%。注册送 5 元、模型与价格不变。",
      kind: "半公益站 / 酒馆站 / 签到改为昨日消费返利",
      name: "Ovo 半公益站",
      summary:
        "半公益酒馆站，注册送 5 元；**每日签到已改为「昨日消费返利」：普通用户返前一日 API 实际消费的 5%，VIP 返 10%**。有 Claude 和 Gemini，gemini 0.04 元一次、claude-opus-4-6 0.3 元一次。",
      details:
        "站内名称 ovo（ovoapi.cn），面向酒馆（SillyTavern）用户的半公益站，额度按元显示。注册送 5 元。签到规则已调整：不再固定领取 1 额度，改为按「昨日消费返利」发放——普通用户领取前一日 API 实际消费金额的 5%，VIP 用户 10%；也就是说要先有消费才有返利，不消费则签不到额度。站内有 Claude 和 Gemini 可用：gemini 0.04 元一次，claude-opus-4-6 0.3 元一次，均按次计费。",
      registration: "通过邀请链接注册。",
      signupBonus: "5 元",
      dailyCheckin: "昨日消费返利：普通用户返前一日消费的 5%，VIP 返 10%",
      models: "Claude / Gemini（gemini 0.04 元一次、claude-opus-4-6 0.3 元一次）",
      experience: "酒馆站，按次计费；签到改为消费返利，需有消费才有额度回血",
      caveat:
        "签到已由固定额度改为「昨日消费返利」（普通 5%、VIP 10%），不再是无条件领取，规则与比例以站内实际显示为准；模型价格可能调整，可用模型清单以站内为准。",
      benefits: [
        "半公益站",
        "酒馆站",
        "注册送 5 元",
        "签到改为昨日消费返利（普通 5%）",
        "VIP 返 10%",
        "Claude",
        "Gemini",
        "gemini 0.04 元一次",
        "claude-opus-4-6 0.3 元一次",
      ],
      url: "https://ovoapi.cn/sign-up?aff=st79",
      tone: "active",
    },
    {
      publishedAt: "2026-09-24 00:00",
      addedAt: "2026-09-24",
      updatedAt: "2026-10-06",
      updateNote:
        "已上线 gpt-6-luna；补充备用邀请码，卡片旁新增备用注册入口。其余不变（GitHub 或 Linux DO 注册，注册送 20，有签到，速度可能稍微较慢）。",
      kind: "公益站 / GitHub 或 Linux DO 注册 / luna 与 gpt-6-luna",
      name: "hiyo",
      summary:
        "公益站，GitHub 或 Linux DO 注册，注册送 20，有签到；已上线 gpt-6-luna，速度可能稍微较慢。",
      details:
        "走 GitHub 或 Linux DO 注册，注册送 20，站内有签到。已上线 gpt-6-luna（此前称后续上 6-luna）。速度可能稍微较慢，急用的话别抱太高期望。赠送和签到的金额单位以站内实际显示为准。卡片另有备用邀请码注册入口。",
      registration: "GitHub 或 Linux DO 注册。",
      signupBonus: "20",
      dailyCheckin: "有签到（金额以站内显示为准）",
      models: "luna / gpt-6-luna",
      experience: "已上线 gpt-6-luna；速度可能稍微较慢",
      caveat: "目前有 luna 与 gpt-6-luna 可选，选择仍然偏少；速度可能稍微较慢；赠送与签到金额以站内实际显示为准。",
      benefits: ["公益站", "GitHub 注册", "Linux DO 注册", "注册送 20", "有签到", "已上线 gpt-6-luna", "有备用邀请码入口", "速度可能稍慢"],
      url: "https://free.hiyo.top/register?aff=ASBDCX98PNNG",
      altUrl: "https://free.hiyo.top/register?aff=GTV52T7GU2EF",
      altLabel: "备用邀请码注册入口",
      tone: "active",
    },
    {
      publishedAt: "2026-09-21 00:00",
      addedAt: "2026-09-21",
      updatedAt: "2026-10-04",
      updateNote: "国庆活动期间充值 1:1.1。",
      kind: "付费站 / GPT 与 Grok / 倍率约 0.15 / 国庆充值 1:1.1",
      recommended: true,
      name: "zquant",
      summary:
        "付费站，本人充值 20 多；倍率约 0.15，有 GPT 全模型和 Grok，**GPT 不降智**。站内带降智检测和降智雷达——最近 GPT 风控比较严，降智很影响体验，使用前先看降智雷达；进 QQ 群 738420477 可领 1 块钱试用，站内还有签到，每次 0.1-1 刀，但现在需要充值满 20 才能签到。国庆活动期间充值按 1:1.1 算。",
      details:
        "本人充值 20 多的一家付费站。倍率 0.15 左右，模型以 GPT 全模型和 Grok 为主。这家带降智检测：最近 GPT 的风控比较严，降智很影响体验，用之前建议先在站内看降智雷达，确认当前没有降智再上车。想先试试的话可以进官方 QQ 群 738420477 领 1 块钱试用；站内开了签到，每次 0.1-1 刀，但现在需要充值满 20 才能签到。国庆活动期间充值按 1:1.1 算。",
      registration: "通过邀请链接注册；进官方 QQ 群 738420477 可领 1 元试用。",
      signupBonus: "进 QQ 群 738420477 领 1 元试用",
      dailyCheckin: "0.1-1 刀（需充值满 20 才能签到）",
      models: "GPT 全模型 / Grok；GPT 不降智",
      experience: "本人充值 20 多；GPT 不降智，但最近整体风控较严、仍建议看降智雷达",
      caveat:
        "降智是这家目前最需要留意的问题：GPT 风控严的时候体验落差很大，付费前先用 1 元试用加降智雷达确认；倍率约 0.15，降智情况会随上游风控变化，以站内实际显示为准。",
      benefits: ["付费站", "本人充值 20 多", "倍率约 0.15", "GPT 全模型", "Grok", "有降智检测", "降智雷达", "GPT 不降智", "每日签到 0.1-1 刀", "充值满 20 才能签到", "国庆充值 1:1.1", "进 QQ 群领 1 元试用"],
      url: "https://sub2api.zquant.site/register?aff=Y2YY4BZ5MSD4",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-09-21 00:00",
      addedAt: "2026-09-21",
      updatedAt: "2026-09-21",
      updateNote:
        "新增收录：老牌公益站，GitHub 或 Linux DO 注册，每日签到约 1000；含 gpt-5.6-sol、gpt-5.6-terra、z-ai/glm-5.3、z-ai/glm-5.3-flash、moonshotai/kimi-k3 与 deepseek-ai/deepseek-v4-flash-0731。",
      kind: "公益站 / GitHub 或 Linux DO 注册 / 每日签到约 1000",
      name: "星见雅",
      summary:
        "老牌公益站，GitHub 或 Linux DO 注册，可签到；含 gpt-5.6-sol、gpt-5.6-terra、z-ai/glm-5.3、z-ai/glm-5.3-flash、moonshotai/kimi-k3 与 deepseek-ai/deepseek-v4-flash-0731。",
      details:
        "站内名称「星见雅 API」。注册方式为 GitHub 或 Linux DO，支持每日签到。可用模型包括 gpt-5.6-sol、gpt-5.6-terra、z-ai/glm-5.3、z-ai/glm-5.3-flash、moonshotai/kimi-k3 和 deepseek-ai/deepseek-v4-flash-0731。",
      registration: "GitHub 或 Linux DO 注册。",
      signupBonus: "未提供",
      dailyCheckin: "约 1000",
      models: "gpt-5.6-sol / gpt-5.6-terra / z-ai/glm-5.3 / z-ai/glm-5.3-flash / moonshotai/kimi-k3 / deepseek-ai/deepseek-v4-flash-0731",
      experience: "gpt-5.6-sol 用起来怪怪的（用户反馈）",
      caveat: "gpt-5.6-sol 实际使用表现不太对劲，用户反馈「用起来怪怪的」，对该模型有依赖的话先小量试用；签到金额、模型可用性与倍率以站内实际显示为准。",
      benefits: [
        "公益站",
        "老牌公益站",
        "GitHub 注册",
        "Linux DO 注册",
        "每日签到约 1000",
        "gpt-5.6-sol",
        "gpt-5.6-terra",
        "z-ai/glm-5.3",
        "z-ai/glm-5.3-flash",
        "moonshotai/kimi-k3",
        "deepseek-ai/deepseek-v4-flash-0731",
      ],
      url: "https://new.xinjianya.top/register?aff=NTKW",
      tone: "active",
    },
    {
      publishedAt: "2026-09-21 00:00",
      addedAt: "2026-09-21",
      updatedAt: "2026-10-06",
      updateNote:
        "需要绑定 OIDC，否则会删除账号（用户提供）。其余不变（限邮箱注册，每日签到 1-10，进群可再签一次，免费可用 DeepSeek V4.1 Flash）。",
      kind: "公益站 / 邮箱注册 / 需绑定 OIDC / 每日签到 1-10",
      name: "墨白公益站",
      summary:
        "公益站，需要绑定 OIDC，否则会删除账号（用户提供）。限 gmail / 163 / qq / foxmail / icloud 邮箱注册，需邮箱验证和人机验证；每日签到 1-10，注册后加入官方 QQ 群 444158239（进群答案 zakozako）可再签到一次，相当于每天签到两次。免费可用 DeepSeek V4.1 Flash。",
      details:
        "站内名称「墨白 API」，New API 站点，页脚署名 2026 HAGP Team。额度单位是「猫粮」，按美元显示（汇率约 7）。模型广场虽公开列出 936 个模型，但免费实际可用的不多，目前主要是 DeepSeek V4.1 Flash，以站内显示为准。签到方面：站内每日签到 1-10，注册后加入官方 QQ 群 444158239（进群答案 zakozako，用户提供）还能再签到一次，相当于每天签到两次。站方公告：高级模型分组曾因有人拿模型做破甲、逆向、黄文等违规内容，被上游取消合作而下线，9 月 18 日恢复但仅对「正式用户」开放——需在官方 QQ 群内用 /绑定 [网站ID] 完成绑定升级，且公告称部分模型尚未恢复；为保证上游资源，后续还会限制部分免费模型需入群解锁；在群里发言不友好会被直接封号并连坐邀请用户。登录方式除邮箱密码外还支持 Passkey 和 OIDC（HINS Auth）；据用户反馈，现在需要绑定 OIDC，否则账号会被删除。",
      registration: "邮箱注册，限 gmail.com / 163.com / qq.com / foxmail.com / icloud.com，需邮箱验证与人机验证；也支持 Passkey 与 OIDC（HINS Auth）登录。需要绑定 OIDC，否则会删除账号（用户提供）。",
      signupBonus: "未提供固定注册赠送",
      dailyCheckin: "站内每日 1-10；进官方 QQ 群 444158239（进群答案 zakozako）可再签到一次，相当于每天两次",
      models: "DeepSeek V4.1 Flash（模型广场虽列出 936 个，免费可用不多，以站内显示为准）",
      experience: "需要绑定 OIDC，否则会删除账号；公益开放，官方明示可用性不保证，免费模型为共享资源，人多时可能 429",
      caveat:
        "需要绑定 OIDC，否则会删除账号（用户提供）。站方公告：有人用模型做破甲、逆向、黄文等违规内容导致上游取消合作，高级模型分组被下线后虽恢复但仅对入群绑定的正式用户开放，且部分模型未恢复；后续部分免费模型也需入群解锁，群内发言不友好会封号并连坐邀请用户；Grok 系列 9 月 17 日起因服务器脱网暂不可用；签到金额、免费模型范围与限流规则以站内实际显示为准。",
      benefits: [
        "公益站",
        "邮箱注册",
        "每日签到 1-10",
        "进群可再签到一次",
        "相当于每天签到两次",
        "DeepSeek V4.1 Flash",
        "需绑定 OIDC，否则删号",
        "支持 Passkey / OIDC 登录",
      ],
      url: "https://new.ai.hinswu.top/sign-up?aff=L6as",
      tone: "active",
    },
    {
      publishedAt: "2026-09-20 00:00",
      addedAt: "2026-09-20",
      updatedAt: "2026-09-20",
      updateNote:
        "新增收录：已重新开放注册，注册送 20 额度、每日随机签到 1-10 刀；含 Gemini、DeepSeek、GLM-5.3-Flash，按量与按次两种计费，按次每次 0.2。",
      kind: "公益站 / 邀请链接注册 / 注册送 20 签到 1-10 刀",
      name: "Piu酱",
      summary:
        "公益站，已重新开放注册（先到先得）；注册送 20 额度，每日随机签到 1-10 刀。含 gemini-3.8-flash-medium、gemini-3-pro、DeepSeek V4.1 Flash、GLM-5.3-Flash 等 14 个模型，按量与按次两种计费，按次每次 0.2。",
      details:
        "New API 站点，站内名称「Piu 酱」，2026 年 8 月 31 日开站测试，9 月 3 日设置签到额度，属较新的站点。通过邀请链接注册，需要邮箱验证，没有人机验证码；9 月 20 日已重新开放注册。模型广场无需登录即可查看，共 14 个模型：gemini-3.8-flash-medium、gemini-3.7-flash-medium、gemini-3-pro、gemini-3.1-pro、deepseek/deepseek-v4.1-flash、deepseek-ai/DeepSeek-V4-Flash-0731、zai-org/GLM-5.3-Flash、z-ai/glm-5.3-flash、mimo-v2.5-pro 等。计费分两种：4 个带「次」后缀的 gemini 模型（gemini-3-pro次、gemini-3.1-pro次、gemini-3.8-flash-medium次、gemini-3.7-flash-medium次）为按次计费，每次固定 0.2，不看 token；其余模型按倍率，其中 GLM-5.3-Flash、DeepSeek 与 MiMo 等模型倍率为 0。注册送 20 额度，每日签到随机得 1-10 刀。站内公告另有一个约 2 元的回血链接，可获取 100 刀额度卡密。",
      registration: "通过邀请链接注册，需邮箱验证（2026-09-20 已重新开放注册）。",
      signupBonus: "20 额度",
      dailyCheckin: "随机 1-10 刀",
      models: "gemini-3.8-flash-medium / gemini-3-pro / gemini-3.1-pro / deepseek-v4.1-flash / GLM-5.3-Flash / mimo-v2.5-pro 等 14 个（公开模型广场核实）",
      experience: "按次每次 0.2；GLM、DeepSeek、MiMo 等模型倍率为 0",
      caveat: "8 月底才开站，属新站，稳定性有待观察；用户反馈注册先到先得，可能再次关闭；注册赠送额度、签到金额与模型可用情况以站内实际显示为准。",
      benefits: [
        "公益站",
        "已重新开放注册",
        "邀请链接注册",
        "注册送 20 额度",
        "每日随机签到 1-10 刀",
        "gemini-3.8-flash-medium",
        "gemini-3-pro",
        "DeepSeek V4.1 Flash",
        "GLM-5.3-Flash",
        "按次每次 0.2",
        "部分模型倍率 0",
      ],
      url: "https://piu.du4s.com/sign-up?aff=SjXZ",
      tone: "active",
    },
    {
      publishedAt: "2026-09-19 00:00",
      addedAt: "2026-09-19",
      updatedAt: "2026-09-19",
      updateNote:
        "新增收录：GitHub 注册送 20 元、每日签到 10 元；含 gemini-3.8-flash-high、gpt-6-astra、gpt-5.6-sol 等 15 个模型，排在公益区首位。",
      updatedAt: "2026-09-24",
      updateNote: "站点服务器此前忘记续约，需要重新注册；注册链接已更新。",
      kind: "公益站 / GitHub 注册 / 注册送 20 签到 10",
      name: "StarBridge 公益站",
      summary:
        "公益站，GitHub 注册送 20 元、每日签到 10 元；含 gemini-3.8-flash-high、gpt-6-astra、gpt-5.6-sol 等 15 个模型，额度按元显示。站点服务器此前忘记续约，需要重新注册。",
      details:
        "站内名称 StarBridge（api.careke.cn）。通过 GitHub 注册送 20 元，每日签到 10 元；模型广场无需登录即可查看，共 15 个模型，除 gemini-3.8-flash-high、gpt-6-astra、gpt-5.6-sol 外，还有 claude-sonnet-4-6、gpt-5.6-terra、gpt-5.6-luna、gpt-5.5 与多款 Gemini Flash 系列。注意：站点服务器此前忘记续约，原账号需要重新注册；站点 9 月 18 日还发布过公告，称对部分接口实施限时开放、部分模型限量供应并暂停新用户注册，注册改走 GitHub，同时提示 Google 系模型限速、部分账号额度耗尽或请求失败。注册与模型可用情况请以站内实际为准。",
      registration: "GitHub 注册；站点服务器此前忘记续约，原账号需要重新注册。",
      signupBonus: "20 元",
      dailyCheckin: "10 元",
      models: "gemini-3.8-flash-high / gpt-6-astra / gpt-5.6-sol / claude-sonnet-4-6 / gpt-5.6-terra / gpt-5.6-luna / gpt-5.5 等 15 个（公开模型广场核实）",
      experience: "暂无实测速度反馈；站方公告提示部分模型限量供应",
      caveat:
        "站点服务器此前忘记续约，原账号需重新注册；站内 9 月 18 日公告曾称暂停新用户注册、部分接口限时开放、部分模型限量供应，注册改走 GitHub；Gemini 系模型占比高，受 Google 限速调整影响的可能性较大；额度、签到与模型以站内实际显示为准。",
      benefits: [
        "公益站",
        "GitHub 注册",
        "注册送 20 元",
        "每日签到 10 元",
        "gemini-3.8-flash-high",
        "gpt-6-astra",
        "gpt-5.6-sol",
        "含 Claude 与多款 Gemini/GPT",
        "模型广场公开可查",
        "需重新注册",
      ],
      url: "https://api.careke.cn/sign-up?aff=MYwA",
      tone: "active",
    },
    {
      publishedAt: "2026-09-15 00:00",
      addedAt: "2026-09-15",
      updatedAt: "2026-09-15",
      updateNote: "新增收录：半公益站，邮箱或手机注册送 100 算力，每日随机签到 100-200 算力，常见国产模型和 GPT、Claude 都有，调用速度快。",
      kind: "半公益站 / 邮箱或手机注册 / 每日签到 100-200 算力",
      name: "Orevx Engine 半公益站",
      summary:
        "半公益站，邮箱或手机注册送 100 算力，每日随机签到 100-200 算力；常见国产模型和 GPT、Claude 都有，调用速度快，模型使用界面在 /llm-dashboard。",
      details:
        "一站式 AI 创作与智能工作平台，除 LLM API 外还自带对话、绘图、视频、音乐与工作流等功能。额度单位叫「算力」：新用户注册送 100 算力，每日签到随机得 100-200 算力（签到为随机模式，上下限已由站方公开配置确认）；站点同时开放支付宝与微信支付的订阅和充值，所以归半公益而非纯公益。注册支持邮箱或手机号，邮箱仅限 qq.com / 163.com / gmail.com / outlook.com / hotmail.com，且要求同时绑定邮箱和手机号。模型调用界面在 https://orevx.ai/llm-dashboard/ 。",
      registration: "邮箱或手机号注册（邮箱仅限 qq.com / 163.com / gmail.com / outlook.com / hotmail.com），注册后需同时绑定邮箱和手机号。",
      signupBonus: "100 算力",
      dailyCheckin: "随机 100-200 算力",
      models: "常见国产模型 / GPT / Claude（可用模型很多，不逐项列举，以站内 llm-dashboard 显示为准）",
      experience: "用户反馈调用速度快",
      caveat: "可用模型很多，不逐项列举，具体以站内 llm-dashboard 显示为准；签到为随机额度，每次金额不固定；站点同时经营付费订阅，免费额度规则可能随时调整。",
      benefits: ["半公益站", "邮箱或手机注册", "注册送 100 算力", "每日随机签到 100-200 算力", "常见国产模型与 GPT/Claude", "速度快", "llm-dashboard 调用界面", "支持支付宝/微信订阅"],
      url: "https://orevx.ai/login?mode=register&inviteCode=FAGCRGAT",
      tutorialUrl: "https://orevx.ai/llm-dashboard/",
      tutorialLabel: "模型使用界面（llm-dashboard）",
      tone: "active",
    },
    {
      publishedAt: "2026-09-13 00:00",
      addedAt: "2026-09-13",
      updatedAt: "2026-09-13",
      updateNote: "新增收录：邀请注册送 0.2 刀，每日签到 5 刀，有 Claude 和 DeepSeek，酒馆站；可写代码，不可破限。",
      kind: "公益站 / 邀请注册送 0.2 刀 / 酒馆站",
      name: "Ksir的小饭锅",
      summary: "公益酒馆站，邀请注册送 0.2 刀、每日签到 5 刀；站内有 Claude 和 DeepSeek 可用，可以写代码，但不可破限。",
      details:
        "面向酒馆（SillyTavern）用户的公益站。走邀请链接注册送 0.2 刀，每日签到得 5 刀，额度主要靠签到维持；站内有 Claude 和 DeepSeek 可用，写代码没问题，但不允许破限（越狱、绕过内容审核）。倍率和模型清单以站内实际显示为准。",
      registration: "通过邀请链接注册。",
      signupBonus: "0.2 刀",
      dailyCheckin: "5 刀",
      models: "Claude / DeepSeek",
      experience: "酒馆站，可写代码，禁止破限",
      caveat: "破限（越狱、绕过内容审核）不被允许，想拿它跑这类内容的话别用这个站；倍率、模型清单和规则可能调整，请以站内实际显示为准。",
      benefits: ["公益站", "酒馆站", "邀请注册送 0.2 刀", "每日签到 5 刀", "可写代码", "不可破限", "Claude", "DeepSeek"],
      url: "https://api.biliksir.ggff.net/sign-up?aff=q3ep",
      tone: "active",
    },
    {
      publishedAt: "2026-09-09 00:00",
      addedAt: "2026-09-09",
      updatedAt: "2026-09-09",
      updateNote: "新增收录：GitHub 注册，0 付费，签到约 0.1。",
      kind: "公益站 / GitHub 注册 / 0 付费",
      name: "Txcxgzs 公益站",
      summary: "GitHub 注册，0 付费；主要提供 free2-glm-5.3-flash、free2-qwen3.8-flash、free2-mimo-v2.5，另有 nvd-minimaxai/minimax-m3，签到约 0.1。",
      details:
        "主要模型是 free2-glm-5.3-flash、free2-qwen3.8-flash 和 free2-mimo-v2.5，另有 nvd-minimaxai/minimax-m3。站点支持 GitHub 注册，当前不需要付费，签到约 0.1。",
      registration: "GitHub 注册。",
      signupBonus: "0 付费",
      dailyCheckin: "约 0.1",
      models: "free2-glm-5.3-flash / free2-qwen3.8-flash / free2-mimo-v2.5 / nvd-minimaxai/minimax-m3",
      experience: "前面三个 free2 模型为主，当前 0 付费",
      caveat: "额度、签到和模型可用性可能调整，请以站内实际显示为准。",
      benefits: ["GitHub 注册", "0 付费", "签到约 0.1", "free2-glm-5.3-flash", "free2-qwen3.8-flash", "free2-mimo-v2.5", "nvd-minimaxai/minimax-m3"],
      url: "https://ai.txcxgzs.com/sign-up?aff=VegH",
      tone: "active",
    },
    {
      publishedAt: "2026-09-09 00:00",
      addedAt: "2026-09-09",
      updatedAt: "2026-09-09",
      updateNote: "新增收录：微信注册，签到约 1 元临时额度，每月月底清空。",
      kind: "半公益站 / 微信注册 / 月底清空临时额度",
      name: "咕嘎咕嘎",
      summary: "微信注册，签到可获得约 1 元临时额度，每月月底清空；含 Gemini-3.7-Flash、GLM-5.3-Flash、GPT-5.6-sol、GPT-Image-2、Grok-4.6 与 Qwen3.8-Flash。",
      details:
        "支持微信注册，签到可获得约 1 元临时额度，但每个月月底会清空。已知模型有 Gemini-3.7-Flash、GLM-5.3-Flash、GPT-5.6-sol、GPT-Image-2、Grok-4.6 和 Qwen3.8-Flash；价格为 1/1/0.1（输入/输出/缓存）。",
      registration: "微信注册。",
      signupBonus: "签到临时额度",
      dailyCheckin: "约 1 元（临时额度）",
      models: "Gemini-3.7-Flash / GLM-5.3-Flash / GPT-5.6-sol / GPT-Image-2 / Grok-4.6 / Qwen3.8-Flash",
      experience: "签到额度每月底清空；模型价格为 1/1/0.1",
      caveat: "签到所得为临时额度，每月月底清空；模型列表、价格和额度规则请以站内实际显示为准。",
      benefits: ["微信注册", "签到约 1 元临时额度", "每月底清空", "Gemini-3.7-Flash", "GLM-5.3-Flash", "GPT-5.6-sol", "GPT-Image-2", "Grok-4.6", "Qwen3.8-Flash", "价格 1/1/0.1"],
      url: "https://ai.xmiaom.com/sign-up?aff=04Qy",
      tone: "active",
    },
    {
      publishedAt: "2026-09-09 00:00",
      addedAt: "2026-09-09",
      updatedAt: "2026-09-09",
      updateNote: "新增收录：GitHub 注册，注册送 5，签到 15-25。",
      kind: "公益站 / GitHub 注册 / 套餐日卡",
      name: "Hyper 公益站",
      summary: "GitHub 注册，注册送 5，签到 15-25；可用 gpt-5.6-sol、gpt-5.6-terra、gpt-5.6-luna、gpt-5.3-codex-spark、gpt-5.5 及多个免费模型。",
      details:
        "支持 GitHub 注册，注册送 5，签到 15-25。已知模型包括 gpt-5.6-sol、gpt-5.6-terra、gpt-5.6-luna、gpt-5.3-codex-spark、gpt-5.5、free2-glm-5.3-flash、free2-qwen3.8-flash、grok-4.5 和 deepseek-ai/DeepSeek-V4-Flash-0731。可以挂全局代理，但有地区限制；使用时需要去钱包购买套餐日卡，5 的余额可用 20。",
      registration: "GitHub 注册。",
      signupBonus: "5",
      dailyCheckin: "15-25",
      models: "gpt-5.6-sol / gpt-5.6-terra / gpt-5.6-luna / gpt-5.3-codex-spark / gpt-5.5 / free2-glm-5.3-flash / free2-qwen3.8-flash / grok-4.5 / deepseek-ai/DeepSeek-V4-Flash-0731",
      experience: "可挂全局代理，但有地区限制",
      caveat: "使用时需要在钱包里购买套餐日卡；5 的余额可用 20。地区限制、代理要求和套餐规则可能调整，请以站内实际显示为准。",
      benefits: ["GitHub 注册", "注册送 5", "签到 15-25", "可挂全局代理", "地区限制", "套餐日卡 5 可用 20", "gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna", "gpt-5.3-codex-spark", "gpt-5.5"],
      url: "https://ai.hyper.nyc.mn/sign-up?aff=IY2B",
      tone: "active",
    },
    {
      publishedAt: "2026-09-02 00:00",
      addedAt: "2026-09-02",
      updatedAt: "2026-09-07",
      updateNote: "密码注册已关闭，改成 GitHub 注册；签到统一约 50；补上 OpenAI 模型仅限 Codex 内使用的规定。",
      kind: "公益站 / GitHub 注册 / OpenAI 仅限 Codex",
      name: "MotoMoto",
      summary: "注册送 50 刀（注册 30 + 邀请码 20），倍率 1x，每日签到约 50。密码注册已关闭，新用户只能用 GitHub 注册；老账号还能用密码登录但必须尽快绑定 GitHub，否则按刷号处理。注意站方规定 OpenAI 模型只能在 Codex 里用，接到其他智能体按违规处理。",
      details:
        "OpenAI 兼容接口，base 地址 https://motomoto.lol/v1，令牌在控制台创建。已知模型有 gpt-5.5 和 gpt-5.6-sol。注册即送 30，走邀请链接再加 20，合计 50；倍率 1x。每日签到现在统一约 50，站方 9 月 3 日的公告就是这个数；此前记的「开数据授权 50、不开 10」两档现在是否还成立没有核实，隐私政策里的训练数据授权条款仍在，跑敏感内容的话自己去设置里看一眼。注册方式已改：站方 9 月 7 日关闭了密码注册，新用户走 GitHub 授权注册（站点开了 Turnstile 验证）；此前用用户名密码注册的账号还能用原密码登录，但要进「个人设置」绑定 GitHub，没绑的会被按刷号违规暂停。另外邀请奖励 100，需对方产生约 2 的真实消耗后才发放，每天最多 3 人、累计 20 人。站方明确写了额度是站内记账、不是现金，长时间不用余额会被清零。",
      registration: "GitHub 授权注册（密码注册已于 2026-09-07 关闭）。老账号仍可用原密码登录，但必须进「个人设置」绑定 GitHub，否则按刷号违规暂停使用。",
      signupBonus: "50 刀（注册 30 + 邀请码 20）",
      dailyCheckin: "约 50",
      models: "gpt-5.5、gpt-5.6-sol（OpenAI 兼容，倍率 1x）",
      experience: "倍率 1x、签到约 50；OpenAI 模型限 Codex 内使用",
      caveat: "**站方规定 OpenAI 模型只能在 Codex 里用，接到其他第三方智能体按违规处理**——拿它跑 Claude Code 之类的客户端属于违规，注意别踩。站规还禁止多开账号、脚本注册或签到、刷额度、倒卖密钥与额度、越狱提示与绕过内容审核，一经查实直接封号、额度作废不退不补；9 月 5 日刚因大量违规封过一批号并短暂停服，误封可走 /appeal 申诉。隐私政策里有训练数据授权条款：授权后站方可能存储或采样你的提示词、模型输出和工具调用用于训练、微调、蒸馏和评测，已进入训练的部分通常无法单独剔除，跑敏感内容前自己去设置里确认开关状态（签到金额现在统一约 50，和这个开关还有没有关系我没核实）。额度是站内记账、不是现金，长时间不用会被清零；站点上线不久，稳定性和额度政策都可能变。",
      benefits: ["GitHub 注册", "老账号需绑定 GitHub", "注册送 50 刀", "倍率 1x", "签到约 50", "OpenAI 仅限 Codex 内使用", "严禁多开与刷额度", "闲置余额清零"],
      url: "https://motomoto.lol/sign-up?aff=91Tp",
      tutorialUrl: "https://motomoto.lol/privacy",
      tutorialLabel: "先看隐私政策里的训练数据授权条款",
      tone: "active",
    },
    {
      publishedAt: "2026-08-31 00:00",
      addedAt: "2026-08-31",
      updatedAt: "2026-10-07",
      updateNote: "换域名为 gcmod.bond（原 zc.gcmod.cn 已停用），注册链接改用新域名；新增 Kimi-K3 并已移到公益区前列。",
      kind: "半公益站 / 一分钱一次",
      name: "GcmodAi",
      summary: "全部模型按次计费，每次请求一分钱（0.01 元），不看 token 用量。注册送 1 块，现已开签到，每天约 1 毛、够跑十次请求；订阅两档也划算——5 元每周重置 30 元额度，20 元每天重置 300 元额度。含 Kimi-K3、GPT-5.6-luna 与 DeepSeek V4 Pro。",
      details:
        "计费方式是固定单价而不是倍率：全部模型统一每次请求一分钱，跟这次请求用了多少 token 无关，长上下文的任务会比较划算。注册送 1 块，按这个价算够跑一百次请求。站点现在开了签到，每天约 1 毛，折算下来是十次请求——不多，但额度能自己回来了，轻量用途可以靠它续着。想跑量就走订阅，有两档：基础套餐 5 元，有效期一个月、每周重置额度、总额度 30 元；高级套餐 20 元，有效期一个月、每天重置额度、总额度 300 元，两档都升级到 VIP 分组。按一分钱一次折算，高级套餐每天重置的 300 元约等于三万次请求。另外也支持普通充值，比例 1:1。已知可用模型包括 Kimi-K3、GPT-5.6-luna 和 DeepSeek V4 Pro。",
      registration: "通过邀请链接注册即可，注册后送 1 块。",
      signupBonus: "1 块（约 100 次请求）",
      dailyCheckin: "约 1 毛（约 10 次请求）",
      models: "Kimi-K3 / GPT-5.6-luna / DeepSeek V4 Pro",
      experience: "全模型每次请求一分钱；签到够轻量用，跑量走订阅",
      caveat: "签到每天约 1 毛，只够十次请求，跑量还是得订阅或充值（1:1）。订阅套餐价格和额度都是人民币（5 元 / 30 元额度每周重置，20 元 / 300 元额度每天重置），有效期都是一个月。签到金额、并发和具体模型清单以站内实际显示为准，套餐价格与额度也可能调整。",
      benefits: ["每次请求一分钱", "不按 token 计费", "注册送 1 块", "每日签到约 1 毛", "20 元档每天重置 300 元额度", "5 元档每周重置 30 元额度", "订阅升 VIP 分组", "充值 1:1", "Kimi-K3", "GPT-5.6-luna", "DeepSeek V4 Pro"],
      url: "https://gcmod.bond/register?aff=4wem",
      tone: "active",
    },
    {
      publishedAt: "2026-08-20 10:15",
      updatedAt: "2026-09-21",
      updateNote:
        "站内模型已换成 Claude Opus 4.8（Kiro 渠道）；有部分用户反馈存在偷数据和注入问题，不要用在隐私场景，使用时盯着提示词。",
      kind: "公益站 / Claude Opus 4.8 / Kiro 渠道",
      name: "JustWoker 公益站",
      summary:
        "站内模型已换成 Claude Opus 4.8，走 Kiro 渠道；调用站内模型请使用 /v1/messages。有部分用户反馈存在偷数据和注入问题，不要用在隐私场景，使用时盯着提示词。",
      details:
        "JustWoker 此前以 GPT 线路恢复，现在站内模型已换成 Claude Opus 4.8，渠道是 Kiro。调用站内模型请使用兼容接口的 /v1/messages 路径。需要注意：有部分用户反馈该渠道存在偷数据和注入问题，所以不要用在隐私场景，使用时盯着提示词，发现不对就停。此前已知注册需要 GitHub 账号且账号注册时间满 1 年；注册赠送、每日签到和倍率以站内实际显示为准。",
      registration: "此前需使用注册满 1 年的 GitHub 账号；当前注册状态与门槛以注册页实际显示为准。",
      signupBonus: "以站内当前显示为准",
      dailyCheckin: "以站内当前显示为准",
      models: "Claude Opus 4.8（Kiro 渠道，调用请使用 /v1/messages）",
      experience: "已恢复可用；当前为 Claude Opus 4.8，走 Kiro 渠道",
      caveat:
        "有部分用户反馈该渠道存在偷数据和注入问题：不要用在隐私场景，使用时盯着提示词；模型调用请使用 /v1/messages。注册门槛、赠送、签到、倍率和稳定性未复核，请以站内实际规则为准。",
      benefits: ["已恢复可用", "Claude Opus 4.8", "Kiro 渠道", "调用使用 /v1/messages", "GitHub 账号门槛以站内为准", "勿用于隐私场景"],
      url: "https://api.justwoker.icu/sign-up?aff=T5tm",
      tone: "active",
    },
    {
      publishedAt: "2026-08-18 17:13",
      updatedAt: "2026-10-06",
      updateNote: "现在需要注册码才能注册。",
      kind: "需注册码 / 半公益站",
      name: "Sulmate 半公益站",
      summary: "现在需要注册码才能注册。原有公益组全站共享 1x，VIP 组支持付费调用。",
      details:
        "现在需要注册码才能注册。此前分为公益组和 VIP 组：公益组使用全站共享额度，VIP 组支持付费调用。已有账号的分组、签到和调用规则请以站内当前说明为准。",
      registration: "现在需要注册码才能注册。",
      signupBonus: "需注册码；原为公益池共享额度",
      dailyCheckin: "已有账号以站内规则为准",
      experience: "需注册码注册；公益组 1x，VIP 组 0.15x",
      caveat: "现在需要注册码才能注册。已有账号的公益池、签到奖励、VIP 价格和分组规则也可能调整，请以站内实际说明为准。",
      benefits: ["需注册码", "原公益组全站共享", "VIP 付费调用", "VIP 倍率 0.15x", "公益倍率 1x"],
      url: "https://free.sulmate.cn/sign-up?aff=E4io",
      tone: "closed",
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
      tone: "active",
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
      updatedAt: "2026-10-16",
      updateNote: "DeepSeek 在站内模型列表里显示为 deepseek-v4-flash，实际做了映射，等价于 deepseek-v4.1-flash（用户提供）。",
      kind: "公益站 / 每天 10 点、19 点放出 GPT 与 Claude",
      recommended: true,
      name: "AgentRouter",
      summary: "GPT（Azure 渠道，不降智）与 Claude 模型每天 10 点和 19 点定时放出，DeepSeek 为 deepseek-v4.1-flash。注册送 75 刀、每日签到 25 刀。国内打不开原站可直接走卡片上的国内注册入口。",
      details:
        "GPT 走 Azure 渠道、不降智，与 Claude 一样每天 10 点和 19 点定时放出，其余时间可能不可用；DeepSeek 提供 deepseek-v4.1-flash（站内模型列表显示为 deepseek-v4-flash，是映射后的名字）。注册送 75 刀、每日签到 25 刀，速度快且稳定。GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以使用 Linux Do 账号。国内无法访问原站时，用卡片下方的「国内注册入口」按钮直接注册即可，注册要求与原地址一致，也无需代理。站长表示正常使用可能获得消耗额度补充或 Core 分组（标注 0.8 折）奖励，具体获取和发放规则尚未确认。",
      registration: "GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号；国内走「国内注册入口」，要求一致。",
      signupBonus: "75 刀",
      dailyCheckin: "25 刀",
      models: "GPT 不降智（Azure 渠道）/ Claude / DeepSeek V4.1 Flash",
      experience: "模型每天 10 点和 19 点定时放出；速度快且稳定",
      caveat: "GPT 与 Claude 每天 10 点和 19 点定时放出，其余时间可能不可用。签到需退出账号后重新登录才会生效；具体倍率与可用模型以站内显示为准。正常使用奖励机制仍待确认。",
      benefits: ["GPT 不降智（Azure 渠道）", "每天 10 点、19 点放出模型", "Claude 模型", "DeepSeek V4.1 Flash", "注册送 75 刀", "每日签到 25 刀", "老号门槛", "有国内入口", "站长推荐"],
      url: "https://agentrouter.org/register?aff=i3Xz",
      altUrl: "https://ps.air-outer.com/register?aff=i3Xz",
      altLabel: "国内注册入口（无需代理）",
      tutorialUrl: "https://linux.sb/topic/13130",
      tutorialLabel: "国内无需代理注册 AgentRouter 教程",
      tone: "active",
    },
    {
      publishedAt: "2026-08-26 00:00",
      updatedAt: "2026-09-07",
      updateNote: "排序略微下调。",
      quietUpdate: true,
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
      addedAt: "2026-08-24",
      updatedAt: "2026-09-25",
      updateNote: "域名 beizhi.dedyn.io 现已支持 https 访问。",
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
      caveat: "每分钟最多 15 次请求，不适合 Agent 或自动化高频任务；站点由个人维护，不提供商业 SLA，请勿用于生产环境。域名已更换为 beizhi.dedyn.io，现已支持 https 访问。",
      benefits: ["免费国产模型", "签到额度较多", "Gemini 新模型", "Claude", "统一 OpenAI 格式接口", "一键切换模型"],
      url: "https://beizhi.dedyn.io/sign-up?aff=hk5Q",
      tone: "active",
    },
    {
      publishedAt: "2026-08-24 00:00",
      updatedAt: "2026-08-29",
      updateNote: "签到改为必须先进 QQ 群，在群精华里取当期签到码。",
      kind: "付费站 / 有签到",
      pricing: "paid",
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
      tone: "active",
    },
    {
      publishedAt: "2026-08-14 00:00",
      kind: "长期自用 / 老牌中转",
      pricing: "paid",
      name: "Hubway",
      summary: "老牌中转，本人充值 50 长期自用；注册并进群送 10，充值比例 1:10，标示倍率约 0.6 但实际约 0.06。",
      details:
        "我自己充了 50 长期用着的一家，作为备用线路比较稳。注册并进群可得 10。充值比例 1:10；站内标示倍率约 0.6，实际计费下来约 0.06。",
      registration: "通过注册链接注册，并加入官方群可领 10。",
      signupBonus: "进群送 10",
      dailyCheckin: "未提供",
      models: "未逐项核实",
      experience: "本人充值 50 长期自用，作为备用线路较稳",
      caveat: "付费站，注册赠送只有进群那 10。标示倍率与实际倍率不一致（约 0.6 对约 0.06），以站内实际计费为准。",
      benefits: ["长期自用", "本人充值 50", "进群送 10", "充值比例 1:10", "标示倍率约 0.6", "实际倍率约 0.06"],
      url: "https://hubway.cc/register?aff=H8ET6TLL4AEP",
      tone: "active",
    },
    {
      publishedAt: "2026-08-14 00:00",
      updatedAt: "2026-09-24",
      updateNote: "补充：进群可以看到各个渠道的智力状态，挑渠道前可以先看一眼。",
      kind: "长期自用 / 多上游聚合",
      pricing: "paid",
      name: "AIHub",
      summary:
        "本人实测，聚合多家上游可自选渠道，渠道异常时支持自动切换，适合持续工作；进群送 10 刀，L 站好评再送 10 刀，最低倍率 0.06。进群还能看到各个渠道的智力状态。",
      details:
        "聚合了多家上游，可以自行选择渠道；渠道出问题时支持自动切换，适合需要长时间连续跑的场景。进群送 10 刀，在 L 站好评可再送 10 刀。最低倍率 0.06。进官方群后还能看到各个渠道的智力状态，挑渠道之前可以先看一眼，避开正在降智或掺水的渠道。自动切换的具体策略我没确认；我没有 L 站账号，所以那 10 刀好评赠送没领过。据站长说明，站方会主动检测渠道，发现掺水或投毒会退款。",
      registration: "注册后加入官方群可领 10 刀；有 L 站账号的话，好评可再领 10 刀。",
      signupBonus: "进群送 10 刀（L 站好评再送 10 刀）",
      dailyCheckin: "未提供",
      models: "多家上游聚合，可自选渠道",
      experience: "本人实测；渠道异常可自动切换，适合持续工作；进群可看各渠道智力状态",
      caveat: "付费站。自动切换的具体策略待确认；L 站好评赠送我没领过，条件以站内说明为准。各渠道的智力状态以群内展示为准，可能滞后。站长称会主动检测渠道并对掺水或投毒退款，这是站方自述，我没有独立验证。",
      benefits: ["长期自用", "本人实测", "多上游聚合", "渠道自动切换", "进群可看各渠道智力状态", "进群送 10 刀", "L 站好评再送 10 刀", "最低倍率 0.06"],
      url: "https://aihub.top/",
      tone: "active",
    },
    {
      publishedAt: "2026-08-20 00:00",
      updatedAt: "2026-10-07",
      updateNote: "需要进 QQ 群领注册金；注册链接同时更换为新 aff 码 Q8KA3A9E6CBR（原 9yXf 已停用），路径由 sign-up 改为 register。其余不变（签到 0.1-0.5 元，Grok Heavy 0.08）。",
      kind: "付费站 / Grok Heavy 0.08",
      pricing: "paid",
      name: "AbinAPI",
      summary: "需要进官方 QQ 群 547911817 领注册金。Grok Heavy 倍率 0.08，其他模型也有，但这个倍率更低且好用；签到 0.1-0.5 元。",
      details:
        "需要进官方 QQ 群 547911817 领注册金。Grok Heavy 的倍率是 0.08，站里其他模型也有，但这个倍率更低，而且好用。签到 0.1-0.5 元。站点程序是 sub2api，域名一直是 www.abinapi.com。注册金具体数额以群内公告和站内显示为准。",
      registration: "通过邀请链接注册，需进官方 QQ 群 547911817 领注册金。",
      signupBonus: "进 QQ 群 547911817 领注册金",
      dailyCheckin: "0.1-0.5 元",
      models: "Grok Heavy（0.08）/ 其他模型",
      experience: "Grok Heavy 0.08，倍率低且好用",
      caveat: "付费站。注册金需要进官方 QQ 群 547911817 领取，具体数额以群内公告和站内显示为准。Grok Heavy 目前是 0.08，其他模型也有，但这个更低且好用；实际倍率和可用模型以站内显示为准。",
      benefits: ["付费站", "进 QQ 群领注册金", "Grok Heavy 0.08", "其他模型也有", "倍率低且好用", "签到 0.1-0.5 元"],
      url: "https://www.abinapi.com/register?aff=Q8KA3A9E6CBR",
      tone: "active",
    },
    {
      publishedAt: "2026-08-28 00:00",
      updatedAt: "2026-10-04",
      updateNote: "换域名为 api2.kscsnkli.site（原 ai.kscsnkli.site 现已指向其他站点）；注册页新增论坛登录入口。",
      kind: "需重新注册 / 每天有免费额度 / 论坛做任务赚额度",
      name: "ze（芙芙中转站）",
      summary: "受此前有人批量注册影响，站点现在需要通过新的邀请链接重新注册；每天有免费额度，每日额度有限制，具体上限以站内显示为准。日常额度主要靠去论坛 bbs.kscsnkli.site 做任务赚，也有签到。模型有 GLM-5.3-Flash、GPT-5.6-sol、DeepSeek V4 Pro、GLM-5.2 与 Kimi-K3。",
      details:
        "站点现域名为 api2.kscsnkli.site（原域名 ai.kscsnkli.site 现已指向其他站点），此前在本合集里记作 Kscsnkli AI，后按站点自称显示为 ze，现在站内名称是「异常芙芙公益」。据用户反馈，此前有人批量注册，当前需要通过新的邀请链接再次注册；每天有免费额度，但每日额度有限制，具体上限和重置规则以站内显示为准。此前注册需要邮箱验证，当前门槛也以注册页为准。日常额度的主要来源不是签到而是论坛任务：去 bbs.kscsnkli.site（站内叫「异常芙芙」）做任务赚额度，签到也有。站点使用 NewAPI，模型状态和模型列表能直接在站内查看，定价页也可用。已知模型：GLM-5.3-Flash、GPT-5.6-sol、DeepSeek V4 Pro（0813）、GLM-5.2、Kimi-K3。",
      registration: "受此前批量注册影响，需要使用下面更新后的邀请链接重新注册；此前注册需要邮箱验证，当前门槛以注册页为准。",
      signupBonus: "以站内显示为准",
      dailyCheckin: "有签到；每天有免费额度（每日额度有限制），额度主要靠论坛做任务赚",
      models: "GLM-5.3-Flash / GPT-5.6-sol / DeepSeek V4 Pro（0813）/ GLM-5.2 / Kimi-K3",
      experience: "需要重新注册；每天有免费额度但有限制，额度主要靠论坛任务",
      caveat: "受此前批量注册影响，现在需要重新注册，旧账号不要按仍可直接使用处理；请勿批量注册。每天有免费额度，但每日额度已有上限，具体数额、重置规则、注册赠送与邮箱验证要求以站内当前显示为准。想持续拿额度还得去论坛 bbs.kscsnkli.site 做任务，光靠签到不够。站点几次改名换型：Kscsnkli AI → ze → 站内现称「异常芙芙公益」，域名此前为 ai.kscsnkli.site，现已换成 api2.kscsnkli.site。使用前建议先看定价页确认模型可用性。",
      benefits: ["需重新注册", "每天有免费额度", "每日额度有限制", "论坛做任务赚额度", "有签到", "GLM-5.3-Flash", "GPT-5.6-sol", "DeepSeek V4 Pro", "GLM-5.2", "Kimi-K3"],
      url: "https://api2.kscsnkli.site/sign-up?aff=IE8H",
      tutorialUrl: "https://bbs.kscsnkli.site/",
      tutorialLabel: "去异常芙芙论坛做任务赚额度",
      statusUrl: "https://api2.kscsnkli.site/pricing",
      statusLabel: "打开站内定价页查看模型与倍率",
      tone: "active",
    },
    {
      publishedAt: "2026-09-10 00:00",
      addedAt: "2026-09-10",
      updatedAt: "2026-09-24",
      updateNote: "已更换域名为 sunapi.5201201314.top，站内正式名称确认为 sunapi，此前按域名记作的 Chinahk 公益站一并更正。",
      kind: "公益站 / QQ 邮箱注册 / 低倍率约等于免费",
      name: "sunapi 公益站",
      summary:
        "仅允许 QQ 邮箱注册，需走邀请链接；加 QQ 群 744474016 再送 10 余额，可每天签到，每天有免费额度。模型倍率很低，绝大部分 0.0001 一次，分组倍率 0.05，约等于免费。目前有 GPT-5.6-sol、Qwen3.8-Flash、GLM-5.3-Flash、Muse-1.3，还有官 key 的 DeepSeek-V4.1；全站约 60 个模型，含生图、生视频与嵌入模型但质量一般，具体看站内模型广场。",
      details:
        "站内正式名称为 sunapi，此前按域名暂记为 Chinahk 公益站，现已更正；域名已更换为 sunapi.5201201314.top（原 newapi.chinahk.qzz.io），仍是 NewAPI 程序。注册仅允许 QQ 邮箱，且要走邀请链接；注册后加入 QQ 群 744474016 再送 10 余额，站内可每天签到，每天有免费额度。计费方面模型倍率很低：绝大部分模型 0.0001 一次，分组倍率 0.05，算下来约等于免费。模型方面目前有 gpt-5.6-sol、qwen3.8-flash、glm-5.3-flash、muse-1.3 等，另外上了 DeepSeek 的 deepseek-v4.1（官 key）；全站大概 60 个模型，还有不少免费模型，其中包含生图、生视频和嵌入模型，不过质量都一般般，具体以站内模型广场为准。",
      registration: "仅允许 QQ 邮箱注册，并通过邀请链接注册；其他邮箱会注册失败。",
      signupBonus: "加 QQ 群 744474016 再送 10 余额；注册本身赠送以站内显示为准",
      dailyCheckin: "可每天签到；每天有免费额度",
      models: "GPT-5.6-sol / Qwen3.8-Flash / GLM-5.3-Flash / Muse-1.3 / DeepSeek-V4.1（官 key）等约 60 个，含生图、生视频与嵌入模型",
      experience: "绝大部分模型 0.0001 一次、分组倍率 0.05，约等于免费",
      caveat:
        "仅允许 QQ 邮箱注册，用其他邮箱大概率注册不了；加群送的 10 余额要进 QQ 群 744474016 才能拿。倍率、分组倍率和每天免费额度的具体数额以站内模型广场和实际显示为准，政策随时可能调整。生图、生视频与嵌入模型质量一般，不要抱太高期待。域名已更换为 sunapi.5201201314.top，之前的 newapi.chinahk.qzz.io 不再使用。",
      benefits: ["仅限 QQ 邮箱注册", "需走邀请链接", "加 QQ 群送 10 余额", "可每天签到", "每天有免费额度", "绝大部分 0.0001 一次", "分组倍率 0.05", "约等于免费", "约 60 个模型", "GPT-5.6-sol", "Qwen3.8-Flash", "GLM-5.3-Flash", "Muse-1.3", "DeepSeek-V4.1 官 key", "含生图/生视频/嵌入模型"],
      url: "https://sunapi.5201201314.top/sign-up?aff=rF1K",
      statusUrl: "https://sunapi.5201201314.top/pricing",
      statusLabel: "打开站内模型广场查看模型与倍率",
      tone: "active",
    },
    {
      publishedAt: "2026-09-10 00:00",
      addedAt: "2026-09-10",
      updatedAt: "2026-09-10",
      updateNote: "新收录：QQ 邮箱注册，进签到群绑定 QQ 后按次签到领额度。",
      kind: "公益站 / 按次计费 / 酒馆专用",
      name: "奶酪公益站",
      summary: "公益站，注册使用 QQ 邮箱；加入签到群并绑定 QQ 后，可通过群签到领取约 1 毛额度。全部模型约一分钱一次，站内暂未发现充值入口；人数达到阶段目标时还会发放几百额度。酒馆站，不支持编程。",
      details:
        "使用 QQ 邮箱注册，之后加入签到群并绑定 QQ，通过群签到领取额度，每次约 1 毛。站点按次计费，全部模型约一分钱一次；目前没有找到充值入口，人数达到阶段目标时站方还会发放几百额度。已知模型有 GLM-5.3-Flash、DeepSeek V4 Pro、GPT-5.6-luna 与 Qwen3.8-Flash。该站定位为酒馆站，不支持写代码或其他编程用途。公开状态接口显示站点注册已开启，但网页签到开关关闭；这里记录的是 QQ 群内签到机制。",
      registration: "使用 QQ 邮箱注册；加入签到群并绑定 QQ 后，才能在群内签到领取额度。",
      signupBonus: "人数达到阶段目标时会发放几百额度；常规注册赠送以站内为准",
      dailyCheckin: "QQ群签到约 1 毛（需进群绑定 QQ；网页签到未开启）",
      models: "GLM-5.3-Flash / DeepSeek V4 Pro / GPT-5.6-luna / Qwen3.8-Flash",
      experience: "约一分钱一次；适合酒馆，不支持编程",
      caveat: "该站明确面向酒馆使用，不支持写代码或其他编程用途。签到必须进入 QQ 群并绑定 QQ；公开状态接口中的网页签到目前为关闭状态，不要把两种签到混为一谈。站内暂未找到充值入口，但是否长期纯公益仍以站内为准；按次价格、签到额度、阶段发放和模型列表都可能变化。",
      benefits: ["QQ 邮箱注册", "QQ群绑定 QQ 签到", "签到约 1 毛", "约一分钱一次", "暂未发现充值入口", "阶段目标发几百额度", "GLM-5.3-Flash", "DeepSeek V4 Pro", "GPT-5.6-luna", "Qwen3.8-Flash", "酒馆专用", "不支持编程"],
      url: "https://nailao.biz/sign-up?aff=8KMU",
      statusUrl: "https://nailao.biz/api/status",
      statusLabel: "查看公开状态接口",
      tone: "active",
    },
    {
      publishedAt: "2026-09-10 00:00",
      addedAt: "2026-09-10",
      updatedAt: "2026-09-10",
      updateNote: "新收录：QQ 注册，GPT-5.6-sol 每日限额 50，并有三小时额度与单并发限制。",
      kind: "公益站 / QQ 注册 / 严格限额",
      name: "SharedChat 公益站",
      summary: "QQ 注册，提供 GPT-5.6-sol。每日限额 50；个人每三小时限额 15，同时全站也有三小时总限额。只允许单并发，并限制 IP，使用时需要关闭代理。",
      details:
        "通过 QQ 注册。当前模型为 GPT-5.6-sol，每日最多 50；个人每三小时最多 15，同时全站还有共享的三小时总限额，因此即使个人额度未用完，也可能受全站额度影响。站点只允许单并发，并按 IP 限制；使用前需要关闭代理，避免代理 IP 触发限制。",
      registration: "通过 QQ 注册；使用时需要关闭代理，以本机 IP 访问。",
      signupBonus: "未提供",
      dailyCheckin: "未提供；每日使用限额 50",
      models: "GPT-5.6-sol",
      experience: "每日 50；个人每三小时 15；全站另有三小时总限额；单并发",
      caveat: "站点限制 IP，使用时要关闭代理。个人每三小时限额 15，但全站还有独立的三小时共享限额，高峰期可能提前用尽；只允许单并发，不适合并行任务或高频自动化。限额与模型可能随时调整。",
      benefits: ["QQ 注册", "GPT-5.6-sol", "每日限额 50", "个人每三小时 15", "全站三小时总限额", "单并发", "限制 IP", "需关闭代理"],
      url: "https://new.sharedchat.cc/list/#/register?i=m11Qn",
      tone: "active",
    },
    {
      publishedAt: "2026-09-10 00:00",
      addedAt: "2026-09-10",
      updatedAt: "2026-09-10",
      updateNote: "新收录：Claude 0.16，QQ群签到可领鸡蛋，并新增多款国产模型。",
      kind: "公益站 / Claude 0.16 / QQ群签到",
      name: "XXS 公益站",
      summary: "公益站，Claude 倍率 0.16，但模型不定期开放；QQ群可以签到领取鸡蛋。另有 Image-2，以及 DeepSeek V4.1 Flash、Qwen3.8 Flash、GLM-5.3 Flash、DeepSeek V4 Flash、GLM-5-3 与 Kimi-K3；站长规划增加 GPT 0.16 和 Grok 4.6 0.5。",
      details:
        "Claude 倍率为 0.16，但不是持续开放，需要留意站点或群内通知。QQ群可以签到并领取站内的「鸡蛋」额度。当前还提供 Image-2，并新增 DeepSeek V4.1 Flash（原标注 expires-on-0910）、Qwen3.8 Flash、GLM-5.3 Flash、DeepSeek V4 Flash、GLM-5-3 与 Kimi-K3。站长规划后续增加 0.16 倍率的 GPT 和 0.5 倍率的 Grok 4.6，这两项尚未上线，不要按现有模型处理。",
      registration: "通过邀请链接注册；加入 QQ 群可签到领取鸡蛋。",
      signupBonus: "未提供",
      dailyCheckin: "QQ群签到领取鸡蛋",
      models: "Claude（0.16，不定期开放）/ Image-2 / DeepSeek V4.1 Flash / Qwen3.8 Flash / GLM-5.3 Flash / DeepSeek V4 Flash / GLM-5-3 / Kimi-K3",
      experience: "公益站；Claude 低倍率但不定期开放，QQ群可签到领鸡蛋",
      caveat: "Claude 不定期开放，不能当作随时可用的固定线路。GPT 0.16 与 Grok 4.6 0.5 只是站长规划，尚未上线；DeepSeek V4.1 Flash 的模型名带有 expires-on-0910，可能在 2026-09-10 到期或下线，使用前请看站内实际列表。模型、倍率和鸡蛋签到规则都可能变化。",
      benefits: ["公益站", "Claude 0.16", "Claude 不定期开放", "QQ群签到领鸡蛋", "Image-2", "DeepSeek V4.1 Flash", "Qwen3.8 Flash", "GLM-5.3 Flash", "DeepSeek V4 Flash", "GLM-5-3", "Kimi-K3", "规划 GPT 0.16", "规划 Grok 4.6 0.5"],
      url: "https://xxs.l.cd/sign-up?aff=q6G2",
      tone: "active",
    },
    {
      publishedAt: "2026-08-13 22:12",
      updatedAt: "2026-09-10",
      updateNote: "新增支持 Telegram 账号注册。",
      kind: "谨慎使用",
      name: "SeekAI",
      summary: "额度给得大方，注册送 200、每天签到 20，支持 GitHub 与 Telegram 注册；目前仅支持 DeepSeek，疑似网页反代，工具调用有些问题。",
      details:
        "目前仅能使用 DeepSeek，实际体验不太稳定，也存在降智。疑似采用网页反代，工具调用可能无法正常工作，更适合普通对话或备用。",
      registration: "GitHub 账号注册（新号即可），也支持 Telegram 账号注册。",
      signupBonus: "200 刀",
      dailyCheckin: "20 刀",
      models: "DeepSeek",
      experience: "目前仅支持 DeepSeek；疑似网页反代，工具调用有问题",
      caveat: "目前仅支持 DeepSeek；工具调用可能异常，稳定性和输出质量也有波动，建议仅作备用。",
      benefits: ["注册送 200 刀", "每日签到 20 刀", "支持 Telegram 注册", "仅支持 DeepSeek", "疑似网页反代", "工具调用异常"],
      url: "https://seekai.cc/sign-up?aff=NzMk",
      tone: "caution",
    },
    {
      publishedAt: "2026-08-26 00:00",
      updatedAt: "2026-09-07",
      updateNote: "每日签到 20 刀，当前仍是主要的 Claude Opus 5 线路。",
      kind: "已恢复 / 需重新注册",
      name: "TokenForge（tokengate）",
      summary: "站点已恢复正常，每日签到 20 刀，当前仍是主要的 Claude Opus 5 线路。账号被站方清空过，所以要重新注册一遍。此前实测的注入问题（模型被锁成只用英文回答）这次没有复测，第一次调用时自己验一下。",
      details:
        "2026 年 9 月 2 日站方把所有用户账号删了，现在站点已经恢复正常，每日签到 20 刀。被删掉的账号不会回来，得走注册链接重新注册一遍；注册赠送多少我没核实，以站内实际显示为准。另外，被清空之前实测过一个注入问题：模型只肯用英文回答，用中文提问也回英文——说明请求在到达模型前被塞了额外的指令。这次恢复后是否还在，我没有复测，第一次调用时用中文问一句就能看出来；跑要求结果可信的任务前，建议先自己验这一下。",
      registration: "需要重新注册：旧账号已被站方清空，走注册链接重新注册一遍。原门槛为 GitHub 注册、主账号邮箱需为 Google 或 Microsoft 邮箱、账号注册时间超过 14 天，并需通过 Discord 认证，具体以注册页提示为准。",
      signupBonus: "未核实（重新注册后以站内显示为准）",
      dailyCheckin: "20 刀",
      models: "Claude Opus 5 可调",
      experience: "已恢复正常、签到 20 刀；注入问题未复测",
      caveat: "账号是被站方清空后重建的，旧账号和旧额度不会回来，必须重新注册。此前实测的注入问题（模型被限制成只能用英文回答，中文提问也回英文，说明请求在到达模型前被加了指令）这次没有复测，是否修复未知，跑要求结果可信的任务前先自己验一次。签到与注册赠送以站内实际显示为准。站点已改名换域名，旧的 manus.space 地址不要再用。",
      benefits: ["已恢复正常", "每日签到 20 刀", "需重新注册", "Claude Opus 5", "注入问题未复测", "需 Discord 认证"],
      url: "https://tokenforge.ai.studio/sign-up?aff=iheu",
      tutorialUrl: "https://discord.gg/fhQKyxnsC",
      tutorialLabel: "加入 TokenForge Discord 社区并完成认证",
      statusUrl: "https://tokenforge.ai.studio/dashboard/models",
      statusLabel: "打开 TokenForge 模型状态页检查可用性",
      tone: "active",
    },
    {
      publishedAt: "2026-08-28 00:00",
      updatedAt: "2026-09-02",
      updateNote: "站内没找到充值入口，改归公益区并排到最前面。",
      kind: "公益区 / 未见充值入口",
      name: "Nofx",
      summary: "注册链接可得 20 刀，加入 Discord 另送 5 刀，日签到 5 刀（上限 50），GPT-5.6-sol 0.6x；站内没找到充值入口，已归到公益区。",
      details:
        "此前按付费站收录，但站内没找到充值入口，所以改归公益区。注册链接可领 20 刀，加入 Discord 后另送 5 刀，日签到 5 刀（当日上限 50），GPT-5.6-sol 显示倍率 0.6x。除专业开发者外，日常用量通常够用。",
      registration: "使用邀请注册链接注册；注册后加入 Discord 可再领 5 刀。",
      signupBonus: "20 刀（+ Discord 5 刀）",
      dailyCheckin: "5 刀（上限 50）",
      models: "GPT-5.6-sol",
      experience: "当前可用；对非专业开发者来说日常量够用",
      caveat: "站内没找到充值入口，是否真的不支持充值以站内实际显示为准。签到上限与倍率可能调整，请以站内公告和实际调用为准。",
      benefits: ["未见充值入口", "注册链接 ref=PWF8Z79Q", "注册送 20 刀", "进 Discord 另送 5 刀", "每日签到 5（签到上限 50）", "GPT-5.6-sol 0.6x"],
      url: "https://nofx.one/zh-CN/sign-in?ref=PWF8Z79Q",
      tone: "active",
    },
    {
      publishedAt: "2026-08-19 23:14",
      updatedAt: "2026-08-30",
      updateNote: "签到需要签到码，请加入 QQ 群获取当期签到码。",
      kind: "暂停注册",
      name: "ArityFlow",
      summary: "目前已关闭注册，已移到列表后部；恢复开放后再更新。签到需要签到码，请加入 QQ 群获取。",
      details:
        "站点主要面向酒馆用户，采用按次计费，每日签到最高 50，并提供小克和免费模型。签到时需要填写签到码，请先加入 QQ 群获取当期签到码。除 coding 分组外，站方会严格检查编程行为，违规可能导致封号。",
      registration: "目前暂停注册，等待重新开放；签到码需加入 QQ 群获取。",
      signupBonus: "有赠送，数额待确认",
      dailyCheckin: "最高 50（需 QQ 群签到码）",
      models: "小克 / 免费模型",
      experience: "目前已关闭注册；按次计费，主要面向酒馆用户",
      caveat: "注册已关闭，恢复时间未知；签到依赖 QQ 群内发放的签到码。严查除 coding 分组以外的编程行为，违规可能封号。",
      benefits: ["暂停注册", "原支持 QQ 注册", "邀请码赠送额度", "每日签到最高 50", "签到码需加 QQ 群获取", "按次计费", "小克", "免费模型"],
      url: "https://www.arityflow.top/sign-up?aff=PTiI",
      tone: "closed",
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
    usageNotice:
      "使用提醒：不建议拿中转站的模型做逆向、蒸馏、涩情等操作，除非站点明确公告不禁止。这类用法会把站方买来的上游账号搞封，最后是整站的人一起没得用。",
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
    changesEyebrow: "RECENT CHANGES",
    changesTitle: "最近变更",
    changesNote: "近 {days} 天",
    pricingLabel: "站点类型",
    pricingPublic: "公益",
    pricingPaid: "付费",
    pricingPublicNote: "免费额度为主，部分半公益站也支持充值",
    pricingPaidNote: "以下都需要充值，注册赠送只够试用。最近 GPT 风控比较严，降智很影响体验，建议优先选有降智检测或有说明的站点；实在不行，充值前先让模型画一个鹈鹕骑自行车的 SVG 自测一下，别钱白花了还没推进进度。",
    pricingSwitched: "已切换到{tab}，共 {count} 个站点",
    changesAddedLabel: "新收录",
    changesArchivedLabel: "下架",
    changesExpand: "展开全部 {count} 条",
    changesCollapse: "收起",
    changesArchivedNote: "已从页面下架归档",
    archiveTitle: "失效站点",
    archiveCount: "{count} 个留档",
    archiveNote: "仅作状态留档，不再推荐访问；恢复后会重新核实并移回在线列表。",
    archiveDateLabel: "下架日期",
    archiveReasonFallback: "已从在线推荐下架并移入失效区。",
    updatedToday: "今天更新",
    updatedYesterday: "昨天更新",
    updatedDaysAgo: "{days} 天前更新",
    addedToday: "今天收录",
    addedYesterday: "昨天收录",
    addedDaysAgo: "{days} 天前收录",
    archivedToday: "今天下架",
    archivedYesterday: "昨天下架",
    archivedDaysAgo: "{days} 天前下架",
    updateNoteLabel: "本次更新",
    searchPlaceholder: "搜索站名、模型（如 Claude、GPT）、规则或福利...",
    filterLabel: "快捷筛选:",
    filterAll: "全部",
    filterClaude: "Claude 线路",
    filterOpenAI: "OpenAI/Codex",
    filterCheckin: "每日签到",
    filterDraw: "生图/画画",
    filterEasyReg: "免绑易注",
    filterNoDumbGpt: "不降智 GPT",
    filterRecommended: "站长推荐",
    filterSelfUse: "站长自用",
    filterEgg: "🥚 鸡蛋",
    eggBadge: "🥚 鸡蛋",
    eggBadgeTitle: "赛博鸡蛋：站长只薅过免费额度，没充过钱，付费体验没验证过，充值请谨慎",
    expandDetails: "展开详情与避坑",
    collapseDetails: "收起详情",
    emptyTitle: "未检索到匹配站点",
    emptyDesc: "没有找到符合条件的站点，请尝试更换关键词或清除筛选标签。",
    emptyReset: "清空筛选条件",
    themeToggleLabel: "切换夜间/日间模式",
    themeDark: "夜间炭墨",
    themeLight: "日间暖纸",
    copied: "已复制",
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
    usageNotice:
      "Usage note: do not use a relay service's models for reverse engineering, distillation, or pornographic content unless the service explicitly says it allows them. That kind of use gets the upstream accounts the operator paid for banned, and everyone on the service loses access.",
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
    changesEyebrow: "RECENT CHANGES",
    changesTitle: "Recent changes",
    changesNote: "Last {days} days",
    pricingLabel: "Service type",
    pricingPublic: "Free",
    pricingPaid: "Paid",
    pricingPublicNote: "Mostly free credit; some freemium services also accept top-ups",
    pricingPaidNote: "All of these need a top-up, and sign-up credit only covers a trial. GPT risk control has been strict lately and dumbing-down heavily affects the experience, so prefer services with dumbing-down detection or a stated policy; failing that, before paying, have the model draw an SVG of a pelican riding a bicycle as a self-test — don't waste money without making progress.",
    pricingSwitched: "Switched to {tab}, {count} services",
    changesAddedLabel: "New",
    changesArchivedLabel: "Delisted",
    changesExpand: "Show all {count}",
    changesCollapse: "Collapse",
    changesArchivedNote: "Removed from the directory and archived",
    archiveTitle: "Unavailable services",
    archiveCount: "{count} archived",
    archiveNote: "Kept for status history only and no longer recommended. Recovered services are re-verified before returning to the live directory.",
    archiveDateLabel: "Delisted",
    archiveReasonFallback: "Removed from the live recommendations and moved to the unavailable archive.",
    updatedToday: "Updated today",
    updatedYesterday: "Updated yesterday",
    updatedDaysAgo: "Updated {days} days ago",
    addedToday: "Added today",
    addedYesterday: "Added yesterday",
    addedDaysAgo: "Added {days} days ago",
    archivedToday: "Delisted today",
    archivedYesterday: "Delisted yesterday",
    archivedDaysAgo: "Delisted {days} days ago",
    updateNoteLabel: "This update",
    searchPlaceholder: "Search services, models (Claude, GPT), terms, or benefits...",
    filterLabel: "Quick filters:",
    filterAll: "All",
    filterClaude: "Claude Lines",
    filterOpenAI: "OpenAI/Codex",
    filterCheckin: "Daily Check-in",
    filterDraw: "Image Generation",
    filterEasyReg: "Easy Sign-up",
    filterNoDumbGpt: "Undumbed GPT",
    filterRecommended: "Recommended by the webmaster",
    filterSelfUse: "Used by the webmaster",
    filterEgg: "🥚 Egg",
    eggBadge: "🥚 Egg",
    eggBadgeTitle: "Cyber egg: the webmaster has only claimed the free credit and never paid, so the paid experience is unverified — top up with caution",
    expandDetails: "Show details & caveats",
    collapseDetails: "Hide details",
    emptyTitle: "No matching services found",
    emptyDesc: "No services matched your current query or filter tags. Try different keywords or reset filters.",
    emptyReset: "Reset filters",
    themeToggleLabel: "Toggle Night/Day theme",
    themeDark: "Night Ink",
    themeLight: "Day Paper",
    copied: "Copied!",
  },
};

// 英文翻译在 entry-translations.js，按需加载：中文用户不下载这 ~170KB，
// 切到英文时由 loadEntryTranslations() 拉取并合并进来。
const entryTranslations = {};

// tone 只表达「我的判断」，不再承担时效信息——时效由 updatedAt 算出来，生命周期写在 kind 里。
const toneLabels = {
  "zh-CN": {
    active: "推荐",
    caution: "谨慎",
    closed: "已关闭注册",
  },
  en: {
    active: "Recommended",
    caution: "Caution",
    closed: "Registration closed",
  },
};

// 「最近变更」和卡片上的更新标记都只看这个窗口内的改动。
const RECENT_WINDOW_DAYS = 7;

// 变更多的时候整块会把首屏占满，把站点列表挤到一屏半以下，所以默认只露前几条。
const CHANGES_PREVIEW_COUNT = 5;
let changesExpanded = false;

const defaultLocale = "zh-CN";
const supportedLocales = new Set([defaultLocale, "en"]);
let currentLocale = defaultLocale;

// 公益区是主场，所以每次打开都从公益开始，不记住上次选的付费区。
const defaultPricing = "public";
const supportedPricing = new Set([defaultPricing, "paid"]);
let currentPricing = defaultPricing;

// 搜索与快捷标签过滤状态
let currentSearchQuery = "";
let currentFilterTag = "all";

// 主题状态：light（日间暖纸） / dark（夜间炭墨）
let currentTheme = "light";

const initTheme = () => {
  try {
    const stored = window.localStorage.getItem("directory-theme");
    if (stored === "dark" || stored === "light") {
      currentTheme = stored;
    } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      currentTheme = "dark";
    }
  } catch {
    currentTheme = "light";
  }
  applyTheme(currentTheme);
};

const applyTheme = (theme) => {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    window.localStorage.setItem("directory-theme", theme);
  } catch {}
  const darkIcon = document.querySelector(".theme-icon-dark");
  const lightIcon = document.querySelector(".theme-icon-light");
  const toggleBtn = document.querySelector("[data-theme-toggle]");
  if (darkIcon && lightIcon) {
    if (theme === "dark") {
      darkIcon.style.display = "none";
      lightIcon.style.display = "block";
    } else {
      darkIcon.style.display = "block";
      lightIcon.style.display = "none";
    }
  }
  if (toggleBtn) {
    const copy = pageCopy[currentLocale];
    const tip = theme === "dark" ? copy.themeLight : copy.themeDark;
    toggleBtn.setAttribute("title", tip);
    toggleBtn.setAttribute("aria-label", tip);
  }
};

const toggleTheme = () => {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
};

// 卡片渐进式折叠状态追踪（集合内为已展开的站点名）
const expandedEntries = new Set();

const toggleEntryExpanded = (name) => {
  const isNowExpanded = !expandedEntries.has(name);
  if (isNowExpanded) {
    expandedEntries.add(name);
  } else {
    expandedEntries.delete(name);
  }

  const article = document.querySelector(`[data-entry-name="${CSS.escape(name)}"]`);
  if (!article) {
    renderPage();
    return;
  }

  article.classList.toggle("is-expanded", isNowExpanded);
  const btn = article.querySelector("[data-expand-btn]");
  const expandable = article.querySelector(".entry-expandable");
  const copy = pageCopy[currentLocale];
  if (btn) {
    btn.setAttribute("aria-expanded", String(isNowExpanded));
    const span = btn.querySelector("span");
    if (span) span.textContent = isNowExpanded ? copy.collapseDetails : copy.expandDetails;
  }
  if (expandable) {
    expandable.setAttribute("data-expanded", String(isNowExpanded));
  }
};

// 场景快捷筛选匹配规则
const matchesFilterTag = (entry, tag) => {
  if (!tag || tag === "all") return true;

  const translation = entryTranslations[entry.name] || {};
  const textPool = [
    entry.name,
    translation.name,
    entry.models,
    translation.models,
    entry.summary,
    translation.summary,
    entry.details,
    translation.details,
    entry.caveat,
    translation.caveat,
    entry.registration,
    translation.registration,
    ...(Array.isArray(entry.benefits) ? entry.benefits : []),
    ...(Array.isArray(translation.benefits) ? translation.benefits : []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  switch (tag) {
    case "claude":
      return /claude|opus/i.test(textPool);

    case "openai":
      return /gpt|openai|codex/i.test(textPool);

    case "checkin": {
      const checkinZh = String(entry.dailyCheckin || "").trim();
      const checkinEn = String(translation.dailyCheckin || "").trim();
      if (!checkinZh && !checkinEn) return false;
      // 「未提供」「未核实」这类没给出签到额度的，按没有签到处理。
      const noCheckin = /未提供|未核实|无需签到|不支持|没有|无签到|not (provided|offered|required|available)|unavailable|unverified|no check-?in|none/i;
      return !noCheckin.test(checkinZh) && !noCheckin.test(checkinEn);
    }

    case "draw":
      return /生图|画画|nai|pai|draw|midjourney|flux|image|dall-e|sd/i.test(textPool);

    case "nodumbgpt": {
      // 站方或用户明确写了「不降智」的 GPT 才命中，避免把只是列了 GPT 的站也算进来。
      // 必须逐字段判断：跨字段拼接会把「grok 分组不降智」和下一个标签「gpt-image-2」
      // 连成「不降智 gpt-image-2」造成误命中（SheApi 就中过）。
      const fields = [entry.models, translation.models, entry.summary, translation.summary, entry.details, translation.details, entry.caveat, translation.caveat, ...(Array.isArray(entry.benefits) ? entry.benefits : []), ...(Array.isArray(translation.benefits) ? translation.benefits : [])];
      return fields.some((field) => /不降智.{0,6}gpt|gpt.{0,6}不降智|undumbed.{0,12}gpt|gpt.{0,12}undumbed|not dumbed.{0,12}gpt|gpt.{0,12}not dumbed|no dumbing.{0,12}gpt/i.test(String(field || "")));
    }

    case "recommended":
      // 站长推荐是策展标记，靠条目上的 recommended 字段，不用文本匹配——
      // 否则任何文案里出现「推荐」二字的站都会被误算进来。
      return Boolean(entry.recommended);

    case "egg":
      // 鸡蛋是策展标记：站长只薅过免费额度、没充过钱，付费体验未验证，只在用户点名的站上打 egg 字段，
      // 不从 caveat 文案推断，否则写了「未验证」的站会被自动算进来。
      return Boolean(entry.egg);

    case "easyreg":
      return /免绑|邮箱|无需.*github|免github|无需绑|账号密码|即开即用|免验证|自由注册|简单/i.test(
        `${entry.registration || ""} ${translation.registration || ""} ${textPool}`
      );

    default:
      return true;
  }
};

// 实时搜索关键词匹配规则（支持空格分词多关键词匹配）
const matchesSearchQuery = (entry, query) => {
  if (!query || !query.trim()) return true;
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return true;

  const translation = entryTranslations[entry.name] || {};
  const searchPool = [
    entry.name,
    translation.name,
    entry.kind,
    translation.kind,
    entry.summary,
    translation.summary,
    entry.details,
    translation.details,
    entry.models,
    translation.models,
    entry.registration,
    translation.registration,
    entry.signupBonus,
    translation.signupBonus,
    entry.dailyCheckin,
    translation.dailyCheckin,
    entry.experience,
    translation.experience,
    entry.caveat,
    translation.caveat,
    ...(Array.isArray(entry.benefits) ? entry.benefits : []),
    ...(Array.isArray(translation.benefits) ? translation.benefits : []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return terms.every((term) => searchPool.includes(term));
};

// 点击复制轻量反馈
const showCopyFeedback = (element, text) => {
  if (element.querySelector(".copy-feedback-tip")) return;
  element.classList.add("is-copied");
  const tip = document.createElement("span");
  tip.className = "copy-feedback-tip";
  tip.textContent = text;
  element.append(tip);
  setTimeout(() => {
    tip.remove();
    element.classList.remove("is-copied");
  }, 1200);
};

// 不写 pricing 就算公益，这样只有纯付费站需要标注。
const entryPricing = (entry) => (entry.pricing === "paid" ? "paid" : "public");

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

// 英文翻译单独放在 entry-translations.js，按需加载：中文用户不下载这 ~170KB，
// 切到英文时拉一次（之后命中缓存）。加载失败不阻塞渲染，退化成显示中文。
let entryTranslationsPromise = null;
const loadEntryTranslations = () => {
  if (entryTranslationsPromise) return entryTranslationsPromise;
  entryTranslationsPromise = new Promise((resolve) => {
    const holder = document.querySelector("script[data-translations-src]");
    const source = holder?.dataset.translationsSrc;
    if (!source) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = source;
    script.onload = () => {
      Object.assign(entryTranslations, window.entryTranslationsData || {});
      resolve();
    };
    // 拉不到也不卡住页面，保持中文展示。
    script.onerror = () => resolve();
    document.head.append(script);
  });
  return entryTranslationsPromise;
};

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

const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

// 返回该日期距今天的整天数；解析不出来就返回 null，由调用方跳过。
const daysSince = (dateText) => {
  if (!dateText) return null;
  const parsed = new Date(`${String(dateText).slice(0, 10)}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return null;
  return Math.round((startOfDay(new Date()) - startOfDay(parsed)) / 86400000);
};

// 只有落在窗口内、且不是未来日期的改动才算「最近」。
const isRecent = (days) => days !== null && days >= 0 && days <= RECENT_WINDOW_DAYS;

// kind 决定用哪套说法：新收录说「收录」、下架说「下架」、其余说「更新」，
// 否则会出现「今天更新 [新收录]」这种自相矛盾的行。
const formatDaysAgo = (days, copy, variant = "updated") => {
  const keys = {
    updated: ["updatedToday", "updatedYesterday", "updatedDaysAgo"],
    added: ["addedToday", "addedYesterday", "addedDaysAgo"],
    archived: ["archivedToday", "archivedYesterday", "archivedDaysAgo"],
  }[variant];
  if (days === 0) return copy[keys[0]];
  if (days === 1) return copy[keys[1]];
  return copy[keys[2]].replace("{days}", String(days));
};

const formatUpdatedAgo = (days, copy) => formatDaysAgo(days, copy, "updated");

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

// YYYY-MM-DD 按本地日历构造，避免把 UTC 午夜换算成当地前一天。
const formatCalendarDate = (dateText) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateText));
  if (!match) return String(dateText ?? "");
  const parsed = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  if (
    parsed.getFullYear() !== Number(match[1])
    || parsed.getMonth() !== Number(match[2]) - 1
    || parsed.getDate() !== Number(match[3])
  ) return String(dateText);
  return new Intl.DateTimeFormat(currentLocale === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(parsed);
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

  // 时效标记完全由 updatedAt 算出来，手工的 tone 只管「推荐 / 谨慎 / 已关闭注册」。
  const updatedDays = daysSince(sourceEntry.updatedAt);
  const showUpdate = isRecent(updatedDays);
  const updateBadge = showUpdate
    ? `<span class="entry-updated">${escapeHtml(formatUpdatedAgo(updatedDays, copy))}</span>`
    : "";
  // 鸡蛋是策展标记，跟时效印章分开摆：站长只薅过免费额度、付费体验未验证。
  const eggBadge = sourceEntry.egg
    ? `<span class="entry-egg" title="${escapeHtml(copy.eggBadgeTitle)}">${escapeHtml(copy.eggBadge)}</span>`
    : "";
  // 英文说明缺失时整行不渲染，避免中文漏到英文页上。
  const updateNote = showUpdate && entry.updateNote
    ? `<p class="entry-update-note"><i data-lucide="history" aria-hidden="true"></i><span><strong>${escapeHtml(copy.updateNoteLabel)}</strong>${escapeHtml(entry.updateNote)}</span></p>`
    : "";
  const resourceLinks = [
    { url: entry.altUrl, label: entry.altLabel, icon: "globe", event: "国内入口" },
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

  const isExpanded = expandedEntries.has(sourceEntry.name);
  const expandBtnText = isExpanded ? copy.collapseDetails : copy.expandDetails;

  return `
    <article class="feed-item${isExpanded ? " is-expanded" : ""}" data-tone="${tone}"${showUpdate ? ' data-updated="true"' : ""} data-entry-name="${safeAnalyticsName}">
      <div class="feed-meta">
        <time datetime="${datetime}" aria-label="${escapeHtml(copy.publishedAt)} ${escapeHtml(entry.publishedAt)}">
          <span>${escapeHtml(publishedAt.date)}</span>
          <span>${escapeHtml(publishedAt.time)}</span>
        </time>
      </div>
      ${cardOpenTag}
        <div class="entry-content">
          <p class="entry-kind">${escapeHtml(entry.kind)} / ${escapeHtml(localizedTones[tone])}${updateBadge}</p>
          <h3>${safeName}${eggBadge}</h3>
          ${updateNote}
          <p class="entry-description">${escapeHtml(entry.summary)}</p>
          <div class="entry-quota">
            ${quotaCell(copy.signupBonus, entry.signupBonus)}
            ${quotaCell(copy.dailyCheckin, entry.dailyCheckin)}
          </div>
          <div class="entry-info-row">
            <span class="entry-info-label"><i data-lucide="sparkles" aria-hidden="true"></i>${escapeHtml(copy.models)}</span>
            <p class="registration-text">${escapeHtml(entry.models)}</p>
          </div>
          <div class="entry-info-row">
            <span class="entry-info-label"><i data-lucide="gift" aria-hidden="true"></i>${escapeHtml(copy.benefits)}</span>
            <ul class="benefit-tags">${benefitTags}</ul>
          </div>
          <button type="button" class="entry-toggle-btn" data-expand-btn="${safeAnalyticsName}" aria-expanded="${isExpanded}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
            <span>${escapeHtml(expandBtnText)}</span>
          </button>
          <div class="entry-expandable" data-expanded="${isExpanded}">
            <div class="entry-expandable-content">
              <div class="entry-expandable-inner">
                <p class="entry-details">${escapeHtml(entry.details)}</p>
                <div class="entry-info">
                  ${infoRow("user-round-plus", copy.registration, entry.registration)}
                  ${infoRow("gauge", copy.experience, entry.experience)}
                  ${infoRow("triangle-alert", copy.caution, entry.caveat)}
                </div>
              </div>
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

const renderArchivedEntries = (copy) => {
  const section = document.querySelector("[data-archive-section]");
  const list = document.querySelector("[data-archive-list]");
  if (!section || !list) return;

  const entries = (siteConfig.archivedEntries ?? [])
    .map((entry, index) => ({ entry, index }))
    .sort((left, right) =>
      String(right.entry.archivedAt).localeCompare(String(left.entry.archivedAt)) || left.index - right.index,
    )
    .map(({ entry }) => entry);

  if (!entries.length) {
    list.innerHTML = "";
    section.hidden = true;
    return;
  }

  list.innerHTML = entries
    .map((sourceEntry) => {
      const entry = localizeEntry(sourceEntry);
      const reason = entry.archivedReason || copy.archiveReasonFallback;
      const date = formatCalendarDate(sourceEntry.archivedAt);
      return `<li class="archive-item">
        <strong class="archive-name">${escapeHtml(entry.name)}</strong>
        <time class="archive-date" datetime="${escapeHtml(sourceEntry.archivedAt)}">${escapeHtml(copy.archiveDateLabel)} ${escapeHtml(date)}</time>
        <span class="archive-reason">${escapeHtml(reason)}</span>
      </li>`;
    })
    .join("");

  section.hidden = false;
  applyText("[data-archive-title]", copy.archiveTitle);
  applyText("[data-archive-count]", copy.archiveCount.replace("{count}", String(entries.length)));
  applyText("[data-archive-note]", copy.archiveNote);
};

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

// 「最近变更」不额外维护数据：新收录看 addedAt，改动看 updatedAt，下架看 archivedAt。
// 注意不能拿 publishedAt 当收录时间——它历史上被当作「这条信息最后一次成稿的时间」用过
// （AnyRouter 8-11 就收录了，publishedAt 却被改成过 8-13 和 8-26），拿它判断会把改过
// 文案的老站全认成新站。所以新增站点时单独填一个 addedAt，老条目一律不补。
// 不值得占位置的小改动（比如单纯的额度数字变化）可以加 quietUpdate: true，
// 卡片上的时效标记照旧显示，只是不进这个列表。
const renderRecentChanges = (copy) => {
  const section = document.querySelector("[data-recent-changes]");
  const list = document.querySelector("[data-changes-list]");
  if (!section || !list) return;

  const items = [];
  for (const sourceEntry of siteConfig.entries) {
    const addedDays = daysSince(sourceEntry.addedAt);
    const updatedDays = daysSince(sourceEntry.updatedAt);
    // 新站首次收录时通常会同时填写 addedAt / updatedAt；两者同日时应按「新收录」展示，
    // 避免被普通更新和同日下架记录挤进折叠区。后续 updatedAt 晚于 addedAt 时再按更新算。
    if (isRecent(addedDays) && sourceEntry.addedAt === sourceEntry.updatedAt) {
      const entry = localizeEntry(sourceEntry);
      items.push({ days: addedDays, name: entry.name, note: entry.kind ?? "", tag: copy.changesAddedLabel, variant: "added" });
      continue;
    }
    // 改过的按改动算，没改过的按收录算——同一个站不会既算新收录又算更新。
    if (isRecent(updatedDays)) {
      if (sourceEntry.quietUpdate) continue;
      const entry = localizeEntry(sourceEntry);
      items.push({ days: updatedDays, name: entry.name, note: entry.updateNote ?? "", tag: "", variant: "updated" });
      continue;
    }
    if (!isRecent(addedDays)) continue;
    const entry = localizeEntry(sourceEntry);
    // 新收录本身就是变更，说明用 kind（中英文都有），不必另写一句。
    items.push({ days: addedDays, name: entry.name, note: entry.kind ?? "", tag: copy.changesAddedLabel, variant: "added" });
  }
  for (const sourceEntry of siteConfig.archivedEntries ?? []) {
    const days = daysSince(sourceEntry.archivedAt);
    if (!isRecent(days)) continue;
    const entry = localizeEntry(sourceEntry);
    const note = entry.archivedReason || copy.changesArchivedNote;
    items.push({ days, name: entry.name, note, tag: copy.changesArchivedLabel, variant: "archived" });
  }

  if (!items.length) {
    section.hidden = true;
    list.innerHTML = "";
    return;
  }

  const variantPriority = { added: 0, updated: 1, archived: 2 };
  items.sort(
    (left, right) =>
      left.days - right.days ||
      variantPriority[left.variant] - variantPriority[right.variant] ||
      left.name.localeCompare(right.name),
  );
  section.hidden = false;
  list.innerHTML = items
    .map(
      (item, index) => `<li class="changes-item"${index >= CHANGES_PREVIEW_COUNT && !changesExpanded ? " hidden" : ""}>
        <span class="changes-when">${escapeHtml(formatDaysAgo(item.days, copy, item.variant))}</span>
        <span class="changes-body">
          <strong>${escapeHtml(item.name)}</strong>${item.tag ? `<span class="changes-tag">${escapeHtml(item.tag)}</span>` : ""}
          ${item.note ? `<span class="changes-note">${escapeHtml(item.note)}</span>` : ""}
        </span>
      </li>`,
    )
    .join("");

  // 条数没超过预览上限时整个按钮都不出现，避免点了没反应。
  const toggle = document.querySelector("[data-changes-toggle]");
  const collapsed = !changesExpanded && items.length > CHANGES_PREVIEW_COUNT;
  list.toggleAttribute("data-changes-collapsed", collapsed);
  if (toggle) {
    const needsToggle = items.length > CHANGES_PREVIEW_COUNT;
    toggle.hidden = !needsToggle;
    if (needsToggle) {
      toggle.textContent = changesExpanded
        ? copy.changesCollapse
        : copy.changesExpand.replace("{count}", String(items.length));
      toggle.setAttribute("aria-expanded", String(changesExpanded));
    }
  }

  applyText("[data-changes-eyebrow]", copy.changesEyebrow);
  applyText("[data-changes-title]", copy.changesTitle);
  applyText("[data-changes-note]", copy.changesNote.replace("{days}", String(RECENT_WINDOW_DAYS)));
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
  applyText("[data-footer]", copy.brand);
  applyText("[data-last-updated]", `${copy.lastUpdated} ${siteConfig.lastUpdated.replaceAll("-", ".")}`);
  applyText("[data-disclaimer]", copy.disclaimer);
  applyText("[data-usage-notice]", copy.usageNotice);

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

  // 过滤当前显示的列表：分区 + 搜索词 + 快捷场景标签
  const visibleEntries = orderedEntries.filter((entry) => {
    if (entryPricing(entry) !== currentPricing) return false;
    if (!matchesFilterTag(entry, currentFilterTag)) return false;
    if (!matchesSearchQuery(entry, currentSearchQuery)) return false;
    return true;
  });

  const feedItemsEl = document.querySelector("#feed-items");

  if (visibleEntries.length === 0) {
    if (feedItemsEl) {
      feedItemsEl.innerHTML = `
        <div class="feed-empty" role="status">
          <h3 data-empty-title>${escapeHtml(copy.emptyTitle)}</h3>
          <p data-empty-desc>${escapeHtml(copy.emptyDesc)}</p>
          <button type="button" class="feed-empty-reset" data-empty-reset>${escapeHtml(copy.emptyReset)}</button>
        </div>
      `;
    }
  } else {
    if (feedItemsEl) feedItemsEl.innerHTML = visibleEntries.map(renderEntry).join("");
  }

  // 国际化与文案更新
  applyText("[data-filter-label]", copy.filterLabel);
  applyText("[data-filter-tag='all']", copy.filterAll);
  applyText("[data-filter-tag='claude']", copy.filterClaude);
  applyText("[data-filter-tag='openai']", copy.filterOpenAI);
  applyText("[data-filter-tag='checkin']", copy.filterCheckin);
  applyText("[data-filter-tag='draw']", copy.filterDraw);
  applyText("[data-filter-tag='easyreg']", copy.filterEasyReg);
  applyText("[data-filter-tag='nodumbgpt']", copy.filterNoDumbGpt);
  // 同一个标记在两个分区叫法不同：公益区是「站长推荐」，付费区是「站长自用」。
  applyText("[data-filter-tag='recommended']", currentPricing === "paid" ? copy.filterSelfUse : copy.filterRecommended);
  applyText("[data-filter-tag='egg']", copy.filterEgg);
  document.querySelector("[data-filter-tag='egg']")?.setAttribute("title", copy.eggBadgeTitle);

  const searchInputEl = document.querySelector("[data-feed-search]");
  if (searchInputEl) {
    searchInputEl.setAttribute("placeholder", copy.searchPlaceholder);
    searchInputEl.setAttribute("aria-label", copy.searchPlaceholder);
  }

  // 快捷标签选中状态
  document.querySelectorAll("[data-filter-tag]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.filterTag === currentFilterTag));
  });

  applyText("[data-section-note]", currentPricing === "paid" ? copy.pricingPaidNote : copy.pricingPublicNote);
  applyText("[data-site-count]", String(visibleEntries.length).padStart(2, "0"));
  document.querySelector("[data-pricing-switcher]")?.setAttribute("aria-label", copy.pricingLabel);
  document.querySelectorAll("[data-pricing-option]").forEach((button) => {
    const value = button.dataset.pricingOption;
    const count = orderedEntries.filter((entry) => entryPricing(entry) === value).length;
    button.textContent = `${value === "paid" ? copy.pricingPaid : copy.pricingPublic} ${count}`;
    button.setAttribute("aria-pressed", String(value === currentPricing));
  });

  renderRecentChanges(copy);
  renderArchivedEntries(copy);
  applyMetaForLocale(copy);
  applyStructuredData(copy, orderedEntries);

  window.lucide?.createIcons();
};

const announceLocaleSwitch = () => {
  // 列表本身不是 live region，否则每次渲染都会把全部条目朗读一遍；
  // 只在用户主动切换语言时播报一句摘要。
  const status = document.querySelector("[data-locale-status]");
  if (!status) return;
  status.textContent = pageCopy[currentLocale].localeSwitched.replace(
    "{count}",
    String(siteConfig.entries.length),
  );
};

const setLocale = (locale, { updateUrl = true, announce = true } = {}) => {
  if (!supportedLocales.has(locale)) return;
  currentLocale = locale;
  storeLocale(locale);
  if (updateUrl) updateLocaleInUrl(locale);
  // 切英文前确保翻译已就位，避免先闪中文再跳变；加载失败则退化中文，照旧渲染。
  if (locale === "en") {
    loadEntryTranslations().then(() => {
      renderPage();
      if (announce) announceLocaleSwitch();
    });
    return;
  }
  renderPage();
  if (announce) announceLocaleSwitch();
};

const setPricing = (pricing, { announce = true } = {}) => {
  if (!supportedPricing.has(pricing) || pricing === currentPricing) return;
  currentPricing = pricing;
  renderPage();

  // 和切换语言同理：列表本身不是 live region，只在用户主动切分区时播报一句。
  if (announce) {
    const status = document.querySelector("[data-locale-status]");
    if (status) {
      const copy = pageCopy[currentLocale];
      const count = siteConfig.entries.filter((entry) => entryPricing(entry) === pricing).length;
      status.textContent = copy.pricingSwitched
        .replace("{tab}", pricing === "paid" ? copy.pricingPaid : copy.pricingPublic)
        .replace("{count}", String(count));
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  currentLocale = resolveLocale();
  initTheme();

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => setLocale(button.dataset.langOption));
  });

  document.querySelectorAll("[data-pricing-option]").forEach((button) => {
    button.addEventListener("click", () => setPricing(button.dataset.pricingOption));
  });

  document.querySelector("[data-changes-toggle]")?.addEventListener("click", () => {
    changesExpanded = !changesExpanded;
    renderRecentChanges(pageCopy[currentLocale]);
  });

  // 主题切换按钮
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", toggleTheme);

  // 搜索输入框交互（防抖处理提升手感）
  const searchInput = document.querySelector("[data-feed-search]");
  const searchClear = document.querySelector("[data-search-clear]");

  let searchDebounceTimer = null;
  searchInput?.addEventListener("input", (e) => {
    const val = e.target.value;
    if (searchClear) searchClear.hidden = !val;
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      currentSearchQuery = val;
      renderPage();
    }, 120);
  });

  searchClear?.addEventListener("click", () => {
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }
    searchClear.hidden = true;
    currentSearchQuery = "";
    renderPage();
  });

  // 全局快捷键：Ctrl/Cmd + K 快速聚焦搜索框，Esc 清空/退出
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchInput?.focus();
      searchInput?.select();
    } else if (e.key === "Escape" && document.activeElement === searchInput) {
      if (searchInput.value) {
        searchInput.value = "";
        if (searchClear) searchClear.hidden = true;
        currentSearchQuery = "";
        renderPage();
      } else {
        searchInput.blur();
      }
    }
  });

  // 快捷场景标签切换
  document.querySelectorAll("[data-filter-tag]").forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.dataset.filterTag;
      // 再点一次当前已选中的标签即取消筛选，回到「全部」。
      currentFilterTag = currentFilterTag === tag ? "all" : tag;
      renderPage();
    });
  });

  // 卡片容器事件代理：展开折叠、重置空状态、防误触与轻量文本复制
  const feedItemsContainer = document.querySelector("#feed-items");
  feedItemsContainer?.addEventListener(
    "click",
    (e) => {
      // 1. 空状态一键重置
      const resetBtn = e.target.closest("[data-empty-reset]");
      if (resetBtn) {
        e.preventDefault();
        currentSearchQuery = "";
        currentFilterTag = "all";
        if (searchInput) searchInput.value = "";
        if (searchClear) searchClear.hidden = true;
        renderPage();
        return;
      }

      // 2. 卡片展开/收起详情
      const expandBtn = e.target.closest("[data-expand-btn]");
      if (expandBtn) {
        e.preventDefault();
        e.stopPropagation();
        const entryName = expandBtn.dataset.expandBtn;
        if (entryName) toggleEntryExpanded(entryName);
        return;
      }

      // 3. 点击福利标签一键复制内容
      const tagItem = e.target.closest(".benefit-tags li");
      if (tagItem) {
        e.preventDefault();
        e.stopPropagation();
        const text = tagItem.textContent.trim();
        if (text) {
          const copy = pageCopy[currentLocale];
          const doFeedback = () => showCopyFeedback(tagItem, copy.copied);
          if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(text).then(doFeedback).catch(() => {
              try {
                const ta = document.createElement("textarea");
                ta.value = text;
                ta.style.position = "fixed";
                ta.style.opacity = "0";
                document.body.append(ta);
                ta.select();
                document.execCommand("copy");
                ta.remove();
              } catch {}
              doFeedback();
            });
          } else {
            doFeedback();
          }
        }
        return;
      }

      // 4. 折叠面板内的文本划选与点击交互，阻止触发整卡跳转
      const expandable = e.target.closest(".entry-expandable");
      if (expandable && !e.target.closest("a")) {
        e.stopPropagation();
        if (window.getSelection()?.toString().length > 0) {
          e.preventDefault();
        }
      }
    },
    { capture: true },
  );

  // 英文用户先等翻译文件就位再首渲染，避免看到中文再跳变；中文用户直接渲染。
  if (currentLocale === "en") {
    loadEntryTranslations().then(renderPage);
  } else {
    renderPage();
  }
});
