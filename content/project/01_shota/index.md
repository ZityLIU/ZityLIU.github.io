---
title: "寿塔 · The Longevity Pagoda"
date: 2024-12-01
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
          subtitle = "UE5 · UMG Motion · Blueprint · Shader · Data-Driven Narrative"
          title    = "寿塔 · The Longevity Pagoda"
          desc     = "UE5 插画式视觉小说 | 数据驱动分支叙事 + UMG 动效 + 水墨材质转场"
          tags     = "Unreal Engine 5, UMG Widget, Material Shader, Blueprint, DataTable"
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
        《寿塔》是我在 Unreal Engine 5 中开发的**分幕式插画互动叙事 Demo**。

        项目核心目标是将"脚本—演出—交互"整合成**可复用的三层叙事系统**：通过 **DataTable** 管理剧情节点与变量，**UMG** 完成对话与选项交互，并用**材质驱动墨晕转场**增强沉浸感。

        > A scene-based illustrated narrative demo built in UE5. Focus: a reusable pipeline — DataTable-driven story nodes, UMG dialogue UI, and a material-based ink transition for cinematic scene changes.

        {{< highlight-cards
          icon1="📊" title1="DATA-DRIVEN"  desc1="DataTable 管理剧情节点、分支与变量，内容与逻辑解耦"
          icon2="🎬" title2="UMG MOTION"   desc2="统一的动效语言：对话框、选项、打字机效果、HUD 提示"
          icon3="🖋" title3="INK SHADER"   desc3="Noise 贴图驱动墨晕遮罩，参数化控制过场节奏"
        >}}
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # DEMO GIF + 视频链接
  # ← 修改：src 换成你的 GIF 路径；填入 YouTube / Bilibili 链接
  #   不填 youtube 或 bilibili 则不显示对应按钮
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: Demo 演示
      subtitle: Full Playthrough
      text: |-
        {{< media-gif
          src      = "/media/umg-widget.gif"
          caption  = "《寿塔》完整演示 — 对话交互 · 分支选择 · 转场动效 · HUD 变量反馈"
          youtube  = "https://youtu.be/your-video-id"
          bilibili = "https://www.bilibili.com/video/BVxxxxxxxx"
        >}}
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # UMG 界面设计  ← 修改：替换图片路径和图注文字
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: UMG 界面设计
      subtitle: Widget Layout · Motion Design · Character Management
      text: |-
        {{< media-row
          src1     = "/media/umg-design.png"
          caption1 = "UI 版式设计：对话框 · 名字栏 · 选项按钮 · HUD 提示层级"
          src2     = "/media/umg-widget.gif"
          caption2 = "动效演示：立绘入场动画 · 对话框渐显 · 选项 hover/click 反馈"
        >}}

        **设计原则：** 对话框、选项面板与 HUD 提示形成**统一的动效语言**——入场/退场曲线、时序节奏与打字机速率保持视觉一致性，避免界面跳切割裂沉浸感。

        ---

        {{< media-row
          src1     = "/media/character-design.png"
          caption1 = "角色立绘管理：在 UE Widget 中控制立绘切换与情绪状态动画"
          src2     = "/media/widget-blueprint.png"
          caption2 = "Widget 蓝图：显示文本 → 生成选项 → 写回变量 → 跳转节点"
        >}}
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # 水墨转场材质  ← 修改：替换图片/GIF 路径；填入视频链接
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: 水墨转场材质
      subtitle: Ink Dissolve Shader · Material Parameter Control
      text: |-
        {{< media-row
          src1     = "/media/ink-material-flow.png"
          caption1 = "材质节点流程：Noise 贴图 → 遮罩演化 → 边缘颜色参数 → 与 UI 淡出同步"
          src2     = "/media/ink-dissolve.gif"
          caption2 = "墨晕遮罩演化预览：边缘扩散速率 · 墨迹纹理密度 · 过场触发时序"
        >}}

        {{< media-gif
          src      = "/media/ink-dissolve.gif"
          caption  = "材质 Demo：墨晕转场完整演示，展示参数驱动与 UI / 关卡切换的触发联动"
          youtube  = "https://youtu.be/your-shader-demo-id"
          bilibili = "https://www.bilibili.com/video/BVxxxxxxxx"
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
          problem        = "叙事内容与演出逻辑耦合在同一 Blueprint 中，新增剧情须修改蓝图，扩展成本高、协作困难。"
          solution       = "以 DataTable 作为数据层，Blueprint 作为执行层，UMG 作为表现层——三层解耦，各自独立迭代。"
          implementation = "DataTable 存储对话文本、选项列表、变量读写与跳转 ID；Widget 只负责渲染与动效；脚本管理器 Blueprint 负责状态机与事件分发。"
          outcome        = "新增一幕剧情只需填写 DataTable，无需改动蓝图；UI 动效可独立迭代；墨晕材质参数化，转场风格可快速调整。"
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
