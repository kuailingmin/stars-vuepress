<template><div><h1 id="navigator-mediadevices-api" tabindex="-1"><a class="header-anchor" href="#navigator-mediadevices-api"><span>navigator.mediaDevices API</span></a></h1>
<h3 id="什么是-navigator-mediadevices" tabindex="-1"><a class="header-anchor" href="#什么是-navigator-mediadevices"><span>什么是 navigator.mediaDevices?</span></a></h3>
<p>在现代浏览器中，可以通过navigator.mediaDevices对象访问设备媒体，包括摄像头和麦克风。
它提供了一些方法来枚举可用设备、请求媒体访问权限以及管理媒体流。
使用navigator.mediaDevices API需要遵循用户的权限控制原则，确保隐私安全。</p>
<h3 id="支持场景" tabindex="-1"><a class="header-anchor" href="#支持场景"><span>支持场景</span></a></h3>
<ul>
<li>视频会议（如 Zoom Web）</li>
<li>在线直播</li>
<li>浏览器截图/录屏工具</li>
<li>人脸识别类应用</li>
</ul>
<h3 id="getusermedia-constraints-请求媒体权限" tabindex="-1"><a class="header-anchor" href="#getusermedia-constraints-请求媒体权限"><span>getUserMedia(constraints)：请求媒体权限</span></a></h3>
<ul>
<li>说明：该方法用于请求摄像头和麦克风的媒体资源。通过传递参数constraints（约束条件）来指定需要访问的媒体类型和设备。</li>
<li>参数：constraints 指定媒体类型和质量要求。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 示例：获取摄像头视频（默认分辨率）</span></span>
<span class="line"><span class="token keyword">const</span> constraints <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 开启视频</span></span>
<span class="line">  <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token punctuation">{</span>      <span class="token comment">// 可选配置音频</span></span>
<span class="line">    <span class="token literal-property property">sampleSize</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token literal-property property">echoCancellation</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 调用方法</span></span>
<span class="line">navigator<span class="token punctuation">.</span>mediaDevices<span class="token punctuation">.</span><span class="token function">getUserMedia</span><span class="token punctuation">(</span>constraints<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">stream</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> videoElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'video'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    videoElement<span class="token punctuation">.</span>srcObject <span class="token operator">=</span> stream<span class="token punctuation">;</span> <span class="token comment">// 将流绑定到 &lt;video> 元素</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'媒体访问失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 处理错误（如用户拒绝）</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="常见错误类型" tabindex="-1"><a class="header-anchor" href="#常见错误类型"><span>常见错误类型：</span></a></h5>
<ol>
<li>NotAllowedError：用户拒绝授权</li>
<li>NotFoundError：无匹配设备</li>
<li>OverconstrainedError：配置无法满足</li>
</ol>
<h3 id="enumeratedevices-列出所有媒体设备" tabindex="-1"><a class="header-anchor" href="#enumeratedevices-列出所有媒体设备"><span>enumerateDevices()：列出所有媒体设备</span></a></h3>
<ul>
<li>说明：该方法用于枚举设备媒体信息，如摄像头和麦克风。</li>
<li>返回：返回一个设备信息列表。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 示例：获取所有媒体设备列表</span></span>
<span class="line">navigator<span class="token punctuation">.</span>mediaDevices<span class="token punctuation">.</span><span class="token function">enumerateDevices</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">devices</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    devices<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">device</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>device<span class="token punctuation">.</span>kind<span class="token punctuation">,</span> device<span class="token punctuation">.</span>label<span class="token punctuation">,</span> device<span class="token punctuation">.</span>deviceId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'设备枚举失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="设备类型-device-kind-包括" tabindex="-1"><a class="header-anchor" href="#设备类型-device-kind-包括"><span>设备类型 (device.kind) 包括：</span></a></h5>
<ol>
<li>audioinput（麦克风）</li>
<li>videoinput（摄像头）</li>
<li>audiooutput（扬声器）</li>
</ol>
<h3 id="getdisplaymedia-constraints-共享屏幕内容" tabindex="-1"><a class="header-anchor" href="#getdisplaymedia-constraints-共享屏幕内容"><span>getDisplayMedia(constraints)：共享屏幕内容</span></a></h3>
<ul>
<li>说明：该方法用于请求屏幕共享权限，允许用户选择要分享的显示器或窗口。</li>
<li>参数：constraints（可选）指定媒体类型和分辨率等。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 示例：获取整个屏幕内容</span></span>
<span class="line">navigator<span class="token punctuation">.</span>mediaDevices<span class="token punctuation">.</span><span class="token function">getDisplayMedia</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">stream</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> videoElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'video'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    videoElement<span class="token punctuation">.</span>srcObject <span class="token operator">=</span> stream<span class="token punctuation">;</span> <span class="token comment">// 将流绑定到 &lt;video> 元素</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>videoElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    videoElement<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'屏幕共享失败:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器会弹出窗口让用户选择共享整个屏幕、某个应用窗口或单个标签页。</p>
<h5 id="安全性要求" tabindex="-1"><a class="header-anchor" href="#安全性要求"><span>安全性要求</span></a></h5>
<ol>
<li>必须使用 HTTPS 或 localhost：非安全环境下（如 HTTP）API 不可用。</li>
<li>用户显式授权：浏览器会弹出提示框，无法静默获取权限。</li>
</ol>
<h3 id="完整示例-拍照应用" tabindex="-1"><a class="header-anchor" href="#完整示例-拍照应用"><span>完整示例：拍照应用</span></a></h3>
<div class="language-Html line-numbers-mode" data-highlighter="prismjs" data-ext="Html"><pre v-pre><code class="language-Html"><span class="line">&lt;video id=&quot;preview&quot; autoplay&gt;&lt;/video&gt;</span>
<span class="line">&lt;button id=&quot;capture&quot;&gt;拍照&lt;/button&gt;</span>
<span class="line">&lt;canvas id=&quot;canvas&quot; hidden&gt;&lt;/canvas&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;</span>
<span class="line">    const video = document.getElementById('preview');</span>
<span class="line">    const canvas = document.getElementById('canvas');</span>
<span class="line">    const ctx = canvas.getContext('2d');</span>
<span class="line"></span>
<span class="line">    // 启动摄像头</span>
<span class="line">    navigator.mediaDevices.getUserMedia({ video: { width: 1280 } })</span>
<span class="line">    .then(stream =&gt; video.srcObject = stream);</span>
<span class="line"></span>
<span class="line">    // 点击拍照</span>
<span class="line">    document.getElementById('capture').addEventListener('click', () =&gt; {</span>
<span class="line">    canvas.width = video.videoWidth;</span>
<span class="line">    canvas.height = video.videoHeight;</span>
<span class="line">    ctx.drawImage(video, 0, 0);</span>
<span class="line"></span>
<span class="line">    // 获取图片数据</span>
<span class="line">    const photoData = canvas.toDataURL('image/png');</span>
<span class="line">    const img = new Image();</span>
<span class="line">    img.src = photoData;</span>
<span class="line">    document.body.appendChild(img);</span>
<span class="line">});</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兼容性与最佳实践" tabindex="-1"><a class="header-anchor" href="#兼容性与最佳实践"><span>兼容性与最佳实践</span></a></h3>
<ol>
<li>旧版浏览器可能需要前缀（如 navigator.webkitGetUserMedia）</li>
<li>推荐使用适配库：webrtc-adapter</li>
</ol>
<h3 id="设备权限检查" tabindex="-1"><a class="header-anchor" href="#设备权限检查"><span>设备权限检查：</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 检测设备是否存在</span></span>
<span class="line">navigator<span class="token punctuation">.</span>mediaDevices<span class="token punctuation">.</span><span class="token function">getUserMedia</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'NotFoundError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'未检测到摄像头！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论：</span></a></h3>
<p>通过 navigator.mediaDevices API，开发者可以方便地实现视频通话、直播和屏幕共享等功能。合理使用该API有助于提升用户体验，但需注意隐私保护和用户授权问题。</p>
</div></template>


