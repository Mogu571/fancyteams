export interface Job {
  id: string;
  toolId: string;
  toolName: string;
  toolLogo: string;
  title: string;
  dept: string;
  type: string;
  salary: string;
  loc: string;
  tags: string[];
  desc: string;
}

export interface Product {
  name: string;
  image: string;
  desc: string;
}

export interface Employee {
  name: string;
  avatar: string;
  tag: string;
}

export interface Tool {
  id: string;
  name: string;
  desc: string;
  long: string;
  logo: string;
  site: string;
  price: string;
  year: string;
  loc: string;
  tags: string[];
  product: Product;
  employees: Employee[];
}

export const tools: Tool[] = [
  {
    id: "notion", name: "Notion", desc: "集笔记、文档、项目管理、数据库于一体的全能工作空间。以其灵活的Block编辑器著称。",
    long: "We've heard Notion described many ways. It can be as simple as a blank piece of paper, making writing feel light and delightful. It can be as complex as a relational database. Notion is the all-in-one workspace for modern teams — combining docs, wikis, and project management in one place.",
    logo: "https://unavatar.io/notion.so", site: "notion.so", price: "免费 / $10起", year: "2016", loc: "旧金山",
    tags: ["Block编辑器", "数据库", "团队协作", "API集成"],
    product: {
      name: "Notion AI",
      image: "https://picsum.photos/seed/notion-product/800/450",
      desc: "Notion AI 是深度嵌入工作空间的写作与分析助手。它能一键总结会议记录、将草稿润色为专业文案、从数据库中自动提取洞察，并以自然语言回答关于你的工作区内容的一切问题。不是一个独立的 AI 工具，而是让你现有工作流瞬间提速十倍的超级助力。",
    },
    employees: [
      { name: "Emma Chen", avatar: "https://picsum.photos/seed/emp-n1/96/96", tag: "深夜写代码的产品人" },
      { name: "James Park", avatar: "https://picsum.photos/seed/emp-n2/96/96", tag: "把复杂系统化繁为简" },
      { name: "Sofia Rossi", avatar: "https://picsum.photos/seed/emp-n3/96/96", tag: "让增长成为产品本身" },
      { name: "Liam Zhou", avatar: "https://picsum.photos/seed/emp-n4/96/96", tag: "Figma 像素完美主义者" },
    ],
  },
  {
    id: "obsidian", name: "Obsidian", desc: "基于本地Markdown文件的知识管理工具，以双向链接和知识图谱为核心，数据完全由用户掌控。",
    long: "A private and flexible writing app that adapts to the way you think. No account required, your notes stay on your device. Obsidian is built on plain text Markdown files, giving you full ownership of your data forever. With the graph view and bidirectional linking, your ideas become a living network of thought.",
    logo: "https://unavatar.io/obsidian.md", site: "obsidian.md", price: "个人免费", year: "2020", loc: "多伦多",
    tags: ["双向链接", "知识图谱", "本地存储", "插件生态"],
    product: {
      name: "Obsidian Canvas",
      image: "https://picsum.photos/seed/obsidian-product/800/450",
      desc: "Canvas 是 Obsidian 内置的无限白板功能。你可以将笔记、图片、视频和网页拖拽到画布上自由排布，通过箭头建立可视化连接，打造属于自己的思维地图。它不是独立应用——你的所有 Vault 内容都可以直接拖入，与知识图谱无缝联动，是结构化思考的终极工具。",
    },
    employees: [
      { name: "Shida Li", avatar: "https://picsum.photos/seed/emp-o1/96/96", tag: "Local-first 信仰者" },
      { name: "Erica Xu", avatar: "https://picsum.photos/seed/emp-o2/96/96", tag: "插件生态建设者" },
      { name: "Marcus Webb", avatar: "https://picsum.photos/seed/emp-o3/96/96", tag: "每天写2000字的工程师" },
      { name: "Yuki Tanaka", avatar: "https://picsum.photos/seed/emp-o4/96/96", tag: "隐私优先设计哲学实践者" },
    ],
  },
  {
    id: "linear", name: "Linear", desc: "为现代软件团队打造的流线型项目管理工具，以极致的速度和键盘优先体验著称。",
    long: "The next era of product development is built on context and agency. Linear is built for the speed of thought — every action feels instant, every workflow feels natural. We believe that great software is built by teams who care deeply about craft, and tools should get out of your way and let you do your best work.",
    logo: "https://unavatar.io/linear.app", site: "linear.app", price: "免费 / $8起", year: "2019", loc: "旧金山",
    tags: ["Issue追踪", "项目管理", "快捷键", "自动化"],
    product: {
      name: "Linear Cycles",
      image: "https://picsum.photos/seed/linear-product/800/450",
      desc: "Cycles 是 Linear 内置的冲刺规划模块，让团队以两周为节奏高效推进产品迭代。它自动将未完成的 Issue 滚入下一个 Cycle，用燃尽图实时追踪进度，并在 Cycle 结束时生成简洁的回顾报告。结合 Linear 的极速交互与全键盘操作，Cycles 让敏捷开发不再是一种负担，而是一种享受。",
    },
    employees: [
      { name: "Karri Saarinen", avatar: "https://picsum.photos/seed/emp-l1/96/96", tag: "相信工具决定思维方式" },
      { name: "Tuomas Artman", avatar: "https://picsum.photos/seed/emp-l2/96/96", tag: "对延迟毫秒级敏感的工程师" },
      { name: "Nan Yu", avatar: "https://picsum.photos/seed/emp-l3/96/96", tag: "设计即产品" },
      { name: "Tom Moor", avatar: "https://picsum.photos/seed/emp-l4/96/96", tag: "键盘快捷键收藏家" },
    ],
  },
  {
    id: "coda", name: "Coda", desc: "将文档、电子表格和应用融合在一起的新型文档工具。其独特的Pack系统可连接数百种外部服务。",
    long: "When docs meet apps. Coda begins where documents and spreadsheets end — a new canvas for teams to think, plan, and operate together. With Coda's formula engine and Pack integrations, any team can build the custom tools they need without writing a single line of code.",
    logo: "https://unavatar.io/coda.io", site: "coda.io", price: "免费 / $10起", year: "2014", loc: "旧金山",
    tags: ["公式引擎", "Pack集成", "自动化", "模板"],
    product: {
      name: "Coda Packs",
      image: "https://picsum.photos/seed/coda-product/800/450",
      desc: "Packs 是 Coda 的集成应用市场，拥有数百个连接器，可将 Slack、Jira、Salesforce、GitHub 等工具的数据直接拉入文档，并双向实时同步。团队可以在一个 Coda 文档里完成数据聚合、自动化触发和跨工具协作，彻底消灭在多个 Tab 之间反复切换的低效工作模式。",
    },
    employees: [
      { name: "Shishir Mehrotra", avatar: "https://picsum.photos/seed/emp-c1/96/96", tag: "前 YouTube 产品副总裁" },
      { name: "Alex DeNeui", avatar: "https://picsum.photos/seed/emp-c2/96/96", tag: "把电子表格变成应用" },
      { name: "Rachel Smith", avatar: "https://picsum.photos/seed/emp-c3/96/96", tag: "无代码世界的布道者" },
      { name: "Kevin Chang", avatar: "https://picsum.photos/seed/emp-c4/96/96", tag: "用 Coda 管理整个人生" },
    ],
  },
  {
    id: "craft", name: "Craft", desc: "专为Apple生态设计的精美文档工具，Apple Design Award获奖应用。卓越排版与原生体验。",
    long: "A beautiful native editing experience. Documents that look as good as they feel. Craft is built from the ground up for Apple's ecosystem — leveraging every platform capability to deliver an editing experience that feels magical. Winner of the Apple Design Award, Craft redefines what a document app can be.",
    logo: "https://unavatar.io/craft.do", site: "craft.do", price: "免费 / $5起", year: "2019", loc: "布达佩斯",
    tags: ["原生体验", "精美排版", "AI助手", "分享页面"],
    product: {
      name: "Craft Docs 2.0",
      image: "https://picsum.photos/seed/craft-product/800/450",
      desc: "Craft Docs 2.0 是对文档体验的全面重构：引入了全新的「Living Documents」概念，文档可以像网页一样嵌入动态内容、实时数据和交互模块。全新的排版引擎支持更细腻的字体渲染，配合 Apple Silicon 的硬件加速，无论是滚动、缩放还是导出 PDF，都丝滑得像黄油一样。",
    },
    employees: [
      { name: "Balint Orosz", avatar: "https://picsum.photos/seed/emp-cr1/96/96", tag: "Apple Design Award 得主" },
      { name: "Anna Varga", avatar: "https://picsum.photos/seed/emp-cr2/96/96", tag: "SwiftUI 早期采用者" },
      { name: "David Molnar", avatar: "https://picsum.photos/seed/emp-cr3/96/96", tag: "排版细节控" },
      { name: "Petra Kiss", avatar: "https://picsum.photos/seed/emp-cr4/96/96", tag: "相信美感即产品力" },
    ],
  },
  {
    id: "logseq", name: "Logseq", desc: "开源的隐私优先知识管理平台，结合大纲编辑和双向链接。GitHub超30k Star。",
    long: "Privacy-first, open-source knowledge management. Your data belongs to you. Logseq is a platform for knowledge management and collaboration with a strong focus on privacy and longevity. All your data is stored in plain text Markdown and Org-mode files that you fully own and control.",
    logo: "https://unavatar.io/logseq.com", site: "logseq.com", price: "免费开源", year: "2020", loc: "开源社区",
    tags: ["开源", "双向链接", "本地优先", "白板"],
    product: {
      name: "Logseq DB Version",
      image: "https://picsum.photos/seed/logseq-product/800/450",
      desc: "DB Version 是 Logseq 从纯文本架构向数据库架构的历史性迁移。新版本以结构化数据库为底层存储，带来了前所未有的查询速度与实体关系建模能力。用户可以定义自定义属性、构建复杂的跨页面关联查询，同时保留了 Logseq 一贯的块引用与双向链接体验。这是 Logseq 迈向专业知识操作系统的关键一步。",
    },
    employees: [
      { name: "Tienson Qin", avatar: "https://picsum.photos/seed/emp-lg1/96/96", tag: "Clojure 和咖啡等量齐观" },
      { name: "Charlie Denton", avatar: "https://picsum.photos/seed/emp-lg2/96/96", tag: "开源社区的守门人" },
      { name: "Zhiyuan Han", avatar: "https://picsum.photos/seed/emp-lg3/96/96", tag: "数据库架构重构者" },
      { name: "Lihong Li", avatar: "https://picsum.photos/seed/emp-lg4/96/96", tag: "每天用 Logseq 记录一切" },
    ],
  },
  {
    id: "roam", name: "Roam Research", desc: "以网状思维为核心的笔记工具，首创了双向链接笔记理念。适合研究者和深度思考者。",
    long: "A note-taking tool for networked thought. As easy to use as a document, as powerful as a graph database. Roam Research pioneered the concept of bidirectional linking in note-taking, inspiring an entire generation of tools. It remains the weapon of choice for researchers, writers, and deep thinkers who refuse to let their ideas stay siloed.",
    logo: "https://picsum.photos/seed/roam/96/96", site: "roamresearch.com", price: "$15/月", year: "2017", loc: "旧金山",
    tags: ["双向链接", "大纲编辑", "每日笔记", "查询语言"],
    product: {
      name: "Roam Graph API",
      image: "https://picsum.photos/seed/roam-product/800/450",
      desc: "Roam Graph API 开放了对整个知识图谱的可编程访问。开发者可以用 ClojureScript 或 JavaScript 编写自定义插件，实时读写图谱中的任意节点与关系，构建个性化的自动化工作流。从自动整理每日笔记，到构建基于语义相似度的推荐系统，Graph API 让 Roam 成为了可无限扩展的第二大脑基础设施。",
    },
    employees: [
      { name: "Conor White-Sullivan", avatar: "https://picsum.photos/seed/emp-r1/96/96", tag: "双向链接理念的发明者" },
      { name: "Joshua Brown", avatar: "https://picsum.photos/seed/emp-r2/96/96", tag: "Datomic 数据库传道士" },
      { name: "Maya Goldberg", avatar: "https://picsum.photos/seed/emp-r3/96/96", tag: "用 Roam 写了一本书" },
      { name: "Ryo Nakamura", avatar: "https://picsum.photos/seed/emp-r4/96/96", tag: "每日笔记连续打卡800天" },
    ],
  },
  {
    id: "bear", name: "Bear", desc: "简洁优雅的Markdown写作应用，专注于纯粹的写作体验。Apple Design Award获奖。",
    long: "Write beautifully on iPhone, iPad, and Mac. A focused, flexible writing app loved by millions. Bear strips away everything that doesn't serve writing, leaving only a clean canvas and a powerful Markdown engine. From quick notes to long-form essays, Bear adapts to your writing style with zero friction.",
    logo: "https://picsum.photos/seed/bear/96/96", site: "bear.app", price: "免费 / $30/年", year: "2016", loc: "罗马",
    tags: ["Markdown", "标签系统", "专注模式", "快速导出"],
    product: {
      name: "Bear 2.0",
      image: "https://picsum.photos/seed/bear-product/800/450",
      desc: "Bear 2.0 是对这款 Apple Design Award 得主的全面升级。新版本带来了原生表格编辑、可折叠标题、多种代码块主题，以及全新的标签嵌套系统。重写的 Markdown 渲染引擎速度提升了 3 倍，在 M 系列芯片上几乎零延迟。配合全新的 iCloud 同步架构，你的笔记在所有 Apple 设备上始终保持一致。",
    },
    employees: [
      { name: "Lorenzo Pieri", avatar: "https://picsum.photos/seed/emp-b1/96/96", tag: "罗马咖啡馆里的极简主义者" },
      { name: "Fabrizio Rizzi", avatar: "https://picsum.photos/seed/emp-b2/96/96", tag: "把 Markdown 做到极致" },
      { name: "Giulia Marini", avatar: "https://picsum.photos/seed/emp-b3/96/96", tag: "字体排版的偏执狂" },
      { name: "Marco Ferretti", avatar: "https://picsum.photos/seed/emp-b4/96/96", tag: "Swift 代码即诗歌" },
    ],
  },
  {
    id: "anytype", name: "Anytype", desc: "去中心化知识管理工具，基于IPFS协议实现真正的数据所有权。",
    long: "The everything app for those who trust in freedom. Built on a private, local-first, peer-to-peer platform. Anytype gives you the power of a relational database, the flexibility of a wiki, and the privacy of end-to-end encryption — all without a central server controlling your data. Your knowledge belongs to you, forever.",
    logo: "https://unavatar.io/anytype.io", site: "anytype.io", price: "免费", year: "2019", loc: "柏林",
    tags: ["去中心化", "端到端加密", "对象类型", "离线可用"],
    product: {
      name: "Anytype Space",
      image: "https://picsum.photos/seed/anytype-product/800/450",
      desc: "Anytype Space 是基于去中心化协议构建的多人协作工作区。团队成员可以在完全端到端加密的环境下共享对象、协同编辑文档、构建共享知识库——没有中央服务器，没有数据托管方，没有任何人能访问你的内容。Space 支持细粒度权限控制，成员可以是编辑者、查看者或只读访客，灵活适配各种团队协作场景。",
    },
    employees: [
      { name: "Zhanna Sharipova", avatar: "https://picsum.photos/seed/emp-a1/96/96", tag: "Web3 时代的产品设计师" },
      { name: "Anton Sysoev", avatar: "https://picsum.photos/seed/emp-a2/96/96", tag: "用 Rust 捍卫数据主权" },
      { name: "Pavel Krikun", avatar: "https://picsum.photos/seed/emp-a3/96/96", tag: "P2P 协议架构师" },
      { name: "Maria Hoffmann", avatar: "https://picsum.photos/seed/emp-a4/96/96", tag: "相信去中心化是未来" },
    ],
  },
];

export const jobs: Job[] = [
  // Notion
  { id: "notion-1", toolId: "notion", toolName: "Notion", toolLogo: "https://unavatar.io/notion.so", title: "产品经理", dept: "产品", type: "全职", salary: "30–50K/月", loc: "旧金山", tags: ["产品规划", "用户研究", "数据分析"], desc: "负责核心编辑器产品的规划与迭代，与工程和设计团队紧密协作。" },
  { id: "notion-2", toolId: "notion", toolName: "Notion", toolLogo: "https://unavatar.io/notion.so", title: "前端工程师", dept: "工程", type: "全职", salary: "35–55K/月", loc: "旧金山 / 远程", tags: ["React", "TypeScript", "性能优化"], desc: "构建和优化 Notion 的 Block 编辑器与实时协作功能，追求毫秒级体验。" },
  { id: "notion-3", toolId: "notion", toolName: "Notion", toolLogo: "https://unavatar.io/notion.so", title: "设计工程师", dept: "设计", type: "全职", salary: "30–45K/月", loc: "旧金山", tags: ["Figma", "交互动效", "原型设计"], desc: "连接设计与工程，将高保真设计稿转化为令人惊艳的产品体验。" },
  { id: "notion-4", toolId: "notion", toolName: "Notion", toolLogo: "https://unavatar.io/notion.so", title: "增长营销", dept: "市场", type: "全职", salary: "25–40K/月", loc: "远程", tags: ["SEO", "内容营销", "用户增长"], desc: "驱动 Notion 在全球市场的用户获取与留存增长，制定并执行增长策略。" },
  { id: "notion-5", toolId: "notion", toolName: "Notion", toolLogo: "https://unavatar.io/notion.so", title: "数据分析师", dept: "数据", type: "全职", salary: "28–42K/月", loc: "旧金山", tags: ["SQL", "数据可视化", "A/B测试"], desc: "分析产品使用数据，为产品与增长决策提供深度洞察和量化支持。" },

  // Obsidian
  { id: "obsidian-1", toolId: "obsidian", toolName: "Obsidian", toolLogo: "https://unavatar.io/obsidian.md", title: "插件开发工程师", dept: "工程", type: "远程", salary: "25–40K/月", loc: "全球远程", tags: ["TypeScript", "插件API", "开源"], desc: "维护并扩展 Obsidian 插件生态系统，与全球社区开发者深度协作。" },
  { id: "obsidian-2", toolId: "obsidian", toolName: "Obsidian", toolLogo: "https://unavatar.io/obsidian.md", title: "后端工程师", dept: "工程", type: "远程", salary: "30–45K/月", loc: "全球远程", tags: ["Node.js", "同步协议", "端对端加密"], desc: "负责 Obsidian Sync 服务的后端架构、性能优化与安全性保障。" },
  { id: "obsidian-3", toolId: "obsidian", toolName: "Obsidian", toolLogo: "https://unavatar.io/obsidian.md", title: "社区运营", dept: "运营", type: "远程", salary: "15–25K/月", loc: "全球远程", tags: ["社区管理", "Discord", "内容创作"], desc: "管理 Obsidian 全球社区，策划论坛活动与用户故事，激活贡献者。" },
  { id: "obsidian-4", toolId: "obsidian", toolName: "Obsidian", toolLogo: "https://unavatar.io/obsidian.md", title: "技术文档工程师", dept: "内容", type: "远程", salary: "18–30K/月", loc: "全球远程", tags: ["技术写作", "Markdown", "API文档"], desc: "撰写并维护 Obsidian 开发者文档与用户帮助中心，降低上手门槛。" },
  { id: "obsidian-5", toolId: "obsidian", toolName: "Obsidian", toolLogo: "https://unavatar.io/obsidian.md", title: "UX 设计师", dept: "设计", type: "远程", salary: "20–35K/月", loc: "全球远程", tags: ["用户体验", "可访问性", "Figma"], desc: "优化 Obsidian 的界面交互与信息架构，提升新用户的上手体验。" },

  // Linear
  { id: "linear-1", toolId: "linear", toolName: "Linear", toolLogo: "https://unavatar.io/linear.app", title: "高级软件工程师", dept: "工程", type: "全职", salary: "40–65K/月", loc: "旧金山 / 远程", tags: ["TypeScript", "GraphQL", "实时协作"], desc: "参与 Linear 核心基础设施与产品功能设计，追求极致的工程质量。" },
  { id: "linear-2", toolId: "linear", toolName: "Linear", toolLogo: "https://unavatar.io/linear.app", title: "产品设计师", dept: "设计", type: "全职", salary: "35–55K/月", loc: "旧金山", tags: ["交互设计", "设计系统", "用户测试"], desc: "打磨 Linear 的极致键盘优先体验，探索设计与工程完美融合的边界。" },
  { id: "linear-3", toolId: "linear", toolName: "Linear", toolLogo: "https://unavatar.io/linear.app", title: "开发者关系工程师", dept: "DevRel", type: "全职", salary: "30–48K/月", loc: "远程", tags: ["API集成", "技术布道", "开源"], desc: "构建并维护 Linear 开发者生态，撰写集成指南与示例项目。" },
  { id: "linear-4", toolId: "linear", toolName: "Linear", toolLogo: "https://unavatar.io/linear.app", title: "客户成功经理", dept: "客户成功", type: "全职", salary: "25–40K/月", loc: "旧金山 / 远程", tags: ["客户管理", "SaaS", "企业销售"], desc: "帮助企业客户成功落地 Linear，提升续费率与 NPS 客户满意度。" },
  { id: "linear-5", toolId: "linear", toolName: "Linear", toolLogo: "https://unavatar.io/linear.app", title: "工程总监", dept: "工程管理", type: "全职", salary: "55–80K/月", loc: "旧金山", tags: ["团队管理", "架构设计", "技术战略"], desc: "领导 Linear 工程团队，制定技术路线图，招募并培养世界级工程人才。" },

  // Coda
  { id: "coda-1", toolId: "coda", toolName: "Coda", toolLogo: "https://unavatar.io/coda.io", title: "全栈工程师", dept: "工程", type: "全职", salary: "35–55K/月", loc: "旧金山 / 远程", tags: ["React", "Go", "PostgreSQL"], desc: "参与 Coda 文档引擎与 Pack 集成平台的全栈开发，推动产品创新。" },
  { id: "coda-2", toolId: "coda", toolName: "Coda", toolLogo: "https://unavatar.io/coda.io", title: "解决方案工程师", dept: "销售", type: "全职", salary: "30–50K/月", loc: "旧金山", tags: ["技术销售", "产品演示", "企业方案"], desc: "为大型企业客户提供量身定制的 Coda 解决方案与落地实施支持。" },
  { id: "coda-3", toolId: "coda", toolName: "Coda", toolLogo: "https://unavatar.io/coda.io", title: "企业销售经理", dept: "销售", type: "全职", salary: "25–40K+佣金", loc: "旧金山 / 远程", tags: ["企业销售", "CRM", "大客户谈判"], desc: "开拓并维护 Coda 的企业级客户，完成并超越季度销售目标。" },
  { id: "coda-4", toolId: "coda", toolName: "Coda", toolLogo: "https://unavatar.io/coda.io", title: "内容策略师", dept: "市场", type: "全职", salary: "22–35K/月", loc: "远程", tags: ["内容营销", "SEO", "模板设计"], desc: "创作高质量模板与教程内容，驱动 Coda 的自然流量与用户转化增长。" },
  { id: "coda-5", toolId: "coda", toolName: "Coda", toolLogo: "https://unavatar.io/coda.io", title: "平台工程师", dept: "基础设施", type: "全职", salary: "38–58K/月", loc: "旧金山", tags: ["Kubernetes", "云架构", "可靠性"], desc: "构建并维护 Coda 的云基础设施，确保高可用性与弹性水平扩展。" },

  // Craft
  { id: "craft-1", toolId: "craft", toolName: "Craft", toolLogo: "https://unavatar.io/craft.do", title: "iOS 工程师", dept: "工程", type: "全职", salary: "30–50K/月", loc: "布达佩斯 / 远程", tags: ["Swift", "SwiftUI", "Core Data"], desc: "开发 Craft iOS 应用的核心功能，追求媲美 Apple 第一方的原生体验。" },
  { id: "craft-2", toolId: "craft", toolName: "Craft", toolLogo: "https://unavatar.io/craft.do", title: "macOS 工程师", dept: "工程", type: "全职", salary: "32–52K/月", loc: "布达佩斯 / 远程", tags: ["AppKit", "Swift", "macOS"], desc: "构建并优化 Craft macOS 客户端，深度利用系统原生能力与 API。" },
  { id: "craft-3", toolId: "craft", toolName: "Craft", toolLogo: "https://unavatar.io/craft.do", title: "后端工程师", dept: "工程", type: "全职", salary: "28–45K/月", loc: "布达佩斯 / 远程", tags: ["Kotlin", "云同步", "API设计"], desc: "设计并实现 Craft 跨设备同步服务与 REST/GraphQL API 架构。" },
  { id: "craft-4", toolId: "craft", toolName: "Craft", toolLogo: "https://unavatar.io/craft.do", title: "QA 工程师", dept: "质量", type: "全职", salary: "20–32K/月", loc: "布达佩斯", tags: ["自动化测试", "XCTest", "性能测试"], desc: "建立并维护 Craft 多平台自动化测试体系，守护 Apple Design Award 品质。" },
  { id: "craft-5", toolId: "craft", toolName: "Craft", toolLogo: "https://unavatar.io/craft.do", title: "产品设计师", dept: "设计", type: "全职", salary: "25–40K/月", loc: "布达佩斯 / 远程", tags: ["视觉设计", "排版", "Apple HIG"], desc: "设计符合 Apple Design Award 标准的精美界面与端到端交互体验。" },

  // Logseq
  { id: "logseq-1", toolId: "logseq", toolName: "Logseq", toolLogo: "https://unavatar.io/logseq.com", title: "开源维护者", dept: "工程", type: "远程", salary: "20–35K/月", loc: "全球远程", tags: ["开源", "ClojureScript", "社区协作"], desc: "维护 Logseq 开源主仓库，审查社区 PR，引导贡献者参与核心开发。" },
  { id: "logseq-2", toolId: "logseq", toolName: "Logseq", toolLogo: "https://unavatar.io/logseq.com", title: "Clojure 工程师", dept: "工程", type: "远程", salary: "28–45K/月", loc: "全球远程", tags: ["Clojure", "ClojureScript", "Datalog"], desc: "深度参与 Logseq 核心查询引擎与知识图谱算法的设计与实现。" },
  { id: "logseq-3", toolId: "logseq", toolName: "Logseq", toolLogo: "https://unavatar.io/logseq.com", title: "前端工程师", dept: "工程", type: "远程", salary: "25–40K/月", loc: "全球远程", tags: ["React", "ClojureScript", "Shadow CLJS"], desc: "负责 Logseq 用户界面的功能开发与性能优化，改善编辑器体验。" },
  { id: "logseq-4", toolId: "logseq", toolName: "Logseq", toolLogo: "https://unavatar.io/logseq.com", title: "社区负责人", dept: "运营", type: "远程", salary: "15–25K/月", loc: "全球远程", tags: ["社区建设", "Discord", "开源文化"], desc: "带领 Logseq 全球社区增长，组织线上 Meetup 与贡献者月度活动。" },
  { id: "logseq-5", toolId: "logseq", toolName: "Logseq", toolLogo: "https://unavatar.io/logseq.com", title: "安全工程师", dept: "安全", type: "远程", salary: "30–48K/月", loc: "全球远程", tags: ["端到端加密", "隐私设计", "渗透测试"], desc: "保障 Logseq 用户数据安全，推进以隐私优先为核心的产品安全体系。" },

  // Roam Research
  { id: "roam-1", toolId: "roam", toolName: "Roam Research", toolLogo: "https://picsum.photos/seed/roam/96/96", title: "研究工程师", dept: "工程", type: "远程", salary: "30–50K/月", loc: "旧金山 / 远程", tags: ["知识图谱", "NLP", "Clojure"], desc: "探索并实现 Roam 在知识发现与自动化关联方面的前沿功能与算法。" },
  { id: "roam-2", toolId: "roam", toolName: "Roam Research", toolLogo: "https://picsum.photos/seed/roam/96/96", title: "全栈开发者", dept: "工程", type: "远程", salary: "28–45K/月", loc: "远程", tags: ["ClojureScript", "Datomic", "全栈"], desc: "参与 Roam 核心产品全栈开发，推进每日笔记与大纲编辑功能迭代。" },
  { id: "roam-3", toolId: "roam", toolName: "Roam Research", toolLogo: "https://picsum.photos/seed/roam/96/96", title: "UX 研究员", dept: "设计", type: "远程", salary: "22–38K/月", loc: "远程", tags: ["用户访谈", "可用性测试", "认知心理学"], desc: "深入研究学者与思考者用户群体的认知模型与复杂工作流程。" },
  { id: "roam-4", toolId: "roam", toolName: "Roam Research", toolLogo: "https://picsum.photos/seed/roam/96/96", title: "增长运营", dept: "市场", type: "远程", salary: "18–30K/月", loc: "远程", tags: ["增长黑客", "社群运营", "病毒传播"], desc: "策划 Roam 在学术与研究社区的口碑传播，撬动指数级自然增长。" },
  { id: "roam-5", toolId: "roam", toolName: "Roam Research", toolLogo: "https://picsum.photos/seed/roam/96/96", title: "技术支持专员", dept: "支持", type: "远程", salary: "12–20K/月", loc: "远程", tags: ["用户支持", "文档编写", "问题排查"], desc: "帮助 Roam 用户解决使用疑难，收集反馈并精准传递至产品团队。" },

  // Bear
  { id: "bear-1", toolId: "bear", toolName: "Bear", toolLogo: "https://picsum.photos/seed/bear/96/96", title: "Swift 开发者", dept: "工程", type: "全职", salary: "28–45K/月", loc: "罗马 / 远程", tags: ["Swift", "UIKit", "SwiftUI"], desc: "开发 Bear iOS/iPadOS 客户端新功能，深耕 Apple 平台原生开发。" },
  { id: "bear-2", toolId: "bear", toolName: "Bear", toolLogo: "https://picsum.photos/seed/bear/96/96", title: "后端工程师", dept: "工程", type: "全职", salary: "25–40K/月", loc: "罗马 / 远程", tags: ["同步服务", "Ruby on Rails", "云存储"], desc: "负责 Bear Notes 同步服务的后端开发、可靠性保障与性能调优。" },
  { id: "bear-3", toolId: "bear", toolName: "Bear", toolLogo: "https://picsum.photos/seed/bear/96/96", title: "支持工程师", dept: "支持", type: "全职", salary: "15–25K/月", loc: "远程", tags: ["客户支持", "Markdown", "Apple平台"], desc: "为 Bear 全球数百万用户提供专业技术支持与贴心使用指导服务。" },
  { id: "bear-4", toolId: "bear", toolName: "Bear", toolLogo: "https://picsum.photos/seed/bear/96/96", title: "市场营销经理", dept: "市场", type: "全职", salary: "20–32K/月", loc: "罗马", tags: ["App Store优化", "社交媒体", "内容创作"], desc: "策划并执行 Bear 在 App Store 及社交媒体的全球营销推广活动。" },
  { id: "bear-5", toolId: "bear", toolName: "Bear", toolLogo: "https://picsum.photos/seed/bear/96/96", title: "产品经理", dept: "产品", type: "全职", salary: "25–40K/月", loc: "罗马", tags: ["产品规划", "用户反馈", "写作体验"], desc: "主导 Bear 产品路线图，将数百万用户的真实反馈转化为精准产品决策。" },

  // Anytype
  { id: "anytype-1", toolId: "anytype", toolName: "Anytype", toolLogo: "https://unavatar.io/anytype.io", title: "协议工程师", dept: "工程", type: "远程", salary: "35–55K/月", loc: "柏林 / 远程", tags: ["IPFS", "P2P网络", "去中心化"], desc: "设计并实现 Anytype 去中心化数据同步协议与底层网络通信层。" },
  { id: "anytype-2", toolId: "anytype", toolName: "Anytype", toolLogo: "https://unavatar.io/anytype.io", title: "Rust 工程师", dept: "工程", type: "远程", salary: "38–58K/月", loc: "柏林 / 远程", tags: ["Rust", "密码学", "系统编程"], desc: "用 Rust 实现 Anytype 核心加密算法与高性能本地数据存储引擎。" },
  { id: "anytype-3", toolId: "anytype", toolName: "Anytype", toolLogo: "https://unavatar.io/anytype.io", title: "前端工程师", dept: "工程", type: "远程", salary: "28–45K/月", loc: "柏林 / 远程", tags: ["React", "Electron", "TypeScript"], desc: "构建 Anytype 跨平台桌面与 Web 客户端的用户界面与交互体验。" },
  { id: "anytype-4", toolId: "anytype", toolName: "Anytype", toolLogo: "https://unavatar.io/anytype.io", title: "生态合作经理", dept: "商务", type: "远程", salary: "22–38K/月", loc: "柏林 / 远程", tags: ["商务拓展", "Web3", "生态建设"], desc: "拓展 Anytype 在去中心化生态中的战略合作伙伴与协议集成资源。" },
  { id: "anytype-5", toolId: "anytype", toolName: "Anytype", toolLogo: "https://unavatar.io/anytype.io", title: "开发者关系", dept: "DevRel", type: "远程", salary: "25–40K/月", loc: "全球远程", tags: ["开发者社区", "技术布道", "开源"], desc: "建立 Anytype 开发者社区，推进开放协议的生态采用与全球传播。" },
];
