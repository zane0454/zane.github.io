# Zane 的个人博客

一个基于 Astro 与 Pure 主题构建的个人博客，包含文章、文档、项目和关于页面。

## 本地开发

```bash
npm install
npm run dev
```

## 添加文章

在 `src/content/blog/` 中创建 Markdown 或 MDX 文件。文章可以与封面图片放在同一个目录中。

## 添加文档

文档位于 `src/content/docs/`，当前分为开始使用、内容写作、资料与附件三个栏目。

## 发布

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。
