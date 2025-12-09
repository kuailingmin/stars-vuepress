import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/responsive.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/responsive.html\",\"title\":\"响应式\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"vue3/responsive.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>在vue3 提供了Ref和Reactive做数据响应</p>\\n</div>\\n<p><strong>Ref</strong></p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\"><pre><code class=\\\"language-javascript\\\"><span class=\\\"line\\\"><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> ref <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'vue'</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">let</span> a <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">0</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">let</span> b <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">ref</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\">a <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1</span></span>\\n<span class=\\\"line\\\">b <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1</span>  <span class=\\\"token comment\\\">//ts-error</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
