import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/i18n.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/i18n.html\",\"title\":\"国际化\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"vue3/i18n.md\",\"excerpt\":\"\\n<p>项目工程必备配置，文件路径在src/locales</p>\\n<p><strong>英文版(en.ts)</strong><br></p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\"><pre><code class=\\\"language-javascript\\\"><span class=\\\"line\\\"><span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">default</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">  <span class=\\\"token literal-property property\\\">message</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">'hello i18n !!'</span><span class=\\\"token punctuation\\\">,</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
