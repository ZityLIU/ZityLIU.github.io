---
title: ""
date: 2024-09-01
type: landing
design:
  spacing: "5rem"
sections:

  # ────────────────────────────────────────────────────────────
  # HERO 区块：个人信息和个人概述来自 content/authors/admin/_index.md
  # ────────────────────────────────────────────────────────────
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

  # ────────────────────────────────────────────────────────────
  # STYLE PATCH：缩小头像 + 手机端居中
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |-
        <style>
          /* Reduce homepage avatar size and keep it centered */
          #profile img,
          .profile img,
          .avatar,
          .avatar-circle,
          img.avatar,
          img[alt="Zhiting Liu"],
          img[src*="avatar"] {
            width: clamp(180px, 18vw, 280px) !important;
            height: clamp(180px, 18vw, 280px) !important;
            max-width: 280px !important;
            max-height: 280px !important;
            object-fit: cover !important;
            display: block !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          @media (max-width: 900px) {
            #profile img,
            .profile img,
            .avatar,
            .avatar-circle,
            img.avatar,
            img[alt="Zhiting Liu"],
            img[src*="avatar"] {
              width: 220px !important;
              height: 220px !important;
              max-width: 220px !important;
              max-height: 220px !important;
            }
          }

          @media (max-width: 600px) {
            #profile,
            .profile,
            .portrait-title,
            .resume-biography,
            .blox-resume-biography,
            .blox-resume-biography-3 {
              width: 100% !important;
              max-width: 100% !important;
              margin-left: auto !important;
              margin-right: auto !important;
              text-align: center !important;
              align-items: center !important;
              justify-content: center !important;
            }

            #profile img,
            .profile img,
            .avatar,
            .avatar-circle,
            img.avatar,
            img[alt="Zhiting Liu"],
            img[src*="avatar"] {
              width: 180px !important;
              height: 180px !important;
              max-width: 180px !important;
              max-height: 180px !important;
              margin-left: auto !important;
              margin-right: auto !important;
              display: block !important;
            }

            #profile .portrait-title,
            .portrait-title,
            #profile h1,
            #profile h2,
            #profile h3,
            #profile .network-icon,
            .network-icon {
              text-align: center !important;
              justify-content: center !important;
              margin-left: auto !important;
              margin-right: auto !important;
            }

            #profile ul,
            .network-icon {
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              padding-left: 0 !important;
            }
          }

          @media (max-width: 420px) {
            #profile img,
            .profile img,
            .avatar,
            .avatar-circle,
            img.avatar,
            img[alt="Zhiting Liu"],
            img[src*="avatar"] {
              width: 165px !important;
              height: 165px !important;
              max-width: 165px !important;
              max-height: 165px !important;
            }
          }
        </style>
    design:
      columns: "1"

  # ────────────────────────────────────────────────────────────
  # TAGLINE
  # ────────────────────────────────────────────────────────────
  - block: markdown
    content:
      title: ""
      text: |-
        <div style="text-align:center;padding:1rem 0 0.5rem;">
          <p style="font-size:1.05rem;color:#a78bfa;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:0.75rem;">
            UE5 · UMG Motion · Blueprint · Shader · Data-Driven Narrative
          </p>
          <p style="font-size:1.0rem;color:#cbd5e1;max-width:680px;margin:0 auto;line-height:1.8;">
            把插画式叙事做成可交互、可复用、可迭代的 UE 体验。<br/>
            <em>Turning illustrated storytelling into interactive, reusable UE experiences.</em>
          </p>
        </div>
    design:
      columns: "1"

  # ════════════════════════════════════════════════════════════
  # PROJECTS
  # ════════════════════════════════════════════════════════════
  - block: markdown
    id: projects
    content:
      title: "Projects"
      subtitle: "Selected Works"
      text: |-
        {{< project-grid
          link1="/project/08_gun_identification/"
          gif1="/media/gun-cover.mp4"
          tags1="After Effects · Fractal Noise · Track Matte · Glitch"
          title1="枪械鉴定双档位动效 · Weapon Identification Reveal System"
          desc1="战术竞技手游开箱鉴定动效设计 — 搜索过场承接引擎回流 + 爆点砸入 + 像素扰动显形 + 普通/品质双档位扫描鉴定的情绪分层"

          link2="/project/07_matching_page/"
          gif2="/media/matchingpage_page1.mp4"
          tags2="After Effects · Motion Design · Saber · Track Matte"
          title2="金铲铲风格过场动效 · Matchmaking UI Motion Design"
          desc2="金铲铲 / 云顶之弈风格匹配页动效设计 — 从主界面到匹配页的完整动效链路 + 点击蓄力转场 + 晶球翻转换景 + 进度环状态反馈"

          link3="/project/06_victory_settlement/"
          gif3="/media/victory-final-demo.mp4"
          tags3="UE5 · UMG Motion · Blueprint · Material FX"
          title3="战至终章结算动效 · Victory Settlement Motion UI System"
          desc3="竞技游戏胜利结算实时 UI 动效系统 — AE 动效预演 + UE5 UMG 落地 + 材质驱动特效 + 点击转场与滚轮结算交互"

          link4="/project/05_opening/"
          gif4="/media/动态呼吸.mp4"
          tags4="UE5 · UI Motion · Blueprint · Shader"
          title4="惊动花信 · Lavender Reverie"
          desc4="UE5 独立开发关卡开场界面动效设计 — 动态呼吸、光纹材质、流动雾、水波纹与粒子氛围的统一演出系统"

          link5="/project/01_shota/"
          gif5="/media/umg-widget.mp4"
          tags5="UE5 · UMG · Shader"
          title5="寿塔 · The Longevity Pagoda"
          desc5="UE5 叙事交互视觉小说独立游戏 — 数据驱动分支叙事 + UMG 动效 + 水墨材质转场"

          link6="/project/02_hourglass/"
          gif6="/media/pianduan2.mp4"
          tags6="XR · Virtual Production · Sequencer"
          title6="古罗马的沙漏 · The Hourglass of Ancient Rome"
          desc6="XR 虚拟制片实践 — 虚拟场景搭建 + LED 拍摄流程 + 镜头调度"

          link7="/project/04_invest_video/"
          gif7="/media/aigc-invest-demo.mp4"
          tags7="AIGC · Motion Design · IP Workflow"
          title7="AIGC驱动的投资教学科普短片创作"
          desc7="2h快速交付的AIGC叙事短片实践 — 专业知识降维 +真人 × AI 对话叙事+ AI角色IP设计 + 可复用微动效素材流程"

        >}}
    design:
      columns: "1"

  # ────────────────────────────────────────────────────────────
  # SKILLS & EXPERIENCE
  # ────────────────────────────────────────────────────────────
  - block: resume-skills
    id: about
    content:
      title: "Skills & Tools"
      username: admin
    design:
      show_skill_percentage: false

  - block: resume-experience
    content:
      title: "Experience"
      username: admin
    design:
      date_format: "Jan 2006"
      is_education_first: false

  - block: resume-languages
    content:
      title: "Languages"
      username: admin

  # ────────────────────────────────────────────────────────────
  # CONTACT
  # ────────────────────────────────────────────────────────────
  - block: markdown
    id: contact
    content:
      title: "Contact"
      text: |-
        <div style="max-width:560px;margin:0 auto;text-align:center;padding:1rem 0 2rem;">
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.8;margin-bottom:1.5rem;">
            目前面向 2027 届秋招 / 春招，持续关注游戏动效设计、游戏特效设计与 Technical Art 相关机会，也欢迎就 UE 引擎中的 UI 动效与互动叙事交流合作。
          </p>
          <a href="mailto:zityliu@gmail.com" class="link-accent"
             style="display:inline-block;padding:0.65rem 1.8rem;background:transparent;border:1px solid #a78bfa;color:#ddd6fe;border-radius:6px;font-size:0.9rem;text-decoration:none;letter-spacing:0.05em;">
            📮 zityliu@gmail.com
          </a>
        </div>
    design:
      columns: "1"
---
