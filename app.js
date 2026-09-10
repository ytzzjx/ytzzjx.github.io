// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。我会尽量更新最新情况，欢迎多多关注。",
  githubUrl: "https://github.com/ytzzjx",
  lastUpdated: "2026-09-10",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  displayOrder: [
    "AgentRouter",
    "AgentRouter 国内入口",
    "JustWoker 公益站",
    "TokenForge（tokengate）",
    "Nofx",
    "MotoMoto",
    "Txcxgzs 公益站",
    "Hyper 公益站",
    "北执半公益站",
    "AnyRouter",
    "一梦五千年",
    "GcmodAi",
    "247看 API",
    "GemAI（哈基米公益站）",
    "PAI 生图公益站",
    "Rinko NAI 生图公益站",
    "Jasperio",
    "SeekAI",
    "咕嘎咕嘎",
    "Xingya",
    "ArityFlow",
    "Sulmate 半公益站",
    "Hubway",
    "AIHub",
    "True SOTA",
    "AbinAPI",
    "CheapCodex",
    "ze（芙芙中转站）",
    "奶酪公益站",
    "SharedChat 公益站",
    "XXS 公益站",
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
      url: "https://motomoto.lol/sign-up?aff=vMPH",
      tutorialUrl: "https://motomoto.lol/privacy",
      tutorialLabel: "先看隐私政策里的训练数据授权条款",
      tone: "active",
    },
    {
      publishedAt: "2026-08-31 00:00",
      addedAt: "2026-08-31",
      updatedAt: "2026-09-05",
      updateNote: "已开签到，每天约 1 毛，够跑十次请求。",
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
      publishedAt: "2026-08-31 00:00",
      addedAt: "2026-08-31",
      kind: "纯付费站 / 常驻 0.06 倍率",
      pricing: "paid",
      name: "247看 API",
      summary: "纯付费站，没有注册赠送。常驻特惠分组倍率 0.06，有时还会更低；充值 1:1，含 GPT-5.6-luna。",
      details:
        "这是一个纯付费站，注册没有任何赠送额度，想用得先充钱，所以更适合当低倍率的付费线路而不是薅额度。特惠分组是常驻的，倍率 0.06，有时会放到更低；充值比例 1:1。已知含 GPT-5.6-luna。",
      registration: "邀请链接注册；纯付费站，注册无赠送额度，需自行充值后使用。",
      signupBonus: "无（纯付费站）",
      dailyCheckin: "无",
      models: "GPT-5.6-luna",
      experience: "纯付费站，常驻特惠分组 0.06 倍率",
      caveat: "纯付费站，注册没有赠送，必须充值才能用。特惠分组虽是常驻，但倍率和分组规则可能调整，请以站内实际显示为准；充值比例 1:1。",
      benefits: ["纯付费站", "常驻特惠分组", "倍率 0.06", "有时更低", "充值 1:1", "GPT-5.6-luna"],
      url: "https://api.247kan.com/register?aff=MPVV6RM33864",
      tone: "active",
    },
    {
      publishedAt: "2026-08-31 00:00",
      addedAt: "2026-08-31",
      updatedAt: "2026-09-04",
      updateNote: "百亿补贴取消，签到等福利都没了，已改归付费区。",
      kind: "玩不起 / 补贴取消 · 只剩注册赠送",
      pricing: "paid",
      name: "CheapCodex",
      summary: "玩不起：百亿补贴活动已取消，每日签到等福利都没了，注册送的 20 刀应该还在。加上 GPT 倍率 2.5x 本来就贵，已改归付费区。注册系统的邮件有问题，可能收不到验证邮件，记得翻垃圾箱。",
      details:
        "百亿补贴活动已经取消，随之没了的是每日签到那类持续福利；注册送的 20 刀应该还留着。也就是说现在注册还能拿一笔一次性额度，但没有能让额度自己回来的机制了。GPT 倍率为 2.5x，比标准计费贵，20 刀实际能用多少要按这个折算。补贴撤了、日常福利也撤了，剩下的就是一个高价付费站，所以移到付费区。注册环节的老问题还在：邮件系统不稳，验证邮件可能收不到，先去垃圾箱找。",
      registration: "邮箱注册。注册系统的邮件发送有问题，验证邮件可能进垃圾箱或收不到，请先翻垃圾箱。",
      signupBonus: "20 刀（补贴取消后应该仍保留）",
      dailyCheckin: "已取消（原为 20 刀）",
      models: "GPT（倍率 2.5x）",
      experience: "补贴取消、签到等福利已没；GPT 倍率 2.5x 偏贵",
      caveat: "百亿补贴已取消，每日签到这类持续福利跟着没了，只剩注册那一次性的 20 刀，额度用完不会自己回来。GPT 倍率 2.5x，比标准计费贵，赠送的实际可用量要按倍率折算。注册时邮件系统有问题，可能收不到验证邮件，请查看垃圾箱。",
      benefits: ["玩不起", "百亿补贴已取消", "签到等福利已没", "注册送 20 刀应仍保留", "GPT 倍率 2.5x 偏贵", "邮件可能进垃圾箱"],
      url: "https://api.cheapcodex.online/register?aff=2PSJ57HNVGZW",
      tone: "caution",
    },
    {
      publishedAt: "2026-08-20 10:15",
      updatedAt: "2026-09-09",
      updateNote: "补充调用说明：站内模型请使用 /v1/messages；当前仅支持 GPT。",
      kind: "公益站 / 已恢复 / 仅 GPT",
      name: "JustWoker 公益站",
      summary: "站点已经恢复可用，目前只能使用 GPT 模型，不再提供 Claude；调用站内模型请使用 /v1/messages。",
      details:
        "JustWoker 已经复活，当前可用模型仅限 GPT，原有 Claude 线路没有恢复。调用站内模型请使用兼容接口的 /v1/messages 路径。此前已知注册需要 GitHub 账号且账号注册时间满 1 年；本次没有复核注册赠送、每日签到和倍率，具体以站内实际显示为准。",
      registration: "此前需使用注册满 1 年的 GitHub 账号；当前注册状态与门槛以注册页实际显示为准。",
      signupBonus: "以站内当前显示为准",
      dailyCheckin: "以站内当前显示为准",
      models: "仅 GPT（调用请使用 /v1/messages）",
      experience: "已恢复可用；当前仅支持 GPT",
      caveat: "当前只有 GPT 模型，Claude 尚未恢复；模型调用请使用 /v1/messages。注册门槛、赠送、签到、倍率和稳定性本次未复核，请以站内实际规则为准。",
      benefits: ["已恢复可用", "靠前推荐", "仅 GPT", "调用使用 /v1/messages", "GitHub 账号门槛以站内为准"],
      url: "https://api.justwoker.icu/sign-up?aff=T5tm",
      tone: "active",
    },
    {
      publishedAt: "2026-08-18 17:13",
      updatedAt: "2026-08-30",
      updateNote: "已停止新用户注册，恢复开放后再更新。",
      kind: "暂停注册 / 半公益站",
      name: "Sulmate 半公益站",
      summary: "已停止新用户注册，恢复开放后再更新。原有公益池全站共享 1x，VIP 组支持付费调用。",
      details:
        "站点已停止新用户注册。此前分为公益组和 VIP 组：公益组使用全站共享额度，VIP 组支持付费调用。已有账号的分组、签到和调用规则请以站内当前说明为准。",
      registration: "目前停止注册，等待恢复开放。",
      signupBonus: "暂停注册；原为公益池共享额度",
      dailyCheckin: "已有账号以站内规则为准",
      experience: "公益组 1x；VIP 组 0.15x",
      caveat: "新用户注册已停止，恢复时间未知。已有账号的公益池、签到奖励、VIP 价格和分组规则也可能调整，请以站内实际说明为准。",
      benefits: ["暂停注册", "原公益组全站共享", "VIP 付费调用", "VIP 倍率 0.15x", "公益倍率 1x"],
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
      updatedAt: "2026-08-31",
      updateNote: "注册赠送已下调至 75 刀。",
      quietUpdate: true,
      kind: "国内入口 / GLM-5.3",
      name: "AgentRouter 国内入口",
      summary: "AgentRouter 国内注册地址；现已支持 GLM-5.3，另有 DeepSeek V4 Flash；Claude 倍率上调，GPT-5.6-sol 倍率下调。",
      details:
        "现已支持 GLM-5.3。注册送 75 刀、每日签到 25 刀。注册要求与 AgentRouter 原入口一致：GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以使用 Linux Do 账号。站长鼓励正常使用，有时会补充消耗额度，也可能给予标注“0.8 折”的 Core 分组；具体奖励和获取机制尚未确认。",
      registration: "国内注册地址；GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号。",
      signupBonus: "75 刀",
      dailyCheckin: "25 刀",
      models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude 系列",
      experience: "模型已恢复正常，速度快且稳定",
      caveat: "Claude 倍率已上调、GPT-5.6-sol 倍率已下调，具体倍率以站内显示为准；签到需退出账号后重新登录才会生效。正常使用奖励机制仍待确认。",
      benefits: ["国内注册地址", "GLM-5.3", "DeepSeek V4 Flash", "GPT-5.6-sol 倍率下调", "Claude 倍率上调", "注册送 75 刀", "每日签到 25 刀", "老号门槛"],
      url: "https://ps.air-outer.com/register?aff=i3Xz",
      tutorialUrl: "https://linux.sb/topic/13130",
      tutorialLabel: "国内无需代理注册 AgentRouter 教程",
      tone: "active",
    },
    {
      publishedAt: "2026-08-26 00:00",
      updatedAt: "2026-08-31",
      updateNote: "注册赠送已下调至 75 刀。",
      quietUpdate: true,
      kind: "GLM-5.3 / 模型更新",
      name: "AgentRouter",
      summary: "现已支持 GLM-5.3，另有 DeepSeek V4 Flash；Claude 倍率上调，GPT-5.6-sol 倍率下调。",
      details:
        "现已支持 GLM-5.3。注册送 75 刀、每日签到 25 刀，速度快且稳定。GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以使用 Linux Do 账号。站长表示正常使用可能获得消耗额度补充或 Core 分组（标注 0.8 折）奖励，具体获取和发放规则尚未确认。",
      registration: "GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号。",
      signupBonus: "75 刀",
      dailyCheckin: "25 刀",
      models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude 系列",
      experience: "模型已恢复正常，速度快且稳定",
      caveat: "Claude 倍率已上调、GPT-5.6-sol 倍率已下调，具体倍率以站内显示为准；签到需退出账号后重新登录才会生效。正常使用奖励机制仍待确认。",
      benefits: ["GLM-5.3", "DeepSeek V4 Flash", "GPT-5.6-sol 倍率下调", "Claude 倍率上调", "注册送 75 刀", "每日签到 25 刀", "老号门槛"],
      url: "https://agentrouter.org/register?aff=i3Xz",
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
      kind: "长期自用 / 多上游聚合",
      pricing: "paid",
      name: "AIHub",
      summary: "本人实测，聚合多家上游可自选渠道，渠道异常时支持自动切换，适合持续工作；进群送 10 刀，L 站好评再送 10 刀，最低倍率 0.06。",
      details:
        "聚合了多家上游，可以自行选择渠道；渠道出问题时支持自动切换，适合需要长时间连续跑的场景。进群送 10 刀，在 L 站好评可再送 10 刀。最低倍率 0.06。自动切换的具体策略我没确认；我没有 L 站账号，所以那 10 刀好评赠送没领过。据站长说明，站方会主动检测渠道，发现掺水或投毒会退款。",
      registration: "注册后加入官方群可领 10 刀；有 L 站账号的话，好评可再领 10 刀。",
      signupBonus: "进群送 10 刀（L 站好评再送 10 刀）",
      dailyCheckin: "未提供",
      models: "多家上游聚合，可自选渠道",
      experience: "本人实测；渠道异常可自动切换，适合持续工作",
      caveat: "付费站。自动切换的具体策略待确认；L 站好评赠送我没领过，条件以站内说明为准。站长称会主动检测渠道并对掺水或投毒退款，这是站方自述，我没有独立验证。",
      benefits: ["长期自用", "本人实测", "多上游聚合", "渠道自动切换", "进群送 10 刀", "L 站好评再送 10 刀", "最低倍率 0.06"],
      url: "https://aihub.top/",
      tone: "active",
    },
    {
      publishedAt: "2026-08-19 00:00",
      updatedAt: "2026-08-30",
      updateNote: "去掉 GPT 倍率，只保留 Kiro 约 0.35。",
      quietUpdate: true,
      kind: "付费站羊毛 / 低倍率",
      pricing: "paid",
      name: "True SOTA",
      summary: "付费站，注册即送 20 刀，Kiro 约 0.35 倍率，适合想找低倍率付费线路的用户。",
      details:
        "注册即送 20 刀，Kiro 倍率约 0.35。适合专门来找低倍率付费线路的人；其他模型、签到规则和长期稳定性我没有核实。",
      registration: "通过邀请链接注册即送 20 刀。",
      signupBonus: "20 刀",
      dailyCheckin: "未核实",
      models: "Kiro（约 0.35 倍率）",
      experience: "付费站羊毛，注册即送 20 刀",
      caveat: "付费站。其他模型、签到和稳定性暂未确认；倍率、赠送和计费规则请以站内实际说明为准。",
      benefits: ["付费站羊毛", "注册送 20 刀", "Kiro 倍率约 0.35"],
      url: "https://true-sota.com/register?aff=7SQNRMRSXPP4",
      tone: "active",
    },
    {
      publishedAt: "2026-08-20 00:00",
      updatedAt: "2026-09-02",
      updateNote: "推广期：进 QQ 群发 /试用 秒到账，另有每日签到 1-10 元。",
      kind: "推广期 / 分组调用",
      pricing: "paid",
      name: "AbinAPI",
      summary: "目前在推广期：加入官方 QQ 群 547911817，群内发送「/试用 你的用户名」送 15 刀，秒到账；另有每日签到 1-10 元。支持 GPT，充值比例 1:10，0.5 分组约等于 0.05，0.75 分组约等于 0.075 且相对更稳。",
      details:
        "站方目前在做推广。领赠送额度的方式是加入官方 QQ 群 547911817，在群里发送「/试用 你的用户名」，送 15 刀，秒到账。推广期还开了每日签到，金额 1-10 元。支持 GPT，充值比例 1:10。支持分组调用：0.5 分组约等于 0.05 倍率，0.75 分组约等于 0.075，后者稳定性相对更好，赶时间的活可以直接走 0.75。",
      registration: "通过邀请链接注册；之后加入官方 QQ 群 547911817，在群内发送「/试用 你的用户名」领取 15 刀，秒到账。",
      signupBonus: "15 刀（进群发「/试用 你的用户名」领取）",
      dailyCheckin: "1-10 元",
      models: "GPT",
      experience: "推广期，有每日签到；0.75 分组稳定性相对更好",
      caveat: "领赠送额度必须进 QQ 群 547911817 用「/试用 你的用户名」这条指令，没进群就领不到。推广期的赠送和每日签到属于阶段性政策，随时可能收紧。支持分组调用，0.75 分组相对更稳定；实际倍率和服务状态请以站内调用结果为准。",
      benefits: ["推广期", "进 QQ 群发 /试用 送 15 刀", "秒到账", "每日签到 1-10 元", "充值比例 1:10", "0.5 分组约 0.05", "0.75 分组约 0.075", "0.75 分组更稳"],
      url: "https://www.abinapi.com/sign-up?aff=9yXf",
      tone: "active",
    },
    {
      publishedAt: "2026-08-28 00:00",
      updatedAt: "2026-09-10",
      updateNote: "邀请链接已更新；每日额度现在有限制，需要重新注册。",
      kind: "需重新注册 / 每日额度有限制 / 论坛做任务赚额度",
      name: "ze（芙芙中转站）",
      summary: "受此前有人批量注册影响，站点现在需要通过新的邀请链接重新注册；每日额度现已有限制，具体上限以站内显示为准。日常额度主要靠去论坛 bbs.kscsnkli.site 做任务赚，也有签到。模型有 GLM-5.3-Flash、GPT-5.6-sol、DeepSeek V4 Pro、GLM-5.2 与 Kimi-K3。",
      details:
        "站点域名为 ai.kscsnkli.site，此前在本合集里记作 Kscsnkli AI，后按站点自称显示为 ze，现在站内名称是「异常芙芙公益」。据用户反馈，此前有人批量注册，当前需要通过新的邀请链接再次注册；每日额度现已有限制，具体上限和重置规则以站内显示为准。此前注册需要邮箱验证，当前门槛也以注册页为准。日常额度的主要来源不是签到而是论坛任务：去 bbs.kscsnkli.site（站内叫「异常芙芙」）做任务赚额度，签到也有。站点使用 NewAPI，模型状态和模型列表能直接在站内查看，定价页也可用。已知模型：GLM-5.3-Flash、GPT-5.6-sol、DeepSeek V4 Pro（0813）、GLM-5.2、Kimi-K3。",
      registration: "受此前批量注册影响，需要使用下面更新后的邀请链接重新注册；此前注册需要邮箱验证，当前门槛以注册页为准。每日额度有限制，具体上限以站内显示为准。",
      signupBonus: "以站内显示为准",
      dailyCheckin: "有签到；每日额度有限制，额度主要靠论坛做任务赚",
      models: "GLM-5.3-Flash / GPT-5.6-sol / DeepSeek V4 Pro（0813）/ GLM-5.2 / Kimi-K3",
      experience: "需要重新注册；每日额度有限制，额度主要靠论坛任务",
      caveat: "受此前批量注册影响，现在需要重新注册，旧账号不要按仍可直接使用处理；请勿批量注册。每日额度已有上限，具体数额、重置规则、注册赠送与邮箱验证要求以站内当前显示为准。想持续拿额度还得去论坛 bbs.kscsnkli.site 做任务，光靠签到不够。站点几次改名换型：Kscsnkli AI → ze → 站内现称「异常芙芙公益」，域名一直是 ai.kscsnkli.site。使用前建议先看定价页确认模型可用性。",
      benefits: ["需重新注册", "每日额度有限制", "论坛做任务赚额度", "有签到", "GLM-5.3-Flash", "GPT-5.6-sol", "DeepSeek V4 Pro", "GLM-5.2", "Kimi-K3"],
      url: "https://ai.kscsnkli.site/sign-up?aff=nHwf",
      tutorialUrl: "https://bbs.kscsnkli.site/",
      tutorialLabel: "去异常芙芙论坛做任务赚额度",
      statusUrl: "https://ai.kscsnkli.site/pricing",
      statusLabel: "打开站内定价页查看模型与倍率",
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
      updatedAt: "2026-08-31",
      updateNote: "注册已重新开放，不再限量；只能用 GitHub / Linux Do / Discord 注册，排序相应上调。",
      kind: "已开放注册 / 第三方登录",
      name: "一梦五千年",
      summary: "注册已重新开放，不再是此前的限量名额，但只能用 GitHub、Linux Do 或 Discord 账号注册，不支持邮箱；注册送 10 刀，GPT-5.6-sol 与 GPT-5.6-luna 为 1x 倍率，也有其他国产模型。",
      details:
        "此前只放出 31 个名额，现已重新开放注册。注册只走第三方授权，可用 GitHub、Linux Do 或 Discord，不能直接用邮箱注册，三个都没有就进不去。注册奖励为 10 刀，GPT-5.6-sol 与 GPT-5.6-luna 是 1x 倍率，另有其他国产模型。",
      registration: "只能用 GitHub、Linux Do 或 Discord 账号授权注册，不支持邮箱注册；2026-08-31 核对时注册已开放。",
      signupBonus: "10 刀",
      dailyCheckin: "随机奖励",
      models: "GPT-5.6-sol / GPT-5.6-luna / 国产模型",
      experience: "2026-08-31 核对时注册已重新开放；需用 GitHub / Linux Do / Discord 登录",
      caveat: "只能用 GitHub、Linux Do 或 Discord 注册，三者都没有就没法注册。注册开放状态可能再次收紧，以注册页面实际结果为准；不要批量测活，可能会被拉黑 IP。签到为随机奖励，数额不固定。",
      benefits: ["已开放注册", "GitHub / Linux Do / Discord 注册", "不支持邮箱", "注册送 10 刀", "1x 倍率", "随机签到奖励"],
      url: "https://fapi.leileihog.top/sign-up?aff=ZR02",
      tone: "active",
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
      "另外提醒：不建议拿中转站的模型做逆向、蒸馏、涩情等操作，除非站点明确公告不禁止。这类用法会把站方买来的上游账号搞封，最后是整站的人一起没得用——登仙站就是这么停的。",
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
    pricingPaidNote: "以下都需要充值，注册赠送只够试用",
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
      "One more thing: do not use a relay service's models for reverse engineering, distillation, or pornographic content unless the service explicitly says it allows them. That kind of use gets the upstream accounts the operator paid for banned, and everyone on the service loses access — it is exactly how Denxio's free service stopped.",
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
    pricingPaidNote: "All of these need a top-up — sign-up credit only covers a trial",
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
  },
};

const entryTranslations = {
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
  GcmodAi: {
    kind: "Freemium service / one cent per request",
    updateNote: "A check-in is now live at roughly 0.1 yuan a day — about ten requests.",
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
    summary:
      "Tested personally. It aggregates several upstreams with channel selection and automatic failover, which suits long continuous runs. Joining the group grants $10, a review on L-site grants another $10, and the lowest rate is 0.06.",
    details:
      "It aggregates several upstreams and lets you pick a channel; when a channel misbehaves it can switch automatically, which suits work that runs for a long stretch. Joining the group grants $10, and a review on L-site grants another $10. The lowest rate is 0.06. I have not confirmed how the automatic switching decides, and I have no L-site account, so I never claimed that second $10. The operator states that they actively test channels and refund when they find diluted or poisoned responses.",
    registration: "Join the official group after registering to claim $10; with an L-site account, a review grants another $10.",
    signupBonus: "$10 for joining the group (another $10 for an L-site review)",
    dailyCheckin: "Not offered",
    models: "Several aggregated upstreams with channel selection",
    experience: "Tested personally; automatic failover suits long continuous work",
    caveat: "Paid service. The automatic switching policy is unconfirmed, and I never claimed the L-site review bonus — check the terms in the service. The operator's claim about testing channels and refunding for diluted or poisoned responses is their own statement, which I have not verified independently.",
    benefits: ["Long-term use", "Tested personally", "Multi-upstream", "Automatic failover", "$10 for joining", "$10 for L-site review", "Lowest rate 0.06"],
  },
  "True SOTA": {
    kind: "Paid-service freebie / low rate",
    updateNote: "Dropped the GPT rate, keeping Kiro at about 0.35.",
    summary:
      "A paid service granting $20 on sign-up, with Kiro at about a 0.35 rate — worth a look if you specifically want a low-rate paid route.",
    details:
      "Sign-up grants $20 and Kiro runs at about a 0.35 rate. It suits people specifically hunting for a low-rate paid route; I have not verified other models, check-in rules, or long-term stability.",
    registration: "Register through the referral link for $20.",
    signupBonus: "$20 credit",
    dailyCheckin: "Unverified",
    models: "Kiro (about 0.35 rate)",
    experience: "Paid-service freebie granting $20 on sign-up",
    caveat: "Paid service. Other models, check-in, and stability are unconfirmed; rely on the service for rates, grants, and billing rules.",
    benefits: ["Paid-service freebie", "$20 sign-up credit", "Kiro about 0.35"],
  },
  AbinAPI: {
    kind: "Promotion period / group routing",
    updateNote: "Promotion period: send /试用 in the QQ group for instant credit, plus a daily check-in of 1-10 yuan.",
    summary:
      "Currently running a promotion: join the official QQ group 547911817 and send \"/试用 your-username\" in the group for $15, credited instantly. There is also a daily check-in of 1-10 yuan. GPT is supported, top-ups convert 1:10, and the 0.5 group works out to about 0.05 while the 0.75 group runs at about 0.075 and is noticeably steadier.",
    details:
      "The operator is running a promotion. To claim credit, join the official QQ group 547911817 and send \"/试用 your-username\" in the group for $15; it lands instantly. The promotion also comes with a daily check-in worth 1-10 yuan. GPT is supported and top-ups convert 1:10. It supports group routing: the 0.5 group works out to roughly a 0.05 rate and the 0.75 group to about 0.075, with the latter comparatively more stable — worth using directly when the work is time-sensitive.",
    registration: "Register through the referral link, then join the official QQ group 547911817 and send \"/试用 your-username\" to claim $15; it arrives instantly.",
    signupBonus: "$15 (claim by sending \"/试用 your-username\" in the group)",
    dailyCheckin: "1-10 yuan",
    models: "GPT",
    experience: "In a promotion period with a daily check-in; the 0.75 group is comparatively steadier",
    caveat: "Claiming credit requires the QQ group 547911817 and the \"/试用 your-username\" command — without joining the group you cannot claim it. The promotional grant and daily check-in are a temporary policy and may tighten at any time. Group routing is supported and the 0.75 group is comparatively more stable; rely on actual call results for rates and service status.",
    benefits: ["Promotion period", "$15 via /试用 in QQ group", "Instant credit", "Daily check-in 1-10 yuan", "1:10 top-up", "0.5 group about 0.05", "0.75 group about 0.075", "0.75 group steadier"],
  },
  "247看 API": {
    kind: "Paid only / standing 0.06 rate",
    name: "247kan API",
    summary:
      "A paid-only service with no sign-up credit. Its standing discount group runs at a 0.06 rate, sometimes lower, top-ups are 1:1, and GPT-5.6-luna is available.",
    details:
      "This is a paid-only service: registration grants no credit at all, so you have to top up before using it — which makes it a low-rate paid route rather than somewhere to farm free credit. The discount group is permanent at a 0.06 rate and occasionally goes lower. Top-ups convert 1:1. GPT-5.6-luna is known to be available.",
    registration: "Register through the referral link. Paid-only, with no sign-up credit — you need to top up before use.",
    signupBonus: "None (paid-only)",
    dailyCheckin: "None",
    models: "GPT-5.6-luna",
    experience: "Paid-only service with a standing 0.06 discount group",
    caveat: "Paid-only with no sign-up credit, so a top-up is required. The discount group is permanent, but rates and group rules may change — rely on what the service shows. Top-ups convert 1:1.",
    benefits: ["Paid only", "Standing discount group", "0.06 rate", "Sometimes lower", "1:1 top-up", "GPT-5.6-luna"],
  },
  CheapCodex: {
    kind: "Cannot keep it up / subsidy cancelled · sign-up credit only",
    updateNote: "The subsidy campaign was cancelled and perks like the daily check-in are gone; moved to the paid tab.",
    summary:
      "It could not keep the promotion up: the subsidy campaign has been cancelled and perks like the daily check-in are gone, though the $20 sign-up credit should still be there. With GPT billed at 2.5x on top of that, it has moved to the paid tab. The registration email system is unreliable — verification mail may not arrive, so check your spam folder.",
    details:
      "The subsidy campaign has been cancelled, and what went with it are the recurring perks such as the daily check-in; the $20 sign-up credit should still be in place. In other words, registering still gets you a one-off allowance, but nothing brings credit back after that. GPT is billed at 2.5x the standard rate, so discount that $20 accordingly. With the subsidy gone and the daily perks gone, what remains is an expensive paid service — hence the move to the paid tab. The old sign-up problem persists: the mail system is flaky and the verification email may not arrive, so check the spam folder first.",
    registration: "Email registration. The registration mail system has problems — the verification email may land in spam or fail to arrive, so check the spam folder first.",
    signupBonus: "$20 (should still stand after the subsidy ended)",
    dailyCheckin: "Cancelled (previously $20)",
    models: "GPT (2.5x rate)",
    experience: "Subsidy cancelled and perks like check-in gone; GPT at 2.5x is on the expensive side",
    caveat: "The subsidy campaign has been cancelled and recurring perks like the daily check-in went with it, leaving only the one-off $20 from sign-up — once it is spent, nothing replenishes it. GPT is billed at 2.5x the standard rate, so the usable value of that credit is lower than the number suggests. At sign-up, the mail system may fail to deliver the verification email — check your spam folder.",
    benefits: ["Cannot keep it up", "Subsidy cancelled", "Check-in and perks gone", "$20 sign-up should remain", "GPT 2.5x rate", "Mail may land in spam"],
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
    kind: "Public service / restored / GPT only",
    name: "JustWoker Public Service",
    updateNote: "Added the calling requirement: use /v1/messages for the site's models; GPT only at present.",
    summary:
      "The service is back online with GPT models only; Claude has not returned. Use /v1/messages when calling its models.",
    details:
      "JustWoker is operational again, but its current model lineup is limited to GPT and the former Claude route has not returned. Call the site's models through /v1/messages. The previously known registration gate was a GitHub account at least one year old. Sign-up credit, daily check-ins, and rates were not re-verified in this update, so check the current values on the site.",
    registration: "It previously required a GitHub account at least one year old; verify the current registration status and gate on the sign-up page.",
    signupBonus: "Check the current value on the site",
    dailyCheckin: "Check the current value on the site",
    models: "GPT only (use /v1/messages for calls)",
    experience: "Back online; currently GPT only",
    caveat: "Only GPT models are currently available and Claude has not returned; use /v1/messages for model calls. Registration gates, bonuses, check-ins, rates, and stability were not re-verified in this update, so confirm the current rules on the site.",
    benefits: ["Back online", "Ranked near the top", "GPT only", "Use /v1/messages", "Verify the GitHub gate on the site"],
  },
  "Sulmate 半公益站": {
    kind: "Registration paused / freemium service",
    name: "Sulmate Freemium Service",
    updateNote: "New-user registration has been paused. This entry will be updated when it reopens.",
    summary:
      "New-user registration has been paused. This entry will be updated when it reopens. The service previously had a 1x shared public pool and paid VIP calls.",
    details:
      "New-user registration is paused. The service previously had a shared public pool and a paid VIP group. Existing users should confirm current group, check-in, and calling rules in the service itself.",
    registration: "Registration is currently paused; wait for a reopening announcement.",
    signupBonus: "Registration paused; previously shared public-pool quota",
    dailyCheckin: "Existing users should verify current rules in the service",
    experience: "Public group 1x; VIP group 0.15x",
    caveat: "New-user registration is paused and the reopening time is unknown. Public-pool, check-in, VIP pricing, and group rules for existing users may change; verify the current notices.",
    benefits: ["Registration paused", "Previously shared public pool", "Paid VIP calls", "VIP 0.15x rate", "Public 1x rate"],
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
    updateNote: "The sign-up credit has been reduced to $75.",
    summary:
      "A mainland China registration link for AgentRouter. GLM-5.3 is now available alongside DeepSeek V4 Flash; Claude rates increased while GPT-5.6-sol rates decreased.",
    details:
      "GLM-5.3 is now available. New accounts receive $75 and daily check-ins add $25. Registration requirements match the original AgentRouter link: a GitHub account created before December 2025, or a Linux Do account. Normal use may bring consumed-credit top-ups or Core group access, but the exact rules are unconfirmed.",
    registration: "Mainland China registration link; GitHub account created before December 2025, or a Linux Do account.",
    signupBonus: "$75 credit",
    dailyCheckin: "$25",
    models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude models",
    experience: "Models restored and currently stable",
    caveat: "Claude rates increased and GPT-5.6-sol rates decreased; verify exact rates on the service. Sign out and back in for check-in credit to take effect. The normal-use reward mechanism remains unconfirmed.",
    benefits: ["Mainland China registration", "GLM-5.3", "DeepSeek V4 Flash", "Lower GPT-5.6-sol rate", "Higher Claude rates", "$75 sign-up credit", "$25 daily check-in", "Older account required"],
    tutorialLabel: "AgentRouter registration guide for mainland China (no proxy required)",
  },
  AgentRouter: {
    kind: "GLM-5.3 / model update",
    updateNote: "The sign-up credit has been reduced to $75.",
    summary:
      "GLM-5.3 is now available alongside DeepSeek V4 Flash. Claude rates increased, while GPT-5.6-sol rates decreased.",
    details:
      "GLM-5.3 is now available. New accounts receive $75 and daily check-ins add $25. The service is fast and stable. It requires a GitHub account created before December 2025, or a Linux Do account. Normal use may bring credit top-ups or Core group access, but the exact rules are unconfirmed.",
    registration: "GitHub account created before December 2025, or a Linux Do account.",
    signupBonus: "$75 credit",
    dailyCheckin: "$25",
    models: "GLM-5.3 / DeepSeek V4 Flash / GPT-5.6-sol / Claude models",
    experience: "Models restored and currently stable",
    caveat: "Claude rates increased and GPT-5.6-sol rates decreased; verify exact rates on the service. Sign out and back in for check-in credit to take effect. The normal-use reward mechanism remains unconfirmed.",
    benefits: ["GLM-5.3", "DeepSeek V4 Flash", "Lower GPT-5.6-sol rate", "Higher Claude rates", "$75 sign-up credit", "$25 daily check-in", "Older account required"],
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
    kind: "Re-registration required / daily credit limit / earn credit on the forum",
    name: "ze (Fufu Relay)",
    updateNote: "The referral link has been updated; daily credit is now limited, and users need to register again.",
    summary:
      "After earlier bulk registrations, the service now requires re-registration through a new referral link. Daily credit is now limited; verify the current cap on the site. Ongoing credit mainly comes from completing tasks on the forum at bbs.kscsnkli.site, and there is a check-in too. Models include GLM-5.3-Flash, GPT-5.6-sol, DeepSeek V4 Pro, GLM-5.2, and Kimi-K3.",
    details:
      "The service runs at ai.kscsnkli.site and was previously listed here as Kscsnkli AI, then as ze, the name the site used; in-site it now goes by \"异常芙芙公益\". According to user feedback, earlier bulk registrations mean users now need to register again through the new referral link. Daily credit is now capped; verify the cap and reset rules on the site. Email verification was previously required, and the current gate should likewise be confirmed on the sign-up page. The main source of ongoing credit is not the check-in but forum tasks: head to bbs.kscsnkli.site (\"异常芙芙\" in-site) and complete tasks to earn credit; a check-in exists as well. The service uses NewAPI, and model status, the model list, and pricing are visible on the site. Known models: GLM-5.3-Flash, GPT-5.6-sol, DeepSeek V4 Pro (0813), GLM-5.2, and Kimi-K3.",
    registration: "Because of earlier bulk registrations, register again through the updated referral link below. Email verification was previously required; verify the current gate on the sign-up page. Daily credit is limited, with the current cap shown on the site.",
    signupBonus: "Verify on the site",
    dailyCheckin: "Check-in available; daily credit is limited and most credit comes from forum tasks",
    models: "GLM-5.3-Flash / GPT-5.6-sol / DeepSeek V4 Pro (0813) / GLM-5.2 / Kimi-K3",
    experience: "Re-registration needed; daily credit is limited and most credit comes from forum tasks",
    caveat: "Earlier bulk registrations mean re-registration is now required; do not assume old accounts still work, and do not bulk-register accounts. Daily credit is capped; confirm the amount, reset rules, sign-up grant, email-verification requirement, and other current gates on the site. For a steady credit supply, complete tasks on the forum at bbs.kscsnkli.site; the check-in alone will not carry you. The service has been renamed and re-platformed several times: Kscsnkli AI → ze → currently \"异常芙芙公益\" in-site, always at ai.kscsnkli.site. Check the pricing page for model availability before use.",
    benefits: ["Re-registration needed", "Daily credit limit", "Earn credit via forum tasks", "Check-in available", "GLM-5.3-Flash", "GPT-5.6-sol", "DeepSeek V4 Pro", "GLM-5.2", "Kimi-K3"],
    tutorialLabel: "Complete tasks on the 异常芙芙 forum to earn credit",
    statusLabel: "Open the in-site pricing page for models and rates",
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

  "一梦五千年": {
    name: "Yimeng 5000",
    kind: "Registration open / third-party login only",
    updateNote: "Registration has reopened and is no longer limited, but sign-up requires GitHub, Linux Do, or Discord; ranking raised accordingly.",
    summary:
      "Registration has reopened and is no longer the limited batch it was before, but sign-up works only through a GitHub, Linux Do, or Discord account — email registration is not available. New accounts receive $10, with GPT-5.6-sol and GPT-5.6-luna at a 1x rate, plus other Chinese models.",
    details:
      "The service previously released only 31 slots; registration is now open again. Sign-up goes through third-party authorisation only — GitHub, Linux Do, or Discord — with no direct email registration, so without one of the three you cannot get in. New accounts receive $10, GPT-5.6-sol and GPT-5.6-luna run at a 1x rate, and other Chinese models are available.",
    registration: "Sign-up requires authorising a GitHub, Linux Do, or Discord account; email registration is not supported. As of 2026-08-31, registration is open.",
    signupBonus: "$10",
    dailyCheckin: "Random reward",
    models: "GPT-5.6-sol / GPT-5.6-luna / Chinese models",
    experience: "Registration confirmed reopened on 2026-08-31; needs GitHub, Linux Do, or Discord login",
    caveat: "Only GitHub, Linux Do, or Discord accounts can register, so without one of the three you cannot sign up. Registration may tighten again — rely on the registration page. Do not bulk-probe, as your IP may be blocked. Check-in rewards are random, so the amount is not fixed.",
    benefits: ["Registration open", "GitHub / Linux Do / Discord sign-up", "No email option", "$10 sign-up credit", "1x rate", "Random check-in reward"],
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
    <article class="feed-item" data-tone="${tone}"${showUpdate ? ' data-updated="true"' : ""}>
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

  // 分区切换只过滤当前显示的列表；结构化数据仍然输出全部站点，
  // 否则搜索引擎只能看到公益区那一半。
  const visibleEntries = orderedEntries.filter((entry) => entryPricing(entry) === currentPricing);
  document.querySelector("#feed-items").innerHTML = visibleEntries.map(renderEntry).join("");

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

  renderPage();
});
