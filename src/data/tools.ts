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
}

export const tools: Tool[] = [
  { id: "notion", name: "Notion", desc: "集笔记、文档、项目管理、数据库于一体的全能工作空间。以其灵活的Block编辑器著称。", long: "We've heard Notion described many ways. It can be as simple as a blank piece of paper, making writing feel light and delightful. It can be as complex as a relational database.", logo: "https://unavatar.io/notion.so", site: "notion.so", price: "免费 / $10起", year: "2016", loc: "旧金山", tags: ["Block编辑器", "数据库", "团队协作", "API集成"] },
  { id: "obsidian", name: "Obsidian", desc: "基于本地Markdown文件的知识管理工具，以双向链接和知识图谱为核心，数据完全由用户掌控。", long: "A private and flexible writing app that adapts to the way you think. No account required, your notes stay on your device.", logo: "https://unavatar.io/obsidian.md", site: "obsidian.md", price: "个人免费", year: "2020", loc: "多伦多", tags: ["双向链接", "知识图谱", "本地存储", "插件生态"] },
  { id: "linear", name: "Linear", desc: "为现代软件团队打造的流线型项目管理工具，以极致的速度和键盘优先体验著称。", long: "The next era of product development is built on context and agency. Issue tracking is dead — here's how Linear is evolving.", logo: "https://unavatar.io/linear.app", site: "linear.app", price: "免费 / $8起", year: "2019", loc: "旧金山", tags: ["Issue追踪", "项目管理", "快捷键", "自动化"] },
  { id: "coda", name: "Coda", desc: "将文档、电子表格和应用融合在一起的新型文档工具。其独特的Pack系统可连接数百种外部服务。", long: "When docs meet apps. Coda begins where documents and spreadsheets end — a new canvas for teams.", logo: "https://unavatar.io/coda.io", site: "coda.io", price: "免费 / $10起", year: "2014", loc: "旧金山", tags: ["公式引擎", "Pack集成", "自动化", "模板"] },
  { id: "craft", name: "Craft", desc: "专为Apple生态设计的精美文档工具，Apple Design Award获奖应用。卓越排版与原生体验。", long: "A beautiful native editing experience. Documents that look as good as they feel.", logo: "https://unavatar.io/craft.do", site: "craft.do", price: "免费 / $5起", year: "2019", loc: "布达佩斯", tags: ["原生体验", "精美排版", "AI助手", "分享页面"] },
  { id: "logseq", name: "Logseq", desc: "开源的隐私优先知识管理平台，结合大纲编辑和双向链接。GitHub超30k Star。", long: "Privacy-first, open-source knowledge management. Your data belongs to you.", logo: "https://unavatar.io/logseq.com", site: "logseq.com", price: "免费开源", year: "2020", loc: "开源社区", tags: ["开源", "双向链接", "本地优先", "白板"] },
  { id: "roam", name: "Roam Research", desc: "以网状思维为核心的笔记工具，首创了双向链接笔记理念。适合研究者和深度思考者。", long: "A note-taking tool for networked thought. As easy to use as a document, as powerful as a graph database.", logo: "https://picsum.photos/seed/roam/96/96", site: "roamresearch.com", price: "$15/月", year: "2017", loc: "旧金山", tags: ["双向链接", "大纲编辑", "每日笔记", "查询语言"] },
  { id: "bear", name: "Bear", desc: "简洁优雅的Markdown写作应用，专注于纯粹的写作体验。Apple Design Award获奖。", long: "Write beautifully on iPhone, iPad, and Mac. A focused, flexible writing app loved by millions.", logo: "https://picsum.photos/seed/bear/96/96", site: "bear.app", price: "免费 / $30/年", year: "2016", loc: "罗马", tags: ["Markdown", "标签系统", "专注模式", "快速导出"] },
  { id: "anytype", name: "Anytype", desc: "去中心化知识管理工具，基于IPFS协议实现真正的数据所有权。", long: "The everything app for those who trust in freedom. Built on a private, local-first, peer-to-peer platform.", logo: "https://unavatar.io/anytype.io", site: "anytype.io", price: "免费", year: "2019", loc: "柏林", tags: ["去中心化", "端到端加密", "对象类型", "离线可用"] },
];
