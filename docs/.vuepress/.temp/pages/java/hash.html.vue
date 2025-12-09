<template><div><h1 id="hashmap-hashtable-concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#hashmap-hashtable-concurrenthashmap"><span>HashMap,HashTable,ConcurrentHashMap</span></a></h1>
<h3>一、非线程安全的HashMap</h3>
<blockquote>
<ul>
<li><code v-pre>jdk1.7</code> 的 <code v-pre>HashMap</code> 的底层实现是 <strong>数组</strong> + <strong>单向链表</strong>，支持key为 <code v-pre>null</code>，value 为<code v-pre>null</code>。</li>
<li>它的初始容量是 <code v-pre>16</code>，负载因子默认值 <code v-pre>0.75</code>，当实际存放元素数量大于等于 <strong>阈值</strong>，（而且新元素被放入的哈希槽不为空），那么就会触发扩容，每次扩容时的容量都是翻倍增长（一定是 <code v-pre>2</code>的次幂）,所以在实例存储元素项较多的情况下，一定要指定初始容量，避免每次扩容带来性能上的影响。</li>
<li><strong>负载因子</strong> 取值问题也是一个重要原因，取值越大<strong>哈希冲突</strong> 的概率就越高，取值越小空间浪费度就越高。而 <code v-pre>0.75</code> 是一个比较折中的选择。</li>
<li>其属性、方法、代码块没有被 <code v-pre>synchronize</code>修饰，也没有使用其他同步机制，在多线程环境下是 <strong>非线程安全</strong>的。</li>
</ul>
</blockquote>
<h3>二、线程安全的Hashtable</h3>
<blockquote>
<p><code v-pre>Hashtable</code> 是<code v-pre>HashMap</code> 线程安全的实现。它也起始于 <strong>上古时期</strong>，可追溯到<code v-pre> jdk1.0</code>。（🙅注意是 <code v-pre>Hashtable</code> 而非 <s>HashTable</s>）</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hashtable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token keyword">extends</span> <span class="token class-name">Dictionary</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token keyword">implements</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>Hashtable</code> 扩展至 <code v-pre>Dictionary</code> 抽象类、实现至<code v-pre>Map</code> 接口。</p>
</blockquote>
<ul>
<li><code v-pre>Hashtable</code> 线程安全的实现机制是 <strong>几乎</strong>在所有的方法都加💩 <code v-pre>synchronized</code> 修饰；</li>
<li><code v-pre>HashMap</code> 允许 key 和 value 都可以是 <code v-pre>null</code> 值，但 <code v-pre>Hashtable</code> 对 key 、value都不允许😭💔为 <s>null</s>；</li>
<li><code v-pre>Hashtable</code> 初始容量是<code v-pre>11</code> ，默认负载因子也是 <code v-pre>0.75</code>。扩容是 <code v-pre>2倍 + 1</code>；</li>
</ul>
<p>处处加锁🔒的<code v-pre>Hashtable</code> 虽然保证了同步性，但性能大大折扣，再并发的情况下有些不可取。</p>
<p><code v-pre>jdk1.5</code> 又引入了新的线程安全容器☀️ <code v-pre>ConcurrentHashMap</code>，用于替代性能差的 <code v-pre>Hashtable</code>。<code v-pre>ConcurrentHashMap</code> 为什么能够取代 <code v-pre>Hashtable</code>呢？因为它在保证性能安全的情况下、性能还比<code v-pre>Hashtable</code>好。</p>
</div></template>


