---
title: "古罗马的沙漏 · The Hourglass of Ancient Rome"
date: 2024-10-01
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
          subtitle = "XR · Virtual Production · Sequencer · Cinematography"
          title    = "古罗马的沙漏 · The Hourglass of Ancient Rome"
          desc     = "XR / UE 虚拟制片 | 虚拟场景搭建 + LED 拍摄流程 + 镜头调度 + 成片交付"
          tags     = "Unreal Engine 5, XR / LED Wall, Sequencer, Virtual Production, Cinematography"
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
        《古罗马的沙漏》是一次 **XR / 虚拟制片实践**项目：在 Unreal Engine 中搭建可用于拍摄的虚拟场景，探索"**现实表演 × 虚拟环境**"的叙事呈现方式。

        项目包含 UE 场景搭建、LED 拍摄流程配合、镜头调度与后期剪辑，最终交付可观看**成片**与**录制花絮**。

        > An XR/virtual production practice. I built a shoot-ready virtual environment in UE, collaborated on LED shooting workflows, and delivered a final short film + behind-the-scenes footage.

        {{< highlight-cards
          icon1="🏛" title1="SCENE BUILD"   desc1="虚拟场景搭建与光照氛围调试"
          icon2="🎥" title2="CINEMATICS"    desc2="Sequencer 镜头路径与景深控制"
          icon3="💡" title3="LED WORKFLOW"  desc3="配合 LED 拍摄，可见可拍可控"
          icon4="🎬" title4="DELIVERY"      desc4="成片 + 花絮，完整 pipeline 展示"
        >}}
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # 成片 GIF + 视频链接
  # ← 修改：src 换成成片的 GIF 预览；填入 YouTube / Bilibili 链接
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: 成片 · Final Film
      text: |-
        {{< media-gif
          src      = "/media/hourglass-bts.gif"
          caption  = "最终成片——虚拟场景与真实表演融合呈现，光照氛围与镜头节奏"
          youtube  = "https://youtu.be/your-final-film-id"
          bilibili = "https://www.bilibili.com/video/BVxxxxxxxx"
        >}}
    design:
      columns: '1'

  # ────────────────────────────────────────────────────────────
  # 花絮 GIF + 视频链接
  # ← 修改：src 换成花絮的 GIF 预览；填入 YouTube / Bilibili 链接
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: 录制花絮 · Behind the Scenes
      text: |-
        {{< media-gif
          src      = "/media/hourglass-bts.gif"
          caption  = "拍摄花絮——LED 现场流程、UE 虚拟场景与摄影机配合的完整工作方式"
          youtube  = "https://youtu.be/your-bts-video-id"
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
          problem        = "XR 虚拟制片要求虚拟场景与真实拍摄高度配合——光照参数、镜头视角、演员走位需同步可控，现场调整窗口极短。"
          solution       = "在 UE 中预先完成场景搭建与光照调试，使用 Sequencer 规划镜头方案，拍摄前与导演/摄影师对齐关键参数。"
          implementation = "场景分区域管理（背景层 / 主体层 / 光源层），Sequencer 绑定摄像机路径与景深，LED 屏实时输出 UE 渲染结果配合现场表演。"
          outcome        = "现场拍摄效率显著提升；虚拟环境可快速迭代；成片与花絮完整记录了 XR 制片全流程。"
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
