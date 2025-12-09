import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/changeEvent.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/changeEvent.html\",\"title\":\"@chang 阻止冒泡\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"knowledge/changeEvent.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">场景</p>\\n<p>在antd vue 组件库中使用checkbox组件中，阻止事件冒泡</p>\\n</div>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\"><pre><code class=\\\"language-javascript\\\"><span class=\\\"line\\\"><span class=\\\"token comment\\\">// 定义事件</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token operator\\\">&lt;</span>a<span class=\\\"token operator\\\">-</span>checkbox </span>\\n<span class=\\\"line\\\">    v<span class=\\\"token operator\\\">-</span>model<span class=\\\"token operator\\\">:</span>checked<span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"isCheck\\\"</span> </span>\\n<span class=\\\"line\\\">    @click<span class=\\\"token punctuation\\\">.</span>stop<span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"\\\"</span> </span>\\n<span class=\\\"line\\\">    @change<span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"handleCheckChange(item)\\\"</span> <span class=\\\"token operator\\\">/</span><span class=\\\"token operator\\\">&gt;</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
