import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/vue3/introduce/compositionApi.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/introduce/compositionApi.html\",\"title\":\"vue composition API\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"vue3/introduce/compositionApi.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">什么是组合API</p>\\n<p>在vue3中引入的一种新的编写Vue组件的方式</p>\\n</div>\\n<p><strong>Vue2  VS  Vue3</strong></p>\\n<table>\\n<thead>\\n<tr>\\n<th>2.x(对象式API)</th>\\n<th style=\\\"text-align:center\\\">3.x(组件式API)</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>不利于复用</td>\\n<td style=\\\"text-align:center\\\">极易复用(原生js)</td>\\n</tr>\\n<tr>\\n<td>潜在的命名冲突</td>\\n<td style=\\\"text-align:center\\\">可灵活组合 （生命周期钩子可多次使用）</td>\\n</tr>\\n<tr>\\n<td>上下文丢失</td>\\n<td style=\\\"text-align:center\\\">提供更好的上下文支持</td>\\n</tr>\\n<tr>\\n<td>有限的类型支持</td>\\n<td style=\\\"text-align:center\\\">更好的TypeScript支持</td>\\n</tr>\\n<tr>\\n<td>按API类型组织</td>\\n<td style=\\\"text-align:center\\\">按功能或逻辑组织（提供大型项目维护成本）</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td style=\\\"text-align:center\\\">可独立于Vue组件使用</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
