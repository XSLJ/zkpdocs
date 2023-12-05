import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import plugins from './plugins'
import { setupDirectives } from './directives'
import '../src/style'
import 'animate.css'
// svg-icon
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'
const app = createApp(App)

// 注册全局自定义指令
setupDirectives(app)

// 注册全局插件
app.use(plugins)
// app.component('ElInput', ElInput)
// app.component('ElRow', ElRow)
// app.component('ElForm', ElForm)
// app.component('ElFormItem', ElFormItem)
// app.component('ElCol', ElCol)
app.use(ElementPlus).use(Antd)
app.mount('#app')
