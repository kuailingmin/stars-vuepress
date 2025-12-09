import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/lifeCycle.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/lifeCycle.html\",\"title\":\"生命周期\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"vue3/lifeCycle.md\",\"excerpt\":\"\\n<p><strong>2.x 与 3.x版本对比</strong></p>\\n<table>\\n<thead>\\n<tr>\\n<th>2.x</th>\\n<th style=\\\"text-align:center\\\">3.x</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>beforeCreate</td>\\n<td style=\\\"text-align:center\\\">setup()</td>\\n</tr>\\n<tr>\\n<td>created</td>\\n<td style=\\\"text-align:center\\\">setup()</td>\\n</tr>\\n<tr>\\n<td>beforeMount</td>\\n<td style=\\\"text-align:center\\\">onBeforeMount</td>\\n</tr>\\n<tr>\\n<td>mounted</td>\\n<td style=\\\"text-align:center\\\">onMounted</td>\\n</tr>\\n<tr>\\n<td>updated</td>\\n<td style=\\\"text-align:center\\\">onUpdated</td>\\n</tr>\\n<tr>\\n<td>beforeDestroy</td>\\n<td style=\\\"text-align:center\\\">onBeforeUnmount</td>\\n</tr>\\n<tr>\\n<td>destoryed</td>\\n<td style=\\\"text-align:center\\\">onUnmounted</td>\\n</tr>\\n<tr>\\n<td>errorCaptured</td>\\n<td style=\\\"text-align:center\\\">onErrorCaptured</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
