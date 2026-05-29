# 个人网站 - 照片添加指南

## 📁 文件夹结构

请创建以下文件夹结构：

```
personal-website/
├── index.html
├── about.html
├── projects.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/                 # 新增：图片文件夹
│   ├── profile.jpg         # 个人头像（建议 300x300px）
│   ├── hero-bg.jpg         # 背景图（可选）
│   └── project-*.jpg       # 项目图片（可选）
└── README.md
```

## 🖼️ 添加照片的步骤

### 1️⃣ 创建 images 文件夹

在 `personal-website` 目录下创建 `images` 文件夹

### 2️⃣ 准备图片文件

建议规格：
- **头像照片** (`profile.jpg`): 300×300px, JPG格式, 50-100KB
- **项目截图** (`project-1.jpg` 等): 600×400px, JPG格式, 100-150KB
- **背景图** (可选): 1920×1080px, JPG格式, 200-300KB

**优化建议**：
- 使用在线工具压缩图片：https://tinypng.com
- 保持文件大小在100KB以内（确保加载速度）
- 使用JPG格式存储照片，PNG格式存储图标

### 3️⃣ 修改HTML文件

见下面的更新文件说明

### 4️⃣ 更新CSS样式

见下面的CSS更新说明

## 📝 HTML修改位置

### 在 about.html 中添加头像
```html
<!-- 在个人简介部分添加 -->
<section class="about-intro">
    <div class="profile-section">
        <img src="images/profile.jpg" alt="黎笑妍" class="profile-photo">
        <h2>自我介绍</h2>
    </div>
    <p>我是黎笑妍...</p>
</section>
```

### 在 projects.html 中添加项目图片
```html
<!-- 在每个项目详情前添加 -->
<article class="project-detail">
    <div class="project-image">
        <img src="images/project-durian.jpg" alt="Durian Lover">
    </div>
    <h3>Durian Lover...</h3>
</article>
```

## 🎨 CSS样式配置

在 `css/style.css` 中添加：

```css
/* 个人头像样式 */
.profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-color);
    margin-bottom: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.profile-photo:hover {
    transform: scale(1.05);
}

/* 项目图片样式 */
.project-image {
    margin-bottom: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.project-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.project-image:hover img {
    transform: scale(1.05);
}

/* 响应式图片 */
img {
    max-width: 100%;
    height: auto;
}
```

## 📱 不同位置添加照片建议

| 位置 | 推荐 | 大小 | 说明 |
|------|------|------|------|
| 首页Hero区域 | ⭐⭐⭐ | 1920×600px | 可作为背景图 |
| 关于页头像 | ⭐⭐⭐ | 300×300px | 个人照片/头像 |
| 项目页截图 | ⭐⭐ | 600×400px | 产品界面截图 |
| 工作经历 | ⭐ | 200×150px | 公司logo（可选） |

## ⚡ 性能优化建议

```html
<!-- 使用 picture 标签实现响应式图片 -->
<picture>
    <source media="(max-width: 480px)" srcset="images/profile-small.jpg">
    <source media="(max-width: 768px)" srcset="images/profile-medium.jpg">
    <img src="images/profile.jpg" alt="黎笑妍" class="profile-photo">
</picture>

<!-- 使用 loading="lazy" 实现懒加载 -->
<img src="images/project-1.jpg" alt="项目" loading="lazy">
```

## 🔧 常见问题

**Q: 图片不显示怎么办？**
A: 检查：
- 文件是否在 `images` 文件夹中
- 文件名是否正确（区分大小写）
- 路径是否正确：`images/filename.jpg`

**Q: 如何替换图片？**
A: 直接用同名文件替换 `images` 文件夹中的旧文件，刷新浏览器即可

**Q: 图片太大加载慢怎么办？**
A: 使用在线图片压缩工具压缩，或使用 WebP 格式

**Q: 如何添加图片描述？**
A: 在 `<img>` 标签中添加 `alt` 属性，改善SEO和无障碍性

## 💡 添加照片的完整示例

见下面生成的更新文件
