<template><div><!--
 * @Author: 蒯灵敏
 * @Date: 2025-06-12 13:54:25
 * @LastEditors: 蒯灵敏
 * @LastEditTime: 2025-06-12 14:15:20
 * @Description: 文件描述
 * @FilePath: /stars-vuepress/docs/standard/base.md
-->
<h1 id="前端规范" tabindex="-1"><a class="header-anchor" href="#前端规范"><span>前端规范</span></a></h1>
<h2 id="核心价值" tabindex="-1"><a class="header-anchor" href="#核心价值"><span>核心价值</span></a></h2>
<ol>
<li>
<p>提升可维护性</p>
<ul>
<li>统一代码风格（锁进、命名、注释）降低后期维护成本</li>
<li>语义化HTML标签（如 header、article）增强代码可读性</li>
</ul>
</li>
<li>
<p>优化团队协作</p>
<ul>
<li>减少风格争议，聚焦业务逻辑开发</li>
<li>规范的文件结构（如 src/components/）便于快速定位代码</li>
</ul>
</li>
<li>
<p>保障性能和安全</p>
<ul>
<li>资源压缩、合并请求（如CSS/JS文件≤10个）提升加载速度</li>
<li>防御XSS攻击（转义敏感字符如 &lt;&gt;&amp;）</li>
</ul>
</li>
</ol>
<h2 id="核心价值规范分类" tabindex="-1"><a class="header-anchor" href="#核心价值规范分类"><span>核心价值规范分类</span></a></h2>
<ol>
<li>
<p>基础规范</p>
<ul>
<li>比如html、css、js、ts等语法的规范</li>
</ul>
</li>
<li>
<p>组件与框架规范</p>
<ul>
<li>vue组件规范制定</li>
<li>路由、状态管理等规范制定</li>
</ul>
</li>
<li>
<p>工程化与性能规范</p>
<ul>
<li>
<p>资源优化：</p>
<ul>
<li>图片：合并雪碧图、使用字体图标、首屏外图片懒加载</li>
<li>静态资源：开启Gzip压缩、CDN加速</li>
</ul>
</li>
<li>
<p>安全与兼容性：</p>
<ul>
<li>外部链接加 rel=&quot;noopener&quot; 防安全漏洞</li>
<li>浏览器分级支持（如完全兼容Chrome/Firefox/Edge）</li>
</ul>
</li>
</ul>
</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>前端规范的核心是 一致性、可维护性、性能。制定时需结合团队技术栈和业务场景，通过工具约束（ESLint）和文档沉淀（如README规范）确保落地。定期复审规范以适应技术演进（如CSS新特性）</p>
</div></template>


