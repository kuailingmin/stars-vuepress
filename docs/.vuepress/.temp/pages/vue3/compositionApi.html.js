import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/compositionApi.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/compositionApi.html\",\"title\":\"vue composition API\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"vue3/compositionApi.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">什么是组合API</p>\\n<p>在vue3中引入的一种新的编写Vue组件的方式</p>\\n</div>\\n<p><strong>Vue2  VS  Vue3</strong></p>\\n<table>\\n<thead>\\n<tr>\\n<th>2.x(对象式API)</th>\\n<th style=\\\"text-align:center\\\">3.x(组件式API)</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>不利于复用</td>\\n<td style=\\\"text-align:center\\\">极易复用(原生js)</td>\\n</tr>\\n<tr>\\n<td>潜在的命名冲突</td>\\n<td style=\\\"text-align:center\\\">可灵活组合 （生命周期钩子可多次使用）</td>\\n</tr>\\n<tr>\\n<td>上下文丢失</td>\\n<td style=\\\"text-align:center\\\">提供更好的上下文支持</td>\\n</tr>\\n<tr>\\n<td>有限的类型支持</td>\\n<td style=\\\"text-align:center\\\">更好的TypeScript支持</td>\\n</tr>\\n<tr>\\n<td>按API类型组织</td>\\n<td style=\\\"text-align:center\\\">按功能或逻辑组织（提供大型项目维护成本）</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td style=\\\"text-align:center\\\">可独立于Vue组件使用</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
