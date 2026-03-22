---
title: "Twine 互动叙事脚本设计"
date: 2024-08-01
type: landing
design:
  spacing: "4rem"
sections:

  # ────────────────────────────────────────────────────────────
  # HERO  ← 修改这里：副标题、主标题、一句话描述、技能标签
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ''
      text: |-
        {{< project-hero
          subtitle = "Twine · Narrative Design · Variables · Engine-Ready Data"
          title    = "Twine · 互动叙事脚本设计"
          desc     = "分支结构与变量系统 | 从脚本原型到可落地的引擎数据"
          tags     = "Twine, Branching Narrative, HUD Variables, DataTable Export, UE / Unity Ready"
        >}}
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # OVERVIEW  ← 修改这里：项目简介文字
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: Overview
      text: |-
        使用 **Twine** 进行分支叙事脚本设计，重点在于把剧情结构做成"**可管理、可复用、可导出**"的节点系统。

        将分支逻辑与 HUD 变量结合，用可视化节点图表达全局结构，并准备了可试玩的打包文件，便于向导师/HR 展示完整交互体验。

        > A Twine-based branching narrative prototype with reusable node/variable structure. Focus: clear branching design, HUD variables, and exportability for engine integration (UE/Unity).

        {{< highlight-cards
          icon1="🗺" title1="CLEAR STRUCTURE" desc1="主线/支线/回收/结局一览图"
          icon2="🔢" title2="VARIABLE DRIVEN" desc2="HUD 变量让选择产生可见后果"
          icon3="📤" title3="EXPORTABLE"      desc3="CSV/JSON 导出，直接接入引擎"
          icon4="🎮" title4="PLAYABLE"        desc4="打包文件可直接浏览器试玩"
        >}}
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # 分支结构总览  ← 修改：替换图片路径和图注
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: 分支结构总览
      subtitle: Global Narrative Architecture
      text: |-
        {{< media-img
          src     = "/media/twine-overview.png"
          caption = "全局结构：入口节点 · 关键分歧点 · 回收节点 · 结局收束 · 关键体验节奏标注"
        >}}

        **阅读说明：** 图中标注了三种节点类型——**分歧节点**（玩家选择触发变量写入）、**回收节点**（不同路径汇聚）、**结局节点**（变量状态决定最终走向）。主线保持 3–4 步节奏，支线提供 1–2 步差异化体验后回收至主线。
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # HUD 变量设计  ← 修改：替换图片路径和正文说明
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: HUD 变量设计
      subtitle: Variable System · State Feedback
      text: |-
        {{< media-img
          src     = "/media/hud-variable.png"
          caption = "变量系统：Set / Get 操作 · 分支判断条件 · 玩家选择触发的状态变化"
        >}}

        **变量设计原则：**
        - 每个关键选项绑定 1–2 个变量的写入，避免变量爆炸
        - 变量在 HUD 上有**可见反馈**，玩家能感知到选择产生的影响
        - 变量命名规范与节点 ID 对齐，便于导出至 UE DataTable 直接使用
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # 单幕脚本示例  ← 修改：替换图片路径和正文说明
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: 单幕脚本示例
      subtitle: Scene Script · Dialogue / Choices / Variable Logic / Jump
      text: |-
        {{< media-img
          src     = "/media/twine-script.png"
          caption = "单幕结构：对话文本 · 选项列表 · 变量变化 · 跳转逻辑——展示完整脚本规范写法"
        >}}

        每一幕遵循统一的**四段式结构**：`[场景信息]` → `[对话文本]` → `[选项列表 + 变量操作]` → `[跳转目标 ID]`，保证可读性的同时直接对应引擎 DataTable 的列结构。
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # 下载入口  ← 修改：repo 换成你的 GitHub 仓库链接；修改 label / note
  # 文件存放在 GitHub 仓库里，访客直接去 GitHub 下载，不占用主页空间
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: 试玩 Demo
      subtitle: Playable Prototype
      text: |-
        {{< github-download
          repo  = "https://github.com/ZityLIU/twine/tree/main"
          label = "下载 Twine 试玩包"
          note  = "解压后在浏览器中打开 HTML 文件，即可体验完整的分支叙事原型。无需安装任何软件 · 支持所有现代浏览器"
          emoji = "🎮"
        >}}
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # BREAKDOWN  ← 修改：四格卡片文字
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: Breakdown
      subtitle: Problem → Solution → Implementation → Outcome
      text: |-
        {{< breakdown
          problem        = "叙事脚本通常以线性文档存在，分支复杂度难以可视化，且无法直接对接引擎 DataTable。"
          solution        = "使用 Twine 将脚本结构化为节点图，引入变量系统模拟引擎内状态管理，并规划 CSV/JSON 导出格式。"
          implementation = "每个节点对应一个场景单元，包含对话内容、选项列表、变量操作与跳转指令；全局总览图辅助把控整体节奏。"
          outcome        = "剧情结构一目了然，协作沟通效率提升；CSV 导出可直接导入 UE DataTable，降低引擎接入成本。"
        >}}
    design:
      columns: '1'

  - block: markdown
    content:
      title: ''
      text: |-
        {{< back-nav >}}
    design:
      columns: '1'
---
