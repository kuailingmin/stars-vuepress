<template><div><h1 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法"><span>排序算法</span></a></h1>
<p><img src="@source/images/sort1.png" alt=""></p>
<h4 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h4>
<table>
<thead>
<tr>
<th>排序算法</th>
<th>最好(时间复杂度)</th>
<th>平均(时间复杂度)</th>
<th>最坏(时间复杂度)</th>
<th>稳定性</th>
<th>空间复杂度</th>
</tr>
</thead>
<tbody>
<tr>
<td>冒泡排序</td>
<td><strong>O</strong>(n)</td>
<td><strong>O</strong>(n<sup>2</sup>)</td>
<td><strong>O</strong>(n<sup>2</sup>)</td>
<td>稳定</td>
<td><strong>O</strong>(1)</td>
</tr>
<tr>
<td><strong>快速排序</strong></td>
<td><strong>O</strong>(n*log<sub>2</sub>n)</td>
<td><strong>O</strong>(n*log<sub>2</sub>n)</td>
<td><strong>O</strong>(n<sup>2</sup>)</td>
<td>不稳定</td>
<td><strong>O</strong>(log<sub>2</sub>n)~<strong>O</strong>(n)</td>
</tr>
<tr>
<td>直接插入排序</td>
<td><strong>O</strong>(n)</td>
<td><strong>O</strong>(n<sup>2</sup>)</td>
<td><strong>O</strong>(n<sup>2</sup>)</td>
<td>稳定</td>
<td><strong>O</strong>(1)</td>
</tr>
<tr>
<td><strong>希尔排序</strong></td>
<td><strong>O</strong>(n)</td>
<td><strong>O</strong>(n<sup>1.3</sup>)</td>
<td><strong>O</strong>(n<sup>2</sup>)</td>
<td>不稳定</td>
<td><strong>O</strong>(1)</td>
</tr>
<tr>
<td>简单选择排序</td>
<td><strong>O</strong>(n)</td>
<td><strong>O</strong>(n<sup>2</sup>)</td>
<td><strong>O</strong>(n<sup>2</sup>)</td>
<td>不稳定</td>
<td><strong>O</strong>(1)</td>
</tr>
<tr>
<td><strong>堆排序</strong></td>
<td><strong>O</strong>(n*log<sub>2</sub>n)</td>
<td><strong>O</strong>(n*log<sub>2</sub>n)</td>
<td><strong>O</strong>(n*log<sub>2</sub>n)</td>
<td>不稳定</td>
<td><strong>O</strong>(1)</td>
</tr>
<tr>
<td><strong>归并排序</strong></td>
<td><strong>O</strong>(n*log<sub>2</sub>n)</td>
<td><strong>O</strong>(n*log<sub>2</sub>n)</td>
<td><strong>O</strong>(n*log<sub>2</sub>n)</td>
<td>稳定</td>
<td><strong>O</strong>(n)</td>
</tr>
<tr>
<td>基数排序</td>
<td><strong>O</strong>(d*(r+n))</td>
<td><strong>O</strong>(d*(r+n))</td>
<td><strong>O</strong>(d*(r+n))</td>
<td>稳定</td>
<td><strong>O</strong>(r*d+n)</td>
</tr>
</tbody>
</table>
<h4 id="各种复杂度效率比较图" tabindex="-1"><a class="header-anchor" href="#各种复杂度效率比较图"><span>各种复杂度效率比较图</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token class-name">O</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">O</span><span class="token punctuation">(</span>logn<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">O</span><span class="token punctuation">(</span>nlogn<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token operator">^</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">O</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">^</span>n<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token operator">^</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token class-name">O</span><span class="token punctuation">(</span>n<span class="token operator">^</span>n<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="@source/images/sort2.png" alt="各种时间复杂度效率比较图"></p>
<p><strong>说明：</strong> n 越大，越能体现算法效率。当 n 比较小时，复杂度会有一波小交叉，上图不考虑 n 比较小的情况。</p>
<h5 id="_1-冒泡排序-★☆☆☆☆" tabindex="-1"><a class="header-anchor" href="#_1-冒泡排序-★☆☆☆☆"><span>1. 冒泡排序 ★☆☆☆☆</span></a></h5>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 冒泡次数</span></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 冒泡排序</span></span>
<span class="line">		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 将大值交换到后面</span></span>
<span class="line">			<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">				temp <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">				array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">				array<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">		<span class="token punctuation">}</span> </span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-快速排序-★★★★★" tabindex="-1"><a class="header-anchor" href="#_2-快速排序-★★★★★"><span>2. 快速排序 ★★★★★</span></a></h5>
<p>基本思想：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">int</span> j <span class="token operator">=</span> right<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">int</span> temp <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 选取一端值为基准值</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 如果 j 处值大于等于基准值，那么不用交换数据，直接将 j 向前移动，</span></span>
<span class="line">            <span class="token comment">// 直到 i 等于 j 或者 j 处值比基准值小</span></span>
<span class="line">            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">>=</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                j<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">// 如果 i &lt; j，说明 j 处值比基准值小(根据上面循环判断)</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 交换 j 与 i 处的值，并将 i 向后移动</span></span>
<span class="line">                array<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 如果 i 处值小于等于基准值，那么将i向后移动就可以了</span></span>
<span class="line">            <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                i<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">// 如果 i &lt; j，说明 i 处值比基准值大(根据上面循环判断)</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 交换 i 与 j 处的值，并将 i 向前移动</span></span>
<span class="line">                array<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 最后将临时基准值填充到 i 处</span></span>
<span class="line">            array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 对两段各自快速排序</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line">        <span class="token function">quickSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">quickSort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-直接插入排序-★★★☆☆" tabindex="-1"><a class="header-anchor" href="#_3-直接插入排序-★★★☆☆"><span>3. 直接插入排序 ★★★☆☆</span></a></h5>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertionSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 和冒泡排序有些类似，这里是遍历趟数</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 精髓是从局部有序，到整体有序</span></span>
<span class="line">        <span class="token keyword">int</span> temp <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 当前基准元素</span></span>
<span class="line">        <span class="token keyword">int</span> j<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">></span> temp<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 下一个元素比基准元素大，下一个元素向后移动</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 最后比较当前元素和基准元素大小</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-希尔排序-缩写增量-直接插入排序-★★★☆☆" tabindex="-1"><a class="header-anchor" href="#_4-希尔排序-缩写增量-直接插入排序-★★★☆☆"><span>4. 希尔排序（缩写增量-直接插入排序） ★★★☆☆</span></a></h5>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shellSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 计算增量</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> d <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> d <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> d <span class="token operator">/=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 分组</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> g <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> g <span class="token operator">&lt;</span> d<span class="token punctuation">;</span> g<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 插入排序(第 x 组的第 d 个增量元素起步)(直接插入排序的增量是 1，这里是 d，需注意下)</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> g <span class="token operator">+</span> d<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">int</span> temp <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">int</span> j<span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">></span> d <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>j <span class="token operator">-</span> d<span class="token punctuation">]</span> <span class="token operator">></span> temp<span class="token punctuation">;</span> j <span class="token operator">-=</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>j <span class="token operator">-</span> d<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-简单选择排序-★★☆☆☆" tabindex="-1"><a class="header-anchor" href="#_5-简单选择排序-★★☆☆☆"><span>5. 简单选择排序 ★★☆☆☆</span></a></h5>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">selectionSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">int</span> index<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 做出的选择次数</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 选择一个最大的值(记录索引)</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                index <span class="token operator">=</span> j<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 将选出的最大值换到一端</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            temp <span class="token operator">=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-堆排序-★★★★☆" tabindex="-1"><a class="header-anchor" href="#_6-堆排序-★★★★☆"><span>6. 堆排序 ★★★★☆</span></a></h5>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">heapSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 先调整堆(选择一个最大值放到堆顶)</span></span>
<span class="line">		<span class="token function">adjustHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 将堆顶的元素与其他元素比较并交换</span></span>
<span class="line">		<span class="token function">swap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 再调整堆</span></span>
<span class="line">		<span class="token function">adjustHeap</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 调整堆，使得堆顶元素值大于等于其子节点值</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">adjustHeap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> top<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">int</span> temp <span class="token operator">=</span> array<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> top <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// （如果存在的化）从左右子节点找出值最大的子节点</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> length <span class="token operator">&amp;&amp;</span> array<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">></span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			i<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			array<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">			top <span class="token operator">=</span> i<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">></span> temp<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    	array<span class="token punctuation">[</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>   </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">int</span> temp <span class="token operator">=</span> array<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">	array<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">	array<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-归并排序-★★★★☆" tabindex="-1"><a class="header-anchor" href="#_7-归并排序-★★★★☆"><span>7. 归并排序 ★★★★☆</span></a></h5>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>array <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> aux <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>array<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> aux<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> aux<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 先分后合</span></span>
<span class="line">        <span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left <span class="token punctuation">,</span> mid<span class="token punctuation">,</span> aux<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">sort</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">,</span> aux<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">merge</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> left<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> right<span class="token punctuation">,</span> aux<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> mid<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> aux<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> t <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> l <span class="token operator">=</span> left<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> m <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 判断元素值大小，按大小排序到辅助数组上</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> mid <span class="token operator">&amp;&amp;</span> m <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> array<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            aux<span class="token punctuation">[</span>t<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>l<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            aux<span class="token punctuation">[</span>t<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>m<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 把剩余元素填充到辅助数组上</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        aux<span class="token punctuation">[</span>t<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>l<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>m <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        aux<span class="token punctuation">[</span>t<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>m<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 将辅助线数组上的元素复制到需要排序的数组上</span></span>
<span class="line">    t <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        array<span class="token punctuation">[</span>left<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> aux<span class="token punctuation">[</span>t<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


