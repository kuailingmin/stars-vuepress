<template><div><h1 id="javascript语法简化" tabindex="-1"><a class="header-anchor" href="#javascript语法简化"><span>Javascript语法简化</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>我们在编写代码过程中会发现，尤其是业务场景复杂的时候，代码写出来可读性不高，让后面维护人员看起来很头疼，那就要思考怎么简化我们的代码结构，让可读性高，维护成本降低呢？接下来就总结一些点</p>
</div>
<h3 id="多表达式多-if-判断" tabindex="-1"><a class="header-anchor" href="#多表达式多-if-判断"><span>多表达式多 if 判断</span></a></h3>
<p>这个是我们处理业务逻辑中最常见，使用频率很高。有时候会看到一长串的if逻辑。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token string">'one'</span> <span class="token operator">||</span> k <span class="token operator">===</span> <span class="token string">'two'</span> <span class="token operator">||</span> k <span class="token operator">===</span> <span class="token string">'three'</span> <span class="token operator">||</span> k <span class="token operator">===</span><span class="token string">'four'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'one'</span><span class="token punctuation">,</span><span class="token string">'two'</span><span class="token punctuation">,</span><span class="token string">'three'</span><span class="token punctuation">,</span><span class="token string">'four'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'one'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else"><span>if else</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token literal-property property">klm</span><span class="token operator">:</span> boolean</span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    klm <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    klm <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">let</span> klm <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token comment">// or</span></span>
<span class="line">  <span class="token keyword">let</span> klm <span class="token operator">=</span> x <span class="token operator">></span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并变量的声明" tabindex="-1"><a class="header-anchor" href="#合并变量的声明"><span>合并变量的声明</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">let</span> one</span>
<span class="line">  <span class="token keyword">let</span> two <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">let</span> one<span class="token punctuation">,</span> two <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并变量赋值" tabindex="-1"><a class="header-anchor" href="#合并变量赋值"><span>合并变量赋值</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">let</span> one<span class="token punctuation">,</span> two </span>
<span class="line">  one <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">  two <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token punctuation">[</span>one<span class="token punctuation">,</span>two<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>&amp;&amp; 运算符</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>show<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">showEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  show <span class="token operator">&amp;&amp;</span> <span class="token function">showEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数"><span>箭头函数</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="短函数调用" tabindex="-1"><a class="header-anchor" href="#短函数调用"><span>短函数调用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">fun1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fun1'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">fun2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fun2'</span><span class="token punctuation">)</span> </span>
<span class="line">   </span>
<span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token literal-property property">test</span><span class="token operator">:</span>boolean</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">     <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line"> <span class="token punctuation">(</span>test<span class="token operator">?</span>fun1<span class="token operator">:</span>fun2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch-简写" tabindex="-1"><a class="header-anchor" href="#switch-简写"><span>Switch 简写</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">switch</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token number">10</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">       <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token number">20</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">       <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token number">30</span><span class="token operator">:</span></span>
<span class="line">        <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">       <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token number">10</span><span class="token operator">:</span> test1<span class="token punctuation">,</span></span>
<span class="line">      <span class="token number">20</span><span class="token operator">:</span> test2<span class="token punctuation">,</span></span>
<span class="line">      <span class="token number">30</span><span class="token operator">:</span> test3</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  data<span class="token punctuation">[</span>something<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">[</span>something<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符"><span>扩展运算符</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 平常写法</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token punctuation">,</span><span class="token number">5</span> <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 简化写法</span></span>
<span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token punctuation">,</span><span class="token number">5</span> <span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token operator">...</span>data<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 平常写法</span></span>
<span class="line"><span class="token keyword">const</span> test1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> test2 <span class="token operator">=</span> test1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 简化写法</span></span>
<span class="line"><span class="token keyword">const</span> test1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> test2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>test1<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模版字符串" tabindex="-1"><a class="header-anchor" href="#模版字符串"><span>模版字符串</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">const</span> tpl <span class="token operator">=</span> <span class="token string">'Hi '</span> <span class="token operator">+</span> test1 <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> test2 </span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">const</span> tpl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hi </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>test1<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>test2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line"> <span class="token keyword">let</span> t1 <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"> <span class="token keyword">let</span> t2 <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">t1</span><span class="token operator">:</span> t1<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">t2</span><span class="token operator">:</span> t2</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>t1<span class="token punctuation">,</span>t2 <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组中查找最大值和最小值" tabindex="-1"><a class="header-anchor" href="#数组中查找最大值和最小值"><span>数组中查找最大值和最小值</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 查找最大值</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>list<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 查找最小值</span></span>
<span class="line">Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>list<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行字符串简写" tabindex="-1"><a class="header-anchor" href="#多行字符串简写"><span>多行字符串简写</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span></span>
<span class="line">  <span class="token string">"abc abc abc abc abc abc"</span> <span class="token operator">+</span></span>
<span class="line">  <span class="token string">"test test,test test test test"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">abc abc abc abc abc abc</span>
<span class="line">         test test,test test test test</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将字符串转换成数字" tabindex="-1"><a class="header-anchor" href="#将字符串转换成数字"><span>将字符串转换成数字</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">let</span> test1 <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> test2 <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">"12.3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">let</span> test1 <span class="token operator">=</span> <span class="token operator">+</span><span class="token string">"123"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> test2 <span class="token operator">=</span> <span class="token operator">+</span><span class="token string">"12.3"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构简写" tabindex="-1"><a class="header-anchor" href="#解构简写"><span>解构简写</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">  <span class="token comment">// 平常的写法</span></span>
<span class="line">  <span class="token keyword">const</span> t1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>t1</span>
<span class="line">  <span class="token keyword">const</span> t2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>t2</span>
<span class="line">  <span class="token keyword">const</span> t3 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>t3</span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 简化的写法</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> t1<span class="token punctuation">,</span> t2<span class="token punctuation">,</span> t3 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按位索引简写" tabindex="-1"><a class="header-anchor" href="#按位索引简写"><span>按位索引简写</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">    <span class="token comment">// 平常的写法</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 简化的写法</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">~</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">~</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数学指数幂函数的简写" tabindex="-1"><a class="header-anchor" href="#数学指数幂函数的简写"><span>数学指数幂函数的简写</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">    <span class="token comment">// 平常的写法</span></span>
<span class="line">    Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 简化的写法</span></span>
<span class="line">    <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


