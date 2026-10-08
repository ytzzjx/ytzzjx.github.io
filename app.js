// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。我会尽量更新最新情况，欢迎多多关注。",
  githubUrl: "https://github.com/ytzzjx",
  lastUpdated: "2026-09-25",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  displayOrder: [
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
    "Aotera",
    "Edge API",
    "SheApi",
    "sub-coco",
    "zquant",
    "Nofx",
    "AbinAPI",
    "ArityFlow",
    "Sulmate 半公益站",
    "Xingya",
    "Rinko NAI 生图公益站",
    "北执半公益站",
    "Jasperio",
    "PAI 生图公益站",
    "GemAI（哈基米公益站）",
    "Hubway",
    "AIHub",
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
      publishedAt: "2026-10-07 00:00",
      addedAt: "2026-10-07",
      updatedAt: "2026-10-07",
      updateNote: "新收录：付费站，0.1 倍率不降智 GPT；开业活动，进群人数每到一个阶段领红包，第一天签到送 6。",
      kind: "付费站 / 0.1 倍不降智 GPT / 开业活动",
      name: "Aotera",
      summary:
        "付费新站，Plus 分组 0.1 倍率、GPT 不降智；Pro 0.17 倍、Pro 500 0.24 倍。注册有 Turnstile 人机验证与邮箱验证。开业活动：进群人数每到一个阶段领红包，第一天签到送 6（用户提供）。",
      details:
        "站内名称 Aotera（aotera.cc），New API 程序，额度按人民币（¥）显示。Plus 分组 0.1 倍率，站方自述该组不降智（用户提供）；Pro 0.17 倍、Pro 500 0.24 倍。模型广场公开可查，当前 7 个全是 GPT 系：gpt-6-astra、gpt-6-sol、gpt-6-luna、gpt-6.1-sol、gpt-5.6-luna、gpt-5.6-sol、gpt-5.6-terra，三个分组都能用。注册需邮箱验证并开 Turnstile 人机验证，无 GitHub / Linux DO 登录；站内有签到。开业活动：进群人数每到一个阶段领红包，第一天签到送 6（用户提供），具体规则与结束时间以群内公告和站内显示为准。",
      registration: "邮箱验证注册并完成 Turnstile 人机验证（走邀请链接）。",
      signupBonus: "开业活动：进群人数每阶段领红包（以群内公告为准）",
      dailyCheckin: "有签到；开业第一天签到送 6（用户提供）",
      models: "Plus ×0.1（不降智）/ Pro ×0.17 / Pro 500 ×0.24；7 个 GPT 系模型（6-astra、6-sol、6-luna、6.1-sol、5.6-luna/sol/terra）",
      experience: "付费新站开业；Plus 组 0.1 倍不降智 GPT；第一天签到送 6，进群按人数阶段发红包",
      caveat: "付费站，开业活动的红包与签到赠送均为用户提供，阶段规则、金额和结束时间以群内公告和站内显示为准。注册有人机验证；模型目前以 GPT 系为主，倍率与可用模型以站内模型广场为准。",
      benefits: [
        "付费站",
        "0.1 倍率不降智 GPT",
        "Pro 0.17 倍",
        "Pro 500 0.24 倍",
        "7 个 GPT 系模型",
        "新站开业",
        "第一天签到送 6",
        "进群按人数阶段领红包",
        "有签到",
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
      updatedAt: "2026-09-25",
      updateNote:
        "新增收录：半公益酒馆站，注册送 5 元、每日签到约 2 元；有 Claude 和 Gemini，gemini 0.04 元一次、claude-opus-4-6 0.3 元一次。",
      kind: "半公益站 / 酒馆站 / 注册送 5 签到约 2",
      name: "Ovo 半公益站",
      summary:
        "半公益酒馆站，注册送 5 元、每日签到约 2 元；有 Claude 和 Gemini，gemini 0.04 元一次、claude-opus-4-6 0.3 元一次。",
      details:
        "站内名称 ovo（ovoapi.cn），面向酒馆（SillyTavern）用户的半公益站，额度按元显示。注册送 5 元，每日签到约 2 元。站内有 Claude 和 Gemini 可用：gemini 0.04 元一次，claude-opus-4-6 0.3 元一次，均按次计费。",
      registration: "通过邀请链接注册。",
      signupBonus: "5 元",
      dailyCheckin: "约 2 元",
      models: "Claude / Gemini（gemini 0.04 元一次、claude-opus-4-6 0.3 元一次）",
      experience: "酒馆站，按次计费",
      caveat: "签到金额与模型价格可能调整，以站内实际显示为准；可用模型清单以站内为准。",
      benefits: [
        "半公益站",
        "酒馆站",
        "注册送 5 元",
        "每日签到约 2 元",
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
      publishedAt: "2026-10-03 00:00",
      addedAt: "2026-10-03",
      updatedAt: "2026-10-03",
      updateNote: "上线了 0.08 的 GPT 不降智分组。",
      kind: "源头站 / GPT 不降智分组 0.08",
      name: "sub-coco",
      summary:
        "付费源头站，zquant 的一个上游，也是很多站点的源头，利润比较低。没有签到，注册不送额度；现已上线 0.08 的 GPT 不降智分组，国庆期间另有 0.2 倍的福利官 key。",
      details:
        "这是 zquant 的一个上游，也是很多站点的源头。源头站的利润比较低。没有签到，注册也不送额度。现已上线 0.08 的 GPT 不降智分组；国庆期间另有 0.2 倍的福利官 key，其余模型以站内实际显示为准。",
      registration: "通过邀请链接注册，注册不送额度。",
      signupBonus: "不送",
      dailyCheckin: "没有签到",
      models: "GPT 不降智分组（0.08）",
      experience: "用户提供：源头站，利润比较低",
      caveat:
        "付费源头站，利润比较低。没有签到，注册不送额度。GPT 不降智分组目前是 0.08；0.2 倍是国庆期间的福利官 key，活动结束后可能恢复原价，其余模型和计费规则以站内实际显示为准。",
      benefits: ["付费站", "源头站", "利润较低", "没有签到", "注册不送", "GPT 不降智分组 0.08", "国庆福利官 key", "0.2 倍"],
      url: "https://www.sub-coco.org/register?aff=WSKLQ874RAKN",
      pricing: "paid",
      tone: "active",
    },
    {
      publishedAt: "2026-09-21 00:00",
      addedAt: "2026-09-21",
      updatedAt: "2026-10-04",
      updateNote: "国庆活动期间充值 1:1.1。",
      kind: "付费站 / GPT 与 Grok / 倍率约 0.15 / 国庆充值 1:1.1",
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
      updatedAt: "2026-09-20",
      updateNote: "新增 Kimi-K3，已移到公益区前列。",
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
      url: "https://zc.gcmod.cn/sign-up?aff=4wem",
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
      updatedAt: "2026-09-10",
      updateNote: "国内入口与原有注册地址合并为一条。",
      quietUpdate: true,
      kind: "GLM-5.3 / 模型更新",
      name: "AgentRouter",
      summary: "现已支持 GLM-5.3，另有 DeepSeek V4 Flash；Claude 倍率上调，GPT-5.6-sol 倍率下调。国内打不开原站可直接走卡片上的国内注册入口。",
      details:
        "现已支持 GLM-5.3。注册送 75 刀、每日签到 25 刀，速度快且稳定。GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以使用 Linux Do 账号。国内无法访问原站时，用卡片下方的「国内注册入口」按钮直接注册即可，注册要求与原地址一致，也无需代理。站长表示正常使用可能获得消耗额度补充或 Core 分组（标注 0.8 折）奖励，具体获取和发放规则尚未确认。",
      registration: "GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号；国内走「国内注册入口」，要求一致。",
      signupBonus: "75 刀",
      dailyCheckin: "25 刀",
      models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude 系列",
      experience: "模型已恢复正常，速度快且稳定",
      caveat: "Claude 倍率已上调、GPT-5.6-sol 倍率已下调，具体倍率以站内显示为准；签到需退出账号后重新登录才会生效。正常使用奖励机制仍待确认。",
      benefits: ["GLM-5.3", "DeepSeek V4 Flash", "GPT-5.6-sol 倍率下调", "Claude 倍率上调", "注册送 75 刀", "每日签到 25 刀", "老号门槛", "有国内入口"],
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

const entryTranslations = {
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
  "Aotera": {
    name: "Aotera",
    kind: "Paid service / 0.1x undumbed GPT / opening promotion",
    updateNote:
      "New listing: a paid service with undumbed GPT at a 0.1 rate; opening promotion with red packets as group membership hits each stage and 6 granted on the first day of check-ins.",
    summary:
      "A new paid service: the Plus group runs undumbed GPT at 0.1x, with Pro at 0.17x and Pro 500 at 0.24x. Registration needs a captcha and email verification. Opening promotion: red packets as group membership hits each stage, and 6 granted on the first day of check-ins (per user report).",
    details:
      "The service calls itself Aotera (aotera.cc), runs on New API, and displays credit in CNY (¥). The Plus group runs at a 0.1 rate, which the operator describes as undumbed (per user report); Pro runs at 0.17x and Pro 500 at 0.24x. The public model list currently shows 7 models, all GPT-family: gpt-6-astra, gpt-6-sol, gpt-6-luna, gpt-6.1-sol, gpt-5.6-luna, gpt-5.6-sol, and gpt-5.6-terra, all available in the three groups. Registration needs email verification and a Turnstile captcha, with no GitHub or Linux DO login; the service has a check-in. Opening promotion: red packets as group membership hits each stage, and 6 granted on the first day of check-ins (per user report) — the stage rules, amounts, and end date follow the group announcement and the service.",
    registration: "Register with email verification and complete the Turnstile captcha through the referral link.",
    signupBonus: "Opening promotion: red packets as group membership hits each stage (see the group announcement)",
    dailyCheckin: "A check-in is available; 6 granted on the first day of the promotion (per user report)",
    models: "Plus 0.1x (undumbed) / Pro 0.17x / Pro 500 0.24x; 7 GPT-family models (6-astra, 6-sol, 6-luna, 6.1-sol, 5.6-luna/sol/terra)",
    experience: "A new paid service; undumbed GPT at 0.1x on the Plus group; 6 on the first-day check-in and red packets as group membership hits each stage",
    caveat:
      "A paid service. The promotion's red packets and first-day check-in credit come from a user report; the stage rules, amounts, and end date follow the group announcement and the service. Registration uses a captcha. Models are currently GPT-family, so confirm rates and availability on the in-site model page.",
    benefits: [
      "Paid service",
      "0.1x undumbed GPT",
      "Pro at 0.17x",
      "Pro 500 at 0.24x",
      "7 GPT-family models",
      "Newly opened",
      "6 on the first-day check-in",
      "Red packets as group membership hits each stage",
      "Check-in available",
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
    kind: "Freemium / SillyTavern-oriented / ¥5 on sign-up, about ¥2 daily check-in",
    updateNote:
      "New listing: a freemium SillyTavern-oriented service granting ¥5 on sign-up with an about-¥2 daily check-in; Claude and Gemini available, with gemini at ¥0.04 per call and claude-opus-4-6 at ¥0.3 per call.",
    summary:
      "A freemium SillyTavern-oriented service: ¥5 on sign-up and an about-¥2 daily check-in. Claude and Gemini are available — gemini at ¥0.04 per call and claude-opus-4-6 at ¥0.3 per call.",
    details:
      "The service calls itself ovo (ovoapi.cn) and is oriented toward SillyTavern users, with credit displayed in yuan. Sign-up grants ¥5 and the daily check-in adds about ¥2. Claude and Gemini are available: gemini at ¥0.04 per call and claude-opus-4-6 at ¥0.3 per call, both billed per request.",
    registration: "Register through the referral link.",
    signupBonus: "¥5",
    dailyCheckin: "About ¥2",
    models: "Claude / Gemini (gemini ¥0.04 per call, claude-opus-4-6 ¥0.3 per call)",
    experience: "SillyTavern-oriented, billed per request",
    caveat: "Check-in amounts and model prices may change; confirm them on the service. The available model list is subject to what the site shows.",
    benefits: [
      "Freemium",
      "SillyTavern-oriented",
      "¥5 on sign-up",
      "About ¥2 daily check-in",
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
    kind: "Public service / GitHub sign-up / OpenAI for Codex only",
    updateNote: "Password registration is closed, so sign-up is now via GitHub; the check-in is a flat $50; added the rule that OpenAI models may only be used inside Codex.",
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
  "sub-coco": {
    name: "sub-coco",
    kind: "Source service / non-dumbed-down GPT group 0.08",
    updateNote: "A non-dumbed-down GPT group at 0.08 is now available.",
    summary:
      "A paid source service, one upstream of zquant and the source behind many other services, with relatively low margins. There is no check-in and no sign-up credit. A non-dumbed-down GPT group at 0.08 is now available, alongside the 0.2x National Day promotional official key.",
    details:
      "This is one upstream of zquant and the source behind many other services. As a source service, its margins are relatively low. There is no check-in and registration grants no credit. A non-dumbed-down GPT group at 0.08 is now available, and the 0.2x promotional official key remains during the National Day period; confirm the rest of the model range in the service.",
    registration: "Register through the referral link; registration grants no credit.",
    signupBonus: "None",
    dailyCheckin: "No check-in",
    models: "Non-dumbed-down GPT group (0.08)",
    experience: "Per user report: a source service with relatively low margins",
    caveat:
      "A paid source service with relatively low margins. There is no check-in and registration grants no credit. The non-dumbed-down GPT group is currently 0.08. The 0.2x rate is a National Day promotional official key and may return to the regular price after the promotion; confirm the remaining models and billing rules in the service.",
    benefits: ["Paid service", "Source service", "Low margins", "No check-in", "No sign-up credit", "Non-dumbed-down GPT group 0.08", "National Day promotional official key", "0.2x"],
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
    kind: "GLM-5.3 / model update",
    updateNote: "The mainland China link and the original link are now merged into one entry.",
    summary:
      "GLM-5.3 is now available alongside DeepSeek V4 Flash. Claude rates increased, while GPT-5.6-sol rates decreased. If the main site is unreachable from mainland China, use the mainland sign-up link on the card.",
    details:
      "GLM-5.3 is now available. New accounts receive $75 and daily check-ins add $25. The service is fast and stable. It requires a GitHub account created before December 2025, or a Linux Do account. Users in mainland China can register directly through the mainland link below the card with no proxy needed; the requirements are identical. Normal use may bring credit top-ups or Core group access, but the exact rules are unconfirmed.",
    registration: "GitHub account created before December 2025, or a Linux Do account; mainland users can use the mainland sign-up link instead.",
    signupBonus: "$75 credit",
    dailyCheckin: "$25",
    models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude models",
    experience: "Models restored and currently stable",
    caveat: "Claude rates increased and GPT-5.6-sol rates decreased; verify exact rates on the service. Sign out and back in for check-in credit to take effect. The normal-use reward mechanism remains unconfirmed.",
    benefits: ["GLM-5.3", "DeepSeek V4 Flash", "Lower GPT-5.6-sol rate", "Higher Claude rates", "$75 sign-up credit", "$25 daily check-in", "Older account required", "Mainland China link"],
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
          <h3>${safeName}</h3>
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
  applyText("[data-filter-tag='recommended']", copy.filterRecommended);

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

  renderPage();
});
