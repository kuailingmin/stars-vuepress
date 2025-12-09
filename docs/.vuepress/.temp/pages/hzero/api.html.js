import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/hzero/api.html.vue"
const data = JSON.parse("{\"path\":\"/hzero/api.html\",\"title\":\"接口权限配置\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"hzero/api.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>汉得提供了一套接口权限配置方案，此方案根据菜单维度来分配！</p>\\n</div>\\n<h3>准备工作</h3>\\n<ol>\\n<li>\\n<p>首先我们用超级管理员账户登录</p>\\n</li>\\n<li>\\n<p>打开角色管理，路径：系统管理 -&gt; 角色管理 -&gt; 角色管理</p>\\n<p>打开菜单管理：路径：系统管理 -&gt; 菜单管理 -&gt; 菜单管理</p>\\n</li>\\n</ol>\\n<h3>第一步：添加接口权限项</h3>\\n<p>首先进入菜单管理，选择租户层的菜单数据</p>\"}")
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
