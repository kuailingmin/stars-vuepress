# defineEmit
::: tip 说明
 在组件开发过程中，我们往往会碰到一个场景，子组件如何调用父组件进行事件操作？在Vue3.2版本中给我们提供defineEmits，接下来看看如何实现
:::


第一步
这里备注一下：在vue3.2之后版本就不用导入“defineEmit”了，直接可以用了
``` js
import { defineEmit } from 'vue'
```

第二步
``` js
// 定义事件
const emit = defineEmits(['demoEvent'])
```

接下来看完整使用代码：


**子组件（Children.vue）**

``` js
<template>
  <div @click="childrenEvent"></div>
</template>

<script setup>

// 定义事件
const emit = defineEmits(['demoEvent'])

//子组件事件
const childrenEvent = () => {
  // 抛出自定义事件
  emit('demoEvent')
}
</script>
```



**父组件 (Parent.vue)**

``` js
<template>
  <Children @demoEvent="parentEvent" />
</template>

<script setup>
// 引入子组件
import Children from './Children'

// 父组件事件，这样子组件也能操作
const parentEvent = () => {
}
</script>
```

这样就完成子组件调用父组件事件了

从  childrenEvent -->  @demoEvent -->  parentEvent
