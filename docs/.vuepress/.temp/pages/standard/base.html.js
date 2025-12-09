import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/standard/base.html.vue"
const data = JSON.parse("{\"path\":\"/standard/base.html\",\"title\":\"前端规范\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"standard/base.md\",\"excerpt\":\"<!--\\n * @Author: 蒯灵敏\\n * @Date: 2025-06-12 13:54:25\\n * @LastEditors: 蒯灵敏\\n * @LastEditTime: 2025-06-12 14:15:20\\n * @Description: 文件描述\\n * @FilePath: /stars-vuepress/docs/standard/base.md\\n-->\\n<h1>前端规范</h1>\\n<h2>核心价值</h2>\\n<ol>\\n<li>\\n<p>提升可维护性</p>\\n<ul>\\n<li>统一代码风格（锁进、命名、注释）降低后期维护成本</li>\\n<li>语义化HTML标签（如 header、article）增强代码可读性</li>\\n</ul>\\n</li>\\n<li>\\n<p>优化团队协作</p>\\n<ul>\\n<li>减少风格争议，聚焦业务逻辑开发</li>\\n<li>规范的文件结构（如 src/components/）便于快速定位代码</li>\\n</ul>\\n</li>\\n<li>\\n<p>保障性能和安全</p>\\n<ul>\\n<li>资源压缩、合并请求（如CSS/JS文件≤10个）提升加载速度</li>\\n<li>防御XSS攻击（转义敏感字符如 &lt;&gt;&amp;）</li>\\n</ul>\\n</li>\\n</ol>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
