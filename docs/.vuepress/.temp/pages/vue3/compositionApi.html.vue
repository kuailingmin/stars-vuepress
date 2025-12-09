<template><div><h1 id="vue-composition-api" tabindex="-1"><a class="header-anchor" href="#vue-composition-api"><span>vue composition API</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">什么是组合API</p>
<p>在vue3中引入的一种新的编写Vue组件的方式</p>
</div>
<p><strong>Vue2  VS  Vue3</strong></p>
<table>
<thead>
<tr>
<th>2.x(对象式API)</th>
<th style="text-align:center">3.x(组件式API)</th>
</tr>
</thead>
<tbody>
<tr>
<td>不利于复用</td>
<td style="text-align:center">极易复用(原生js)</td>
</tr>
<tr>
<td>潜在的命名冲突</td>
<td style="text-align:center">可灵活组合 （生命周期钩子可多次使用）</td>
</tr>
<tr>
<td>上下文丢失</td>
<td style="text-align:center">提供更好的上下文支持</td>
</tr>
<tr>
<td>有限的类型支持</td>
<td style="text-align:center">更好的TypeScript支持</td>
</tr>
<tr>
<td>按API类型组织</td>
<td style="text-align:center">按功能或逻辑组织（提供大型项目维护成本）</td>
</tr>
<tr>
<td></td>
<td style="text-align:center">可独立于Vue组件使用</td>
</tr>
</tbody>
</table>
<p><strong>什么是可组合的函数</strong></p>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>可复用逻辑的集合，专注点分离,不同于react hooks,Vue3的‘setup()’只会在组件建立时执行一次，并建立数据与逻辑之间的连结。</p>
</div>
</div></template>


