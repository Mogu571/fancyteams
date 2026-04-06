export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  founded: string;
  headquarters: string;
  website: string;
  pricing: string;
  color: string;
  features: string[];
  highlights: string;
}

export const categories = [
  { id: "all", label: "全部" },
  { id: "note", label: "笔记工具" },
  { id: "workspace", label: "协作空间" },
  { id: "knowledge", label: "知识管理" },
  { id: "writing", label: "写作工具" },
];

export const tools: Tool[] = [
  {
    id: "notion",
    name: "Notion",
    description: "集笔记、文档、项目管理、数据库于一体的全能工作空间。以其灵活的 Block 编辑器和强大的数据库功能著称，深受团队和个人用户喜爱。",
    category: "workspace",
    founded: "2016",
    headquarters: "旧金山，美国",
    website: "notion.so",
    pricing: "免费 / $10起",
    color: "#000000",
    features: ["Block 编辑器", "数据库", "团队协作", "模板系统", "API 集成", "AI 助手"],
    highlights: "估值超过 100 亿美元，全球用户超 3000 万",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    description: "基于本地 Markdown 文件的知识管理工具，以双向链接和知识图谱为核心，数据完全由用户掌控。拥有丰富的插件生态系统。",
    category: "knowledge",
    founded: "2020",
    headquarters: "多伦多，加拿大",
    website: "obsidian.md",
    pricing: "个人免费 / $50/年同步",
    color: "#7C3AED",
    features: ["双向链接", "知识图谱", "本地存储", "插件生态", "Markdown", "自定义主题"],
    highlights: "拥有超过 1000 个社区插件，数据隐私优先",
  },
  {
    id: "coda",
    name: "Coda",
    description: "将文档、电子表格和应用融合在一起的新型文档工具。其独特的 Pack 系统可以连接几百种外部服务，实现强大的自动化工作流。",
    category: "workspace",
    founded: "2014",
    headquarters: "旧金山，美国",
    website: "coda.io",
    pricing: "免费 / $10起",
    color: "#F46A54",
    features: ["公式引擎", "Pack 集成", "自动化", "交互式表格", "模板", "团队协作"],
    highlights: "被 Uber、Square 等知名企业采用",
  },
  {
    id: "roam",
    name: "Roam Research",
    description: "以网状思维为核心的笔记工具，首创了双向链接的笔记理念。适合研究者和深度思考者，用于构建个人知识网络。",
    category: "knowledge",
    founded: "2017",
    headquarters: "旧金山，美国",
    website: "roamresearch.com",
    pricing: "$15/月",
    color: "#0F7B6C",
    features: ["双向链接", "大纲式编辑", "每日笔记", "图数据库", "引用块", "查询语言"],
    highlights: "掀起了「工具为思维服务」的笔记革命",
  },
  {
    id: "logseq",
    name: "Logseq",
    description: "开源的隐私优先知识管理平台，结合了大纲编辑和双向链接。支持本地文件存储，兼容 Markdown 和 Org-mode 格式。",
    category: "knowledge",
    founded: "2020",
    headquarters: "开源社区",
    website: "logseq.com",
    pricing: "免费开源",
    color: "#4FB8A5",
    features: ["开源免费", "双向链接", "本地优先", "白板功能", "PDF 标注", "插件系统"],
    highlights: "GitHub 超 30k Star，活跃的开源社区",
  },
  {
    id: "craft",
    name: "Craft",
    description: "专为 Apple 生态设计的精美文档工具，以卓越的排版和流畅的原生体验著称。支持创建富文本文档并轻松分享。",
    category: "writing",
    founded: "2019",
    headquarters: "布达佩斯，匈牙利",
    website: "craft.do",
    pricing: "免费 / $5起",
    color: "#1A73E8",
    features: ["原生体验", "精美排版", "卡片式编辑", "分享页面", "AI 助手", "Markdown 支持"],
    highlights: "Apple Design Award 获奖应用",
  },
  {
    id: "bear",
    name: "Bear",
    description: "简洁优雅的 Markdown 写作应用，专注于纯粹的写作体验。支持标签系统组织笔记，以精美的排版和流畅性能闻名。",
    category: "writing",
    founded: "2016",
    headquarters: "罗马，意大利",
    website: "bear.app",
    pricing: "免费 / $30/年",
    color: "#CD5B45",
    features: ["Markdown 编辑", "标签系统", "主题切换", "专注模式", "代码高亮", "快速导出"],
    highlights: "Apple Design Award 获奖，百万级用户",
  },
  {
    id: "anytype",
    name: "Anytype",
    description: "下一代去中心化知识管理工具，基于 IPFS 协议实现真正的数据所有权。支持对象化的信息组织方式，兼具隐私与协作能力。",
    category: "knowledge",
    founded: "2019",
    headquarters: "柏林，德国",
    website: "anytype.io",
    pricing: "免费",
    color: "#FF5722",
    features: ["去中心化", "端到端加密", "对象类型", "关系图", "本地优先", "离线可用"],
    highlights: "基于 IPFS，实现真正的数据主权",
  },
  {
    id: "wolai",
    name: "我来 wolai",
    description: "国产 Notion 替代品，专为中文用户优化，在块编辑器的基础上增加了双向链接、信息卡片等特色功能，服务器部署在国内。",
    category: "workspace",
    founded: "2020",
    headquarters: "北京，中国",
    website: "wolai.com",
    pricing: "免费 / ¥99起",
    color: "#3B82F6",
    features: ["中文优化", "块编辑器", "双向链接", "信息卡片", "国内服务器", "团队协作"],
    highlights: "国内访问速度快，中文排版体验好",
  },
];
