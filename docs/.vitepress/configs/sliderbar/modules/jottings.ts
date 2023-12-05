import type { DefaultTheme } from 'vitepress'

export default [
  {
    text: 'Note',
    collapsed: true,
    items: [
      { text: '前端工程化', link: '/jottings/前端工程化' },
      { text: 'Node.js', link: '/jottings/node' },
      { text: '事件循环', link: '/jottings/事件循环' },
    ]
  }
] as DefaultTheme.SidebarItem[]
