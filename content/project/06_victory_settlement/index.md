---
title: "战至终章结算动效 · Victory Settlement Motion UI System"
date: 2026-05-21
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
            UE5 &nbsp;·&nbsp; UMG Motion &nbsp;·&nbsp; Blueprint Interaction &nbsp;·&nbsp; Material-driven UI FX &nbsp;·&nbsp; AE Motion Previs
          </p>
          <h1 style="font-size:2.6rem; font-weight:700; color:#f1f5f9; margin:0 0 0.75rem; line-height:1.2;">
            Victory Settlement<span style="color:#a78bfa;">·</span> Motion UI System
          </h1>
          <p style="font-size:1.05rem; color:#94a3b8; max-width:760px; margin:0 auto 2rem; line-height:1.8;">
            竞技游戏胜利结算实时 UI 动效系统&emsp;|&emsp;AE 动效预演 + UE5 UMG 实时落地 + 材质驱动特效 + 点击转场与滚轮结算交互
          </p>
          <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Unreal Engine 5</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">UMG</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Blueprint</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Material FX</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">Mask Reveal</span>
            <span style="padding:4px 14px; border:1px solid #3d3d5a; border-radius:20px; font-size:0.75rem; color:#c4b5fd;">After Effects</span>
          </div>
        </div>
    design:
      columns: '1'

  # ── OVERVIEW ──────────────────────────────────────────────────
  - block: markdown
    content:
      title: Overview
      text: |-
        本项目面向竞技游戏赛后结算场景，设计并实现了一套具有强烈**赛事感、潮流感与胜利打击反馈**的 **Victory Settlement Motion UI System**。项目并不是单纯制作一段离线胜利动画，而是将“胜利情绪爆发 → 高能转场 → 数据结算面板 → 玩家实时交互”组织成一套可以在 UE5 中运行的实时 UI 动效原型。

        在制作流程上，我首先使用 **After Effects** 完成动效预演，对 Victory 标题入场、两翼展开、故障闪切、横向辉光、点阵爆散、火焰侵蚀转场和随机遮罩节奏进行分层设计；随后将 AE 中的离线视觉目标拆解为 **UE5 UMG 结构、Blueprint 状态切换、参数化材质、遮罩 Reveal 与缓动曲线控制**，实现从 Victory 氛围页到数据结算面板的完整交互闭环。

        > A realtime Victory Settlement Motion UI prototype for a competitive game result screen. I translated AE-based motion previs into UE5 UMG, Blueprint interaction, parameterized material FX, mask-driven reveal, and tuned easing curves, creating an interactive UI flow from victory impact to scrollable settlement review.

        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:1.5rem; text-align:center;">
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">⚡</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">IMPACT MOTION</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">用闪白、横向辉光、故障切片与碎片爆发强化胜利瞬间的情绪峰值</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🎛️</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">AE TO UE5</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">将 AE 离线特效拆解为 UMG 层级、材质参数、遮罩进度和蓝图状态机</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🎮</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">REALTIME INTERACTION</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">支持点击触发页面转场，并通过鼠标滚轮控制结算面板滚动</div>
          </div>
        </div>
    design:
      columns: '1'

  # ── FINAL DEMO ────────────────────────────────────────────────
  - block: markdown
    content:
      title: Final UE5 Realtime Demo
      text: |-
        {{< media-gif
          src="/media/victory-final-demo.gif"
          caption="UE5 最终实时交互演示 —— Victory 情绪反馈、火焰侵蚀转场、数据结算面板出现与滚轮交互 · 约 0:17 / 513F"
          bilibili="https://www.bilibili.com/video/BV13ELm68Edb/?spm_id_from=333.788.top_right_bar_window_history.content.click&vd_source=948e8d8225e28bc4e2bd6bda1e82917c"
        >}}
    design:
      columns: '1'

  # ── MOTION BREAKDOWN ──────────────────────────────────────────
  - block: markdown
    content:
      title: Motion Rhythm Breakdown
      subtitle: Anticipation · Pre-burst · Impact · Hero Hold · Transition · Settlement
      text: |-
        <div style="max-width:980px; margin:0 auto 1.25rem;">
          <img src="/media/victory-keyframe-breakdown.png" alt="Victory Settlement Motion Keyframe Breakdown"
               style="width:100%; border-radius:10px; border:1px solid #2d2d4a;"/>
          <p style="font-size:0.86rem; color:#64748b; margin-top:0.75rem; text-align:center; line-height:1.7;">
            关键帧拆解：蓄力 / 暗场 → 爆发 Reveal → Victory Hero Hold → 火焰侵蚀转场 → 结算面板出现 → 滚轮复盘交互
          </p>
        </div>

        <div style="max-width:980px; margin:1.5rem auto 1.25rem;">
          <img src="/media/victory-preburst-dispersion.png" alt="Pre-burst dot sparkle dispersion detail"
               style="width:100%; border-radius:10px; border:1px solid #2d2d4a;"/>
          <p style="font-size:0.86rem; color:#64748b; margin-top:0.75rem; text-align:center; line-height:1.7;">
            爆炸铺垫帧：通过中心点状星芒、色散渐变、高饱和霓虹边缘和暗场留白，提前积累能量感，为后续 Victory Reveal 的爆发建立视觉预期。
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:0.75rem; margin-top:1.5rem; text-align:center;">
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1rem 0.6rem;">
            <div style="font-size:0.75rem; color:#a78bfa; font-weight:700; margin-bottom:0.35rem;">01 ANTICIPATION</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.5;">暗场能量预热，建立结算反馈即将出现的期待感</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1rem 0.6rem;">
            <div style="font-size:0.75rem; color:#a78bfa; font-weight:700; margin-bottom:0.35rem;">02 IMPACT</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.5;">闪白、横向辉光、两翼撑开，制造胜利瞬间爆发</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1rem 0.6rem;">
            <div style="font-size:0.75rem; color:#a78bfa; font-weight:700; margin-bottom:0.35rem;">03 HERO HOLD</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.5;">Victory 主标题停留，保证玩家完成结果确认</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1rem 0.6rem;">
            <div style="font-size:0.75rem; color:#a78bfa; font-weight:700; margin-bottom:0.35rem;">04 UI SWITCH</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.5;">遮罩燃烧与故障切片引导视线进入数据面板</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1rem 0.6rem;">
            <div style="font-size:0.75rem; color:#a78bfa; font-weight:700; margin-bottom:0.35rem;">05 SETTLEMENT</div>
            <div style="font-size:0.78rem; color:#94a3b8; line-height:1.5;">结算面板稳定出现，支持玩家查看战绩复盘信息</div>
          </div>
        </div>

        **设计判断：** 胜利结算页是玩家体验中的情绪峰值节点，因此动效节奏需要比普通菜单更快、更强、更有冲击力；但转场之后又必须让视觉能量自然降落到数据面板，避免“高燃画面”和“信息阅读”之间产生断裂。
    design:
      columns: '1'

  # ── AE PREVIS ─────────────────────────────────────────────────
  - block: markdown
    content:
      title: AE Motion Previs & FX Layering
      subtitle: Impact Timing · Glow / Gaussian Blur · Glitch Slices · Burning Dissolve
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1rem;">
          <div>
            <img src="/media/victory-ae-timeline.png" alt="AE Motion Previs Timeline"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              AE 动效预演与时间轴分层：拆分标题、背景翼片、横向辉光、碎片、电流、点阵与数据面板
            </p>
          </div>
          <div>
            <img src="/media/victory-burning-transition.gif" alt="Saber Burning Dissolve Transition"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              火焰侵蚀转场：使用梯度渐变与分形杂色生成不规则遮罩，使 Victory 页面由上至下燃烧退场
            </p>
          </div>
        </div>

        AE 阶段的重点不是停留在“做一条视频”，而是先建立可被引擎拆解的视觉蓝图：我通过 **Glow / Gaussian Blur** 制作标题穿透式横向高能辉光，用 **Saber** 强化从 Victory 页面到结算面板页面的火焰侵蚀转场，并结合 **Fractal Noise、随机三角遮罩、故障切片与点阵爆散** 验证画面冲击峰值、遮罩层级和节奏密度。

        ---

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:1.25rem;">
          <div>
            <img src="/media/victory-dot-burst.png" alt="CC Ball Action Dot Burst"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              CC Ball Action 点阵星芒：将爆发帧拆成像素化颗粒和能量残影，提升微观动效细节
            </p>
          </div>
          <div>
            <img src="/media/victory-glitch-detail.png" alt="Glitch Slice and Glow Detail"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              故障切片与横向辉光：用错位闪烁、切片遮挡和高亮扫过强化赛博朋克式数字不稳定感
            </p>
          </div>
        </div>
    design:
      columns: '1'

  # ── UE5 IMPLEMENTATION ────────────────────────────────────────
  - block: markdown
    content:
      title: UE5 Realtime Implementation
      subtitle: UMG Hierarchy · Blueprint State Control · Material-driven Reveal
      text: |-
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1rem;">
          <div>
            <img src="/media/victory-umg-hierarchy.png" alt="UE5 UMG Widget Hierarchy"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              UMG 层级与材质分层：Victory 氛围页、两翼层、粒子/光效层、火焰遮罩层、结算面板和滚动列表分层管理
            </p>
          </div>
          <div>
            <img src="/media/victory-blueprint-interaction.png" alt="UE5 Blueprint Interaction"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              Blueprint 交互：点击触发转场、页面状态切换、动画播放与鼠标滚轮控制结算面板滚动
            </p>
          </div>
        </div>

        UE5 阶段最核心的目标是把 AE 中的离线效果拆成**可参数化、可交互、可实时运行**的 UI 系统，而不是把视频直接贴进引擎。通过 UMG 管理页面结构，通过 Blueprint 控制状态切换与输入响应，通过材质参数驱动遮罩进度、辉光强度、噪声速度、透明度变化和光纹流动，使动效既能保留 AE 预演中的视觉冲击，也能满足游戏 UI 的运行和交互需求。

        ---

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:1.25rem;">
          <div>
            <img src="/media/victory-material-breakdown1.png" alt="Victory title internal flowing light material"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              Victory 标题内部材质：通过 UV Panning、遮罩叠加与局部辉光控制标题内部绿色光纹流动，增强胜利主视觉的能量感和层次变化
            </p>
          </div>
          <div>
            <img src="/media/victory-material-breakdown2.png" alt="Grunge-painted wing material breakup"
                 style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
            <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
              两翼粉刷颗粒材质：使用 Noise、Mask Breakup 与边缘透明度控制还原涂鸦式粉刷颗粒、破损边缘和高饱和电竞翼片质感
            </p>
          </div>
        </div>

        <div style="max-width:980px; margin:1.5rem auto 0;">
          <img src="/media/victory-curve-tuning.png" alt="UE5 Curve Tuning for Impact Motion"
               style="width:100%; border-radius:8px; border:1px solid #2d2d4a;"/>
          <p style="font-size:0.8rem; color:#64748b; margin-top:0.5rem; text-align:center;">
            缓动曲线调节：控制展开、撞击、闪白、停顿、回弹与面板入场，让动效具备更强游戏手感
          </p>
        </div>
    design:
      columns: '1'

  # ── TECHNICAL CHALLENGES ──────────────────────────────────────
  - block: markdown
    content:
      title: Technical Challenges & Solutions
      subtitle: Offline FX to Runtime UI · Mask Reveal · Interaction Feedback
      text: |-
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:0.5rem;">
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem;">
            <div style="font-size:0.78rem; color:#a78bfa; font-weight:700; margin-bottom:0.55rem;">01 OFFLINE FX REALTIMEIZATION</div>
            <p style="font-size:0.86rem; color:#94a3b8; line-height:1.75; margin:0;">
              AE 中的辉光、碎片和随机遮罩不能直接作为游戏 UI 运行。我将其拆成材质参数、遮罩进度、UMG 层级和 Blueprint 触发逻辑，保证视觉效果能在 UE5 中实时响应。
            </p>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem;">
            <div style="font-size:0.78rem; color:#a78bfa; font-weight:700; margin-bottom:0.55rem;">02 IMPACT VS READABILITY</div>
            <p style="font-size:0.86rem; color:#94a3b8; line-height:1.75; margin:0;">
              Victory 页面需要足够高燃，但结算面板必须可读。我用Saber光效插件制作火焰侵蚀转场完成情绪降落，让视觉焦点从大标题自然过渡到数据复盘区域。
            </p>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem;">
            <div style="font-size:0.78rem; color:#a78bfa; font-weight:700; margin-bottom:0.55rem;">03 PARAMETERIZED TIMING</div>
            <p style="font-size:0.86rem; color:#94a3b8; line-height:1.75; margin:0;">
              为避免动效只停留在“看起来酷”，我用缓动曲线和材质参数控制展开、撞击、闪白和回弹节奏，使 UI 更接近真实游戏中的反馈手感。
            </p>
          </div>
        </div>
    design:
      columns: '1'

  # ── FINAL TAKEAWAY ────────────────────────────────────────────
  - block: markdown
    content:
      title: Final Takeaway
      subtitle: Motion Design · Technical Art · UE UI Implementation
      text: |-
        这个项目最能体现的是我从 **Motion Design** 到 **Technical Art** 再到 **UE UI Implementation** 的完整能力链路：我不仅能设计胜利结算界面的视觉冲击和节奏曲线，也能把 AE 中的离线特效拆解成 UE5 中可实时运行、可交互、可调参、可复用的 UI 动效系统。

        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; margin-top:1.5rem; text-align:center;">
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🎞️</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">MOTION DESIGN</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">控制胜利反馈、转场节奏、冲击峰值和玩家情绪确认</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🧩</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">TECHNICAL ART</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">用材质、遮罩、噪声、辉光和参数控制还原实时 UI 特效</div>
          </div>
          <div style="background:#0d0d1a; border:1px solid #2d2d4a; border-radius:8px; padding:1.25rem 0.75rem;">
            <div style="font-size:1.5rem; margin-bottom:0.4rem;">🕹️</div>
            <div style="font-size:0.8rem; color:#a78bfa; font-weight:600; margin-bottom:0.3rem;">UE UI IMPLEMENTATION</div>
            <div style="font-size:0.82rem; color:#94a3b8; line-height:1.5;">完成 UMG 页面结构、蓝图触发、状态切换和滚动交互闭环</div>
          </div>
        </div>
    design:
      columns: '1'
---
