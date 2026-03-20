---
title: "寿塔 · The Longevity Pagoda"
date: 2024-12-01
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
            UE5 &nbsp;·&nbsp; UMG Motion &nbsp;·&nbsp; Blueprint &nbsp;·&nbsp; Shader &nbsp;·&nbsp; Data-Driven Narrative
          </p>
          <h1 style="font-size:2.6rem; font-weight:700; color:#f1f5f9; margin:0 0 0.75rem; line-height:1.2;">
            寿塔<span style="color:#a78bfa;">·</span> The Longevity Pagoda
          </h1>
          <p style="font-size:1.05rem; color:#94a3b8; max-width:620px; margin:0 auto 2rem; line-height:1.8;">
            UE5 插画式视觉小说&emsp;|&emsp;数据驱动分支叙事 + UMG 动效 + 水墨材质转场
          </p>
          <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Unreal Engine 5</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">UMG Widget</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Material Shader</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Blueprint</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">DataTable</span>
          </div>
        </div>
    design:
      columns: '1'

  # ── OVERVIEW ──────────────────────────────────────────────────
  - block: markdown
    content:
      title: Overview
      text: |-
        《寿塔》是我在 Unreal Engine 5 中开发的**分幕式插画互动叙事 Demo**。

        项目核心目标是将"脚本—演出—交互"整合成**可复用的三层叙事系统**：通过 **DataTable** 管理剧情节点与变量，**UMG** 完成对话与选项交互，并用**材质驱动墨晕转场**增强沉浸感。

        > A scene-based illustrated narrative demo built in UE5. Focus: a reusable pipeline — DataTable-driven story nodes, UMG dialogue UI, and a material-based ink transition for cinematic scene changes.

        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:1.5rem; text-align:center;">
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">📊</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">DATA-DRIVEN</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">DataTable 管理剧情节点、分支与变量，内容与逻辑解耦</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🎬</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">UMG MOTION</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">统一的动效语言：对话框、选项、打字机效果、HUD 提示</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🖋</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">INK SHADER</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">Noise 贴图驱动墨晕遮罩，参数化控制过场节奏</div>
          </div>
        </div>
    design:
      columns: '1'

  # ── DEMO VIDEO ────────────────────────────────────────────────
  - block: markdown
    content:
      title: Demo 演示
      subtitle: Full Playthrough
      text: |-
        <video controls playsinline style="width:100%; border-radius:10px; border:1px solid #2d2d4a;">
          <source src="/media/shota-demo.mp4" type="video/mp4"/>
        </video>
        <p style="text-align:center; font-size:0.82rem; color:#64748b; margin-top:0.75rem;">
          《寿塔》完整演示 — 对话交互 · 分支选择 · 转场动效 · HUD 变量反馈
        </p>
    design:
      columns: '1'

  # ── UMG DESIGN ────────────────────────────────────────────────
  - block: markdown
    content:
      title: UMG 界面设计
      subtitle: Widget Layout · Motion Design · Character Management
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1rem;">
          <div>
            <img src="/media/umg-design.png" alt="UMG 界面设计图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              UI 版式设计：对话框 · 名字栏 · 选项按钮 · HUD 提示层级
            </p>
          </div>
          <div>
            <img src="/media/umg-widget.gif" alt="用户控件界面动图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              动效演示：立绘入场动画 · 对话框渐显 · 选项 hover/click 反馈
            </p>
          </div>
        </div>

        **设计原则：** 对话框、选项面板与 HUD 提示形成**统一的动效语言**——入场/退场曲线、时序节奏与打字机速率保持视觉一致性，避免界面跳切割裂沉浸感。

        ---

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:1.25rem;">
          <div>
            <img src="/media/character-design.png" alt="角色立绘设计图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              角色立绘管理：在 UE Widget 中控制立绘切换与情绪状态动画
            </p>
          </div>
          <div>
            <img src="/media/widget-blueprint.png" alt="控件蓝图设计图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              Widget 蓝图：显示文本 → 生成选项 → 写回变量 → 跳转节点
            </p>
          </div>
        </div>
    design:
      columns: '1'

  # ── INK SHADER ────────────────────────────────────────────────
  - block: markdown
    content:
      title: 水墨转场材质
      subtitle: Ink Dissolve Shader · Material Parameter Control
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.25rem;">
          <div>
            <img src="/media/ink-material-flow.png" alt="水墨转场材质制作流程图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              材质节点流程：Noise 贴图 → 遮罩演化 → 边缘颜色参数 → 与 UI 淡出同步
            </p>
          </div>
          <div>
            <img src="/media/ink-dissolve.gif" alt="水墨材质动图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              墨晕遮罩演化预览：边缘扩散速率 · 墨迹纹理密度 · 过场触发时序
            </p>
          </div>
        </div>

        <video controls muted loop playsinline style="width:100%; border-radius:10px; border:1px solid #2d2d4a;">
          <source src="/media/ink-demo.mp4" type="video/mp4"/>
        </video>
        <p style="text-align:center; font-size:0.82rem; color:#64748b; margin-top:0.75rem;">
          材质 Demo：墨晕转场完整演示，展示参数驱动与 UI/关卡切换的触发联动
        </p>
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
              叙事内容与演出逻辑耦合在同一 Blueprint 中，新增剧情须修改蓝图，扩展成本高、协作困难。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">02 · Solution</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              以 <strong>DataTable</strong> 作为数据层，<strong>Blueprint</strong> 作为执行层，<strong>UMG</strong> 作为表现层——三层解耦，各自独立迭代。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">03 · Implementation</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              DataTable 存储对话文本、选项列表、变量读写与跳转 ID；Widget 只负责渲染与动效；脚本管理器 Blueprint 负责状态机与事件分发。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">04 · Outcome</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              新增一幕剧情只需填写 DataTable，无需改动蓝图；UI 动效可独立迭代；墨晕材质参数化，转场风格可快速调整。
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
