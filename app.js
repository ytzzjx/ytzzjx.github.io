// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。我会尽量更新最新情况，欢迎多多关注。",
  githubUrl: "https://github.com/ytzzjx",
  lastUpdated: "2026-08-31",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  displayOrder: [
    "ze（芙芙中转站）",
    "Nofx",
    "MotoMoto",
    "Fate New API",
    "KKToken",
    "JustWoker 公益站",
    "AgentRouter",
    "AnyRouter",
    "TabiToken",
    "GoRouter",
    "北执半公益站",
    "一梦五千年",
    "GcmodAi",
    "247看 API",
    "GemAI（哈基米公益站）",
    "AgentRouter 国内入口",
    "PAI 生图公益站",
    "Rinko NAI 生图公益站",
    "Jasperio",
    "Denxio",
    "BaaaAI 公益站",
    "SeekAI",
    "Xingya",
    "ArityFlow",
    "Sulmate 半公益站",
    "TokenForge（tokengate）",
    "Hubway",
    "AIHub",
    "True SOTA",
    "AbinAPI",
    "CheapCodex",
  ],
  // 「公益 / 付费」两个分区靠条目上的 pricing 字段区分：
  // 只有纯付费站要写 pricing: "paid"，不写就是公益区。半公益站（有免费额度、也能充值）
  // 归公益区，因为大家找它们是为了免费额度；但要在文案里说清充值部分。
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
      tone: "closed",
    },
  ],
  entries: [
    {
      publishedAt: "2026-09-02 00:00",
      addedAt: "2026-09-02",
      kind: "公益站 / 签到看数据授权",
      name: "MotoMoto",
      summary: "邀请链接注册送 50 刀（注册 30 + 邀请码 20），倍率 1x。每日签到分两档：先去站点打开「数据授权」再签到是 50，没开只有 10——代价是授权后你的提示词和模型输出可能被存下来用于训练。",
      details:
        "OpenAI 兼容接口，base 地址 https://motomoto.lol/v1，令牌在控制台创建。注册即送 30，走邀请链接再加 20，合计 50；倍率 1x。签到金额取决于「数据授权」这个开关：未授权约 10，已授权约 50，且授权只对当日使用生效，关掉要第二天才生效。所以想拿 50 的话，顺序是先访问 motomoto.lol 打开数据授权，再去签到。另外邀请奖励 100，需对方产生约 2 的真实消耗后才发放，每天最多 3 人、累计 20 人。站方明确写了额度是站内记账、不是现金。",
      registration: "邮箱注册，无需邮箱验证。想拿 50 签到就先访问 https://motomoto.lol 打开「数据授权」，再去签到；不开只有 10。",
      signupBonus: "50 刀（注册 30 + 邀请码 20）",
      dailyCheckin: "已开数据授权约 50，未开约 10",
      models: "OpenAI 兼容接口，倍率 1x",
      experience: "新站，倍率 1x；签到 50 需要开数据授权",
      caveat: "签到 50 和 10 的差别就是「数据授权」这一个开关，而它在隐私政策里的正式名称是训练数据授权：打开后站方可能存储或采样你的提示词、模型输出和工具调用，用于训练、微调、蒸馏和评测，站方自己也提示「请勿提交敏感信息」，并写明已进入训练的部分通常无法再单独剔除。授权对当日使用生效，关闭从第二天起才调整。要额度还是要请求不被留存，自己权衡；跑敏感内容时建议关掉、只领 10。站点刚上线（隐私政策生效日 2026-09-01），稳定性和额度政策都可能变。",
      benefits: ["新站", "注册送 50 刀", "倍率 1x", "签到 50（需开数据授权）", "未授权签到仅 10", "授权即允许内容用于训练", "OpenAI 兼容", "无需邮箱验证"],
      url: "https://motomoto.lol/sign-up?aff=91Tp",
      tutorialUrl: "https://motomoto.lol/privacy",
      tutorialLabel: "先看隐私政策里的训练数据授权条款",
      tone: "active",
    },
    {
      publishedAt: "2026-08-28 00:00",
      updatedAt: "2026-09-02",
      updateNote: "模型已经几天不可用，排序下调到列表后段。",
      kind: "模型不可用 / 暂时观察",
      name: "BaaaAI 公益站",
      summary: "站内模型已经连续几天调不通，已下调排序。原本主打较少见的 GPT 模型，每日可在控制台申请 20 额度，需至少调用一次，并发 2。",
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
      publishedAt: "2026-08-28 17:39",
      updatedAt: "2026-08-31",
      updateNote: "Claude Code CLI 会被 CF 拦截，请改用 Claude Desktop。",
      kind: "新站 / 需用 Claude Desktop",
      name: "KKToken",
      summary: "JustWoker 站长的新站，注册送 100 刀、每日签到 20 刀，主打 Claude Opus 4.8 与 Opus 5；Claude Code CLI 会被 CF 拦截，请改用 Claude Desktop。",
      details:
        "与 JustWoker 公益站为同一站长。目前已知福利为注册送 100 刀、每日签到 20 刀，可用 Claude Opus 4.8 和 Opus 5。注册需要 GitHub 账号，具体门槛以注册页提示为准。在 Claude Code 里调用会报 CF 拦截；实测直接 curl /v1/messages 接口可以正常返回，说明拦的是 Claude Code CLI 的请求头，不是接口本身。Claude Desktop 实测可用。",
      registration: "需要 GitHub 账号，有账号限制，具体门槛以注册页提示为准。",
      signupBonus: "100 刀",
      dailyCheckin: "20 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "Claude Desktop 实测可用；Claude Code CLI 被 CF 拦截",
      caveat: "Claude Code CLI 的请求头会被站点 CF 拦截并报错，curl 调 /v1/messages 正常，请改用 Claude Desktop。新站上线时间不长，额度、签到与模型规则可能调整；注册有 GitHub 限制，具体门槛以注册页为准。",
      benefits: ["新站", "JustWoker 同站长", "注册送 100 刀", "每日签到 20 刀", "Claude Opus 4.8", "Claude Opus 5", "需用 Claude Desktop", "GitHub 限制"],
      url: "https://kktoken.cc/sign-up?aff=vrZc",
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
      publishedAt: "2026-08-31 00:00",
      addedAt: "2026-08-31",
      updatedAt: "2026-09-02",
      updateNote: "上游号池全部被封，公益服务已停，排序下调。",
      kind: "公益服务已停 / 上游号池被封",
      name: "Denxio",
      summary: "上游号池全部被封，公益服务已经停了，排序已下调。原本主打 GPT，仙池活动每天 20 仙缘（仙缘与刀等值），签到另得 0.5-1 仙缘；注册需先去 Telegram 领登仙令。",
      details:
        "有人拿这个站做涩情内容和模型蒸馏，站方买来做上游的 Pro 号因此全部被封，公益服务随之停止。注册页仍可访问。原有机制：注册要两个码，邀请码已经带在下面的注册链接里，注册码（登仙令）要自己去 Telegram 领——进频道 t.me/denxio_free 的登仙令分区，向 @JieYin_bot 发送「登仙令」即可拿到，再回注册页填上完成注册。额度主要来自仙池活动，每天 20 仙缘；开放通知发在 Telegram 频道和 QQ 群。",
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
      updatedAt: "2026-08-29",
      updateNote: "稳定性下降，建议留一条备用线路，排序也相应下调。",
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
      updatedAt: "2026-09-02",
      updateNote: "不调用好像会被删号，本人已被删两次；排序上调。",
      kind: "NodeLoc 注册 / 需保持调用",
      name: "Fate New API",
      summary: "通过 NodeLoc 注册，注册送 150 刀，有每日签到，支持全模型。注意：不使用好像会被删号，删了要重新注册，本人已经被删过两次。",
      details:
        "模型覆盖范围较广，适合想集中体验多种模型的用户。要留意账号存活：不调用好像就会被删号，本人已经被删过两次，删掉之后重新走注册链接再注册一遍即可。站点此前也清理过一轮账号，老账号同样是重新走注册链接。",
      registration: "通过 NodeLoc 注册。被删号之后重新走一遍注册链接就能再注册。",
      signupBonus: "150 刀",
      dailyCheckin: "有签到，金额待确认",
      models: "全模型",
      experience: "模型覆盖广；不调用好像会被删号，本人已被删两次",
      caveat: "不使用好像会被删号——本人已经被删过两次，所以注册完记得保持调用。被删之后重新走注册链接可以再注册。签到金额、模型可用性、倍率和服务规则也可能调整，请以站内实际说明为准。",
      benefits: ["NodeLoc 注册", "注册送 150 刀", "每日签到", "全模型", "不用会被删号", "删号后可重新注册"],
      url: "https://fatenewapi.xxxxo.bond/sign-up?aff=eZHA",
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
      updatedAt: "2026-09-04",
      updateNote: "换回 NewAPI 需重新注册，注册送 60 万；额度主要靠论坛做任务赚。",
      kind: "需重新注册 / 论坛做任务赚额度",
      name: "ze（芙芙中转站）",
      summary: "已从 sub2api 换回 NewAPI，需要重新注册，注册送 60 万额度。额度主要靠去论坛 bbs.kscsnkli.site 做任务赚，也有签到。模型有 GLM-5.3-Flash、GPT-5.6-sol、DeepSeek V4 Pro、GLM-5.2 与 Kimi-K3。",
      details:
        "站点域名为 ai.kscsnkli.site，此前在本合集里记作 Kscsnkli AI，后按站点自称显示为 ze，现在站内名称是「异常芙芙公益」。换回 NewAPI 之后需要重新注册，注册赠送 60 万额度，注册需要邮箱验证。日常额度的主要来源不是签到而是论坛任务：去 bbs.kscsnkli.site（站内叫「异常芙芙」）做任务赚额度，签到也有。换回 NewAPI 后模型状态和模型列表都能直接在站内看清楚，定价页也回来了。已知模型：GLM-5.3-Flash、GPT-5.6-sol、DeepSeek V4 Pro（0813）、GLM-5.2、Kimi-K3。",
      registration: "使用下面更新后的邀请链接重新注册；注册需要邮箱验证，注册送 60 万额度。",
      signupBonus: "60 万额度",
      dailyCheckin: "有签到；额度主要靠论坛做任务赚",
      models: "GLM-5.3-Flash / GPT-5.6-sol / DeepSeek V4 Pro（0813）/ GLM-5.2 / Kimi-K3",
      experience: "换回 NewAPI 后模型状态直观；额度主要靠论坛任务",
      caveat: "换回 NewAPI 后需要重新注册，老账号不能直接用。想持续拿额度得去论坛 bbs.kscsnkli.site 做任务，光靠签到不够。站点几次改名换型：Kscsnkli AI → ze → 站内现称「异常芙芙公益」，域名一直是 ai.kscsnkli.site。使用前建议先看定价页确认模型可用性。",
      benefits: ["需重新注册", "注册送 60 万", "论坛做任务赚额度", "有签到", "GLM-5.3-Flash", "GPT-5.6-sol", "DeepSeek V4 Pro", "GLM-5.2", "Kimi-K3"],
      url: "https://ai.kscsnkli.site/sign-up?aff=av7W",
      tutorialUrl: "https://bbs.kscsnkli.site/",
      tutorialLabel: "去异常芙芙论坛做任务赚额度",
      statusUrl: "https://ai.kscsnkli.site/pricing",
      statusLabel: "打开站内定价页查看模型与倍率",
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
      updatedAt: "2026-09-02",
      updateNote: "站方把所有用户删了，正在修复；此前实测还有注入锁英文的问题。",
      kind: "不建议使用 / 用户被清空",
      name: "TokenForge（tokengate）",
      summary: "站方莫名删除了所有用户，目前正在修复，已注册的账号需要重新确认。此前实测还有注入问题：模型被锁成只用英文回答。两件事叠起来，不建议用于正经任务。",
      details:
        "2026 年 9 月 2 日，站方把所有用户账号删除了，原因不明，目前站方在修复。注册页仍然打得开，但已有账号是否能恢复、额度怎么算，得等站方给结果。在这之前还有一个实测问题：模型有注入，只能用英文回答，用中文提问也一样回英文——说明请求在到达模型前被塞了额外的指令。既然能加这一条，其他改动也无从判断。这条只作留档和避坑参考：一个会无故清空全部用户、并且改动模型返回的站，注册赠送再多也不值得押在上面。",
      registration: "注册页仍可访问，但站方刚删光所有用户、正在修复，建议等结果出来再决定。原门槛为 GitHub 注册、主账号邮箱需为 Google 或 Microsoft 邮箱、账号注册时间超过 14 天，并需通过 Discord 认证。",
      signupBonus: "原为 50 额度（账号被清空后待确认）",
      dailyCheckin: "原为 15 额度（账号被清空后待确认）",
      models: "Claude Opus 5 可调，但被注入锁成只说英文",
      experience: "用户被全部删除、正在修复；此前实测有注入，模型只肯用英文回答",
      caveat: "站方于 2026-09-02 删除了所有用户账号，原因不明，正在修复，已有账号和额度能否恢复未知。另有实测注入：模型被限制成只能用英文回答，中文提问也回英文，说明请求在到达模型前被加了指令，其他改动无从判断。两件事叠加，不要用于需要结果可信或账号要长期留存的场景。站点已改名换域名，旧的 manus.space 地址不要再用。",
      benefits: ["用户被全部删除", "站方正在修复", "有注入", "回答被锁成英文", "不建议正经使用", "原注册送 50", "原每日签到 15"],
      url: "https://tokenforge.ai.studio/sign-up?aff=5dyr",
      tutorialUrl: "https://discord.gg/fhQKyxnsC",
      tutorialLabel: "加入 TokenForge Discord 社区并完成认证",
      statusUrl: "https://tokenforge.ai.studio/dashboard/models",
      statusLabel: "打开 TokenForge 模型状态页检查可用性",
      tone: "caution",
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
  MotoMoto: {
    kind: "Public service / check-in depends on data consent",
    summary:
      "Referral registration grants $50 ($30 on sign-up plus $20 for the invite code) at a 1x rate. Daily check-in has two tiers: turn on \"data authorisation\" on the site first and it pays about $50, otherwise about $10 — the price being that your prompts and model outputs may be stored and used for training.",
    details:
      "An OpenAI-compatible endpoint at https://motomoto.lol/v1, with tokens created in the console. Sign-up grants $30 and the referral link adds $20, for $50 total, at a 1x rate. The check-in amount depends on the \"data authorisation\" switch: about $10 without it and about $50 with it, and the consent applies to the same day's usage — switching it off only takes effect the next day. So to get the $50, visit motomoto.lol, turn data authorisation on, then check in. Referrals pay $100 once the invitee has genuinely spent about $2, capped at 3 people per day and 20 in total. The operator states plainly that credit is internal accounting, not cash.",
    registration: "Email registration with no email verification. For the $50 check-in, first visit https://motomoto.lol and turn on \"data authorisation\", then check in; without it you get about $10.",
    signupBonus: "$50 ($30 sign-up + $20 invite code)",
    dailyCheckin: "About $50 with data authorisation, about $10 without",
    models: "OpenAI-compatible endpoint at a 1x rate",
    experience: "New service at a 1x rate; the $50 check-in requires data authorisation",
    caveat: "The gap between a $50 and a $10 check-in is one switch, and its formal name in the privacy policy is training-data authorisation: with it on, the operator may store or sample your prompts, model outputs, and tool calls for training, fine-tuning, distillation, and evaluation. The operator itself warns against submitting sensitive information and states that whatever has entered training generally cannot be removed afterwards. Consent applies to the same day's usage; turning it off only takes effect the next day. Weigh credit against having your requests retained — for sensitive work, leave it off and take the $10. The service just launched (privacy policy effective 2026-09-01), so stability and credit policy may change.",
    benefits: ["New service", "$50 sign-up credit", "1x rate", "$50 check-in (needs data consent)", "Only $10 without consent", "Consent allows training on content", "OpenAI-compatible", "No email verification"],
    tutorialLabel: "Read the training-data authorisation terms in the privacy policy first",
  },
  "BaaaAI 公益站": {
    kind: "Models unavailable / on hold",
    name: "BaaaAI Public Service",
    updateNote: "Models have been unavailable for several days; ranking lowered to the back of the list.",
    summary:
      "Calls to the service's models have been failing for several days, and its ranking has been lowered. It previously focused on less common GPT models, with 20 credits claimable daily in the console, at least one call required, and a concurrency limit of 2.",
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
    kind: "New service / use Claude Desktop",
    updateNote: "Claude Code CLI requests are blocked by Cloudflare; use Claude Desktop instead.",
    summary:
      "A new service from the operator behind JustWoker. Sign-up grants $100 and daily check-ins add $20, with Claude Opus 4.8 and Opus 5 as the main models. Claude Code CLI requests are blocked by Cloudflare, so use Claude Desktop.",
    details:
      "Run by the same operator as JustWoker Public Service. Known bonuses are $100 on sign-up and $20 per daily check-in, with Claude Opus 4.8 and Opus 5 available. A GitHub account is required; check the registration page for the exact requirement. Calls from Claude Code fail with a Cloudflare error, but a direct curl to /v1/messages returns normally — the block targets the Claude Code CLI request headers, not the endpoint. Claude Desktop works in testing.",
    registration: "A GitHub account is required; the exact restriction is shown on the registration page.",
    signupBonus: "$100 credit",
    dailyCheckin: "$20",
    models: "Claude Opus 4.8 / Opus 5",
    experience: "Claude Desktop works; Claude Code CLI is blocked by Cloudflare",
    caveat: "The Claude Code CLI request headers are blocked by the service's Cloudflare layer, while curl against /v1/messages returns normally — use Claude Desktop instead. The service launched recently, so credit, check-in, and model rules may change. Registration has a GitHub requirement — confirm it on the registration page.",
    benefits: ["New service", "Same operator as JustWoker", "$100 sign-up credit", "$20 daily check-in", "Claude Opus 4.8", "Claude Opus 5", "Use Claude Desktop", "GitHub requirement"],
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
    updateNote: "The entire upstream account pool was banned and the free service has stopped; ranking lowered.",
    summary:
      "The entire upstream account pool was banned, so the free service has stopped and its ranking has been lowered. It previously focused on GPT, with the Xianchi (仙池) event granting 20 xianyuan per day — xianyuan is equivalent to dollars — plus 0.5-1 from daily check-ins. Registration required a code obtained from Telegram first.",
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
    kind: "NodeLoc registration / keep it in use",
    updateNote: "Accounts appear to be deleted when left unused — mine was twice; ranking raised.",
    summary:
      "Register through NodeLoc to receive $150. Daily check-ins are available, and the service advertises access to all models. Note that leaving an account unused appears to get it deleted, after which you register again — mine has been deleted twice.",
    details:
      "The model range is broad and may suit users who want to try multiple models in one place. Watch account survival: leaving it unused appears to get the account deleted — mine has been twice — and the fix is simply to go through the sign-up link and register again. The service also cleared a batch of accounts earlier, with the same remedy.",
    registration: "Register through NodeLoc. If your account gets deleted, going through the sign-up link again is enough to re-register.",
    signupBonus: "$150 credit",
    dailyCheckin: "Available; amount unconfirmed",
    models: "All models",
    experience: "Broad model coverage; unused accounts appear to be deleted — mine was twice",
    caveat: "Leaving the account unused appears to get it deleted — mine has been deleted twice — so keep making calls after registering. If it happens, the sign-up link lets you register again. Check-in amounts, model availability, rates, and service rules may also change.",
    benefits: ["NodeLoc registration", "$150 sign-up credit", "Daily check-in", "All models", "Unused accounts get deleted", "Can re-register after deletion"],
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
    updateNote: "Reliability has declined; keep a backup route. Ranking lowered accordingly.",
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
    kind: "Re-registration needed / earn credit on the forum",
    name: "ze (Fufu Relay)",
    updateNote: "Back on NewAPI and re-registration is needed; sign-up grants 600k, and credit mainly comes from forum tasks.",
    summary:
      "The service has switched back from sub2api to NewAPI and requires re-registration, with 600,000 credits on sign-up. Credit mainly comes from completing tasks on the forum at bbs.kscsnkli.site, and there is a check-in too. Models include GLM-5.3-Flash, GPT-5.6-sol, DeepSeek V4 Pro, GLM-5.2, and Kimi-K3.",
    details:
      "The service runs at ai.kscsnkli.site and was previously listed here as Kscsnkli AI, then as ze, the name the site used; in-site it now goes by \"异常芙芙公益\". After switching back to NewAPI, re-registration is required and sign-up grants 600,000 credits, with email verification. The main source of ongoing credit is not the check-in but forum tasks: head to bbs.kscsnkli.site (\"异常芙芙\" in-site) and complete tasks to earn credit; a check-in exists as well. Since the switch back, model status and the model list can be read directly on the site and the pricing page is back. Known models: GLM-5.3-Flash, GPT-5.6-sol, DeepSeek V4 Pro (0813), GLM-5.2, and Kimi-K3.",
    registration: "Use the updated referral link below to register again; registration requires email verification and grants 600,000 credits.",
    signupBonus: "600,000 credits",
    dailyCheckin: "Check-in available; credit mainly comes from forum tasks",
    models: "GLM-5.3-Flash / GPT-5.6-sol / DeepSeek V4 Pro (0813) / GLM-5.2 / Kimi-K3",
    experience: "Model status is clear since the switch back; credit mainly comes from forum tasks",
    caveat: "Re-registration is required after the switch back to NewAPI — an old account will not simply work. For a steady credit supply you need to complete tasks on the forum at bbs.kscsnkli.site; the check-in alone will not carry you. The service has been renamed and re-platformed several times: Kscsnkli AI → ze → currently \"异常芙芙公益\" in-site, always at ai.kscsnkli.site. Check the pricing page for model availability before use.",
    benefits: ["Re-registration needed", "600k on sign-up", "Earn credit via forum tasks", "Check-in available", "GLM-5.3-Flash", "GPT-5.6-sol", "DeepSeek V4 Pro", "GLM-5.2", "Kimi-K3"],
    tutorialLabel: "Complete tasks on the 异常芙芙 forum to earn credit",
    statusLabel: "Open the in-site pricing page for models and rates",
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
    kind: "Not recommended / all users wiped",
    name: "TokenForge (formerly TokenGate)",
    updateNote: "The operator deleted every user account and is repairing it; testing had already found injection locking replies to English.",
    summary:
      "The operator inexplicably deleted every user account and is currently repairing the service, so existing accounts need to be re-checked. Testing had already found injection: the model is locked to English-only replies. Together, these make it unsuitable for real work.",
    details:
      "On 2 September 2026 the operator deleted every user account for reasons that were not explained, and is now repairing the service. The registration page still loads, but whether existing accounts and their credit come back depends on what the operator does. Before that there was already a tested problem: the model only answers in English, and a Chinese prompt still comes back in English — meaning extra instructions are inserted before the request reaches the model. If that can be added, what else was changed is anyone's guess. This entry is kept for the record and as a warning: a service that wipes its entire user base without explanation and alters model responses is not worth relying on, however generous the credit.",
    registration: "The registration page is still reachable, but the operator just deleted every user account and is repairing the service — wait for the outcome before deciding. The previous requirements were GitHub registration with a Google or Microsoft primary email, an account older than 14 days, and Discord verification.",
    signupBonus: "Previously 50 credits (unconfirmed after the account wipe)",
    dailyCheckin: "Previously 15 credits (unconfirmed after the account wipe)",
    models: "Claude Opus 5 responds, but injection locks it to English",
    experience: "All users deleted and being restored; testing had also found injection limiting replies to English",
    caveat: "On 2026-09-02 the operator deleted every user account for unexplained reasons and is repairing the service; whether existing accounts and credit return is unknown. Testing also found injection: the model only replies in English, and Chinese prompts still return English, meaning instructions are added before the request reaches the model — what else changed is unknowable. Between the two, avoid this service where results must be trustworthy or an account has to survive. It has renamed and changed domains; stop using the old manus.space address.",
    benefits: ["All users deleted", "Operator repairing", "Injection present", "Replies locked to English", "Not recommended", "Previously 50 sign-up", "Previously 15 check-in"],
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
    const updatedDays = daysSince(sourceEntry.updatedAt);
    // 改过的按改动算，没改过的按收录算——同一个站不会既算新收录又算更新。
    if (isRecent(updatedDays)) {
      if (sourceEntry.quietUpdate) continue;
      const entry = localizeEntry(sourceEntry);
      items.push({ days: updatedDays, name: entry.name, note: entry.updateNote ?? "", tag: "", variant: "updated" });
      continue;
    }
    const addedDays = daysSince(sourceEntry.addedAt);
    if (!isRecent(addedDays)) continue;
    const entry = localizeEntry(sourceEntry);
    // 新收录本身就是变更，说明用 kind（中英文都有），不必另写一句。
    items.push({ days: addedDays, name: entry.name, note: entry.kind ?? "", tag: copy.changesAddedLabel, variant: "added" });
  }
  for (const sourceEntry of siteConfig.archivedEntries ?? []) {
    const days = daysSince(sourceEntry.archivedAt);
    if (!isRecent(days)) continue;
    const entry = localizeEntry(sourceEntry);
    // archivedReason 只有中文，英文页改用通用说明，避免中文漏出去。
    const note = currentLocale === defaultLocale ? sourceEntry.archivedReason : copy.changesArchivedNote;
    items.push({ days, name: entry.name, note: note ?? "", tag: copy.changesArchivedLabel, variant: "archived" });
  }

  if (!items.length) {
    section.hidden = true;
    list.innerHTML = "";
    return;
  }

  items.sort((left, right) => left.days - right.days || left.name.localeCompare(right.name));
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
