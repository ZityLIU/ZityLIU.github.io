# 🎨 Zhiting Liu · Portfolio Homepage

个人作品集主页，基于 [Hugo Blox](https://hugoblox.com/) 构建。
本文档说明如何维护网站内容，**无需懂代码**，像填表格一样操作即可。

---

## 目录

- [文件结构速览](#文件结构速览)
- [如何新增一个项目](#如何新增一个项目)
- [如何修改首页项目卡片](#如何修改首页项目卡片)
- [如何修改个人信息](#如何修改个人信息)
- [素材上传规范](#素材上传规范)
- [视频与下载文件的处理方式](#视频与下载文件的处理方式)
- [常用 Shortcode 参数速查](#常用-shortcode-参数速查)

---

## 文件结构速览

```
my_honey's_homepage/
│
├── content/                        ← 所有页面内容在这里
│   ├── _index.md                   ← 首页（Hero + 项目卡片 + 联系方式）
│   ├── authors/admin/_index.md     ← 个人信息（姓名 / 技能 / 经历 / 联系方式）
│   └── project/
│       ├── 01_shota/index.md       ← 项目页：寿塔
│       ├── 02_hourglass/index.md   ← 项目页：古罗马的沙漏
│       ├── 03_twine/index.md       ← 项目页：Twine 叙事设计
│       └── 04_xxx/index.md         ← ← 新项目在这里新建
│
├── static/media/                   ← 图片 / GIF 放在这里
│
├── layouts/shortcodes/             ← 排版组件（不需要修改）
│
└── config/_default/
    ├── params.yaml                 ← 网站配色 / 深色模式
    └── menus.yaml                  ← 导航栏
```

---

## 如何新增一个项目

### 第一步：上传素材

把项目的图片和 GIF 放进 `static/media/` 文件夹，建议用**英文文件名**，例如：

```
static/media/
  my-new-project-preview.gif    ← 首页卡片封面（必须是 GIF 或 PNG）
  my-new-project-screenshot.png
  my-new-project-flow.png
```

> **视频不需要上传到主页。** 请上传到 YouTube 或 Bilibili，然后把链接填进 Markdown 即可。
> **下载文件（zip 等）放在 GitHub 仓库里**，填仓库链接即可，不占用主页空间。

---

### 第二步：新建项目文件夹

在 `content/project/` 下新建一个文件夹，命名格式为 `序号_项目英文名`，例如：

```
content/project/04_my-new-project/
```

---

### 第三步：创建 index.md

在新文件夹里新建 `index.md`，把下方模板**完整复制进去**，然后逐项填写：

```markdown
---
title: "项目标题"
date: 2025-01-01
type: landing
design:
  spacing: "4rem"
sections:

  # ── 顶部 Hero 区块 ──────────────────────────────────────────
  # 修改：副标题关键词 / 主标题 / 一句话描述 / 技能标签（逗号分隔）
  - block: markdown
    content:
      title: ''
      text: |-
        {{</* project-hero
          subtitle = "UE5 · UMG · Blueprint"
          title    = "项目中文名 · Project English Name"
          desc     = "一句话描述这个项目做了什么，用什么技术，达到了什么效果"
          tags     = "Unreal Engine 5, UMG, Blueprint, Material Shader"
        */>}}
    design:
      columns: '1'

  # ── 项目概述 ────────────────────────────────────────────────
  # 修改：自由撰写项目介绍，支持 Markdown 加粗/引用/列表
  # 修改：highlight-cards 的 icon/title/desc（3 张或 4 张均可）
  - block: markdown
    content:
      title: Overview
      text: |-
        这里写项目的背景和目标，支持 **加粗**、*斜体*、`代码`。

        > 这里写一句英文版摘要（可选）

        {{</* highlight-cards
          icon1="📊" title1="亮点一标题" desc1="亮点一说明"
          icon2="🎬" title2="亮点二标题" desc2="亮点二说明"
          icon3="🖋" title3="亮点三标题" desc3="亮点三说明"
        */>}}
    design:
      columns: '1'
 
 

  # ── GIF 展示区（可复制多个此区块） ─────────────────────────
  # 修改：src 换成 /media/你的文件名.gif
  # 修改：caption 换成图注说明
  # 修改：youtube / bilibili 填入视频链接（不填则不显示按钮）
  - block: markdown
    content:
      title: Demo 演示
      text: |-
        {{</* media-gif
          src      = "/media/my-new-project-preview.gif"
          caption  = "这里写图注说明"
          youtube  = "https://youtu.be/your-video-id"
          bilibili = "https://www.bilibili.com/video/BVxxxxxxxx"
        */>}}
    design:
      columns: '1'
      

      

  # ── 单张图片（可复制多个此区块） ───────────────────────────
  - block: markdown
    content:
      title: 设计截图
      text: |-
        {{</* media-img
          src     = "/media/my-new-project-screenshot.png"
          caption = "这里写图注说明"
        */>}}
    design:
      columns: '1'

  # ── 两张并排图片（可复制多个此区块） ───────────────────────
  - block: markdown
    content:
      title: 流程图
      text: |-
        {{</* media-row
          src1     = "/media/my-new-project-screenshot.png"
          caption1 = "左图图注"
          src2     = "/media/my-new-project-flow.png"
          caption2 = "右图图注"
        */>}}
    design:
      columns: '1'

  # ── GitHub 下载入口（zip / 代码 / 试玩包） ─────────────────
  # 修改：repo 换成 GitHub 仓库链接 / label 换成按钮文字 / note 换成说明
  - block: markdown
    content:
      title: 下载 / 试玩
      text: |-
        {{</* github-download
          repo  = "https://github.com/ztyliu/your-repo-name"
          label = "下载试玩包 / 查看源码"
          note  = "点击跳转 GitHub，下载后按 README 运行。"
          emoji = "🎮"
        */>}}
    design:
      columns: '1'

  # ── Breakdown（技术复盘） ───────────────────────────────────
  - block: markdown
    content:
      title: Breakdown
      subtitle: Problem → Solution → Implementation → Outcome
      text: |-
        {{</* breakdown
          problem        = "遇到了什么问题？"
          solution       = "选择了什么技术方案？"
          implementation = "具体怎么实现的？"
          outcome        = "最终达成了什么效果？"
        */>}}
    design:
      columns: '1'

  # ── 返回按钮（保持在最末尾，不需要修改） ──────────────────
  - block: markdown
    content:
      title: ''
      text: |-
        {{</* back-nav */>}}
    design:
      columns: '1'
```

> **不需要的区块直接删掉**，需要多一张图就再复制一个 `media-img` 区块，非常灵活。

---

### 第四步：在首页添加项目卡片

打开 `content/_index.md`，找到 `project-grid` 部分，新增一组 `link4/gif4/tags4/title4/desc4`：

```yaml
link4="/project/04_my-new-project/"
gif4="/media/my-new-project-preview.gif"
tags4="UE5 · 你的技术标签"
title4="你的项目标题"
desc4="你的项目一句话描述"
```

目前支持**任意数量**的项目卡片，填写 `link5/gif5/...`、`link6/gif6/...` 以此类推即可，没有上限。

---

## 如何修改首页项目卡片

打开 `content/_index.md`，找到 `project-grid` 区块，直接修改对应项目的参数值即可。

| 参数 | 说明 | 示例 |
|------|------|------|
| `linkN` | 点击卡片跳转的路径 | `/project/01_shota/` |
| `gifN` | 卡片封面图（GIF 或 PNG） | `/media/umg-widget.gif` |
| `tagsN` | 技术标签，用 ` · ` 分隔 | `UE5 · UMG · Shader` |
| `titleN` | 项目标题 | `寿塔 · The Longevity Pagoda` |
| `descN` | 一句话描述 | `UE5 插画式视觉小说 — ...` |

---

## 如何修改个人信息

打开 `content/authors/admin/_index.md`，可修改：

| 位置 | 内容 |
|------|------|
| `title` | 显示名字 |
| `role` | 职位 / 身份标签 |
| `organizations` | 所在学校 / 机构 |
| `profiles` | 社交链接（邮箱 / GitHub 等） |
| `interests` | 兴趣方向标签 |
| `skills` | 技能列表与熟练度 |
| `work` / `education` | 经历与教育背景 |
| `## About Me`（文件末尾） | 首页 Hero 下方的自我介绍段落 |

---

## 素材上传规范

**放在哪里：** `static/media/` 文件夹

**命名规则：** 全部英文 + 连字符，不用空格和中文

```
✅ umg-widget.gif
✅ ink-material-flow.png
✅ twine-overview.png

❌ UMG动效图.gif
❌ 水墨转场 流程图.png
```

**文件类型建议：**

| 用途 | 格式 | 建议大小 |
|------|------|---------|
| 首页卡片封面 | GIF 或 PNG | GIF ≤ 15 MB |
| 项目截图 / 流程图 | PNG | ≤ 3 MB |
| 动效预览 | GIF | ≤ 15 MB |

---

## 视频与下载文件的处理方式

### 视频
**不需要上传视频文件。** 把视频上传到 YouTube 或 Bilibili，然后在 `media-gif` shortcode 里填链接，会自动生成跳转按钮：

```
youtube  = "https://youtu.be/xxxxxx"                      ← 不填则不显示此按钮
bilibili = "https://www.bilibili.com/video/BVxxxxxx"      ← 不填则不显示此按钮
```

### 下载文件（zip / 代码）
**不需要上传到主页。** 把文件放在 GitHub 仓库里，用 `github-download` shortcode 生成下载卡片，访客点击跳转 GitHub 下载。

---

## 常用 Shortcode 参数速查

### `project-hero` — 项目页顶部大标题
| 参数 | 说明 |
|------|------|
| `subtitle` | 副标题关键词（小字，紫色） |
| `title` | 项目主标题 |
| `desc` | 一句话描述 |
| `tags` | 技能标签，英文逗号分隔 |

### `media-gif` — GIF 预览 + 视频链接按钮
| 参数 | 说明 |
|------|------|
| `src` | GIF 路径，如 `/media/xxx.gif` |
| `caption` | 图注说明（可选） |
| `youtube` | YouTube 链接（可选，不填不显示按钮） |
| `bilibili` | Bilibili 链接（可选，不填不显示按钮） |

### `media-img` — 单张全宽图片
| 参数 | 说明 |
|------|------|
| `src` | 图片路径 |
| `caption` | 图注说明（可选） |

### `media-row` — 两张图片并排
| 参数 | 说明 |
|------|------|
| `src1` / `caption1` | 左侧图片路径 / 图注 |
| `src2` / `caption2` | 右侧图片路径 / 图注 |

### `highlight-cards` — 亮点卡片组（3 或 4 张）
| 参数 | 说明 |
|------|------|
| `icon1` / `title1` / `desc1` | 第一张：emoji / 标题 / 说明 |
| `icon2` / `title2` / `desc2` | 第二张 |
| `icon3` / `title3` / `desc3` | 第三张 |
| `icon4` / `title4` / `desc4` | 第四张（可选，不填则只显示 3 张） |

### `breakdown` — 技术复盘四格卡片
| 参数 | 说明 |
|------|------|
| `problem` | 遇到了什么问题 |
| `solution` | 选择了什么方案 |
| `implementation` | 具体如何实现 |
| `outcome` | 最终达到了什么效果 |

### `github-download` — GitHub 下载入口卡片
| 参数 | 说明 |
|------|------|
| `repo` | GitHub 仓库链接 |
| `label` | 按钮文字 |
| `note` | 说明文字（可选） |
| `emoji` | 卡片图标（可选，默认 ⬇） |

### `project-grid` — 首页项目卡片网格
| 参数 | 说明 |
|------|------|
| `link1`…`linkN` | 项目详情页路径 |
| `gif1`…`gifN` | 卡片封面图路径 |
| `tags1`…`tagsN` | 技术标签 |
| `title1`…`titleN` | 项目标题 |
| `desc1`…`descN` | 一句话描述 |

---

> 遇到问题时检查以下三点：
> 1. 图片路径是否以 `/media/` 开头，文件名拼写是否正确
> 2. shortcode 的引号是否完整（必须是英文双引号 `"`）
> 3. 新项目文件夹里是否有 `index.md`
