<template><div><!--
 * @Author: 蒯灵敏
 * @Date: 2025-06-16 16:59:53
 * @LastEditors: 蒯灵敏
 * @LastEditTime: 2025-06-21 15:05:02
 * @Description: 文件描述
 * @FilePath: /stars-vuepress/docs/small/uni.md
-->
<h1 id="小程序框架介绍" tabindex="-1"><a class="header-anchor" href="#小程序框架介绍"><span>小程序框架介绍</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>uniStars由最初始的官方cli脚手架模板生成,基于vue3 + Ts开发，内置了全局数据管理、请求封装、路由拦截等等，无需HBuilderX做开发，</p>
</div>
<h4 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h4>
<p>小巧集成，开箱即用</p>
<h4 id="ui组件库" tabindex="-1"><a class="header-anchor" href="#ui组件库"><span>UI组件库</span></a></h4>
<p>uniStars内置了uv-ui来作为基础组件库</p>
<h4 id="icon配置" tabindex="-1"><a class="header-anchor" href="#icon配置"><span>ICON配置</span></a></h4>
<p>本架构支持iconFonts中的图标库</p>
<h4 id="页面路由" tabindex="-1"><a class="header-anchor" href="#页面路由"><span>页面路由</span></a></h4>
<ol>
<li>动态路由：根据环境变量动态添加/隐藏页面</li>
<li>权限控制：过滤无权限页面</li>
<li>统一配置：批量设置页面公共样式或属性</li>
<li>多目录扫描：合并多个分散的页面目录</li>
</ol>
<h4 id="请求封装" tabindex="-1"><a class="header-anchor" href="#请求封装"><span>请求封装</span></a></h4>
<ol>
<li>基于uni.request封装</li>
<li>支持header传递</li>
</ol>
<h4 id="自动化组件" tabindex="-1"><a class="header-anchor" href="#自动化组件"><span>自动化组件</span></a></h4>
<p>在components文件中内置了自动化组件声明机制，通过@uni-helper/vite-plugin-uni-components插件完成组件定义自动声明全局组件使用，在页面不用再使用import导入组件的方式，而是直接在template中直接使用</p>
<h4 id="自定义布局框架" tabindex="-1"><a class="header-anchor" href="#自定义布局框架"><span>自定义布局框架</span></a></h4>
<p>在uniStars中配置了自定义布局的机制，可以让你扩展不同的页面布局，第一点减少代码量，第二点无限支撑业务场景扩展</p>
<h4 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理"><span>状态管理</span></a></h4>
<p>在框架中嵌入了pinia来管理状态，配合pinia-plugin-persistedstate插件来做持久化</p>
<h4 id="autoimport" tabindex="-1"><a class="header-anchor" href="#autoimport"><span>AutoImport</span></a></h4>
<p>在框架中增加了自动import机制，把vue,uni-app,pinia等内置的API自动抛出，在页面开发中就不用写太多的import</p>
</div></template>


