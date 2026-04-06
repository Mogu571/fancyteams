# 📒 FancyTeams

「小而美」前沿技术团队图鉴 | 你是想卖一辈子糖水，还是加入他们改变世界？

## 技术栈

- **Next.js 15** — React 框架，静态导出
- **TypeScript** — 类型安全
- **Tailwind CSS v4** — 原子化 CSS
- **GitHub Pages** — 免费托管

## 本地开发

```bash
npm install
npm run dev
# 打开 http://localhost:3000/fancyteams
```

## 部署到 GitHub Pages

### GitHub Actions 自动部署（推荐）

1. 在 GitHub 创建新仓库
2. 推送代码：

```bash
git init
git add .
git commit -m "init: FancyTeams"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

3. 进入仓库 → Settings → Pages → Source 选择 **GitHub Actions**
4. 推送后自动构建部署

> ⚠️ 如果仓库名不是 `<用户名>.github.io`，需要在 `next.config.ts` 中设置 `basePath: "/你的仓库名"`

## 更新部署

每次修改文件后，三行命令同步到 GitHub 并自动部署：

```bash
git add .
git commit -m "这次改了什么"
git push
```

推送后 GitHub Actions 自动构建，一两分钟网站就更新了。

## 自定义数据

编辑 `src/data/tools.ts` 添加或修改工具。每个工具包含以下字段：

| 字段 | 说明 |
|------|------|
| `id` | 唯一标识（英文），同时用于匹配图片文件名 |
| `name` | 工具名称 |
| `desc` | 简短介绍 |
| `long` | 详细描述（瀑布流图文卡使用） |
| `logo` | Logo 路径，本地图片放 `public/logos/`，路径写 `/fancyteams/logos/xxx.png` |
| `site` | 官网域名 |
| `price` | 价格信息 |
| `year` | 成立年份 |
| `loc` | 总部位置 |
| `tags` | 特性标签（数组） |

## 替换图片

将图片放在 `public/` 目录下：

```
public/
├── logos/        ← 公司 Logo（文件名与 id 一致）
│   ├── notion.png
│   ├── obsidian.png
│   └── ...
└── covers/       ← 卡片封面图（文件名与 id 一致）
    ├── notion.jpg
    ├── obsidian.jpg
    └── ...
```

然后修改以下文件中的图片路径：

- `src/data/tools.ts` — Logo 路径
- `src/components/MasonryView.tsx` — 瀑布流封面图
- `src/components/CarouselView.tsx` — 轮播封面图
- `src/components/GalleryView.tsx` — 画廊封面图

## 项目结构

```
src/
├── app/
│   ├── globals.css        # 全局样式，CSS 变量（颜色、字体）
│   ├── layout.tsx         # 根布局，网页标题
│   └── page.tsx           # 首页，三种视图切换逻辑
├── components/
│   ├── Header.tsx         # 顶部导航栏 + 视图切换按钮
│   ├── MasonryView.tsx    # 瀑布流视图（三列，图文卡与文字卡交替）
│   ├── CarouselView.tsx   # 轮播视图（中间放大，两侧缩小）
│   ├── GalleryView.tsx    # 画廊视图（透视走廊，卡片挂在两侧）
│   ├── Logo.tsx           # 公司 Logo 组件（带 -5° 微旋转）
│   └── LinkIcon.tsx       # 链接图标 SVG 组件
└── data/
    └── tools.ts           # 工具数据与类型定义
```

## License

MIT
