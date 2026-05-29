# 黎笑妍 - 个人网站

这是一个现代化的响应式个人网站，展示教育背景、工作经历、项目成果和专业技能。

## 📁 项目结构

```
personal-website/
├── index.html              # 主页
├── about.html              # 关于页面
├── projects.html           # 项目页面
├── css/
│   └── style.css          # 样式表
├── js/
│   └── script.js          # JavaScript脚本
└── README.md              # 本文件
```

## 🚀 快速开始

### 本地预览

1. **简单方式**：直接在浏览器中打开 `index.html` 文件
   - Windows：双击 `index.html`
   - Mac/Linux：右键 → 打开方式 → 浏览器

2. **使用本地服务器**（推荐）：
   
   **Python 3.x:**
   ```bash
   cd personal-website
   python -m http.server 8000
   # 然后访问 http://localhost:8000
   ```

   **Python 2.x:**
   ```bash
   cd personal-website
   python -m SimpleHTTPServer 8000
   ```

   **Node.js:**
   ```bash
   npm install -g http-server
   cd personal-website
   http-server -p 8000
   ```

## 📝 页面介绍

### 1. 首页 (index.html)
- Hero部分：个人简介和快速导航
- 快速概览：教育、经验、技能、获奖等亮点
- 最近项目：展示最新的产品项目
- 联系方式：电话、邮箱、微信

### 2. 关于页面 (about.html)
- 个人简介
- 教育经历（时间轴格式）
- 工作经历（详细职务和成果）
- 专业技能（分类展示）
- 获奖与认证

### 3. 项目页面 (projects.html)
- 产品项目
  - Durian Lover - 榴莲地图
  - 7verse - 虚拟人物对话产品
- 工作相关项目
  - 智慧城市交通平台
- 科研项目
  - 黄河流域经济&生态耦合协调
  - 全国胃癌空间分布研究

## 🎨 样式特性

- **现代化设计**：使用渐变色和阴影效果
- **响应式布局**：完美适配各种屏幕尺寸
- **平滑动画**：元素进入视图时的动画效果
- **易于阅读**：充分的空间和清晰的排版
- **无障碍支持**：键盘导航和焦点管理

## 🔧 自定义修改

### 修改个人信息
编辑三个HTML文件中的以下内容：
- **姓名和联系方式**：在各页面顶部的hero部分和联系部分
- **教育经历**：在 `about.html` 的education部分
- **工作经历**：在 `about.html` 的experience部分
- **项目内容**：在 `projects.html` 的相应部分

### 修改颜色
在 `css/style.css` 的 `:root` 部分修改CSS变量：
```css
:root {
    --primary-color: #0066cc;      /* 主色调 */
    --secondary-color: #f0f0f0;    /* 次要背景色 */
    --text-color: #333;            /* 文本颜色 */
}
```

### 修改字体
在 `css/style.css` 中修改 `body` 的 `font-family` 属性

## 📱 浏览器支持

- Chrome / Edge：完全支持
- Firefox：完全支持
- Safari：完全支持
- IE 11：基本支持（部分动画效果不可用）

## 🌐 部署方案

### 1. 静态网站托管（推荐）
- **GitHub Pages**（免费）：https://pages.github.com/
- **Netlify**（免费）：https://www.netlify.com/
- **Vercel**（免费）：https://vercel.com/
- **阿里云OSS**：https://www.aliyun.com/
- **腾讯云COS**：https://cloud.tencent.com/

### 2. 传统虚拟主机
使用FTP上传所有文件到服务器

### 3. Docker容器化
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📊 性能优化建议

1. **图片优化**：如果添加图片，使用WebP格式
2. **CSS压缩**：生产环境中压缩CSS文件
3. **懒加载**：对于大量内容，考虑添加懒加载
4. **缓存**：配置服务器缓存策略

## ✨ 功能特性

- ✅ 导航栏自动高亮当前页面
- ✅ 平滑滚动动画
- ✅ 元素进入视图时的淡入效果
- ✅ 返回顶部按钮
- ✅ 微信号一键复制
- ✅ 响应式设计
- ✅ 暗色主题友好（通过CSS变量易于修改）

## 🛠️ 开发工具推荐

- **代码编辑器**：VS Code、Sublime Text、WebStorm
- **浏览器开发者工具**：F12打开
- **实时预览**：Live Server (VS Code扩展)

## 📄 许可证

此项目为个人网站，可自由使用和修改。

## 📞 联系信息

如有问题或需要帮助，请通过以下方式联系：

- **邮箱**：xiaoyanli03@163.com
- **电话**：(+86) 18950886701
- **微信**：Leora-LI

## 🔄 更新日志

### v1.0 (2026-05-29)
- ✨ 初始版本发布
- 📄 创建三个主要页面
- 🎨 完整的响应式设计
- ✨ 动画和交互效果

---

**网站最后更新时间**：2026年5月29日
