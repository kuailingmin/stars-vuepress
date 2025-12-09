import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/Vue3/sets/index.html.vue"
const data = JSON.parse("{\"path\":\"/Vue3/sets/\",\"title\":\"工程配置\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"路径别名\",\"slug\":\"路径别名\",\"link\":\"#路径别名\",\"children\":[]},{\"level\":2,\"title\":\"打包分析\",\"slug\":\"打包分析\",\"link\":\"#打包分析\",\"children\":[]},{\"level\":2,\"title\":\"Proxy配置\",\"slug\":\"proxy配置\",\"link\":\"#proxy配置\",\"children\":[]},{\"level\":2,\"title\":\"gzip压缩\",\"slug\":\"gzip压缩\",\"link\":\"#gzip压缩\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"Vue3/sets/README.md\",\"excerpt\":\"\\n<h2>路径别名</h2>\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>方便我们在开发中很快的导入文件路径，而不是无限的'../'去找文件,如果项目支持ts,那么所有.ts文件遵循tsconfig的别名配置原则，如果是.vue文件，则支持vue.config.js配置原则</p>\\n</div>\\n<p><strong>vue文件添加路径依赖</strong><br></p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre><code><span class=\\\"line\\\">  <span class=\\\"token keyword\\\">const</span> path <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">require</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'path'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
