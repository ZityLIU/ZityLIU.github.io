---
title: ""
date: 2024-09-01
type: landing

design:
  spacing: "5rem"

sections:

  # ── HERO ──────────────────────────────────────────────────────
  - block: resume-biography-3
    content:
      username: admin
      text: ""
      button:
        text: "📮 Contact Me"
        url: "/#contact"
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: stacked-peaks.svg
          filters:
            brightness: 0.6
          size: cover
          position: center
          parallax: false

  # ── TAGLINE / HERO TEXT ────────────────────────────────────────
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |-
        <div style="text-align:center; padding: 1rem 0 0.5rem;">
          <p style="font-size:1.05rem; color:#a78bfa; letter-spacing:0.15em; text-transform:uppercase; margin-bottom:0.75rem;">
            UE5 · UMG Motion · Blueprint · Shader · Data-Driven Narrative
          </p>
          <p style="font-size:1.0rem; color:#cbd5e1; max-width:680px; margin:0 auto; line-height:1.8;">
            把插画式叙事做成可交互、可复用、可迭代的 UE 体验。<br/>
            <em>Turning illustrated storytelling into interactive, reusable UE experiences.</em>
          </p>
        </div>
    design:
      columns: '1'

  # ── PROJECTS ──────────────────────────────────────────────────
  - block: markdown
    id: projects
    content:
      title: 'Projects'
      subtitle: 'Selected Works'
      text: |-
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:2rem; margin-top:1.5rem;">

          <!-- Card 1: 寿塔 -->
          <a href="/project/01_shota/" style="text-decoration:none; color:inherit;">
            <div style="background:#0f0f1a; border:1px solid #2d2d4a; border-radius:12px; overflow:hidden; transition:transform 0.2s,box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 40px rgba(167,139,250,0.18)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
              <img src="/media/umg-widget.gif" alt="寿塔 Demo" style="width:100%; height:200px; object-fit:cover;"/>
              <div style="padding:1.25rem 1.5rem 1.5rem;">
                <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
                  <span style="font-size:0.7rem; color:#a78bfa; letter-spacing:0.1em; text-transform:uppercase; border:1px solid #a78bfa; padding:2px 8px; border-radius:20px;">UE5 · UMG · Shader</span>
                </div>
                <h3 style="margin:0 0 0.5rem; font-size:1.2rem; color:#f1f5f9;">寿塔 · The Longevity Pagoda</h3>
                <p style="margin:0; font-size:0.88rem; color:#94a3b8; line-height:1.6;">UE5 插画式视觉小说 — 数据驱动分支叙事 + UMG 动效 + 水墨材质转场</p>
              </div>
            </div>
          </a>

          <!-- Card 2: 古罗马的沙漏 -->
          <a href="/project/02_hourglass/" style="text-decoration:none; color:inherit;">
            <div style="background:#0f0f1a; border:1px solid #2d2d4a; border-radius:12px; overflow:hidden; transition:transform 0.2s,box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 40px rgba(167,139,250,0.18)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
              <video autoplay muted loop playsinline style="width:100%; height:200px; object-fit:cover;">
                <source src="/media/hourglass-bts.mp4" type="video/mp4"/>
              </video>
              <div style="padding:1.25rem 1.5rem 1.5rem;">
                <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
                  <span style="font-size:0.7rem; color:#a78bfa; letter-spacing:0.1em; text-transform:uppercase; border:1px solid #a78bfa; padding:2px 8px; border-radius:20px;">XR · Virtual Production · Sequencer</span>
                </div>
                <h3 style="margin:0 0 0.5rem; font-size:1.2rem; color:#f1f5f9;">古罗马的沙漏 · The Hourglass of Ancient Rome</h3>
                <p style="margin:0; font-size:0.88rem; color:#94a3b8; line-height:1.6;">XR 虚拟制片实践 — 虚拟场景搭建 + LED 拍摄流程 + 镜头调度</p>
              </div>
            </div>
          </a>

          <!-- Card 3: Twine -->
          <a href="/project/03_twine/" style="text-decoration:none; color:inherit;">
            <div style="background:#0f0f1a; border:1px solid #2d2d4a; border-radius:12px; overflow:hidden; transition:transform 0.2s,box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 40px rgba(167,139,250,0.18)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
              <img src="/media/twine-overview.png" alt="Twine 分支叙事" style="width:100%; height:200px; object-fit:cover;"/>
              <div style="padding:1.25rem 1.5rem 1.5rem;">
                <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
                  <span style="font-size:0.7rem; color:#a78bfa; letter-spacing:0.1em; text-transform:uppercase; border:1px solid #a78bfa; padding:2px 8px; border-radius:20px;">Twine · Narrative Design · Data-Driven</span>
                </div>
                <h3 style="margin:0 0 0.5rem; font-size:1.2rem; color:#f1f5f9;">Twine 互动叙事脚本设计</h3>
                <p style="margin:0; font-size:0.88rem; color:#94a3b8; line-height:1.6;">分支结构与变量系统 — 从脚本原型到可落地的引擎数据</p>
              </div>
            </div>
          </a>

        </div>
    design:
      columns: '1'

  # ── ABOUT ─────────────────────────────────────────────────────
  - block: resume-skills
    id: about
    content:
      title: Skills & Tools
      username: admin
    design:
      show_skill_percentage: false

  - block: resume-experience
    content:
      title: Experience
      username: admin
    design:
      date_format: 'Sep 2006'
      is_education_first: true

  - block: resume-languages
    content:
      title: Languages
      username: admin

  # ── CONTACT ───────────────────────────────────────────────────
  - block: markdown
    id: contact
    content:
      title: 'Contact'
      subtitle: ''
      text: |-
        <div style="max-width:560px; margin:0 auto; text-align:center; padding:1rem 0 2rem;">
          <p style="color:#94a3b8; font-size:0.95rem; line-height:1.8; margin-bottom:1.5rem;">
            欢迎联系我探讨 UE 技术美术、UI 动效设计与互动叙事相关的实习与合作机会。
          </p>
          <a href="mailto:zliu256@connect.hkust-gz.edu.cn"
             style="display:inline-block; padding:0.65rem 1.8rem; background:transparent; border:1px solid #a78bfa; color:#ddd6fe; border-radius:6px; font-size:0.9rem; text-decoration:none; letter-spacing:0.05em; transition:background 0.2s;">
            📮 zliu256@connect.hkust-gz.edu.cn
          </a>
        </div>
    design:
      columns: '1'
