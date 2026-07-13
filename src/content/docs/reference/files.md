---
title: '图片与附件'
description: '在文章和文档中加入图片、PDF、Word 等资料。'
order: 1
---

## 与文章放在一起

只在某篇文章中使用的图片，可以直接放进文章目录，然后用相对路径引用。这样移动或备份文章时不容易遗漏资源。

## 公共图片

多篇内容都会使用的图片，可以放在 `public/images/` 中，通过 `/images/文件名` 引用。

## PDF 和 Word

需要提供下载的附件可以放在 `public/files/` 中：

```markdown
[下载 PDF](/zane.github.io/files/example.pdf)
[下载 Word 文档](/zane.github.io/files/example.docx)
```

文件名建议使用英文、数字和短横线，避免链接在不同环境中出现编码问题。
