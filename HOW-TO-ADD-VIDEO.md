# 🎥 在网站中插入视频 - 完整指南

本指南展示如何在 Durian Lover 项目中添加演示视频。

## 📹 三种视频插入方式

### 方式1️⃣ : 本地视频文件 (推荐用于演示)
```html
<div class="video-container">
    <video width="100%" height="auto" controls poster="images/video-poster.jpg">
        <source src="videos/durian-lover-demo.mp4" type="video/mp4">
        您的浏览器不支持视频标签。
    </video>
</div>
```

**优点**: 完全控制、快速、无广告  
**缺点**: 需要自己托管、需要优化文件大小

---

### 方式2️⃣ : YouTube 嵌入 (推荐用于宣传)
```html
<div class="video-container">
    <iframe 
        width="100%" 
        height="600" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="Durian Lover 演示视频"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
```

**优点**: 不占用存储、自动优化、易于分享  
**缺点**: 需要上传到YouTube、加载时间长

---

### 方式3️⃣ : 其他平台嵌入 (Vimeo、Bilibili等)
```html
<!-- Vimeo 示例 -->
<div class="video-container">
    <iframe 
        src="https://player.vimeo.com/video/VIDEO_ID" 
        width="100%" 
        height="600" 
        frameborder="0" 
        allow="autoplay; fullscreen" 
        allowfullscreen>
    </iframe>
</div>

<!-- B站 示例 -->
<div class="video-container">
    <iframe 
        src="//player.bilibili.com/player.html?aid=XXXXX&bvid=XXXXX&cid=XXXXX" 
        width="100%" 
        height="600" 
        frameborder="0" 
        allow="autoplay" 
        allowfullscreen>
    </iframe>
</div>
```

---

## 🚀 快速开始 - 推荐方案

### 如果有演示视频文件

**Step 1**: 创建 `videos` 文件夹
```
personal-website/
├── images/
├── videos/          ← 新建此文件夹
│   ├── durian-lover-demo.mp4
│   └── video-poster.jpg
├── css/
└── js/
```

**Step 2**: 在 `projects.html` 中添加视频代码

找到 Durian Lover 项目详情，添加：
```html
<article class="project-detail">
    <div class="project-image">
        <img src="images/project-durian.jpg" alt="Durian Lover">
    </div>
    
    <!-- 新增：视频演示部分 -->
    <div class="video-demo-section">
        <h4>🎬 产品演示视频</h4>
        <div class="video-container">
            <video width="100%" height="auto" controls poster="videos/video-poster.jpg">
                <source src="videos/durian-lover-demo.mp4" type="video/mp4">
                您的浏览器不支持视频播放。请升级浏览器或 <a href="videos/durian-lover-demo.mp4">下载视频</a>。
            </video>
        </div>
    </div>
    
    <h3>Durian Lover - 基于LBS的榴莲地图</h3>
    ...
</article>
```

**Step 3**: 在 `css/style.css` 中添加样式
```css
/* 视频容器 */
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 宽高比 */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    background-color: #000;
    margin-bottom: 20px;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}

/* 视频演示部分 */
.video-demo-section {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 25px;
}

.video-demo-section h4 {
    margin-top: 0;
}

video {
    border-radius: 8px;
}

video::-webkit-media-controls-panel {
    background-color: rgba(0, 0, 0, 0.7);
}
```

---

## 📊 视频格式和大小建议

| 格式 | 推荐场景 | 文件大小 | 分辨率 |
|------|---------|---------|--------|
| MP4 | 通用兼容性 | 10-50MB | 720p-1080p |
| WebM | 高压缩率 | 5-20MB | 720p-1080p |
| MOV | Mac/iOS | 20-100MB | 1080p-4K |

**推荐**: MP4 格式 (最兼容，普遍支持)

---

## 🎯 获取 YouTube 视频 ID

1. 打开 YouTube 视频链接：`https://www.youtube.com/watch?v=dQw4w9WgXcQ`
2. `v=` 后面的部分就是视频 ID: `dQw4w9WgXcQ`
3. 替换到嵌入代码中：
```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

---

## 💾 视频文件优化

### 使用 FFmpeg 压缩视频
```bash
# 降低分辨率
ffmpeg -i input.mp4 -s 1280x720 -c:v libx264 -crf 28 output.mp4

# 降低比特率
ffmpeg -i input.mp4 -b:v 2000k -b:a 128k output.mp4

# 提取视频截图作为封面
ffmpeg -i input.mp4 -ss 00:00:05 -vframes 1 poster.jpg
```

### 在线压缩工具
- HandBrake: https://handbrake.fr (免费)
- CloudConvert: https://cloudconvert.com
- Online Converter: https://www.onlineconverter.com

---

## 🌐 免费视频托管选项

### 1. GitHub + jsDelivr (最简单)
```html
<video controls width="100%">
    <source src="https://cdn.jsdelivr.net/gh/yourusername/repo@main/videos/demo.mp4" type="video/mp4">
</video>
```

### 2. YouTube (最流行)
- 优点：自动优化、CDN加速、分析统计
- 缺点：需要上传、可能有广告
- 链接：https://www.youtube.com/upload

### 3. Vimeo (专业)
- 优点：视频质量好、统计详细、支持付费
- 缺点：免费版有限制
- 链接：https://vimeo.com

### 4. Bilibili (国内)
- 优点：国内速度快、用户多
- 缺点：需要备案、审核时间长
- 链接：https://www.bilibili.com

### 5. 阿里云OSS (企业级)
- 适合：大规模部署
- 特点：高速、可靠、视频转码

---

## 📱 完整的 HTML 代码示例

```html
<!-- 在 projects.html 中替换 Durian Lover 项目详情 -->

<article class="project-detail">
    <!-- 项目图片 -->
    <div class="project-image">
        <img src="images/project-durian.jpg" alt="Durian Lover">
    </div>
    
    <!-- 视频演示 -->
    <div class="video-demo-section">
        <h4>🎬 产品演示视频</h4>
        <div class="video-container">
            <video controls poster="videos/video-poster.jpg">
                <source src="videos/durian-lover-demo.mp4" type="video/mp4">
                <p>您的浏览器不支持HTML5视频。
                   <a href="videos/durian-lover-demo.mp4">点击下载视频</a>
                </p>
            </video>
        </div>
    </div>
    
    <h3>Durian Lover - 基于LBS的榴莲地图</h3>
    
    <div class="project-meta">
        <span class="badge badge-personal">个人项目</span>
        <span class="date">2026.02 - 2026.05</span>
        <span class="tag">AI开发实践</span>
        <span class="tag">Vibe Coding</span>
    </div>

    <div class="project-content">
        <h4>项目介绍</h4>
        <p>一款面向垂直美食圈层（榴莲爱好者）的众包LBS导航与评级应用。</p>
        
        <!-- 其他内容... -->
    </div>
</article>
```

---

## 🎨 高级样式 - 响应式视频播放器

```css
/* 完全响应式视频容器 */
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
}

.video-container::before {
    content: '▶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    color: rgba(255, 255, 255, 0.3);
    z-index: 1;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

/* 视频加载中... */
.video-container video {
    background-color: #000;
}

/* 视频演示区域 */
.video-demo-section {
    background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 25px;
    border-left: 4px solid #764ba2;
}

.video-demo-section h4 {
    margin-top: 0;
    color: #667eea;
    font-size: 18px;
}

/* 手机端 */
@media (max-width: 768px) {
    .video-demo-section {
        padding: 15px;
    }
    
    .video-demo-section h4 {
        font-size: 16px;
    }
}
```

---

## 🔧 JavaScript - 视频播放增强 (可选)

```javascript
// 自动暂停其他视频
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', function() {
        document.querySelectorAll('video').forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});

// 视频错误处理
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('error', function() {
        console.error('视频加载失败');
        this.innerHTML += '<p style="color: red;">视频加载失败，请检查文件路径</p>';
    });
});

// 视频加载进度
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('loadstart', function() {
        console.log('视频开始加载...');
    });
    
    video.addEventListener('canplay', function() {
        console.log('视频已就绪，可以播放');
    });
});
```

---

## 📋 文件结构更新

```
personal-website/
├── index.html
├── about.html
├── projects.html          ← 更新此文件
├── css/
│   └── style.css          ← 更新此文件
├── js/
│   └── script.js          ← 可选更新
├── images/
│   ├── profile.jpg
│   ├── project-durian.jpg
│   └── ...
└── videos/                ← 新建此文件夹
    ├── durian-lover-demo.mp4
    └── video-poster.jpg
```

---

## ✅ 逐步实施清单

- [ ] 准备视频文件 (MP4, ≤50MB)
- [ ] 创建 `videos` 文件夹
- [ ] 准备视频封面图 (poster.jpg)
- [ ] 复制 HTML 代码到 projects.html
- [ ] 添加 CSS 样式到 style.css
- [ ] 测试视频播放
- [ ] 刷新浏览器缓存 (Ctrl+Shift+R)
- [ ] 在不同设备上测试

---

## 🎁 额外功能

### 添加视频字幕
```html
<video controls>
    <source src="videos/durian-lover-demo.mp4" type="video/mp4">
    <track kind="subtitles" src="videos/subtitles-zh.vtt" srclang="zh" label="中文">
    <track kind="subtitles" src="videos/subtitles-en.vtt" srclang="en" label="English">
</video>
```

### 多视频格式支持 (最大兼容性)
```html
<video controls width="100%">
    <source src="videos/demo.mp4" type="video/mp4">
    <source src="videos/demo.webm" type="video/webm">
    <source src="videos/demo.ogv" type="video/ogg">
    您的浏览器不支持HTML5视频。
</video>
```

---

## 🚨 常见问题

**Q: 视频不显示怎么办？**
- 检查文件路径是否正确
- 检查视频格式是否为MP4
- 清除浏览器缓存
- 检查文件权限

**Q: 视频很慢怎么办？**
- 压缩视频文件大小
- 使用CDN加速
- 考虑上传到YouTube
- 降低分辨率

**Q: 支持哪些视频格式？**
- MP4 (最兼容)
- WebM (高压缩)
- Ogg/Theora (开源)

**Q: 如何添加多个视频？**
- 为每个视频创建独立的 `<video>` 标签
- 使用不同的src属性

**Q: 视频可以自动播放吗？**
```html
<video autoplay muted loop>
    <source src="video.mp4" type="video/mp4">
</video>
```
注：许多浏览器需要 `muted` 属性来自动播放
