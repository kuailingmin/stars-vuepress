# @chang 阻止冒泡


::: tip 场景
  在antd vue 组件库中使用checkbox组件中，阻止事件冒泡
:::

``` js
// 定义事件
  <a-checkbox 
    v-model:checked="isCheck" 
    @click.stop="" 
    @change="handleCheckChange(item)" />
```

这里只要加上 @click.stop="" 就可以成功的阻止change事件冒泡了