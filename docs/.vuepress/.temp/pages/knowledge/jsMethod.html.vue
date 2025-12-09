<template><div><h1 id="javascript方法封装" tabindex="-1"><a class="header-anchor" href="#javascript方法封装"><span>JavaScript方法封装</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>记录一些常用的函数封装</p>
</div>
<h3 id="_1-输入一个值-返回其数据类型" tabindex="-1"><a class="header-anchor" href="#_1-输入一个值-返回其数据类型"><span>1.输入一个值，返回其数据类型</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function type(para) {</span>
<span class="line">    return Object.prototype.toString.call(para)</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-数组去重" tabindex="-1"><a class="header-anchor" href="#_2-数组去重"><span>2.数组去重</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function unique1(arr) {</span>
<span class="line">    return [...new Set(arr)]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function unique2(arr) {</span>
<span class="line">    var obj = {};</span>
<span class="line">    return arr.filter(ele =&gt; {</span>
<span class="line">        if (!obj[ele]) {</span>
<span class="line">            obj[ele] = true;</span>
<span class="line">            return true;</span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function unique3(arr) {</span>
<span class="line">    var result = [];</span>
<span class="line">    arr.forEach(ele =&gt; {</span>
<span class="line">        if (result.indexOf(ele) == -1) {</span>
<span class="line">            result.push(ele)</span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line">    return result;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-字符串去重" tabindex="-1"><a class="header-anchor" href="#_3-字符串去重"><span>3.字符串去重</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">String.prototype.unique = function () {</span>
<span class="line">    var obj = {},</span>
<span class="line">        str = '',</span>
<span class="line">        len = this.length;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        if (!obj[this[i]]) {</span>
<span class="line">            str += this[i];</span>
<span class="line">            obj[this[i]] = true;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return str;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">###### //去除连续的字符串 </span>
<span class="line">function uniq(str) {</span>
<span class="line">    return str.replace(/(\w)\1+/g, '$1')</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-深拷贝-浅拷贝" tabindex="-1"><a class="header-anchor" href="#_4-深拷贝-浅拷贝"><span>4.深拷贝 浅拷贝</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">//深克隆（深克隆不考虑函数）</span>
<span class="line">function deepClone(obj, result) {</span>
<span class="line">    var result = result || {};</span>
<span class="line">    for (var prop in obj) {</span>
<span class="line">        if (obj.hasOwnProperty(prop)) {</span>
<span class="line">            if (typeof obj[prop] == 'object' &amp;&amp; obj[prop] !== null) {</span>
<span class="line">                // 引用值(obj/array)且不为null</span>
<span class="line">                if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {</span>
<span class="line">                    // 对象</span>
<span class="line">                    result[prop] = {};</span>
<span class="line">                } else {</span>
<span class="line">                    // 数组</span>
<span class="line">                    result[prop] = [];</span>
<span class="line">                }</span>
<span class="line">                deepClone(obj[prop], result[prop])</span>
<span class="line">    } else {</span>
<span class="line">        // 原始值或func</span>
<span class="line">        result[prop] = obj[prop]</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">return result;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 深浅克隆是针对引用值</span>
<span class="line">function deepClone(target) {</span>
<span class="line">    if (typeof (target) !== 'object') {</span>
<span class="line">        return target;</span>
<span class="line">    }</span>
<span class="line">    var result;</span>
<span class="line">    if (Object.prototype.toString.call(target) == '[object Array]') {</span>
<span class="line">        // 数组</span>
<span class="line">        result = []</span>
<span class="line">    } else {</span>
<span class="line">        // 对象</span>
<span class="line">        result = {};</span>
<span class="line">    }</span>
<span class="line">    for (var prop in target) {</span>
<span class="line">        if (target.hasOwnProperty(prop)) {</span>
<span class="line">            result[prop] = deepClone(target[prop])</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return result;</span>
<span class="line">}</span>
<span class="line">// 无法复制函数</span>
<span class="line">var o1 = jsON.parse(jsON.stringify(obj1));</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-reverse底层原理和扩展" tabindex="-1"><a class="header-anchor" href="#_5-reverse底层原理和扩展"><span>5.reverse底层原理和扩展</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">// 改变原数组</span>
<span class="line">Array.prototype.myReverse = function () {</span>
<span class="line">    var len = this.length;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        var temp = this[i];</span>
<span class="line">        this[i] = this[len - 1 - i];</span>
<span class="line">        this[len - 1 - i] = temp;</span>
<span class="line">    }</span>
<span class="line">    return this;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-圣杯模式的继承" tabindex="-1"><a class="header-anchor" href="#_6-圣杯模式的继承"><span>6.圣杯模式的继承</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function inherit(Target, Origin) {</span>
<span class="line">    function F() {};</span>
<span class="line">    F.prototype = Origin.prototype;</span>
<span class="line">    Target.prototype = new F();</span>
<span class="line">    Target.prototype.constructor = Target;</span>
<span class="line">    // 最终的原型指向</span>
<span class="line">    Target.prop.uber = Origin.prototype;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-找出字符串中第一次只出现一次的字母" tabindex="-1"><a class="header-anchor" href="#_7-找出字符串中第一次只出现一次的字母"><span>7.找出字符串中第一次只出现一次的字母</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">String.prototype.firstAppear = function () {</span>
<span class="line">    var obj = {},</span>
<span class="line">        len = this.length;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        if (obj[this[i]]) {</span>
<span class="line">            obj[this[i]]++;</span>
<span class="line">        } else {</span>
<span class="line">            obj[this[i]] = 1;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    for (var prop in obj) {</span>
<span class="line">       if (obj[prop] == 1) {</span>
<span class="line">         return prop;</span>
<span class="line">       }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-找元素的第n级父元素" tabindex="-1"><a class="header-anchor" href="#_8-找元素的第n级父元素"><span>8.找元素的第n级父元素</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function parents(ele, n) {</span>
<span class="line">    while (ele &amp;&amp; n) {</span>
<span class="line">        ele = ele.parentElement ? ele.parentElement : ele.parentNode;</span>
<span class="line">        n--;</span>
<span class="line">    }</span>
<span class="line">    return ele;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-返回元素的第n个兄弟节点" tabindex="-1"><a class="header-anchor" href="#_9-返回元素的第n个兄弟节点"><span>9.返回元素的第n个兄弟节点</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function retSibling(e, n) {</span>
<span class="line">    while (e &amp;&amp; n) {</span>
<span class="line">        if (n &gt; 0) {</span>
<span class="line">            if (e.nextElementSibling) {</span>
<span class="line">                e = e.nextElementSibling;</span>
<span class="line">            } else {</span>
<span class="line">                for (e = e.nextSibling; e &amp;&amp; e.nodeType !== 1; e = e.nextSibling);</span>
<span class="line">            }</span>
<span class="line">            n--;</span>
<span class="line">        } else {</span>
<span class="line">            if (e.previousElementSibling) {</span>
<span class="line">                e = e.previousElementSibling;</span>
<span class="line">            } else {</span>
<span class="line">                for (e = e.previousElementSibling; e &amp;&amp; e.nodeType !== 1; e = e.previousElementSibling);</span>
<span class="line">            }</span>
<span class="line">            n++;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return e;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-封装mychildren-解决浏览器的兼容问题" tabindex="-1"><a class="header-anchor" href="#_10-封装mychildren-解决浏览器的兼容问题"><span>10. 封装mychildren，解决浏览器的兼容问题</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function myChildren(e) {</span>
<span class="line">    var children = e.childNodes,</span>
<span class="line">        arr = [],</span>
<span class="line">        len = children.length;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        if (children[i].nodeType === 1) {</span>
<span class="line">            arr.push(children[i])</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return arr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-判断元素有没有子元素" tabindex="-1"><a class="header-anchor" href="#_11-判断元素有没有子元素"><span>11. 判断元素有没有子元素</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function hasChildren(e) {</span>
<span class="line">    var children = e.childNodes,</span>
<span class="line">        len = children.length;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        if (children[i].nodeType === 1) {</span>
<span class="line">            return true;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return false;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-我一个元素插入到另一个元素的后面" tabindex="-1"><a class="header-anchor" href="#_12-我一个元素插入到另一个元素的后面"><span>12. 我一个元素插入到另一个元素的后面</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Element.prototype.insertAfter = function (target, elen) {</span>
<span class="line">    var nextElen = elen.nextElenmentSibling;</span>
<span class="line">    if (nextElen == null) {</span>
<span class="line">        this.appendChild(target);</span>
<span class="line">    } else {</span>
<span class="line">        this.insertBefore(target, nextElen);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-返回当前的时间-年月日时分秒" tabindex="-1"><a class="header-anchor" href="#_13-返回当前的时间-年月日时分秒"><span>13. 返回当前的时间（年月日时分秒）</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function getDateTime() {</span>
<span class="line">    var date = new Date(),</span>
<span class="line">        year = date.getFullYear(),</span>
<span class="line">        month = date.getMonth() + 1,</span>
<span class="line">        day = date.getDate(),</span>
<span class="line">        hour = date.getHours() + 1,</span>
<span class="line">        minute = date.getMinutes(),</span>
<span class="line">        second = date.getSeconds();</span>
<span class="line">        month = checkTime(month);</span>
<span class="line">        day = checkTime(day);</span>
<span class="line">        hour = checkTime(hour);</span>
<span class="line">        minute = checkTime(minute);</span>
<span class="line">        second = checkTime(second);</span>
<span class="line">     function checkTime(i) {</span>
<span class="line">        if (i &lt; 10) {</span>
<span class="line">                i = &quot;0&quot; + i;</span>
<span class="line">       }</span>
<span class="line">      return i;</span>
<span class="line">    }</span>
<span class="line">    return &quot;&quot; + year + &quot;年&quot; + month + &quot;月&quot; + day + &quot;日&quot; + hour + &quot;时&quot; + minute + &quot;分&quot; + second + &quot;秒&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-获得滚动条的滚动距离" tabindex="-1"><a class="header-anchor" href="#_14-获得滚动条的滚动距离"><span>14. 获得滚动条的滚动距离</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function getScrollOffset() {</span>
<span class="line">    if (window.pageXOffset) {</span>
<span class="line">        return {</span>
<span class="line">            x: window.pageXOffset,</span>
<span class="line">            y: window.pageYOffset</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        return {</span>
<span class="line">            x: document.body.scrollLeft + document.documentElement.scrollLeft,</span>
<span class="line">            y: document.body.scrollTop + document.documentElement.scrollTop</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-获得视口的尺寸" tabindex="-1"><a class="header-anchor" href="#_15-获得视口的尺寸"><span>15. 获得视口的尺寸</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function getViewportOffset() {</span>
<span class="line">    if (window.innerWidth) {</span>
<span class="line">        return {</span>
<span class="line">            w: window.innerWidth,</span>
<span class="line">            h: window.innerHeight</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        // ie8及其以下</span>
<span class="line">        if (document.compatMode === &quot;BackCompat&quot;) {</span>
<span class="line">            // 怪异模式</span>
<span class="line">            return {</span>
<span class="line">                w: document.body.clientWidth,</span>
<span class="line">                h: document.body.clientHeight</span>
<span class="line">            }</span>
<span class="line">        } else {</span>
<span class="line">            // 标准模式</span>
<span class="line">            return {</span>
<span class="line">                w: document.documentElement.clientWidth,</span>
<span class="line">                h: document.documentElement.clientHeight</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-获取任一元素的任意属性" tabindex="-1"><a class="header-anchor" href="#_16-获取任一元素的任意属性"><span>16. 获取任一元素的任意属性</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function getStyle(elem, prop) {</span>
<span class="line">    return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop]</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-绑定事件的兼容代码" tabindex="-1"><a class="header-anchor" href="#_17-绑定事件的兼容代码"><span>17. 绑定事件的兼容代码</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function addEvent(elem, type, handle) {</span>
<span class="line">    if (elem.addEventListener) { //非ie和非ie9</span>
<span class="line">        elem.addEventListener(type, handle, false);</span>
<span class="line">    } else if (elem.attachEvent) { //ie6到ie8</span>
<span class="line">        elem.attachEvent('on' + type, function () {</span>
<span class="line">            handle.call(elem);</span>
<span class="line">        })</span>
<span class="line">    } else {</span>
<span class="line">        elem['on' + type] = handle;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-解绑事件" tabindex="-1"><a class="header-anchor" href="#_18-解绑事件"><span>18. 解绑事件</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function removeEvent(elem, type, handle) {</span>
<span class="line">    if (elem.removeEventListener) { //非ie和非ie9</span>
<span class="line">        elem.removeEventListener(type, handle, false);</span>
<span class="line">    } else if (elem.detachEvent) { //ie6到ie8</span>
<span class="line">        elem.detachEvent('on' + type, handle);</span>
<span class="line">    } else {</span>
<span class="line">        elem['on' + type] = null;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-取消冒泡的兼容代码" tabindex="-1"><a class="header-anchor" href="#_19-取消冒泡的兼容代码"><span>19. 取消冒泡的兼容代码</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function stopBubble(e) {</span>
<span class="line">    if (e &amp;&amp; e.stopPropagation) {</span>
<span class="line">        e.stopPropagation();</span>
<span class="line">    } else {</span>
<span class="line">        window.event.cancelBubble = true;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-检验字符串是否是回文" tabindex="-1"><a class="header-anchor" href="#_20-检验字符串是否是回文"><span>20. 检验字符串是否是回文</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function isPalina(str) {</span>
<span class="line">    if (Object.prototype.toString.call(str) !== '[object String]') {</span>
<span class="line">        return false;</span>
<span class="line">    }</span>
<span class="line">    var len = str.length;</span>
<span class="line">    for (var i = 0; i &lt; len / 2; i++) {</span>
<span class="line">        if (str[i] != str[len - 1 - i]) {</span>
<span class="line">            return false;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return true;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-检验字符串是否是回文" tabindex="-1"><a class="header-anchor" href="#_21-检验字符串是否是回文"><span>21. 检验字符串是否是回文</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function isPalindrome(str) {</span>
<span class="line">    str = str.replace(/\W/g, '').toLowerCase();</span>
<span class="line">    console.log(str)</span>
<span class="line">    return (str == str.split('').reverse().join(''))</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_22-兼容getelementsbyclassname方法" tabindex="-1"><a class="header-anchor" href="#_22-兼容getelementsbyclassname方法"><span>22. 兼容getElementsByClassName方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassName = function (_className) {</span>
<span class="line">    var allDomArray = document.getElementsByTagName('*');</span>
<span class="line">    var lastDomArray = [];</span>
<span class="line">    function trimSpace(strClass) {</span>
<span class="line">        var reg = /\s+/g;</span>
<span class="line">        return strClass.replace(reg, ' ').trim()</span>
<span class="line">    }</span>
<span class="line">    for (var i = 0; i &lt; allDomArray.length; i++) {</span>
<span class="line">        var classArray = trimSpace(allDomArray[i].className).split(' ');</span>
<span class="line">        for (var j = 0; j &lt; classArray.length; j++) {</span>
<span class="line">            if (classArray[j] == _className) {</span>
<span class="line">                lastDomArray.push(allDomArray[i]);</span>
<span class="line">                break;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return lastDomArray;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_23-运动函数" tabindex="-1"><a class="header-anchor" href="#_23-运动函数"><span>23. 运动函数</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function animate(obj, json, callback) {</span>
<span class="line">    clearInterval(obj.timer);</span>
<span class="line">    var speed,</span>
<span class="line">        current;</span>
<span class="line">    obj.timer = setInterval(function () {</span>
<span class="line">        var lock = true;</span>
<span class="line">        for (var prop in json) {</span>
<span class="line">            if (prop == 'opacity') {</span>
<span class="line">                current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;</span>
<span class="line">            } else {</span>
<span class="line">                current = parseInt(window.getComputedStyle(obj, null)[prop]);</span>
<span class="line">            }</span>
<span class="line">            speed = (json[prop] - current) / 7;</span>
<span class="line">            speed = speed &gt; 0 ? Math.ceil(speed) : Math.floor(speed);</span>
<span class="line"></span>
<span class="line">            if (prop == 'opacity') {</span>
<span class="line">                obj.style[prop] = (current + speed) / 100;</span>
<span class="line">            } else {</span>
<span class="line">                obj.style[prop] = current + speed + 'px';</span>
<span class="line">            }</span>
<span class="line">            if (current != json[prop]) {</span>
<span class="line">                lock = false;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        if (lock) {</span>
<span class="line">            clearInterval(obj.timer);</span>
<span class="line">            typeof callback == 'function' ? callback() : '';</span>
<span class="line">        }</span>
<span class="line">    }, 30)</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_24-弹性运动" tabindex="-1"><a class="header-anchor" href="#_24-弹性运动"><span>24. 弹性运动</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function ElasticMovement(obj, target) {</span>
<span class="line">    clearInterval(obj.timer);</span>
<span class="line">    var iSpeed = 40,</span>
<span class="line">        a, u = 0.8;</span>
<span class="line">    obj.timer = setInterval(function () {</span>
<span class="line">        a = (target - obj.offsetLeft) / 8;</span>
<span class="line">        iSpeed = iSpeed + a;</span>
<span class="line">        iSpeed = iSpeed * u;</span>
<span class="line">        if (Math.abs(iSpeed) &lt;= 1 &amp;&amp; Math.abs(a) &lt;= 1) {</span>
<span class="line">            console.log('over')</span>
<span class="line">            clearInterval(obj.timer);</span>
<span class="line">            obj.style.left = target + 'px';</span>
<span class="line">        } else {</span>
<span class="line">            obj.style.left = obj.offsetLeft + iSpeed + 'px';</span>
<span class="line">        }</span>
<span class="line">    }, 30);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-封装自己的foreach方法" tabindex="-1"><a class="header-anchor" href="#_25-封装自己的foreach方法"><span>25. 封装自己的forEach方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Array.prototype.myForEach = function (func, obj) {</span>
<span class="line">    var len = this.length;</span>
<span class="line">    var _this = arguments[1] ? arguments[1] : window;</span>
<span class="line">    // var _this=arguments[1]||window;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        func.call(_this, this[i], i, this)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_26-封装自己的filter方法" tabindex="-1"><a class="header-anchor" href="#_26-封装自己的filter方法"><span>26. 封装自己的filter方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Array.prototype.myFilter = function (func, obj) {</span>
<span class="line">    var len = this.length;</span>
<span class="line">    var arr = [];</span>
<span class="line">    var _this = arguments[1] || window;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        func.call(_this, this[i], i, this) &amp;&amp; arr.push(this[i]);</span>
<span class="line">    }</span>
<span class="line">    return arr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-数组map方法" tabindex="-1"><a class="header-anchor" href="#_27-数组map方法"><span>27. 数组map方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Array.prototype.myMap = function (func) {</span>
<span class="line">    var arr = [];</span>
<span class="line">    var len = this.length;</span>
<span class="line">    var _this = arguments[1] || window;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        arr.push(func.call(_this, this[i], i, this));</span>
<span class="line">    }</span>
<span class="line">    return arr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_28-数组every方法" tabindex="-1"><a class="header-anchor" href="#_28-数组every方法"><span>28. 数组every方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Array.prototype.myEvery = function (func) {</span>
<span class="line">    var flag = true;</span>
<span class="line">    var len = this.length;</span>
<span class="line">    var _this = arguments[1] || window;</span>
<span class="line">    for (var i = 0; i &lt; len; i++) {</span>
<span class="line">        if (func.apply(_this, [this[i], i, this]) == false) {</span>
<span class="line">            flag = false;</span>
<span class="line">            break;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return flag;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_29-数组reduce方法" tabindex="-1"><a class="header-anchor" href="#_29-数组reduce方法"><span>29. 数组reduce方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Array.prototype.myReduce = function (func, initialValue) {</span>
<span class="line">    var len = this.length,</span>
<span class="line">        nextValue,</span>
<span class="line">        i;</span>
<span class="line">    if (!initialValue) {</span>
<span class="line">        // 没有传第二个参数</span>
<span class="line">        nextValue = this[0];</span>
<span class="line">        i = 1;</span>
<span class="line">    } else {</span>
<span class="line">        // 传了第二个参数</span>
<span class="line">        nextValue = initialValue;</span>
<span class="line">        i = 0;</span>
<span class="line">    }</span>
<span class="line">    for (; i &lt; len; i++) {</span>
<span class="line">        nextValue = func(nextValue, this[i], i, this);</span>
<span class="line">    }</span>
<span class="line">    return nextValue;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_30-获取url中的参数" tabindex="-1"><a class="header-anchor" href="#_30-获取url中的参数"><span>30. 获取url中的参数</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function getWindonHref() {</span>
<span class="line">    var sHref = window.location.href;</span>
<span class="line">    var args = sHref.split('?');</span>
<span class="line">    if (args[0] === sHref) {</span>
<span class="line">        return '';</span>
<span class="line">    }</span>
<span class="line">    var hrefarr = args[1].split('#')[0].split('&amp;');</span>
<span class="line">    var obj = {};</span>
<span class="line">    for (var i = 0; i &lt; hrefarr.length; i++) {</span>
<span class="line">        hrefarr[i] = hrefarr[i].split('=');</span>
<span class="line">        obj[hrefarr[i][0]] = hrefarr[i][1];</span>
<span class="line">    }</span>
<span class="line">    return obj;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_31-数组排序" tabindex="-1"><a class="header-anchor" href="#_31-数组排序"><span>31. 数组排序</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">// 快排 [left] + min + [right]</span>
<span class="line">function quickArr(arr) {</span>
<span class="line">    if (arr.length &lt;= 1) {</span>
<span class="line">        return arr;</span>
<span class="line">    }</span>
<span class="line">    var left = [],</span>
<span class="line">        right = [];</span>
<span class="line">    var pIndex = Math.floor(arr.length / 2);</span>
<span class="line">    var p = arr.splice(pIndex, 1)[0];</span>
<span class="line">    for (var i = 0; i &lt; arr.length; i++) {</span>
<span class="line">        if (arr[i] &lt;= p) {</span>
<span class="line">            left.push(arr[i]);</span>
<span class="line">        } else {</span>
<span class="line">            right.push(arr[i]);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    // 递归</span>
<span class="line">    return quickArr(left).concat([p], quickArr(right));</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 冒泡</span>
<span class="line">function bubbleSort(arr) {</span>
<span class="line">    for (var i = 0; i &lt; arr.length - 1; i++) {</span>
<span class="line">        for (var j = i + 1; j &lt; arr.length; j++) {</span>
<span class="line">            if (arr[i] &gt; arr[j]) {</span>
<span class="line">                var temp = arr[i];</span>
<span class="line">                arr[i] = arr[j];</span>
<span class="line">                arr[j] = temp;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return arr;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">function bubbleSort(arr) {</span>
<span class="line">    var len = arr.length;</span>
<span class="line">    for (var i = 0; i &lt; len - 1; i++) {</span>
<span class="line">        for (var j = 0; j &lt; len - 1 - i; j++) {</span>
<span class="line">            if (arr[j] &gt; arr[j + 1]) {</span>
<span class="line">                var temp = arr[j];</span>
<span class="line">                arr[j] = arr[j + 1];</span>
<span class="line">                arr[j + 1] = temp;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return arr;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_32-遍历dom树" tabindex="-1"><a class="header-anchor" href="#_32-遍历dom树"><span>32. 遍历Dom树</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)</span>
<span class="line">// 对于每个访问的元素，函数讲元素传递给提供的回调函数</span>
<span class="line">function traverse(element, callback) {</span>
<span class="line">    callback(element);</span>
<span class="line">    var list = element.children;</span>
<span class="line">    for (var i = 0; i &lt; list.length; i++) {</span>
<span class="line">        traverse(list[i], callback);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_33-原生js封装ajax" tabindex="-1"><a class="header-anchor" href="#_33-原生js封装ajax"><span>33. 原生js封装ajax</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function ajax(method, url, callback, data, flag) {</span>
<span class="line">    var xhr;</span>
<span class="line">    flag = flag || true;</span>
<span class="line">    method = method.toUpperCase();</span>
<span class="line">    if (window.XMLHttpRequest) {</span>
<span class="line">        xhr = new XMLHttpRequest();</span>
<span class="line">    } else {</span>
<span class="line">        xhr = new ActiveXObject('Microsoft.XMLHttp');</span>
<span class="line">    }</span>
<span class="line">    xhr.onreadystatechange = function () {</span>
<span class="line">        if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {</span>
<span class="line">            console.log(2)</span>
<span class="line">            callback(xhr.responseText);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    if (method == 'GET') {</span>
<span class="line">        var date = new Date(),</span>
<span class="line">        timer = date.getTime();</span>
<span class="line">        xhr.open('GET', url + '?' + data + '&amp;timer' + timer, flag);</span>
<span class="line">        xhr.send()</span>
<span class="line">        } else if (method == 'POST') {</span>
<span class="line">        xhr.open('POST', url, flag);</span>
<span class="line">        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');</span>
<span class="line">        xhr.send(data);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_34-异步加载script" tabindex="-1"><a class="header-anchor" href="#_34-异步加载script"><span>34. 异步加载script</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function loadScript(url, callback) {</span>
<span class="line">    var oscript = document.createElement('script');</span>
<span class="line">    if (oscript.readyState) { // ie8及以下版本</span>
<span class="line">        oscript.onreadystatechange = function () {</span>
<span class="line">            if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {</span>
<span class="line">                callback();</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        oscript.onload = function () {</span>
<span class="line">            callback()</span>
<span class="line">        };</span>
<span class="line">    }</span>
<span class="line">    oscript.src = url;</span>
<span class="line">    document.body.appendChild(oscript);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_35-cookie管理" tabindex="-1"><a class="header-anchor" href="#_35-cookie管理"><span>35. cookie管理</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">var cookie = {</span>
<span class="line">    set: function (name, value, time) {</span>
<span class="line">        document.cookie = name + '=' + value + '; max-age=' + time;</span>
<span class="line">        return this;</span>
<span class="line">    },</span>
<span class="line">    remove: function (name) {</span>
<span class="line">        return this.setCookie(name, '', -1);</span>
<span class="line">    },</span>
<span class="line">    get: function (name, callback) {</span>
<span class="line">        var allCookieArr = document.cookie.split('; ');</span>
<span class="line">        for (var i = 0; i &lt; allCookieArr.length; i++) {</span>
<span class="line">            var itemCookieArr = allCookieArr[i].split('=');</span>
<span class="line">            if (itemCookieArr[0] === name) {</span>
<span class="line">                return itemCookieArr[1]</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return undefined;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_36-实现bind-方法" tabindex="-1"><a class="header-anchor" href="#_36-实现bind-方法"><span>36. 实现bind()方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Function.prototype.myBind = function (target) {</span>
<span class="line">    var target = target || window;</span>
<span class="line">    var _args1 = [].slice.call(arguments, 1);</span>
<span class="line">    var self = this;</span>
<span class="line">    var temp = function () {};</span>
<span class="line">    var F = function () {</span>
<span class="line">        var _args2 = [].slice.call(arguments, 0);</span>
<span class="line">        var parasArr = _args1.concat(_args2);</span>
<span class="line">        return self.apply(this instanceof temp ? this : target, parasArr)</span>
<span class="line">    }</span>
<span class="line">    temp.prototype = self.prototype;</span>
<span class="line">    F.prototype = new temp();</span>
<span class="line">    return F;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_37-实现call-方法" tabindex="-1"><a class="header-anchor" href="#_37-实现call-方法"><span>37. 实现call()方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Function.prototype.myCall = function () {</span>
<span class="line">    var ctx = arguments[0] || window;</span>
<span class="line">    ctx.fn = this;</span>
<span class="line">    var args = [];</span>
<span class="line">    for (var i = 1; i &lt; arguments.length; i++) {</span>
<span class="line">        args.push(arguments[i])</span>
<span class="line">    }</span>
<span class="line">    var result = ctx.fn(...args);</span>
<span class="line">    delete ctx.fn;</span>
<span class="line">    return result;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_38-实现apply-方法" tabindex="-1"><a class="header-anchor" href="#_38-实现apply-方法"><span>38. 实现apply()方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">Function.prototype.myApply = function () {</span>
<span class="line">    var ctx = arguments[0] || window;</span>
<span class="line">    ctx.fn = this;</span>
<span class="line">    if (!arguments[1]) {</span>
<span class="line">        var result = ctx.fn();</span>
<span class="line">        delete ctx.fn;</span>
<span class="line">        return result;</span>
<span class="line">    }</span>
<span class="line">    var result = ctx.fn(...arguments[1]);</span>
<span class="line">    delete ctx.fn;</span>
<span class="line">    return result;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_39-防抖" tabindex="-1"><a class="header-anchor" href="#_39-防抖"><span>39. 防抖</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function debounce(handle, delay) {</span>
<span class="line">    var timer = null;</span>
<span class="line">    return function () {</span>
<span class="line">        var _self = this,</span>
<span class="line">            _args = arguments;</span>
<span class="line">        clearTimeout(timer);</span>
<span class="line">        timer = setTimeout(function () {</span>
<span class="line">            handle.apply(_self, _args)</span>
<span class="line">        }, delay)</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_40-节流" tabindex="-1"><a class="header-anchor" href="#_40-节流"><span>40. 节流</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function throttle(handler, wait) {</span>
<span class="line">    var lastTime = 0;</span>
<span class="line">    return function (e) {</span>
<span class="line">        var nowTime = new Date().getTime();</span>
<span class="line">        if (nowTime - lastTime &gt; wait) {</span>
<span class="line">            handler.apply(this, arguments);</span>
<span class="line">            lastTime = nowTime;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_41-requestanimframe兼容性方法" tabindex="-1"><a class="header-anchor" href="#_41-requestanimframe兼容性方法"><span>41. requestAnimFrame兼容性方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">window.requestAnimFrame = (function () {</span>
<span class="line">    return window.requestAnimationFrame ||</span>
<span class="line">        window.webkitRequestAnimationFrame ||</span>
<span class="line">        window.mozRequestAnimationFrame ||</span>
<span class="line">        function (callback) {</span>
<span class="line">            window.setTimeout(callback, 1000 / 60);</span>
<span class="line">        };</span>
<span class="line">})();</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_42-cancelanimframe兼容性方法" tabindex="-1"><a class="header-anchor" href="#_42-cancelanimframe兼容性方法"><span>42. cancelAnimFrame兼容性方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">window.cancelAnimFrame = (function () {</span>
<span class="line">    return window.cancelAnimationFrame ||</span>
<span class="line">        window.webkitCancelAnimationFrame ||</span>
<span class="line">        window.mozCancelAnimationFrame ||</span>
<span class="line">        function (id) {</span>
<span class="line">            window.clearTimeout(id);</span>
<span class="line">        };</span>
<span class="line">})();</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_43-jsonp底层方法" tabindex="-1"><a class="header-anchor" href="#_43-jsonp底层方法"><span>43. jsonp底层方法</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function jsonp(url, callback) {</span>
<span class="line">    var oscript = document.createElement('script');</span>
<span class="line">    if (oscript.readyState) { // ie8及以下版本</span>
<span class="line">        oscript.onreadystatechange = function () {</span>
<span class="line">            if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {</span>
<span class="line">                callback();</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    } else {</span>
<span class="line">        oscript.onload = function () {</span>
<span class="line">            callback()</span>
<span class="line">        };</span>
<span class="line">    }</span>
<span class="line">    oscript.src = url;</span>
<span class="line">    document.body.appendChild(oscript);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_44-获取url上的参数" tabindex="-1"><a class="header-anchor" href="#_44-获取url上的参数"><span>44. 获取url上的参数</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function getUrlParam(sUrl, sKey) {</span>
<span class="line">    var result = {};</span>
<span class="line">    sUrl.replace(/(\w+)=(\w+)(?=[&amp;|#])/g, function (ele, key, val) {</span>
<span class="line">        if (!result[key]) {</span>
<span class="line">            result[key] = val;</span>
<span class="line">        } else {</span>
<span class="line">            var temp = result[key];</span>
<span class="line">            result[key] = [].concat(temp, val);</span>
<span class="line">        }</span>
<span class="line">    })</span>
<span class="line">    if (!sKey) {</span>
<span class="line">        return result;</span>
<span class="line">    } else {</span>
<span class="line">        return result[sKey] || '';</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_45-格式化时间" tabindex="-1"><a class="header-anchor" href="#_45-格式化时间"><span>45. 格式化时间</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function formatDate(t, str) {</span>
<span class="line">    var obj = {</span>
<span class="line">        yyyy: t.getFullYear(),</span>
<span class="line">        yy: (&quot;&quot; + t.getFullYear()).slice(-2),</span>
<span class="line">        M: t.getMonth() + 1,</span>
<span class="line">        MM: (&quot;0&quot; + (t.getMonth() + 1)).slice(-2),</span>
<span class="line">        d: t.getDate(),</span>
<span class="line">        dd: (&quot;0&quot; + t.getDate()).slice(-2),</span>
<span class="line">        H: t.getHours(),</span>
<span class="line">        HH: (&quot;0&quot; + t.getHours()).slice(-2),</span>
<span class="line">        h: t.getHours() % 12,</span>
<span class="line">        hh: (&quot;0&quot; + t.getHours() % 12).slice(-2),</span>
<span class="line">        m: t.getMinutes(),</span>
<span class="line">        mm: (&quot;0&quot; + t.getMinutes()).slice(-2),</span>
<span class="line">        s: t.getSeconds(),</span>
<span class="line">        ss: (&quot;0&quot; + t.getSeconds()).slice(-2),</span>
<span class="line">        w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]</span>
<span class="line">    };</span>
<span class="line">    return str.replace(/([a-z]+)/ig, function ($1) {</span>
<span class="line">        return obj[$1]</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_46-验证邮箱的正则表达式" tabindex="-1"><a class="header-anchor" href="#_46-验证邮箱的正则表达式"><span>46. 验证邮箱的正则表达式</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function isAvailableEmail(sEmail) {</span>
<span class="line">    var reg = /^([\w+\.])+@\w+([.]\w+)+$/</span>
<span class="line">    return reg.test(sEmail)</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_47-函数柯里化" tabindex="-1"><a class="header-anchor" href="#_47-函数柯里化"><span>47. 函数柯里化</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">//是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术</span>
<span class="line">function curryIt(fn) {</span>
<span class="line">    var length = fn.length,</span>
<span class="line">        args = [];</span>
<span class="line">    var result = function (arg) {</span>
<span class="line">        args.push(arg);</span>
<span class="line">        length--;</span>
<span class="line">        if (length &lt;= 0) {</span>
<span class="line">            return fn.apply(this, args);</span>
<span class="line">        } else {</span>
<span class="line">            return result;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    return result;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_48-大数相加" tabindex="-1"><a class="header-anchor" href="#_48-大数相加"><span>48. 大数相加</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function sumBigNumber(a, b) {</span>
<span class="line">    var res = '', //结果</span>
<span class="line">        temp = 0; //按位加的结果及进位</span>
<span class="line">    a = a.split('');</span>
<span class="line">    b = b.split('');</span>
<span class="line">    while (a.length || b.length || temp) {</span>
<span class="line">        //~~按位非 1.类型转换，转换成数字 2.~~undefined==0 </span>
<span class="line">        temp += ~~a.pop() + ~~b.pop();</span>
<span class="line">        res = (temp % 10) + res;</span>
<span class="line">        temp = temp &gt; 9;</span>
<span class="line">    }</span>
<span class="line">    return res.replace(/^0+/, '');</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_49-单例模式" tabindex="-1"><a class="header-anchor" href="#_49-单例模式"><span>49. 单例模式</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function getSingle(func) {</span>
<span class="line">    var result;</span>
<span class="line">    return function () {</span>
<span class="line">        if (!result) {</span>
<span class="line">            result = new func(arguments);</span>
<span class="line">        }</span>
<span class="line">        return result;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


