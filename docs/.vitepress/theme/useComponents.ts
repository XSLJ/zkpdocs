// import { vuePlugin } from 'vitepress-demo-editor'
// import 'vitepress-demo-editor/dist/style.css'
import elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Sortable from 'sortablejs'
// 导入并注册组件
import coms from './coms'
import { App } from 'vue'

export function useComponents(app: App) {
  app.use(elementplus).use(Antd)
  coms.forEach(com => {
    app.component(com.name, com.val)
  })
}
