import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
// 导入主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

// 导入自定义组件
import {
    // 网页导航卡片组件
    CardList,
    CardList2,
    // 拖拽
    DragSimple,
    DragUpload,
    //无限滚动
    // Vue3SeamlessScroll,
    //过渡
    VueTransition,
    TransitionAnimate,
    TransitionAnimateThird,
    BothTransAndAnimate,
    // 插件 sortablejs
    SortableBasicDemo,
    SortableHandle,
    SortableClasses,
    // Api
    IntersectionObserver,
    ResizeObserver,
    CssDrag,
    // form表单
    FormExample,
    // css
    DynamicHeight
} from '@zkp-docs/examples'

// 处理组件自定义
export default [
    Demo,
    DemoBlock,
    DragSimple,
    // Vue3SeamlessScroll,
    DragUpload,
    VueTransition,
    TransitionAnimate,
    TransitionAnimateThird,
    BothTransAndAnimate,
    CardList,
    CardList2,
    SortableBasicDemo,
    SortableHandle,
    SortableClasses,
    IntersectionObserver,
    ResizeObserver,
    CssDrag,
    FormExample,
    DynamicHeight
].map(com => ({
    name: com.name,
    val: com
}))

