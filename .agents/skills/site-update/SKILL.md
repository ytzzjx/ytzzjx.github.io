---
name: site-update
description: 快速维护本仓库的公益、半公益和付费中转站目录。用于新增站点、修改注册链接/福利/模型/注册条件、调整排序、暂停注册、下架及恢复；同步中英文与生成文件，执行必要校验。普通更新不做长时间调研。
---

# 站点快速更新

遵守仓库根目录 [AGENTS.md](../../../AGENTS.md) 的快路径和调研预算。用户资料够用就编辑；缺项及时问，不自行扩大到全站核验。

## 定位后直接修改

在仓库根目录执行 `rg -n -F '目标站名或域名' app.js README.md README_EN.md`，只读取命中附近。首次新增参考一个同类别的完整条目，不重新设计数据结构。

| 位置 | 作用与修改条件 |
| --- | --- |
| `app.js` → `siteConfig.entries` | 在线站点的中文数据、链接和分类 |
| `app.js` → `siteConfig.displayOrder` | 站名排序；与在线条目一一对应 |
| `entry-translations.js` → `[站名]` | 英文文案，包含本次涉及的 `updateNote` 等字段 |
| `app.js` → `siteConfig.archivedEntries` | 下架留档；与在线列表互斥 |
| `README.md` / `README_EN.md` | 同步目标站点的摘要、链接及所属章节；不重写其他行 |
| `运营推广/站点状态核实台账.csv` | 下架、恢复时同步已有记录的状态；普通文案更新不必通读 |
| `sitemap.xml` / `失效站点/README.md` / HTML 的资源版本 | 用现有脚本生成，不手工改哈希或归档文档 |

一个事实可能同时出现在 `summary`、`details`、`registration`、`signupBonus`、`dailyCheckin`、`models`、`experience`、`caveat`、`benefits` 中。只同步受影响字段及其英文，避免卡片、详情和 README 互相矛盾。保留未涉及的信息，不为填满字段而调查。

## 按变更类型处理

- **更新资料或换域名**：修改对应条目和英文、两份 README；链接保留 `aff`、`invite`、`ref` 等参数，除非用户给了替代链接。只在用户要求调整排序时改动现有站的顺序。
- **新增**：先按站名和域名查重；加入 `entries`、`displayOrder`、英文翻译及两份 README。用户未指定位置时，放在同类别前部，保留其他站点相对顺序和 SeekAI 垫底惯例。模型只列已知项，不为了凑完整清单做额外查询。
- **分类**：纯付费站写 `pricing: "paid"`；公益和有持续免费额度的半公益站归公益区，不写 `paid`。仅注册赠送试用额度不等于公益站。事实不足以确定分类时问用户。
- **暂停注册**：保留在 `entries` 和 `displayOrder`，设 `tone: "closed"`，同步注册说明、英文及 README 的暂停注册章节；不要当作失效归档。
- **下架**：将完整条目移入 `archivedEntries`，填 `archivedAt`、`archivedReason`；从 `displayOrder` 移除。保留英文翻译并补英文下架原因，两份 README 移入归档章节，台账同步为已归档。不要删除历史对象。
- **恢复**：移回 `entries`、补回排序，移除 `archivedAt` / `archivedReason` 和过期的下架文案，更新 `tone`、英文、README 与台账；使用用户提供的恢复情况，不能把历史福利直接当作现状。

## 日期和最近变更

- 日期用用户所在时区（本仓库默认 `Asia/Shanghai`）的本次实际日期；站点内容变更时同步 `siteConfig.lastUpdated`。仅修改维护文档时不刷新站点日期。
- 每次更新目标条目填 `updatedAt` 和一句 `updateNote`，英文说明同时更新。
- `addedAt` 只在首次收录时填写，老条目不补猜；新增时参考现有条目填写 `publishedAt`，日常更新保留已有值。不要把 `publishedAt` 当首次收录日期。
- 小幅数字修正可用 `quietUpdate: true`；新收录和重要变更不要静默，已有 `quietUpdate` 应在重要更新时去掉。

## 最小收尾

改了 `app.js` 后，在仓库根目录依次运行；前一步失败先处理相关错误，不盲目继续：

```sh
node --check app.js
node scripts/build-site-meta.mjs
node scripts/check-consistency.mjs
git diff --check
```

`build-site-meta.mjs` 会生成 sitemap、归档文档并刷新 HTML 缓存参数。普通站点更新不用启动浏览器或安装依赖。

- 站点数量、标题或配色改变时，再运行 `python scripts/build_og_image.py` 更新分享封面；只有图标集合变化才运行 `node scripts/build-icons.mjs`。生成图标后需重新生成资源版本并校验。
- 最后看目标条目的 `git diff`，核对数字、单位、链接、条件和中英文含义。脚本通过不代表已经核实外站事实，也不保证英文语义一致。
- 当前生成和校验脚本会读取被忽略的 `guide/`、`faq/` 页面及本地台账。新检出仓库若缺这些文件，应明确报告缺失依赖，完成可运行的检查；不要为此取消忽略、编造草稿或陷入环境修复。
- 只修本次改动引起的问题；发现原有问题，简述具体限制，不扩大本次任务。检查通过后，按根目录规则简短交付。
