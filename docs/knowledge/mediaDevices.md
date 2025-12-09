# navigator.mediaDevices API


###  什么是 navigator.mediaDevices?
在现代浏览器中，可以通过navigator.mediaDevices对象访问设备媒体，包括摄像头和麦克风。
它提供了一些方法来枚举可用设备、请求媒体访问权限以及管理媒体流。
使用navigator.mediaDevices API需要遵循用户的权限控制原则，确保隐私安全。

### 支持场景
- 视频会议（如 Zoom Web）
- 在线直播
- 浏览器截图/录屏工具
- 人脸识别类应用

### getUserMedia(constraints)：请求媒体权限
 - 说明：该方法用于请求摄像头和麦克风的媒体资源。通过传递参数constraints（约束条件）来指定需要访问的媒体类型和设备。
 - 参数：constraints 指定媒体类型和质量要求。

```javascript
// 示例：获取摄像头视频（默认分辨率）
const constraints = {
  video: true,  // 开启视频
  audio: {      // 可选配置音频
    sampleSize: 16, 
    echoCancellation: true
  }
};

// 调用方法
navigator.mediaDevices.getUserMedia(constraints)
  .then(stream => {
    const videoElement = document.getElementById('video');
    videoElement.srcObject = stream; // 将流绑定到 <video> 元素
  })
  .catch(error => {
    console.error('媒体访问失败:', error.name); // 处理错误（如用户拒绝）
  });
```

##### 常见错误类型：
1. NotAllowedError：用户拒绝授权
2. NotFoundError：无匹配设备
3. OverconstrainedError：配置无法满足


### enumerateDevices()：列出所有媒体设备
  - 说明：该方法用于枚举设备媒体信息，如摄像头和麦克风。
  - 返回：返回一个设备信息列表。
```javascript
// 示例：获取所有媒体设备列表
navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    devices.forEach(device => {
      console.log(device.kind, device.label, device.deviceId);
    });
  })
  .catch(error => {
    console.error('设备枚举失败:', error);
  });
```

##### 设备类型 (device.kind) 包括：

1. audioinput（麦克风）
2. videoinput（摄像头）
3. audiooutput（扬声器）


### getDisplayMedia(constraints)：共享屏幕内容
  - 说明：该方法用于请求屏幕共享权限，允许用户选择要分享的显示器或窗口。
  - 参数：constraints（可选）指定媒体类型和分辨率等。
```javascript
// 示例：获取整个屏幕内容
navigator.mediaDevices.getDisplayMedia({ video: true })
  .then(stream => {
    const videoElement = document.getElementById('video');
    videoElement.srcObject = stream; // 将流绑定到 <video> 元素
    document.body.appendChild(videoElement);
    videoElement.play();
  })
  .catch(error => {
    console.error('屏幕共享失败:', error);
});
```

浏览器会弹出窗口让用户选择共享整个屏幕、某个应用窗口或单个标签页。

##### 安全性要求
1. 必须使用 HTTPS 或 localhost：非安全环境下（如 HTTP）API 不可用。
2. 用户显式授权：浏览器会弹出提示框，无法静默获取权限。


###  完整示例：拍照应用
```Html
<video id="preview" autoplay></video>
<button id="capture">拍照</button>
<canvas id="canvas" hidden></canvas>

<script>
    const video = document.getElementById('preview');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // 启动摄像头
    navigator.mediaDevices.getUserMedia({ video: { width: 1280 } })
    .then(stream => video.srcObject = stream);

    // 点击拍照
    document.getElementById('capture').addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    // 获取图片数据
    const photoData = canvas.toDataURL('image/png');
    const img = new Image();
    img.src = photoData;
    document.body.appendChild(img);
});
</script>
```


### 兼容性与最佳实践

1. 旧版浏览器可能需要前缀（如 navigator.webkitGetUserMedia）
2. 推荐使用适配库：webrtc-adapter


### 设备权限检查：

```javascript
// 检测设备是否存在
navigator.mediaDevices.getUserMedia({ video: true })
  .catch(error => {
    if (error.name === 'NotFoundError') {
      alert('未检测到摄像头！');
    }
});
```

### 结论：
通过 navigator.mediaDevices API，开发者可以方便地实现视频通话、直播和屏幕共享等功能。合理使用该API有助于提升用户体验，但需注意隐私保护和用户授权问题。

