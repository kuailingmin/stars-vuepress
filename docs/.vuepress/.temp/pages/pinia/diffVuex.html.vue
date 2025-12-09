<template><div><h1 id="pinia-与-vuex-的比较" tabindex="-1"><a class="header-anchor" href="#pinia-与-vuex-的比较"><span>Pinia 与 Vuex 的比较</span></a></h1>
<p>Pinia 试图尽可能地接近 Vuex 的理念。它旨在测试 Vuex 下一次迭代的提案，并且取得了成功，因为我们目前有一个针对 Vuex 5 的开放 RFC，其 API 与 Pinia 使用的 API 非常相似。请注意，我 (Eduardo)，Pinia 的作者，是 Vue.js 核心团队的一员，并积极参与了 Router 和 Vuex 等 API 的设计。我个人对这个项目的意图是重新设计使用全球Stores的体验，同时保持 Vue 的平易近人的理念。我保持 Pinia 的 API 与 Vuex 一样接近，因为它不断向前发展，以使人们更容易迁移到 Vuex，甚至在未来融合两个项目（在 Vuex 下）。</p>
<h3 id="rfc" tabindex="-1"><a class="header-anchor" href="#rfc"><span>RFC</span></a></h3>
<p>虽然 Vuex 通过 RFC 从社区收集尽可能多的反馈，但 Pinia 没有。我根据我开发应用程序、阅读其他人的代码、为使用 Pinia 的客户工作以及在 Discord 上回答问题的经验来测试想法。这使我能够提供一种适用于各种情况和应用程序大小的有效解决方案。我经常发布并在保持其核心 API 不变的同时使库不断发展。</p>
<h3 id="与-vuex-3-x-4-x-的比较" tabindex="-1"><a class="header-anchor" href="#与-vuex-3-x-4-x-的比较"><span>与 Vuex 3.x/4.x 的比较</span></a></h3>
<font color=red  face="黑体">Vuex 3.x 是 Vuex 的 Vue 2 而 Vuex 4.x 是 Vue 3</font><p>Pinia API 与 Vuex ≤4 有很大不同，即：</p>
<ul>
<li>mutations不再存在。他们经常被认为是非常冗长的。他们最初带来了 devtools 集成，但这不再是问题。</li>
<li>无需创建自定义复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能利用 TS 类型推断。</li>
<li>不再需要注入魔法字符串、导入函数、调用它们，享受自动完成功能！</li>
<li>无需动态添加Store，默认情况下它们都是动态的，您甚至都不会注意到。请注意，您仍然可以随时手动使用Store进行注册，但因为它是自动的，您无需担心。</li>
<li>不再有模块的嵌套结构。您仍然可以通过在另一个Store中导入和使用Store来隐式嵌套Store，但 Pinia 通过设计提供平面结构，同时仍然支持Store之间的交叉组合方式。你甚至可以有 store 的循环依赖。</li>
<li>没有命名空间的模块。鉴于Store的扁平架构，“命名空间”Store是其定义方式所固有的，您可以说所有Stores都是命名空间的。
有关如何将现有的 Vuex ≤4 项目转换为使用 Pinia 的更详细说明，请参阅从<a href="https://pinia.vuejs.org/cookbook/migration-vuex.html" target="_blank" rel="noopener noreferrer">Vuex 迁移指南</a>。</li>
</ul>
</div></template>


