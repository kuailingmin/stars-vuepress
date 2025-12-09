# setup

::: tip 说明
   setup函数是vue3.x版本重要的函数，在项目实战中，它的语法有很多种方式，下面介绍几种常见的开发方式
:::


**基本版**</br>


``` js
<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const readersNumber = ref(0)
      const book = reactive({ title: 'Vue 3 Guide' })

      // 最基础的使用方式，必须提供return，把业务需要的变量和函数抛给template去使用
      return {
        readersNumber,
        book
      }
    }
  }
</script>
```



**实验版**</br>

不需要return方式，从代码结构上简化了很多，另外import的组件或者插件之类的，只要引入就能使用,比如组件，就不需要components去绑定

``` js
<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
  <Demo></Demo>
</template>

// 直接在script上添加setup
<script setup>
  import { ref, reactive } from 'vue'
  // 引入组件
  import Demo from '../demo/demo'

  const readersNumber = ref(0)
  const book = reactive({ title: 'Vue 3 Guide' })

</script>
```


**TS基础版**</br>
``` js
<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
  <Demo></Demo>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
  // 引入组件
  import Demo from '../demo/demo'

  export default defineComponent({
    components:{Demo}
    setup() {
      const readersNumber = ref(10)
      const book = reactive({ title: 'Vue 3 Guide' })
      return {
        readersNumber,
        book
      }
    }
  })
</script>

``` 


**setup中的参数**

``` js

<script setup="props, context" lang="ts">

<script>

``` 

**支持解构语法**

``` js

<script setup="props, { emit }" lang="ts">

<script>

``` 


volar是一个vscode插件，用来增强vue编写体验，使用volar插件可以获得script setup语法的最佳支持。