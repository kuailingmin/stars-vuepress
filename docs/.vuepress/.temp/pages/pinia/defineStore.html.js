import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/pinia/defineStore.html.vue"
const data = JSON.parse("{\"path\":\"/pinia/defineStore.html\",\"title\":\"defineStore\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"pinia/defineStore.md\",\"excerpt\":\"\\n<p>在深入研究核心概念之前，我们需要知道存储是使用定义的defineStore()，并且它需要一个唯一的名称，作为第一个参数传递：</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\"><pre><code class=\\\"language-javascript\\\"><span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> defineStore <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'pinia'</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">// useStore could be anything like useUser, useCart</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token comment\\\">// the first argument is a unique id of the store across your application</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">const</span> useStore <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">defineStore</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'main'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token comment\\\">// other options...</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
