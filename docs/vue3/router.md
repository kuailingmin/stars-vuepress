# 路由（vue-router）

* createRouter创建router实例
* router的模式分为
* createWebHistory -- history模式
* createWebHashHistory -- hash模式
* routes的约束类型是RouteRecordRaw

``` javascript
<script lang="ts">
    import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
    import Home from '../views/Home.vue'
    const routes: Array< RouteRecordRaw > = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
    ];

    const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
    })

    export default router
```

# 扩展路由额外属性

在实际项目开发中，常常会遇到这么一个场景，某一个路由是不需要渲染到侧边栏导航上的，此时我们可以给该路由添加一个hidden属性来实现。
在ts的强类型约束下，添加额外属性就会报错，那么我们就需要扩展RouteRecordRaw类型。

``` javascript
type RouteConfig = RouteRecordRaw & {hidden?: boolean}; //hidden 是可选属性
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden: true,
    meta: {
      permission: true,
      icon: ''
    }
  }
];
```

# 在setup中使用
需要导入useRouter创建一个router实例

``` javascript
<script lang="ts">
    import { useRouter } from 'vue-router';
    import { defineComponent } from 'vue';
    export default defineComponent({
    setup () {
        const router = useRouter();
        goRoute(path) {
        router.push({path})
        }
    }
    })
</script>
```