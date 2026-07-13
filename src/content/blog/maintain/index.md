---
title: '如何维护这个博客'
publishDate: 2026-07-12
description: '用 Markdown 写文章、管理图片和发布更新的基本方法。'
tags:
  - 指南
  - 写作
language: '中文'
comment: false
---

这个博客把内容和代码放在同一个仓库中。日常维护时，最常做的事情只是新增或修改 Markdown 文件。

## 新建文章

在 `src/content/blog/` 下创建一个目录，并在目录中添加 `index.md`：

```text
src/content/blog/my-new-post/
├── index.md
└── cover.jpg
```

文章开头使用 frontmatter 描述标题、日期和标签：

```yaml
---
title: '文章标题'
publishDate: 2026-07-12
description: '一句简短摘要。'
tags:
  - 笔记
---
```

## 添加图片

把图片放在文章目录中，然后使用普通 Markdown 语法引用：

```markdown
![图片说明](./cover.jpg)
```

## 发布更新

内容提交到仓库的 `main` 分支后，网站会自动构建并发布。发布过程不需要单独维护服务器。
