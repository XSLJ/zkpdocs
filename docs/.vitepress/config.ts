import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
// import MarkdownPreview from 'vite-plugin-markdown-preview'
// import markdownPlugin from 'vitepress-demo-editor/markdownPlugin'
import nav from './configs/nav/index'
import sidebar from './configs/sliderbar'
export default defineConfig({
  title: '给我一个div',
  base: '/docs/',
  themeConfig: {
    siteTitle: '给我一个div', //文档标题
    logo: '/one-piece.jpg',
    sidebar,
    nav,
    algolia: {
      apiKey: 'cd33f27d81309e960bcc0c18e29ff9f1',
      indexName: 'zkpDocs',
      appId: 'VSNNG7UFXS',
      placeholder: '请输入关键词'
      // buttonText: '搜索'
    },
    // 标题深度，[2,3] 表示提取 h2 和 h3 标题
    outline: [2, 3]
  },
  // vite: {
  //   plugins: [MarkdownPreview()],
  // },
  head: [['link', { rel: 'icon', href: 'lbxx.jpg' }]],
  markdown: {
    lineNumbers: true,
    config: md => {
      // @ts-ignore
      md.use(demoBlockPlugin)
    }
  }
})
