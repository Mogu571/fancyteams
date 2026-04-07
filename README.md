# 📒 FancyTeams

「小而美」前沿技术团队图鉴 | 你是想卖一辈子糖水，还是加入他们改变世界？



## 自定义数据

每个卡片目前包含以下字段：

| 字段 | 说明 |
|------|------|
| `id` | 唯一标识（英文），同时用于匹配图片文件名 |
| `name` | 工具名称 |
| `desc` | 简短介绍 |
| `long` | 详细描述（瀑布流图文卡使用） |
| `logo` | Logo 路径，本地图片 `public/logos/`，路径 `/fancyteams/logos/xxx.png` |
| `site` | 官网域名 |
| `price` | 价格信息 |
| `year` | 成立年份 |
| `loc` | 总部位置 |
| `tags` | 特性标签（数组） |



## 项目结构

```
src/
├── app/
│   ├── globals.css        # 全局样式，CSS 变量（颜色、字体）
│   ├── layout.tsx         # 根布局，网页标题
│   └── page.tsx           # 首页，三种视图切换逻辑
├── components/
│   ├── Header.tsx         # 顶部导航栏 + 视图切换按钮
│   ├── MasonryView.tsx    # 瀑布流视图
│   ├── CarouselView.tsx   # 轮播视图
│   ├── GalleryView.tsx    # 画廊视图
│   ├── Logo.tsx           # 公司 Logo 组件
│   └── LinkIcon.tsx       # 链接图标 SVG 组件
└── data/
    └── tools.ts           # 工具数据与类型定义
```

