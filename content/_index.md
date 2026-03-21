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
  # 目前支持最多 4 个项目卡片（N = 1/2/3/4）
  # ════════════════════════════════════════════════════════════
  - block: markdown
    id: projects
    content:
      title: "Projects"
      subtitle: "Selected Works"
      text: |-
        {{< project-grid
          link1="/project/01_shota/"
          gif1="/media/umg-widget.gif"
          tags1="UE5 · UMG · Shader"
          title1="寿塔 · The Longevity Pagoda"
          desc1="UE5 插画式视觉小说 — 数据驱动分支叙事 + UMG 动效 + 水墨材质转场"

          link2="/project/02_hourglass/"
          gif2="/media/hourglass-bts.gif"
          tags2="XR · Virtual Production · Sequencer"
          title2="古罗马的沙漏 · The Hourglass of Ancient Rome"
          desc2="XR 虚拟制片实践 — 虚拟场景搭建 + LED 拍摄流程 + 镜头调度"

          link3="/project/03_twine/"
          gif3="/media/twine-overview.png"
          tags3="Twine · Narrative Design · Data-Driven"
          title3="Twine 互动叙事脚本设计"
          desc3="分支结构与变量系统 — 从脚本原型到可落地的引擎数据"
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
            欢迎联系我探讨 UE 技术美术、UI 动效设计与互动叙事相关的实习与合作机会。
          </p>
          <a href="mailto:zliu256@connect.hkust-gz.edu.cn"
             style="display:inline-block;padding:0.65rem 1.8rem;background:transparent;border:1px solid #a78bfa;color:#ddd6fe;border-radius:6px;font-size:0.9rem;text-decoration:none;letter-spacing:0.05em;">
            📮 zliu256@connect.hkust-gz.edu.cn
          </a>
        </div>
    design:
      columns: "1"
