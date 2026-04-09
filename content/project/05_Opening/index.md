---
title: "惊动花信 · Lavender Reverie"
date: 2026-04-09
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
            UE5 &nbsp;·&nbsp; UMG Motion &nbsp;·&nbsp; Material Shader &nbsp;·&nbsp; Blueprint Timing &nbsp;·&nbsp; UI FX Design
          </p>
          <h1 style="font-size:2.6rem; font-weight:700; color:#f1f5f9; margin:0 0 0.75rem; line-height:1.2;">
            惊动花信<span style="color:#a78bfa;">·</span> Level Opening Motion Design
          </h1>
          <p style="font-size:1.05rem; color:#94a3b8; max-width:720px; margin:0 auto 2rem; line-height:1.8;">
            UE5 关卡 Opening 界面动效设计&emsp;|&emsp;标题呼吸、光纹扫光、水波/雾效、尘光粒子与 UI 演出节奏整合
          </p>
          <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Unreal Engine 5</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">UMG Motion</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">UI Shader</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Blueprint</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Atmospheric FX</span>
          </div>
        </div>
    design:
      columns: '1'

  # ── OVERVIEW ──────────────────────────────────────────────────
  - block: markdown
    content:
      title: Overview
      text: |-
        《惊动花信》关卡 Opening 动效项目聚焦于 **UE5 游戏界面开场演出设计**：我将标题、菜单、背景微动、材质流光与环境氛围特效整合为一套统一的视觉语言，使静态插画式界面具备更强的“呼吸感”、层次感与演出张力。

        项目的核心不是单一材质或单个按钮特效，而是**面向玩家第一眼体验的整体动效系统设计**：从背景构建、标题字体导入、光斑底纹、菜单 hover 光路，到水波纹、流动雾、体积雾与尘光粒子，这些元素通过 **UMG + Material + Blueprint** 被组织成同一套可控、可调、可复用的 Opening 演出流程。

        > A UE5 opening-screen motion design project focused on turning a static illustrated menu into a layered, atmospheric, and production-ready interactive presentation. The emphasis is on timing, shader-driven UI FX, and cohesive motion language rather than isolated visual tricks.

        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:1.5rem; text-align:center;">
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">✨</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">MOTION SYSTEM</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">不是零散特效堆叠，而是基于节奏与层级组织的 Opening 动效系统</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🎨</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">UI SHADER FX</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">光纹、扫光、拖尾粒子与标题底纹全部以可调参数的 UI 材质方式实现</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🌫️</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">ATMOSPHERE CONTROL</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">水波、雾、尘光与体积感共同参与前景—中景—背景的氛围塑造</div>
          </div>
        </div>
    design:
      columns: '1'

  # ── DEMO ──────────────────────────────────────────────────────
  - block: markdown
    content:
      title: Opening Demo
      text: |-
        {{< media-gif
          src="/media/Opening.gif"
          caption="《惊动花信》Opening 动效演示 —— 标题呼吸、菜单光路、背景微动、水波/雾效与粒子氛围的整体演出"
        >}}
    design:
      columns: '1'

  # ── FX SYSTEM DESIGN ──────────────────────────────────────────
  - block: markdown
    content:
      title: UI FX System Design
      subtitle: Title Motion · Menu Highlight · Layered Atmosphere
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1rem;">
          <div>
            <img src="/media/UI艺术字体导入.png" alt="UI艺术字体导入"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              标题字体资源导入与界面风格统一：保证艺术字在引擎中的可读性、风格一致性与后续动效兼容性
            </p>
          </div>
          <div>
            <img src="/media/动态呼吸.gif" alt="动态呼吸动效"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              标题呼吸动效：通过光尘粒子浮动、云雾弥散、水纹波动、光纹流动与节奏控制，让静态标题形成柔和的生命感
            </p>
          </div>
        </div>

        在 Opening 设计中，我刻意避免“单点炫技”，而是优先建立**统一的动效层级与关注点分配**：标题承担第一视觉焦点，菜单承担交互反馈，背景承担氛围延展。所有特效都围绕“第一眼可感知、第二眼不打扰、长时间观看不疲劳”的原则来组织。

        ---

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:1.25rem;">
          <div>
            <img src="/media/动态光路材质蓝图.png" alt="动态光路材质蓝图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              菜单动态光路材质：以参数化方式控制流速、亮度、宽度与拖尾衰减，用于 hover/聚焦反馈
            </p>
          </div>
          <div>
            <img src="/media/尘光粒子材质蓝图.png" alt="尘光粒子材质蓝图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              尘光粒子材质：为菜单与标题周边提供细微闪烁层，增强空气感与空间层次
            </p>
          </div>
        </div>
    design:
      columns: '1'

  # ── SHADER VARIATIONS ─────────────────────────────────────────
  - block: markdown
    content:
      title: 光纹材质探索
      subtitle: Color Language · Layering · Stylization
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.25rem;">
          <div>
            <img src="/media/绯狐品红光纹材质.gif" alt="绯狐品红光纹材质"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              绯狐品红光纹：偏高饱和、高情绪张力的光纹版本，更适合强调情绪性和视觉冲击
            </p>
          </div>
          <div>
            <img src="/media/碧漪金盏光纹材质.gif" alt="碧漪金盏光纹材质"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              碧漪金盏光纹：更偏柔和、贵气、适合作为标题与重点元素的底纹高光
            </p>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1.25rem; margin-top:1rem;">
          <div>
            <img src="/media/碧漪金盏光纹材质蓝图.png" alt="碧漪金盏光纹材质蓝图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.78rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              金色光斑/条纹版本蓝图
            </p>
          </div>
          <div>
            <img src="/media/月光银光纹材质蓝图.gif" alt="月光银光纹材质蓝图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.78rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              月光银色版本：偏冷调、强调清透和拖尾感
            </p>
          </div>
          <div>
            <img src="/media/凝夜紫光纹材质蓝图.gif" alt="凝夜紫光纹材质蓝图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.78rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              凝夜紫版本：更适合梦境、神秘、夜间氛围的界面语言
            </p>
          </div>
        </div>

        我在这一阶段重点验证的不是“某个颜色更好看”，而是**一套 UI 光纹材质系统能否支持多种情绪语义的迁移**：同样的节点框架，通过颜色、宽度、节奏与粒子层的调整，就可以适配不同 UI 语境，而不是每种效果都重做一遍。
    design:
      columns: '1'

  # ── ATMOSPHERE FX ─────────────────────────────────────────────
  - block: markdown
    content:
      title: 氛围层动效
      subtitle: Water Ripple · Flowing Fog · Volumetric Haze
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.25rem;">
          <div>
            <img src="/media/动态水波纹材质蓝图.png" alt="动态水波纹材质蓝图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              动态水波纹：为前景水面提供低频流动与空间倒影感，避免画面完全静止
            </p>
          </div>
          <div>
            <img src="/media/流动雾材质蓝图.png" alt="流动雾材质蓝图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              流动雾材质：通过缓慢的亮暗变化与遮罩漂移，营造画面深处的空气流动
            </p>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:1rem;">
          <div>
            <img src="/media/体积雾材质蓝图.png" alt="体积雾材质蓝图"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              体积雾层：提升前后景分离与空间纵深，使 Opening 画面更具沉浸感
            </p>
          </div>
          <div>
            <img src="/media/月光银拖尾粒子光纹材质.gif" alt="月光银拖尾粒子光纹材质"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              拖尾粒子版本：为高光边缘增加闪烁拖尾，使按钮动效从“可见”走向“有空气感”，提升玩家交互体验
            </p>
          </div>
        </div>
    design:
      columns: '1'

  # ── BREAKDOWN ─────────────────────────────────────────────────
  - block: markdown
    content:
      title: Breakdown
      subtitle: Goal → Method → Implementation → Result
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">01 · Goal</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              把静态插画式关卡界面转化为具有呼吸感、关注点引导和沉浸氛围的 Opening 动效界面。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">02 · Method</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              用 UMG 组织层级，用 Material Shader 驱动核心视觉反馈，用 Blueprint 管理显示时序和参数触发。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">03 · Implementation</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              我将标题、菜单 hover、背景微动、水波纹、雾层与尘光粒子拆成独立可调模块，再统一收束到同一套视觉节奏中。
            </p>
          </div>
          <div style="background:#0d0d1a; border-left:3px solid #a78bfa; border-radius:0 8px 8px 0; padding:1.25rem 1.5rem;">
            <div style="font-size:0.72rem; color:#a78bfa; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.5rem;">04 · Result</div>
            <p style="color:#cbd5e1; font-size:0.9rem; line-height:1.7; margin:0;">
              最终界面实现了“静态插画 + 动态演出”的平衡：既保留画面气质，也让玩家在第一时间感知到交互与氛围的存在。
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
​---
---
