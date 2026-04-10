# 摄影作品集 - 部署指南

## 方案一：GitHub Pages（推荐）⭐

**优点：** 完全免费、速度快、支持自定义域名
**适合：** 长期展示、技术爱好者

### 步骤：

1. **注册 GitHub 账号**
   - 访问 https://github.com/
   - 免费注册

2. **创建仓库**
   - 点击右上角 "+" → "New repository"
   - 仓库名：`photography-portfolio`（或任意）
   - 选择 Public
   - 点击 "Create repository"

3. **上传文件**
   
   方式 A - 使用 Git 命令行：
   ```bash
   cd photography-portfolio
   git init
   git add .
   git commit -m "首次部署摄影作品集"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/photography-portfolio.git
   git push -u origin main
   ```

   方式 B - 直接上传到网页：
   - 在仓库页面点击 "uploading an existing file"
   - 拖拽所有文件上传
   - 提交更改

4. **启用 GitHub Pages**
   - 仓库页面 → Settings → Pages
   - Source: 选择 `main` 分支
   - 点击 Save
   - 等待 1-2 分钟

5. **访问网站**
   - 地址：`https://YOUR_USERNAME.github.io/photography-portfolio/`

---

## 方案二：Vercel（推荐）⭐

**优点：** 部署更快、自动从 Git 更新、免费 HTTPS
**适合：** 自动化部署、追求速度

### 步骤：

1. **访问 Vercel**
   - 打开 https://vercel.com/
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 选择你的 GitHub 仓库
   - 点击 "Import"

3. **部署**
   - 保持默认设置
   - 点击 "Deploy"
   - 等待几分钟

4. **访问网站**
   - Vercel 会提供一个类似 `photography-portfolio.vercel.app` 的域名

---

## 方案三：Netlify

**优点：** 拖拽部署、无需 Git、免费域名
**适合：** 快速上线、不想用 Git

### 步骤：

1. **访问 Netlify**
   - 打开 https://www.netlify.com/
   - 免费注册

2. **拖拽部署**
   - 登录后，将 `photography-portfolio` 文件夹拖到 Netlify 页面
   - 自动部署完成！

3. **修改域名**
   - Site settings → Change site name
   - 设置你的专属域名，如 `my-photography.netlify.app`

---

## 方案四：Gitee 码云（国内访问快）

**优点：** 国内访问速度快
**缺点：** 需要实名认证

### 步骤：

1. 注册 https://gitee.com/
2. 创建仓库
3. 上传文件
4. 启用 Gitee Pages（需要实名认证）

---

## 💡 自定义域名（可选）

如果你有自己的域名：

### GitHub Pages:
1. 在仓库创建 `CNAME` 文件，内容：`yourdomain.com`
2. 在域名服务商添加 CNAME 记录
3. 在 GitHub Pages 设置中添加自定义域名

### Vercel/Netlify:
1. 在设置中添加自定义域名
2. 按提示配置 DNS 记录

---

## 📸 添加你的照片

1. 创建 `images` 文件夹
2. 放入你的摄影作品（建议压缩到 500KB 以内）
3. 在 `index.html` 中替换图片链接

示例：
```html
<img src="images/sunset.jpg" alt="日落" class="photo-image">
```

---

## 🆓 免费资源

- **图片压缩：** TinyPNG (https://tinypng.com/)
- **免费图标：** Font Awesome、Remix Icon
- **免费字体：** Google Fonts、思源字体

---

## 遇到问题？

- GitHub Pages 不更新？ → 强制刷新浏览器（Ctrl + F5）
- 图片不显示？ → 检查路径是否正确
- 访问慢？ → 考虑使用 Vercel 或 Gitee

---

**祝你部署顺利！🎉**
