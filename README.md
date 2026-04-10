# 我的摄影作品个人主页

这是一个免费的摄影作品展示网站，使用现代 HTML5、CSS3 和 JavaScript 构建。

## 📁 项目结构

```
photography-portfolio/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # JavaScript 交互
└── README.md       # 说明文档
```

## 🚀 快速开始

### 本地预览
直接在浏览器中打开 `index.html` 文件即可预览。

### 部署到 GitHub Pages（免费）

1. **创建 GitHub 仓库**
   - 访问 https://github.com/new
   - 创建一个新仓库（例如：`photography-portfolio`）

2. **上传文件**
   ```bash
   # 初始化 git
   git init
   git add .
   git commit -m "Initial commit - 摄影作品集"
   
   # 关联远程仓库（替换为你的仓库地址）
   git remote add origin https://github.com/YOUR_USERNAME/photography-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - 选择 `main` 分支作为源
   - 保存后等待几分钟，你的网站就会上线！

4. **访问你的网站**
   - 地址格式：`https://YOUR_USERNAME.github.io/photography-portfolio/`

## 🎨 自定义内容

### 替换图片
将你的摄影作品图片放入 `images/` 文件夹，然后在 `index.html` 中替换占位符：

```html
<!-- 替换前 -->
<div class="photo-placeholder" style="background: ...">
  <span class="photo-icon">🏔️</span>
</div>

<!-- 替换后 -->
<img src="images/your-photo.jpg" alt="作品名称" class="photo-image">
```

### 修改文字内容
编辑 `index.html` 中的文字：
- 标题和描述
- 作品名称和分类
- 关于我的介绍
- 联系方式

### 添加更多作品
复制 `photo-card` 代码块，添加到 `gallery-grid` 中：

```html
<div class="photo-card">
  <div class="photo-placeholder" style="background: ...">
    <span class="photo-icon">📷</span>
  </div>
  <div class="photo-info">
    <h3>作品名称</h3>
    <p>分类标签</p>
  </div>
</div>
```

## 🌟 特点

- ✨ 响应式设计，支持手机、平板、电脑
- 🎨 现代化渐变色彩和动画效果
- 📱 移动端友好
- ⚡ 快速加载，无需数据库
- 🆓 完全免费托管

## 📞 联系方式

- 邮箱：your-email@example.com
- 微信：（待填写）
- Instagram: （待填写）

## 📝 更新日志

- 2026-04-10: 初始版本发布

---

**祝你摄影愉快！📸**
