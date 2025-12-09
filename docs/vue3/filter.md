# 过滤器

::: tip 说明
   vue2.x版本中，我们经常会用到过滤器来处理页面数据显示逻辑，而在vue3.x版本中已经删除此功能
:::

``` js 
<template>
  <h1>Bank Account Balance</h1>
  <p>{{ accountInUSD }}</p>
</template>

<script>
  export default {
    props: {
      accountBalance: {
        type: Number,
        required: true
      }
    },
    computed: {
      accountInUSD() {
        return '$' + this.accountBalance
      }
    }
  }
</script>

```

官方建议用计算属性或方法代替过滤器，而不是使用过滤器，但是官方还提供了另一种方式“全局过滤器”

## 全局过滤器


``` js 
// main.js
const app = createApp(App)

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  }
}

```

然后，你可以通过 $filters 对象修改所有的模板


``` html
<template>
  <h1>Bank Account Balance</h1>
  <p>{{ $filters.currencyUSD(accountBalance) }}</p>
</template>

```

在这里我们要了解一下globalProperties是干什么的


## globalProperties


类型：[key: string]: any

默认：undefined

用法：

``` js
app.config.globalProperties.foo = 'bar'

app.component('child-component', {
  mounted() {
    console.log(this.foo) // 'bar'
  }
})
```

添加一个可以在应用的任何组件实例中访问的全局 property。组件的 property 在命名冲突具有优先权。


vue2.x 与 vue3.x 使用对比

``` js
// 之前(Vue 2.x)
Vue.prototype.$http = () => {}

// 之后(Vue 3.x)
const app = createApp({})
app.config.globalProperties.$http = () => {}
```