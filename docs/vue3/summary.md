# 隐藏神技

### 模版记忆

* 场景：列表渲染后不变，却反复diff


``` html
 <template>
  <ul>
    <li v-for="item in list" :key="item.id" v-memo="[item.name]">
      {{ item.name }}
    </li>
  </ul>
 </template>
```
比computed更轻量，依赖变化时才patch



### 但文件内设置组件名称

* 场景：想用`<script setup>` 又要name

``` javascript
<script lang="ts" setup>
  defineOptions{[name: 'myComponent']}
</script>
```


### 安全模版引用

* 场景：组合式里拿DOM,告别ref(null) 魔术字符串

``` vue
<template>
  <canvas v-template-ref="canvas" />
</template>


<script lang="ts" setup>
   const canvas = useTemplateRef('canvas')

   onMounted(() => canvas.value?.getContext('2d'))
</script>

```



### 精准暴露子组件API

* 场景：父组件调用子组件的方法


``` vue
<!--Child.vue-->
<script lang="ts" setup>
   const open = () => console.log('open')

   defineExpose({ open })
</script>

<!--Parent.vue-->
<Child ref="child" @click="child.open()" />

```


### css变量注入

* 场景：主题色一键切换

``` vue
<template>
  <div class="box" :style="{ '--bg-color': color }" />
</template>

<style scoped>

 div{ color: var(--bg-color) }

</style>

```


### 静态节点

* 场景：纯展示文本，用不更新

```vue
  <p v-once>{{text}}</p>
```


编译时直接输出静态HTML,无diff开销



### 懒加载路由

* 场景：路由级代码分割，首屏馊身

```vue
  const Home = defineAsyncComponent(()=>import('./Home.vue'))
```


与Suspense配合使用,首屏js -70%