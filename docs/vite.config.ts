import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";
//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 60,
  buttonLabel: "搜索",
  placeholder: "Search docs",
};
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      Unocss(),
      SearchPlugin(options),
    ],
    optimizeDeps: {
      include: ['ant-design-vue', 'element-plus', 'sortablejs', 'animate.css', 'vue3-seamless-scroll']
    },
    server: {
      port: 8023,
      // open: true,
      host: true
    }
  }
})
