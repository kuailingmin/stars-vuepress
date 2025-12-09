<template><div><h1 id="基本知识点" tabindex="-1"><a class="header-anchor" href="#基本知识点"><span>基本知识点</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>总结一些vue2版本的知识点</p>
</div>
<h2 id="_1-vue的核心是什么" tabindex="-1"><a class="header-anchor" href="#_1-vue的核心是什么"><span>1.Vue的核心是什么</span></a></h2>
<p>Vue是一套构建用户界面的渐进式自底向上增量开发的MVVM框架，vue的核心只关注视图层，</p>
<p>核心思想：</p>
<p>数据驱动（视图的内容随着数据的改变而改变）</p>
<p>组件化（可以增加代码的复用性，可维护性，可测试性，提高开发效率，方便重复使用，体现了高内聚低耦合）</p>
<h2 id="_2-简述vue的理解" tabindex="-1"><a class="header-anchor" href="#_2-简述vue的理解"><span>2.简述vue的理解</span></a></h2>
<p>Vue是一套构建用户界面的渐进式的自底向上增量开发的MVVM框架，核心是关注视图层，vue的核心是为了解决数据的绑定问题，为了开发大型单页面应用和组件化，所以vue的核心思想是数据驱动和组件化，这里也说一下MVVM思想，MVVM思想是 模型  视图  vm是v和m连接的桥梁，当模型层数据修改时，VM层会检测到，并通知视图层进行相应修改</p>
<h2 id="_3-vue组件中的data为什么是函数" tabindex="-1"><a class="header-anchor" href="#_3-vue组件中的data为什么是函数"><span>3.Vue组件中的data为什么是函数</span></a></h2>
<p>Data是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立，不会相互影响</p>
<p>如果是引用类型（对象），当多个组件共用一个数据源时，一处数据改变，所有的组件数据都会改变，所以要利用函数通过return返回对象的拷贝，（返回一个新数据），让每个实例都有自己的作用域，相互不影响。</p>
<h2 id="_4-vue双向绑定的原理" tabindex="-1"><a class="header-anchor" href="#_4-vue双向绑定的原理"><span>4.Vue双向绑定的原理</span></a></h2>
<p>Vue双向绑定就是：数据变化更新视图，视图变化更新数据</p>
<p>Vue数据双向绑定是通过数据劫持和观察者模式来实现的，</p>
<p>数据劫持，object.defineproperty它的目的是：当给属性赋值的时候，程序可以感知到，就可以控制改变属性值</p>
<p>观察者模式 当属性发生改变的时候，使用该数据的地方也发生改变</p>
<h2 id="_5-vue中组件怎么传值" tabindex="-1"><a class="header-anchor" href="#_5-vue中组件怎么传值"><span>5.Vue中组件怎么传值</span></a></h2>
<p>正向：父传子  父组件把要传递的数据绑定在属性上，发送，子组件通过props接收</p>
<p>逆向：子传父  子组件通过this.$emit（自定义事件名，要发送的数据），父组件设置一个监听事件来接收，然后拿到数据</p>
<p>兄弟：eventbus  中央事件总线</p>
<p>通过Vuex</p>
<h2 id="_6-槽口请简述" tabindex="-1"><a class="header-anchor" href="#_6-槽口请简述"><span>6.槽口请简述</span></a></h2>
<p>大概分这几点，首先槽口（插槽）可以放什么内容？放在哪？什么作用？可以放任意内容，在子组件中使用，是为了将父组件中的子组件模板数据正常显示。</p>
<p>具名插槽和匿名插槽，作用域插槽，说白了就是在组件上的属性，可以在组件元素内使用，</p>
<p>可以在父组件中使用slot-scope从子组件获取数据</p>
<h2 id="_7-计算属性与watch区别" tabindex="-1"><a class="header-anchor" href="#_7-计算属性与watch区别"><span>7.计算属性与watch区别</span></a></h2>
<p>Computed  watch   区别就是computed的缓存功能，当无关数据数据改变时，不会重新计算，直接使用缓存中的值。计算属性是用来声明式的描述一个值依赖了其他的值，当所依赖的值后者变量发生变化时，计算属性也跟着改变，</p>
<p>Watch监听的是在data中定义的变量，当该变量变化时，会触发watch中的方法</p>
<h2 id="_8-vue首屏加载慢的原因-怎么解决的-白屏时间怎么检测-怎么解决白屏问题" tabindex="-1"><a class="header-anchor" href="#_8-vue首屏加载慢的原因-怎么解决的-白屏时间怎么检测-怎么解决白屏问题"><span>8.Vue首屏加载慢的原因，怎么解决的，白屏时间怎么检测，怎么解决白屏问题</span></a></h2>
<p>首屏加载慢的原因：</p>
<p>第一次加载页面有很多组件数据需要渲染</p>
<p>解决方法：</p>
<p>1.路由懒加载  component：（）=&gt;import(“路由地址”)</p>
<p>2.ui框架按需加载</p>
<p>3.gzip压缩</p>
<p>白屏时间检测：</p>
<p>解决白屏问题：</p>
<p>①使用v-text渲染数据</p>
<p>②使用{{}}语法渲染数据，但是同时使用v-cloak指令（用来保持在元素上直到关联实例结束时候进行编译），v-cloak要放在什么位置呢，v-cloak并不需要添加到每个标签，只要在el挂载的标签上添加就可以</p>
<h2 id="_9-vue双数据绑定过程中-这边儿数据改变了怎么通知另一边改变" tabindex="-1"><a class="header-anchor" href="#_9-vue双数据绑定过程中-这边儿数据改变了怎么通知另一边改变"><span>9. Vue双数据绑定过程中，这边儿数据改变了怎么通知另一边改变</span></a></h2>
<p>数据劫持和观察者模式</p>
<p>Vue数据双向绑定是通过数据劫持和观察者模式来实现的，</p>
<p>数据劫持，object.defineproperty它的目的是：当给属性赋值的时候，程序可以感知到，就可以控制属性值的有效范围，可以改变其他属性的值</p>
<p>观察者模式它的目的是当属性发生改变的时候，使用该数据的地方也发生改</p>
<h2 id="_10-vuex流程" tabindex="-1"><a class="header-anchor" href="#_10-vuex流程"><span>10.Vuex流程</span></a></h2>
<p>在vue组件里面，通过dispatch来触发actions提交修改数据的操作，然后通过actions的commit触发mutations来修改数据，mutations接收到commit的请求，就会自动通过mutate来修改state，最后由store触发每一个调用它的组件的更新</p>
<h2 id="_11-vuex怎么请求异步数据" tabindex="-1"><a class="header-anchor" href="#_11-vuex怎么请求异步数据"><span>11.Vuex怎么请求异步数据</span></a></h2>
<p>1.首先在state中创建变量</p>
<p>2.然后在action中调用封装好的axios请求，异步接收数据，commit提交给mutations</p>
<p>Mutations中改变state中的状态，将从action中获取到的值赋值给state</p>
<h2 id="_12-vuex中action如何提交给mutation的" tabindex="-1"><a class="header-anchor" href="#_12-vuex中action如何提交给mutation的"><span>12.Vuex中action如何提交给mutation的</span></a></h2>
<p>Action函数接收一个与store实例具有相同方法和属性的context对象，可以调用context.commit提交一个mutation，或者通过context.state和context.getters获取state和getters</p>
<h2 id="_13-route与router区别" tabindex="-1"><a class="header-anchor" href="#_13-route与router区别"><span>13.Route与router区别</span></a></h2>
<ol>
<li>
<p>router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。</p>
</li>
<li>
<p>route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等</p>
</li>
</ol>
<h2 id="_14-vuex的state特性是" tabindex="-1"><a class="header-anchor" href="#_14-vuex的state特性是"><span>14.vuex的State特性是</span></a></h2>
<p>State就是数据源的存放地</p>
<p>State里面的数据是响应式的，state中的数据改变，对应这个数据的组件也会发生改变</p>
<p>State通过mapstate把全局的state和getters映射到当前组件的计算属性中</p>
<h2 id="_15-vuex的getter特性是" tabindex="-1"><a class="header-anchor" href="#_15-vuex的getter特性是"><span>15.vuex的Getter特性是？</span></a></h2>
<p>Getter可以对state进行计算操作，它就是store的计算属性</p>
<p>Getter可以在多组件之间复用</p>
<p>如果一个状态只在一个组件内使用，可以不用getters</p>
<h2 id="_16-v-for与v-if优先级" tabindex="-1"><a class="header-anchor" href="#_16-v-for与v-if优先级"><span>16.v-for与v-if优先级</span></a></h2>
<p>首先不要把v-if与v-for用在同一个元素上，原因：v-for比v-if优先，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候。</p>
<p>v-for 比 v-if 具有更高的优先级</p>
</div></template>


