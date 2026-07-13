import type { Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'
import { withBase } from './lib/paths'

export const theme: ThemeUserConfig = {
  title: 'Zane 的个人博客',
  author: 'Zane',
  description: '记录学习、思考与生活，也分享值得长期保存的内容。',
  favicon: withBase('/favicon/favicon-32x32.png'),
  socialCard: withBase('/images/social-card.png'),
  locale: {
    lang: 'zh-CN',
    attrs: 'zh_CN',
    dateLocale: 'zh-CN',
    dateOptions: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  },
  logo: {
    src: '/src/assets/avatar.png',
    alt: 'Zane 的头像'
  },
  titleDelimiter: '·',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  customCss: [],
  header: {
    menu: [
      { title: '文章', link: withBase('/blog') },
      { title: '文档', link: withBase('/docs') },
      { title: '项目', link: withBase('/projects') },
      { title: '关于', link: withBase('/about') }
    ]
  },
  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [],
    credits: true,
    social: [
      { icon: 'github', label: 'GitHub', href: 'https://github.com/zane0454' },
      { icon: 'rss', label: 'RSS', href: withBase('/rss.xml') }
    ]
  },
  content: {
    externalLinks: {
      content: ' ↗',
      properties: { style: 'user-select:none' }
    },
    blogPageSize: 8,
    share: ['weibo'],
    imageCaption: true
  }
}

export const integ: IntegrationUserConfig = {
  pagefind: true,
  quote: {
    server: '',
    target: `() => ''`
  },
  typography: {
    class: 'prose text-base',
    blockquoteStyle: 'normal',
    inlineCodeBlockStyle: 'modern'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: { className: 'zoomable' }
  },
  waline: {
    enable: false,
    server: '',
    showMeta: false,
    additionalConfigs: {
      pageview: false,
      comment: false,
      imageUploader: false
    }
  }
}

const config = { ...theme, integ } as Config
export default config
