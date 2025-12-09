<template><div><h1 id="http判断协议是不是websocket" tabindex="-1"><a class="header-anchor" href="#http判断协议是不是websocket"><span>Http判断协议是不是websocket</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>WebSocket 之前，如果需要在客户端和服务之间双向通信，需要通过 HTTP 轮询来实现， HTTP 轮询分为轮询与长轮询，其中，轮询是指浏览器通过 JavaScript 启动一个定时器，然后以固定的间隔给服务器发请求，询问服务器有没有新消息，缺点：实时性不够，频繁的请求会给服务器带来极大的压力</p>
</div>
<p>HTTP协议是建立在TCP之上的，TCP协议本身就实现了全双工通信，但是 HTTP协议的请求-应答机制限制了全双工通信。 WebSocket连接建立之后，其实只是简单规定了一下</p>
<h3 id="websocket的优点" tabindex="-1"><a class="header-anchor" href="#websocket的优点"><span>WebSocket的优点：</span></a></h3>
<ol>
<li>较少的控制开销：在连接创建后，服务器和客户端之间交换数据时，用于协议控制的数据包头部相对较小</li>
<li>更强的实时性：由于协议是全双工的，所以服务器可以随时主动给客户端下发数据</li>
<li>保持连接状态：与 HTTP 不同的是，WebSocket 需要先创建连接，这就使得其成为一种有状态的协议，之后通信时可以省略部分状态信息</li>
<li>更好的二进制支持：WebSocket 定义了二进制帧，相对 HTTP，可以更轻松地处理二进制内容</li>
<li>可以支持扩展：WebSocket 定义了扩展，用户可以扩展协议、实现部分自定义的子协议</li>
</ol>
<h3 id="websocket-协议" tabindex="-1"><a class="header-anchor" href="#websocket-协议"><span>WebSocket 协议</span></a></h3>
<p>WebSocket 使用 ws 或 wss 的统一资源标志符（URI），其中 wss 表示使用了 TLS 的 WebSocket</p>
<ul>
<li>ws:// 数据不是加密的，对于任何中间人来说其数据都是可见的。</li>
<li>wss:// 是基于 TLS 的 WebSocket，类似于 HTTPS 是基于 TLS 的 HTTP），传输安全层在发送方对数据进行了加密，在接收方进行解密</li>
</ul>
<h3 id="判断websocket" tabindex="-1"><a class="header-anchor" href="#判断websocket"><span>判断WebSocket</span></a></h3>
<p>http 通过判断 header 中是否包含 Connection: Upgrade 与 Upgrade: websocket 来判断当前是否需要升级到 websocket 协议</p>
<p><img src="@source/images/webSocket.png" alt=""></p>
<p>除此之外，还有其它 header</p>
<ul>
<li>Sec-WebSocket-Key ：浏览器随机生成的安全密钥</li>
<li>Sec-WebSocket-Version ：WebSocket 协议版本</li>
<li>Sec-WebSocket-Extensions ：用于协商本次连接要使用的 WebSocket 扩展</li>
<li>Sec-WebSocket-Protocol ：协议</li>
</ul>
<p>当服务器同意进行 WebSocket 连接时，返回响应码 101</p>
<p>WebSocket 被建立连接，有4个事件需要关注</p>
<ol>
<li>open: 连接已建立</li>
<li>message: 接收到数据</li>
<li>error: WebSocket 错误</li>
<li>close: 连接已关闭</li>
</ol>
<p>如果我们想发送消息，可以使用 socket.send(data)</p>
<p><img src="@source/images/ws.png" alt=""></p>
</div></template>


