---
title: "Twine 互动叙事脚本设计"
date: 2024-11-01
type: landing

design:
  spacing: "4rem"

sections:

  # ── HERO ─────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |-
        <div style="padding: 3rem 0 2rem; text-align:center;">
          <a href="/" style="display:inline-flex; align-items:center; gap:0.4rem; color:#94a3b8; font-size:0.82rem; text-decoration:none; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:2rem;">
            ← Back to Portfolio
          </a>

          <p style="font-size:0.8rem; color:#a78bfa; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:1rem;">
            Twine · Narrative Design · Branching Logic · Data-Driven
          </p>

          <h1 style="font-size:2.6rem; font-weight:700; color:#f1f5f9; margin:0 0 0.75rem;">
            Twine 互动叙事设计
          </h1>

          <p style="font-size:1.05rem; color:#94a3b8; max-width:620px; margin:0 auto 2rem; line-height:1.8;">
            分支叙事结构设计 &emsp;|&emsp;变量驱动剧情逻辑 &emsp;|&emsp;UE 数据对接
          </p>
        </div>
    design:
      columns: '1'

  # ── OVERVIEW ─────────────────────────────────────────
  - block: markdown
    content:
      title: "Overview"
      text: |-
        本项目使用 **Twine** 设计互动叙事结构，构建分支剧情与变量系统，并作为 UE5 项目的前置叙事原型。

        核心目标：
        - 把“线性剧情”转为“可交互分支结构”
        - 用变量控制剧情推进与状态变化
        - 为后续 UE DataTable 提供结构化输入

        > A branching narrative prototype built with Twine. It focuses on variable-driven storytelling and serves as a structured narrative source for UE implementation.

    design:
      columns: '1'

  # ── SCRIPT STRUCTURE ─────────────────────────────────
  - block: markdown
    content:
      title: "Script Structure"
      text: |-
        <img src="/media/twine-overview.png" style="width:100%; border-radius:10px; border:1px solid #2d2d4a;"/>

        <p style="text-align:center; font-size:0.82rem; color:#64748b; margin-top:0.5rem;">
          Twine 分支结构总览：节点关系与剧情流向
        </p>

        ---

        <img src="/media/twine-script.png" style="width:100%; border-radius:10px; border:1px solid #2d2d4a;"/>

        <p style="text-align:center; font-size:0.82rem; color:#64748b; margin-top:0.5rem;">
          剧本节点内容：文本、变量、跳转逻辑
        </p>

    design:
      columns: '1'

  # ── DESIGN LOGIC ─────────────────────────────────────
  - block: markdown
    content:
      title: "Design Logic"
      text: |-
        该系统将剧情抽象为：

        - **Node（节点）**
        - **Choice（选项）**
        - **Variable（变量）**
        - **Transition（跳转）**

        逻辑流程：

        ```
        Node → Display Text → Player Choice → Update Variable → Jump to Next Node
        ```

        这种结构使得剧情可以：
        - 动态分支
        - 可复用
        - 易于迁移到 UE

    design:
      columns: '1'

  # ── UE MAPPING ───────────────────────────────────────
  - block: markdown
    content:
      title: "UE Integration Mapping"
      text: |-
        在 Unreal Engine 中，对应关系如下：

        | Twine | UE |
        |------|----|
        | Node | DataTable Row |
        | Choice | Button Widget |
        | Variable | Blueprint Variable |
        | Transition | Node ID Jump |

        这样实现了：

        👉 **叙事设计（Twine） → 数据结构（CSV/DataTable） → UE 运行时系统**

    design:
      columns: '1'

  # ── BACK ─────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |-
        <div style="text-align:center; padding:1rem 0 2rem;">
          <a href="/" style="display:inline-block; padding:0.6rem 1.8rem; border:1px solid #3d3d5a; color:#94a3b8; border-radius:6px; font-size:0.85rem; text-decoration:none;">
            ← Back to Portfolio
          </a>
        </div>
    design:
      columns: '1'

---
