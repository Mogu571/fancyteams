# 📒 笔记工具导航

精选全球优质笔记应用与协作平台，帮你找到最适合的生产力工具。

## 技术栈

- **Next.js 15** — React 框架，静态导出
- **TypeScript** — 类型安全
- **Tailwind CSS v4** — 原子化 CSS
- **GitHub Pages** — 免费托管

## 本地开发

```bash
npm install
npm run dev
# 打开 http://localhost:3000
```

## 部署到 GitHub Pages

### GitHub Actions 自动部署（推荐）

1. 在 GitHub 创建新仓库
2. 推送代码：

```bash
git init
git add .
git commit -m "init: 笔记工具导航"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

3. 进入仓库 → Settings → Pages → Source 选择 **GitHub Actions**
4. 推送后自动构建部署

> ⚠️ 如果仓库名不是 `<用户名>.github.io`，需要在 `next.config.ts` 中取消注释并设置 `basePath: "/你的仓库名"`

## 自定义数据

编辑 `src/data/tools.ts` 添加或修改工具。每个工具包含 name、description、category、features 等字段。

## 项目结构

```
src/
├── app/           # 页面和全局样式
├── components/    # Header, Hero, SearchBar, CategoryFilter, ToolCard, Footer
└── data/          # 工具数据和类型定义
```

## License

MIT
