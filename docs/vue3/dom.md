# 获取真实DOM

::: tip 说明
   介绍一下vue3.x版本中获取真实DOM的方式
:::

首先我们先来对比一下Vue2.x的方式

``` js
<template>
   <div ref="myDom"></div>
</template>
<script>
export default {
    mounted() {
       // 获取真实DOM
       this.$refs.myDom
    }
}
</script>

```

Vue3.x方式

``` js {2}
<template>
   <div :ref="getDom"></div>
</template>
<script setup>
  import { nextTick } from 'vue'
  let myDom = null

  const getDom = (el) => {
    myDom = el
  }

  nextTick(() => {
    console.log(myDom)
  })
</script>

```

<font color=red  face="黑体">注意:</font>一定是":ref" 而不是 "ref"，否则无法获取到值
