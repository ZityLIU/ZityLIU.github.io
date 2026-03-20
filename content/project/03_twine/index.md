---
title: "Twine 互动叙事脚本设计"
date: 2024-08-01
type: landing

design:
  spacing: "4rem"

sections:

  # ── HERO ──────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ''
      text: |-
        <div style="padding: 3rem 0 2rem; text-align:center;">
          <a href="/" style="display:inline-flex; align-items:center; gap:0.4rem; color:#94a3b8; font-size:0.82rem; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:2rem;">
            ← Back to Portfolio
          </a>
          <p style="font-size:0.8rem; color:#a78bfa; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1rem;">
            Twine &nbsp;·&nbsp; Narrative Design &nbsp;·&nbsp; Variables &nbsp;·&nbsp; Engine-Ready Data
          </p>
          <h1 style="font-size:2.6rem; font-weight:700; color:#f1f5f9; margin:0 0 0.75rem; line-height:1.2;">
            Twine<span style="color:#a78bfa;">·</span> 互动叙事脚本设计
          </h1>
          <p style="font-size:1.05rem; color:#94a3b8; max-width:620px; margin:0 auto 2rem; line-height:1.8;">
            分支结构与变量系统&emsp;|&emsp;从脚本原型到可落地的引擎数据
          </p>
          <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Twine</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Branching Narrative</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">HUD Variables</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">DataTable Export</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">UE / Unity Ready</span>
          </div>
        </div>
    design:
      columns: '1'

  # ── OVERVIEW ──────────────────────────────────────────────────
  - block: markdown
    content:
      title: Overview
      text: |-
        使用 **Twine** 进行分支叙事脚本设计，重点在于把剧情结构做成"**可管理、可复用、可导出**"的节点系统。

        将分支逻辑与 HUD 变量结合，用可视化节点图表达全局结构，并准备了可试玩的打包文件，便于向导师/HR 展示完整交互体验。
        
        > A Twine-based branching narrative prototype with a reusable node/variable structure. Focus: clear branching design, HUD variables, and exportability for engine integration (UE/Unity).
        
        <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; margin-top:1.5rem; text-align:center;">
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.1rem 0.6rem;">
            <div style="font-size:1.4rem; margin-bottom:0.35rem;">🗺</div>
            <div style="font-size:0.72rem; color:#a78bfa; font-weight:600; margin-bottom:0.25rem;">CLEAR STRUCTURE</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.4;">主线/支线/回收/结局一览图</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.1rem 0.6rem;">
            <div style="font-size:1.4rem; margin-bottom:0.35rem;">🔢</div>
            <div style="font-size:0.72rem; color:#a78bfa; font-weight:600; margin-bottom:0.25rem;">VARIABLE DRIVEN</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.4;">HUD 变量让选择产生可见后果</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.1rem 0.6rem;">
            <div style="font-size:1.4rem; margin-bottom:0.35rem;">📤</div>
            <div style="font-size:0.72rem; color:#a78bfa; font-weight:600; margin-bottom:0.25rem;">EXPORTABLE</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.4;">CSV/JSON 导出，直接接入引擎</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.1rem 0.6rem;">
            <div style="font-size:1.4rem; margin-bottom:0.35rem;">🎮</div>
            <div style="font-size:0.72rem; color:#a78bfa; font-weight:600; margin-bottom:0.25rem;">PLAYABLE</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.4;">打包文件可直接浏览器试玩</div>
          </div>
        </div>
    design:
      columns: '1'

  # ── BRANCH OVERVIEW ───────────────────────────────────────────
  - block: markdown
    content:
      title: 分支结构总览
      subtitle: Global Narrative Architecture
      text: |-
        <img src="/media/twine-overview.png" alt="脚本分支设计图总览"
             style="width:100%; border-radius:10px; border:1px solid #2d2d4a;"/>
        <p style="text-align:center; font-size:0.82rem; color:#64748b; margin-top:0.75rem;">
          全局结构：入口节点 · 关键分歧点 · 回收节点 · 结局收束 · 关键体验节奏标注
        </p>

        **阅读说明：** 图中标注了三种节点类型——**分歧节点**（玩家选择触发变量写入）、**回收节点**（不同路径汇聚）、**结局节点**（变量状态决定最终走向）。主线保持 3–4 步节奏，支线提供 1–2 步差异化体验后回收至主线。
    design:
      columns: '1'

  # ── HUD VARIABLES ─────────────────────────────────────────────
  - block: markdown
    content:
      title: HUD 变量设计
      subtitle: Variable System · State Feedback
      text: |-
        <img src="/media/hud-variable.png" alt="HUD 变量设计编程图"
             style="width:100%; border-radius:10px; border:1px solid #2d2d4a;"/>
        <p style="text-align:center; font-size:0.82rem; color:#64748b; margin-top:0.75rem;">
          变量系统：Set / Get 操作 · 分支判断条件 · 玩家选择触发的状态变化
        </p>

        **变量设计原则：**
        - 每个关键选项绑定 1–2 个变量的写入，避免变量爆炸
        - 变量在 HUD 上有**可见反馈**，玩家能感知到选择产生的影响
        - 变量命名规范与节点 ID 对齐，便于导出至 UE DataTable 直接使用
    design:
      columns: '1'

  # ── SCRIPT SAMPLE ─────────────────────────────────────────────
  - block: markdown
    content:
      title: 单幕脚本示例
      subtitle: Scene Script · Dialogue / Choices / Variable Logic / Jump
      text: |-
        <img src="/media/twine-script.png" alt="单幕脚本示例图"
             style="width:100%; border-radius:10px; border:1px solid #2d2d4a;"/>
        <p style="text-align:center; font-size:0.82rem; color:#64748b; margin-top:0.75rem;">
          单幕结构：对话文本 · 选项列表 · 变量变化 · 跳转逻辑——展示完整脚本规范写法
        </p>

        每一幕遵循统一的**四段式结构**：`[场景信息]` → `[对话文本]` → `[选项列表 + 变量操作]` → `[跳转目标 ID]`，保证可读性的同时直接对应引擎 DataTable 的列结构。
    design:
      columns: '1'

  # ── DOWNLOAD ──────────────────────────────────────────────────
  - block: markdown
    content:
      title: 试玩 Demo
      subtitle: Playable Prototype
      text: |-
        <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:10px; padding:2rem; text-align:center;">
          <div style="font-size:2rem; margin-bottom:0.75rem;">🎮</div>
          <h3 style="color:#f1f5f9; margin:0 0 0.5rem; font-size:1.1rem;">下载 Twine 试玩包</h3>
          <p style="color:#94a3b8; font-size:0.88rem; margin:0 0 1.25rem; line-height:1.6;">
            解压后在浏览器中打开 HTML 文件，即可体验完整的分支叙事原型。<br/>
            <span style="color:#64748b; font-size:0.8rem;">无需安装任何软件 · 支持所有现代浏览器</span>
          </p>
          <a href="/media/twine-demo.zip"
             download
             style="display:inline-block; padding:0.65rem 2rem; background:transparent; border:1px solid #a78bfa; color:#ddd6fe; border-radius:6px; font-size:0.9rem; text-decoration:none; letter-spacing:0.05em;">
            ⬇ &nbsp; Download Demo (.zip)
          </a>
        </div>
    design:
      columns: '1'

  # ── BREAKDOWN ─────────────────────────────────────────────────
  - block: markdown
    content:
      title: Breakdown
      subtitle: Problem → Solution → Implementation → Outcome
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">01 · Problem</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              叙事脚本通常以线性文档存在，分支复杂度难以可视化，且无法直接对接引擎 DataTable。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">02 · Solution</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              使用 Twine 将脚本结构化为节点图，引入变量系统模拟引擎内状态管理，并规划 CSV/JSON 导出格式。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">03 · Implementation</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              每个节点对应一个场景单元，包含对话内容、选项列表、变量操作与跳转指令；全局总览图辅助把控整体节奏。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">04 · Outcome</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              剧情结构一目了然，协作沟通效率提升；CSV 导出可直接导入 UE DataTable，降低引擎接入成本。
            </p>
          </div>
        </div>
    design:
      columns: '1'

  # ── BACK NAV ──────────────────────────────────────────────────
  - block: markdown
    content:
      title: ''
      text: |-
        <div style="text-align:center; padding:1rem 0 2rem;">
          <a href="/" style="display:inline-block; padding:0.6rem 1.8rem; border:1px solid #3d3d5a; color:#94a3b8; border-radius:6px; font-size:0.85rem; text-decoration:none; letter-spacing:0.06em;">
            ← Back to Portfolio
          </a>
        </div>
    design:
      columns: '1'
---
