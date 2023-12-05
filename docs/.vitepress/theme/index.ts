/*
 * @Author: zhangkaipeng
 * @LastEditTime: 2022-12-15 15:46:07
 * @LastEditors: 章凯鹏
 * @Description:
 */

import { useComponents } from './useComponents'
import DefaultTheme from 'vitepress/theme'
// 自定义样式
import './style/index.css'
// unocss样式
import 'uno.css'
import 'animate.css'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    useComponents(app)
  }
}
