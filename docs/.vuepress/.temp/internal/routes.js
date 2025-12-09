export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/AI/ragflow.html", { loader: () => import(/* webpackChunkName: "AI_ragflow.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/AI/ragflow.html.js"), meta: {"title":"RAG工作流"} }],
  ["/il8/base.html", { loader: () => import(/* webpackChunkName: "il8_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/il8/base.html.js"), meta: {"title":"前端国际化"} }],
  ["/java/binartTree.html", { loader: () => import(/* webpackChunkName: "java_binartTree.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/binartTree.html.js"), meta: {"title":"二叉树的遍历"} }],
  ["/java/class.html", { loader: () => import(/* webpackChunkName: "java_class.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/class.html.js"), meta: {"title":"类加载机制"} }],
  ["/java/hash.html", { loader: () => import(/* webpackChunkName: "java_hash.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/hash.html.js"), meta: {"title":"HashMap,HashTable,ConcurrentHashMap"} }],
  ["/java/jvmTime.html", { loader: () => import(/* webpackChunkName: "java_jvmTime.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/jvmTime.html.js"), meta: {"title":"JVM运行时数据区"} }],
  ["/java/lru.html", { loader: () => import(/* webpackChunkName: "java_lru.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/lru.html.js"), meta: {"title":"LRUCache 缓存算法"} }],
  ["/java/memory.html", { loader: () => import(/* webpackChunkName: "java_memory.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/memory.html.js"), meta: {"title":"Java内存"} }],
  ["/java/reflex.html", { loader: () => import(/* webpackChunkName: "java_reflex.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/reflex.html.js"), meta: {"title":"反射机制"} }],
  ["/java/sort.html", { loader: () => import(/* webpackChunkName: "java_sort.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/sort.html.js"), meta: {"title":"排序算法"} }],
  ["/java/threadStatus.html", { loader: () => import(/* webpackChunkName: "java_threadStatus.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/threadStatus.html.js"), meta: {"title":"线程的状态"} }],
  ["/hzero/api.html", { loader: () => import(/* webpackChunkName: "hzero_api.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/hzero/api.html.js"), meta: {"title":"接口权限配置"} }],
  ["/hzero/branch.html", { loader: () => import(/* webpackChunkName: "hzero_branch.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/hzero/branch.html.js"), meta: {"title":"分支管理"} }],
  ["/hzero/internation.html", { loader: () => import(/* webpackChunkName: "hzero_internation.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/hzero/internation.html.js"), meta: {"title":"国际化"} }],
  ["/hzero/lov.html", { loader: () => import(/* webpackChunkName: "hzero_lov.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/hzero/lov.html.js"), meta: {"title":"LOV 组件"} }],
  ["/hzero/renders.html", { loader: () => import(/* webpackChunkName: "hzero_renders.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/hzero/renders.html.js"), meta: {"title":"render 方法"} }],
  ["/hzero/workplace.html", { loader: () => import(/* webpackChunkName: "hzero_workplace.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/hzero/workplace.html.js"), meta: {"title":"工作台"} }],
  ["/pinia/base.html", { loader: () => import(/* webpackChunkName: "pinia_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/pinia/base.html.js"), meta: {"title":"pinia"} }],
  ["/pinia/defineStore.html", { loader: () => import(/* webpackChunkName: "pinia_defineStore.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/pinia/defineStore.html.js"), meta: {"title":"defineStore"} }],
  ["/pinia/diffVuex.html", { loader: () => import(/* webpackChunkName: "pinia_diffVuex.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/pinia/diffVuex.html.js"), meta: {"title":"Pinia 与 Vuex 的比较"} }],
  ["/project/commit.html", { loader: () => import(/* webpackChunkName: "project_commit.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/project/commit.html.js"), meta: {"title":"代码提交规范"} }],
  ["/project/plop.html", { loader: () => import(/* webpackChunkName: "project_plop.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/project/plop.html.js"), meta: {"title":"前端自动化工具"} }],
  ["/lit/base.html", { loader: () => import(/* webpackChunkName: "lit_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/lit/base.html.js"), meta: {"title":"Lit"} }],
  ["/lit/demo.html", { loader: () => import(/* webpackChunkName: "lit_demo.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/lit/demo.html.js"), meta: {"title":"Demo"} }],
  ["/jnpf/base.html", { loader: () => import(/* webpackChunkName: "jnpf_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/jnpf/base.html.js"), meta: {"title":"介绍"} }],
  ["/jnpf/handlebars.html", { loader: () => import(/* webpackChunkName: "jnpf_handlebars.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/jnpf/handlebars.html.js"), meta: {"title":"handlebars"} }],
  ["/standard/base.html", { loader: () => import(/* webpackChunkName: "standard_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/standard/base.html.js"), meta: {"title":"前端规范"} }],
  ["/standard/git.html", { loader: () => import(/* webpackChunkName: "standard_git.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/standard/git.html.js"), meta: {"title":"git规范"} }],
  ["/small/header.html", { loader: () => import(/* webpackChunkName: "small_header.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/small/header.html.js"), meta: {"title":"自动化页面路由"} }],
  ["/small/uni.html", { loader: () => import(/* webpackChunkName: "small_uni.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/small/uni.html.js"), meta: {"title":"小程序框架介绍"} }],
  ["/starsUse/base.html", { loader: () => import(/* webpackChunkName: "starsUse_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/starsUse/base.html.js"), meta: {"title":"介绍"} }],
  ["/starsUse/useJump.html", { loader: () => import(/* webpackChunkName: "starsUse_useJump.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/starsUse/useJump.html.js"), meta: {"title":"useJump"} }],
  ["/starsUse/useToggle.html", { loader: () => import(/* webpackChunkName: "starsUse_useToggle.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/starsUse/useToggle.html.js"), meta: {"title":"useToggle"} }],
  ["/starsUi/base.html", { loader: () => import(/* webpackChunkName: "starsUi_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/starsUi/base.html.js"), meta: {"title":"介绍"} }],
  ["/tiny/base.html", { loader: () => import(/* webpackChunkName: "tiny_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/tiny/base.html.js"), meta: {"title":"微前端架构分析"} }],
  ["/vue2/base.html", { loader: () => import(/* webpackChunkName: "vue2_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue2/base.html.js"), meta: {"title":"基本知识点"} }],
  ["/vuex/base.html", { loader: () => import(/* webpackChunkName: "vuex_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vuex/base.html.js"), meta: {"title":"Vuex4 版本开发"} }],
  ["/vuex/mapActions.html", { loader: () => import(/* webpackChunkName: "vuex_mapActions.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vuex/mapActions.html.js"), meta: {"title":"mapActions"} }],
  ["/vuex/mapGetters.html", { loader: () => import(/* webpackChunkName: "vuex_mapGetters.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vuex/mapGetters.html.js"), meta: {"title":"mapGetters"} }],
  ["/vuex/mapMutations.html", { loader: () => import(/* webpackChunkName: "vuex_mapMutations.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vuex/mapMutations.html.js"), meta: {"title":"mapMutations"} }],
  ["/vuex/mapState.html", { loader: () => import(/* webpackChunkName: "vuex_mapState.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vuex/mapState.html.js"), meta: {"title":"mapState"} }],
  ["/knowledge/changeEvent.html", { loader: () => import(/* webpackChunkName: "knowledge_changeEvent.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/changeEvent.html.js"), meta: {"title":"@chang 阻止冒泡"} }],
  ["/knowledge/cssQuery.html", { loader: () => import(/* webpackChunkName: "knowledge_cssQuery.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/cssQuery.html.js"), meta: {"title":"css Query"} }],
  ["/knowledge/eventLoop.html", { loader: () => import(/* webpackChunkName: "knowledge_eventLoop.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/eventLoop.html.js"), meta: {"title":"事件循环"} }],
  ["/knowledge/grammar.html", { loader: () => import(/* webpackChunkName: "knowledge_grammar.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/grammar.html.js"), meta: {"title":"Javascript语法简化"} }],
  ["/knowledge/http.html", { loader: () => import(/* webpackChunkName: "knowledge_http.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/http.html.js"), meta: {"title":"HTTP/1HTTP/2HTTP/3"} }],
  ["/knowledge/interrupt.html", { loader: () => import(/* webpackChunkName: "knowledge_interrupt.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/interrupt.html.js"), meta: {"title":"如何中断已发出去的请求"} }],
  ["/knowledge/isWebsocket.html", { loader: () => import(/* webpackChunkName: "knowledge_isWebsocket.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/isWebsocket.html.js"), meta: {"title":"Http判断协议是不是websocket"} }],
  ["/knowledge/jsMethod.html", { loader: () => import(/* webpackChunkName: "knowledge_jsMethod.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/jsMethod.html.js"), meta: {"title":"JavaScript方法封装"} }],
  ["/knowledge/jsdemo.html", { loader: () => import(/* webpackChunkName: "knowledge_jsdemo.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/jsdemo.html.js"), meta: {"title":"JavaScript常用Demo"} }],
  ["/knowledge/mediaDevices.html", { loader: () => import(/* webpackChunkName: "knowledge_mediaDevices.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/mediaDevices.html.js"), meta: {"title":"navigator.mediaDevices API"} }],
  ["/knowledge/meta.html", { loader: () => import(/* webpackChunkName: "knowledge_meta.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/meta.html.js"), meta: {"title":"meta标签"} }],
  ["/knowledge/multifile.html", { loader: () => import(/* webpackChunkName: "knowledge_multifile.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/multifile.html.js"), meta: {"title":"自动导入文件"} }],
  ["/knowledge/ssg.html", { loader: () => import(/* webpackChunkName: "knowledge_ssg.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/ssg.html.js"), meta: {"title":"SSG"} }],
  ["/knowledge/ssr.html", { loader: () => import(/* webpackChunkName: "knowledge_ssr.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/ssr.html.js"), meta: {"title":"SSR服务端渲染"} }],
  ["/knowledge/symbol.html", { loader: () => import(/* webpackChunkName: "knowledge_symbol.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/symbol.html.js"), meta: {"title":"symbol"} }],
  ["/vue3/base.html", { loader: () => import(/* webpackChunkName: "vue3_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/base.html.js"), meta: {"title":"基本语法"} }],
  ["/vue3/compositionApi.html", { loader: () => import(/* webpackChunkName: "vue3_compositionApi.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/compositionApi.html.js"), meta: {"title":"vue composition API"} }],
  ["/vue3/css.html", { loader: () => import(/* webpackChunkName: "vue3_css.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/css.html.js"), meta: {"title":"style (黑科技)"} }],
  ["/vue3/defineEmit.html", { loader: () => import(/* webpackChunkName: "vue3_defineEmit.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/defineEmit.html.js"), meta: {"title":"defineEmit"} }],
  ["/vue3/dom.html", { loader: () => import(/* webpackChunkName: "vue3_dom.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/dom.html.js"), meta: {"title":"获取真实DOM"} }],
  ["/vue3/effect.html", { loader: () => import(/* webpackChunkName: "vue3_effect.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/effect.html.js"), meta: {"title":"响应式原理实现"} }],
  ["/vue3/filter.html", { loader: () => import(/* webpackChunkName: "vue3_filter.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/filter.html.js"), meta: {"title":"过滤器"} }],
  ["/vue3/i18n.html", { loader: () => import(/* webpackChunkName: "vue3_i18n.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/i18n.html.js"), meta: {"title":"国际化"} }],
  ["/vue3/lifeCycle.html", { loader: () => import(/* webpackChunkName: "vue3_lifeCycle.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/lifeCycle.html.js"), meta: {"title":"生命周期"} }],
  ["/vue3/proxy.html", { loader: () => import(/* webpackChunkName: "vue3_proxy.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/proxy.html.js"), meta: {"title":"Proxy"} }],
  ["/vue3/responsive.html", { loader: () => import(/* webpackChunkName: "vue3_responsive.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/responsive.html.js"), meta: {"title":"响应式"} }],
  ["/vue3/router.html", { loader: () => import(/* webpackChunkName: "vue3_router.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/router.html.js"), meta: {"title":"路由（vue-router）"} }],
  ["/vue3/routerCan.html", { loader: () => import(/* webpackChunkName: "vue3_routerCan.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/routerCan.html.js"), meta: {"title":"接收路由参数"} }],
  ["/vue3/setup.html", { loader: () => import(/* webpackChunkName: "vue3_setup.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/setup.html.js"), meta: {"title":"setup"} }],
  ["/vue3/summary.html", { loader: () => import(/* webpackChunkName: "vue3_summary.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/summary.html.js"), meta: {"title":"隐藏神技"} }],
  ["/vue3/timeSection.html", { loader: () => import(/* webpackChunkName: "vue3_timeSection.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue3/timeSection.html.js"), meta: {"title":"时间切片"} }],
  ["/react/base.html", { loader: () => import(/* webpackChunkName: "react_base.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/react/base.html.js"), meta: {"title":"React知识点"} }],
  ["/react/obsolete.html", { loader: () => import(/* webpackChunkName: "react_obsolete.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/react/obsolete.html.js"), meta: {"title":"React Hooks 过时的闭包"} }],
  ["/react/render.html", { loader: () => import(/* webpackChunkName: "react_render.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/react/render.html.js"), meta: {"title":"re-render原理及优化"} }],
  ["/react/setState.html", { loader: () => import(/* webpackChunkName: "react_setState.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/react/setState.html.js"), meta: {"title":"设置状态"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
