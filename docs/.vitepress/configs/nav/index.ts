// import type { NavItemWithLink } from 'vitepress'
export default [
  {
    text: '基础',
    items: [
      { text: 'css', link: '/css/css布局/grid布局' },
      { text: 'javaScript', link: '/javaScript/Api/IntersectionObserver' },
      { text: 'typeScript', link: '/typeScript/type/typeScript基础类型' },
      { text: 'git', link: '/git/git' },
    ],
  },
  {
    text: '框架',
    items: [
      { text: 'vue', link: '/vue/vite/vite项目' },
      { text: 'react', link: '/react/index' },
    ],
  },
  { text: '插件', link: '/plugins/sortable' },
  {
    text: '其他',
    items: [
      {
        text: '遇到的问题',
        items: [{ text: 'vue', link: '/problem/vue/sku' }],
      },
      {
        text: '杂项',
        items: [
          { text: '网页导航', link: '/webNav/javaScript', activeMatch: '/webNav/javaScript' },
          { text: '记录', link: '/jottings/前端工程化', activeMatch: '/jottings/' },
        ],
      },
    ],
  },
  { text: '我的掘金', link: 'https://juejin.cn/user/3923518298271431/posts' },
]
