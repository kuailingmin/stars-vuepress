import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/sort.html.vue"
const data = JSON.parse("{\"path\":\"/java/sort.html\",\"title\":\"排序算法\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"java/sort.md\",\"excerpt\":\"\\n<p></p>\\n<h4>时间复杂度</h4>\\n<table>\\n<thead>\\n<tr>\\n<th>排序算法</th>\\n<th>最好(时间复杂度)</th>\\n<th>平均(时间复杂度)</th>\\n<th>最坏(时间复杂度)</th>\\n<th>稳定性</th>\\n<th>空间复杂度</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>冒泡排序</td>\\n<td><strong>O</strong>(n)</td>\\n<td><strong>O</strong>(n<sup>2</sup>)</td>\\n<td><strong>O</strong>(n<sup>2</sup>)</td>\\n<td>稳定</td>\\n<td><strong>O</strong>(1)</td>\\n</tr>\\n<tr>\\n<td><strong>快速排序</strong></td>\\n<td><strong>O</strong>(n*log<sub>2</sub>n)</td>\\n<td><strong>O</strong>(n*log<sub>2</sub>n)</td>\\n<td><strong>O</strong>(n<sup>2</sup>)</td>\\n<td>不稳定</td>\\n<td><strong>O</strong>(log<sub>2</sub>n)~<strong>O</strong>(n)</td>\\n</tr>\\n<tr>\\n<td>直接插入排序</td>\\n<td><strong>O</strong>(n)</td>\\n<td><strong>O</strong>(n<sup>2</sup>)</td>\\n<td><strong>O</strong>(n<sup>2</sup>)</td>\\n<td>稳定</td>\\n<td><strong>O</strong>(1)</td>\\n</tr>\\n<tr>\\n<td><strong>希尔排序</strong></td>\\n<td><strong>O</strong>(n)</td>\\n<td><strong>O</strong>(n<sup>1.3</sup>)</td>\\n<td><strong>O</strong>(n<sup>2</sup>)</td>\\n<td>不稳定</td>\\n<td><strong>O</strong>(1)</td>\\n</tr>\\n<tr>\\n<td>简单选择排序</td>\\n<td><strong>O</strong>(n)</td>\\n<td><strong>O</strong>(n<sup>2</sup>)</td>\\n<td><strong>O</strong>(n<sup>2</sup>)</td>\\n<td>不稳定</td>\\n<td><strong>O</strong>(1)</td>\\n</tr>\\n<tr>\\n<td><strong>堆排序</strong></td>\\n<td><strong>O</strong>(n*log<sub>2</sub>n)</td>\\n<td><strong>O</strong>(n*log<sub>2</sub>n)</td>\\n<td><strong>O</strong>(n*log<sub>2</sub>n)</td>\\n<td>不稳定</td>\\n<td><strong>O</strong>(1)</td>\\n</tr>\\n<tr>\\n<td><strong>归并排序</strong></td>\\n<td><strong>O</strong>(n*log<sub>2</sub>n)</td>\\n<td><strong>O</strong>(n*log<sub>2</sub>n)</td>\\n<td><strong>O</strong>(n*log<sub>2</sub>n)</td>\\n<td>稳定</td>\\n<td><strong>O</strong>(n)</td>\\n</tr>\\n<tr>\\n<td>基数排序</td>\\n<td><strong>O</strong>(d*(r+n))</td>\\n<td><strong>O</strong>(d*(r+n))</td>\\n<td><strong>O</strong>(d*(r+n))</td>\\n<td>稳定</td>\\n<td><strong>O</strong>(r*d+n)</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
