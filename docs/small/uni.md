<!--
 * @Author: 蒯灵敏
 * @Date: 2025-06-16 16:59:53
 * @LastEditors: 蒯灵敏
 * @LastEditTime: 2025-06-21 15:05:02
 * @Description: 文件描述
 * @FilePath: /stars-vuepress/docs/small/uni.md
-->
# 小程序框架介绍

::: tip 说明
   uniStars由最初始的官方cli脚手架模板生成,基于vue3 + Ts开发，内置了全局数据管理、请求封装、路由拦截等等，无需HBuilderX做开发，
:::

#### 特性
 小巧集成，开箱即用

#### UI组件库
 uniStars内置了uv-ui来作为基础组件库

#### ICON配置
本架构支持iconFonts中的图标库

#### 页面路由

1. 动态路由：根据环境变量动态添加/隐藏页面
2. 权限控制：过滤无权限页面
3. 统一配置：批量设置页面公共样式或属性
4. 多目录扫描：合并多个分散的页面目录


#### 请求封装

1. 基于uni.request封装
2. 支持header传递


#### 自动化组件

在components文件中内置了自动化组件声明机制，通过@uni-helper/vite-plugin-uni-components插件完成组件定义自动声明全局组件使用，在页面不用再使用import导入组件的方式，而是直接在template中直接使用

#### 自定义布局框架
在uniStars中配置了自定义布局的机制，可以让你扩展不同的页面布局，第一点减少代码量，第二点无限支撑业务场景扩展

#### 状态管理
在框架中嵌入了pinia来管理状态，配合pinia-plugin-persistedstate插件来做持久化

#### AutoImport
在框架中增加了自动import机制，把vue,uni-app,pinia等内置的API自动抛出，在页面开发中就不用写太多的import