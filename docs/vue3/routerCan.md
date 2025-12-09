# 接收路由参数

::: tip 说明
   vue3接收路由里面的参数
:::


## 路由定义


``` js 
const routes: Array<RouteRecordRaw> = [
    {
        path: '/worktime/:id/:name',
        name: 'Worktime',
        component: () => import('../views/worktime/index.vue'),
    },
]
```

通过上面的定义，如果外链url里面参数不够是无法访问到页面内容的
我在一个路由定义了2个参数"id"，"name",那在vue3的页面里面怎么获取到这些参数呢？看下一步


``` js

  // 在访问的页面直接导入router
  import Router from '@/router/index'

  // 在Router中的currentRoute里面能找到参数
  const Params = Router.currentRoute.value.params
  console.log(Params)

```

打印结果：


![](../images/rt1.png)


