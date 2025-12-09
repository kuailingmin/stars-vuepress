<template><div><h1 id="react知识点" tabindex="-1"><a class="header-anchor" href="#react知识点"><span>React知识点</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>react.js大杂烩</p>
</div>
<h3 id="jsx与fiber" tabindex="-1"><a class="header-anchor" href="#jsx与fiber"><span>jsx与Fiber</span></a></h3>
<p>在源码中区分mount和update，mount是初次渲染根据jsx生成Fiber对象，在update的时候根据最新状态的jsx和当前的Fiber对象做对比生成新的Fiber对象。</p>
<h3 id="hooks为什么不能写在条件判断中" tabindex="-1"><a class="header-anchor" href="#hooks为什么不能写在条件判断中"><span>hooks为什么不能写在条件判断中</span></a></h3>
<p>如果写了多个hooks，在源码中会创建成一个链表，如果写在判断中，hooks链表顺序会乱！</p>
</div></template>


