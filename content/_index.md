---
title: ""
date: 2024-09-01
type: landing
design:
  spacing: "5rem"
sections:

  # ────────────────────────────────────────────────────────────
  # HERO 区块  ← 不需要修改（个人信息在 content/authors/admin/_index.md 里改）
  # ────────────────────────────────────────────────────────────
  - block: resume-biography-3
    content:
      username: admin
      text: |-
        <style>
          /* Reduce homepage avatar size without changing the theme layout */
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

  # ────────────────────────────────────────────────────────────
  # TAGLINE  ← 修改这里：技能关键词一行 + 一句话定位
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
  # PROJECTS  ← 重点修改区域
  #
  # 每个项目填写以下字段（复制一组 link/gif/tags/title/desc 即可新增项目）：
  #
  #   linkN  = 项目详情页路径，如 "/project/04_newproject/"
  #   gifN   = 卡片封面图/GIF，上传到 static/media/ 后填文件名
  #            例："/media/my-new-gif.gif"
  #   tagsN  = 技术标签，用 · 分隔
  #   titleN = 项目标题（中英均可）
  #   descN  = 一句话描述
  #
  # 目前支持多个项目卡片，继续填写 link5/gif5/tags5/title5/desc5、link6/... 即可
  # ════════════════════════════════════════════════════════════
  - block: markdown
    id: projects
    content:
      title: "Projects"
      subtitle: "Selected Works"
      text: |-
        {{< project-grid
          link1="/project/06_victory_settlement/"
          gif1="/media/victory-final-demo.gif"
          tags1="UE5 · UMG Motion · Blueprint · Material FX"
          title1="战至终章结算动效 · Victory Settlement Motion UI System"
          desc1="竞技游戏胜利结算实时 UI 动效系统 — AE 动效预演 + UE5 UMG 落地 + 材质驱动特效 + 点击转场与滚轮结算交互"

          link2="/project/05_opening/"
          gif2="/media/动态呼吸.gif"
          tags2="UE5 · UI Motion · Blueprint · Shader"
          title2="惊动花信 · Lavender Reverie"
          desc2="UE5 独立开发关卡开场界面动效设计 — 动态呼吸、光纹材质、流动雾、水波纹与粒子氛围的统一演出系统"

          link3="/project/01_shota/"
          gif3="/media/umg-widget.gif"
          tags3="UE5 · UMG · Shader"
          title3="寿塔 · The Longevity Pagoda"
          desc3="UE5 叙事交互视觉小说独立游戏 — 数据驱动分支叙事 + UMG 动效 + 水墨材质转场"

          link4="/project/02_hourglass/"
          gif4="/media/pianduan2.gif"
          tags4="XR · Virtual Production · Sequencer"
          title4="古罗马的沙漏 · The Hourglass of Ancient Rome"
          desc4="XR 虚拟制片实践 — 虚拟场景搭建 + LED 拍摄流程 + 镜头调度"

          link5="/project/04_invest_video/"
          gif5="/media/aigc-invest-demo.gif"
          tags5="AIGC · Motion Design · IP Workflow"
          title5="AIGC驱动的投资教学科普短片创作"
          desc5="2h快速交付的AIGC叙事短片实践 — 专业知识降维 +真人 × AI 对话叙事+ AI角色IP设计 + 可复用微动效素材流程"

        >}}
    design:
      columns: "1"

  # ────────────────────────────────────────────────────────────
  # SKILLS & EXPERIENCE  ← 在 content/authors/admin/_index.md 里修改
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
      is_education_first: true

  - block: resume-languages
    content:
      title: "Languages"
      username: admin

  # ────────────────────────────────────────────────────────────
  # CONTACT  ← 修改这里：联系描述文字和邮箱
  # ────────────────────────────────────────────────────────────
  - block: markdown
    id: contact
    content:
      title: "Contact"
      text: |-
        <div style="max-width:560px;margin:0 auto;text-align:center;padding:1rem 0 2rem;">
          <p style="color:#94a3b8;font-size:0.95rem;line-height:1.8;margin-bottom:1.5rem;">
            欢迎联系我探讨 UE 引擎中 UI 动效设计、UI 蓝图设计与互动叙事相关的实习与合作机会。
          </p>
          <a href="mailto:zliu256@connect.hkust-gz.edu.cn"
             style="display:inline-block;padding:0.65rem 1.8rem;background:transparent;border:1px solid #a78bfa;color:#ddd6fe;border-radius:6px;font-size:0.9rem;text-decoration:none;letter-spacing:0.05em;">
            📮 zliu256@connect.hkust-gz.edu.cn
          </a>
        </div>
    design:
      columns: "1"
---
