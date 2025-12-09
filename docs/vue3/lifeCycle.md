# 生命周期

**2.x 与 3.x版本对比**


| 2.x           | 3.x             |
| ------------- |:---------------:|
| beforeCreate  | setup()         | 
| created       | setup()         |
| beforeMount   | onBeforeMount   |
| mounted       | onMounted       |
| updated       | onUpdated       |
| beforeDestroy | onBeforeUnmount |
| destoryed     | onUnmounted     |
| errorCaptured | onErrorCaptured |


#### Vue2.x 生命周期回顾

1. <font color=red face="黑体">beforeCreate:</font> 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
2. <font color=red face="黑体">created:</font> 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前尚不可用。
3. <font color=red face="黑体">beforeMount:</font> 在挂载开始之前被调用：相关的 render 函数首次被调用。
4. <font color=red face="黑体">mounted:</font> 实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当mounted被调用时 vm.$el 也在文档内。
5. <font color=red face="黑体">beforeUpdate:</font> 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
6. <font color=red face="黑体">updated:</font> 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
7. <font color=red face="黑体">activated:</font> 被 keep-alive 缓存的组件激活时调用。
8. <font color=red face="黑体">deactivated:</font> 被 keep-alive 缓存的组件停用时调用。
9. <font color=red face="黑体">beforeDestroy:</font> 实例销毁之前调用。在这一步，实例仍然完全可用。
10. <font color=red face="黑体">destroyed:</font> 实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
11. <font color=red face="黑体">errorCaptured:</font> 当捕获一个来自子孙组件的错误时被调用。


#### Vue3.x 生命周期变化
**被替换**
1. <font color=red face="黑体">beforeCreate:</font> -> setup()
2. <font color=red face="黑体">created:</font> -> setup()

**重命名**
1. <font color=red face="黑体">beforeMount:</font> -> onBeforeMount
2. <font color=red face="黑体">mounted:</font> -> onMounted
3. <font color=red face="黑体">beforeUpdate:</font> -> onBeforeUpdate
4. <font color=red face="黑体">updated:</font> -> onUpdated
5. <font color=red face="黑体">beforeDestroy:</font> -> onBeforeUnmount
6. <font color=red face="黑体">destroyed:</font> -> onUnmounted
7. <font color=red face="黑体">errorCaptured:</font> -> onErrorCaptured


**新增**
新增的以下2个方便调试 debug 的回调钩子：
1. onRenderTracked
2. onRenderTriggered
