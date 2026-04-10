# 摄影作品集 - 国内部署指南（2026 版）

## ⚠️ 重要提示

**GitHub Pages、Vercel、Netlify 等国外平台在中国大陆访问不稳定，不推荐用于面向国内用户的网站。**

---

## 🌟 方案一：Gitee 码云 Pages（推荐）⭐⭐⭐⭐⭐

**优点：** 国内访问速度快、完全免费、无需备案（个人展示）
**缺点：** 需要实名认证、Pages 功能可能需要申请开通

### 详细步骤：

1. **注册 Gitee 账号**
   - 访问 https://gitee.com/
   - 使用手机号注册

2. **实名认证（必须）**
   - 登录后 → 头像 → 个人信息 → 实名认证
   - 需要身份证信息（仅用于平台合规）

3. **创建仓库**
   - 点击 "+" → "新建仓库"
   - 仓库名：`photography-portfolio`
   - 可见性：公开（Public）
   - 创建

4. **上传文件**
   
   **方式 A - 使用 Git 命令行：**
   ```bash
   cd C:\Users\admin\AppData\Roaming\winclaw\.openclaw\workspace-code-assistant\photography-portfolio
   
   # 初始化 Git（如果还没初始化）
   git init
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "首次部署摄影作品集"
   
   # 关联远程仓库（替换为你的 Gitee 地址）
   git remote add origin https://gitee.com/你的用户名/photography-portfolio.git
   
   # 推送
   git push -u origin master
   ```

   **方式 B - 网页直接上传：**
   - 在仓库页面点击"上传文件"
   - 拖拽所有文件
   - 提交更改

5. **开通 Pages 服务**
   - 仓库页面 → "服务" → "Gitee Pages"
   - 如果看不到，需要申请开通（提交工单）
   - 选择 `master` 分支
   - 选择"公开"
   - 点击"确定"

6. **等待部署**
   - 通常需要 5-10 分钟
   - 状态显示"运行中"→"已部署"

7. **访问你的网站**
   - 免费域名：`https://你的用户名.gitee.io/photography-portfolio/`
   - 或：`https://gitee.io/你的用户名/photography-portfolio/`

---

## 🌟 方案二：Coding 腾讯云代码托管

**优点：** 腾讯出品、国内速度快、免费额度大
**缺点：** Pages 功能可能需要认证

### 步骤：

1. **注册 Coding**
   - 访问 https://coding.net/
   - 使用微信/QQ 登录

2. **创建项目**
   - 点击"创建项目"
   - 选择"代码托管"
   - 项目名称：`photography-portfolio`

3. **上传代码**
   ```bash
   git remote add origin https://e.coding.net/你的用户名/photography-portfolio.git
   git push -u origin main
   ```

4. **启用静态网站托管**
   - 项目 → 代码托管 → 静态网站
   - 启用并选择分支

5. **访问地址**
   - `https://你的用户名.coding-pages.com/photography-portfolio/`

---

## 🌟 方案三：阿里云 OSS（免费额度）

**优点：** 阿里云出品、稳定可靠
**缺点：** 需要支付宝实名认证、超出免费额度后收费

### 步骤：

1. **开通 OSS 服务**
   - 访问阿里云控制台
   - 搜索"对象存储 OSS"
   - 开通服务（新用户有免费额度）

2. **创建 Bucket**
   - 创建存储桶
   - 读写权限：公共读
   - 地域：选择离你近的

3. **开启静态页面托管**
   - Bucket 设置 → 静态页面
   - 启用并设置默认页面：`index.html`

4. **上传文件**
   - 使用 OSS 控制台或工具上传所有文件

5. **访问地址**
   - `https://你的 Bucket 名称.oss-cn-xxx.aliyuncs.com/`

**免费额度：** 每月 5GB 存储 + 5GB 流量（对个人网站足够）

---

## 🌟 方案四：腾讯云 COS（类似阿里云）

**优点：** 腾讯生态、微信集成好
**缺点：** 同样需要实名认证

### 步骤类似阿里云 OSS，略。

---

## 🌟 方案五：自建服务器（VPS）

**优点：** 完全控制、可绑定自定义域名
**缺点：** 需要备案、有成本

### 推荐服务商：
- 阿里云 ECS（新用户优惠）
- 腾讯云 CVM（新用户优惠）
- 华为云 ECS

**成本：** 约 100-300 元/年（入门级）

---

## 📊 方案对比

| 方案 | 访问速度 | 免费 | 备案 | 难度 | 推荐度 |
|------|---------|------|------|------|--------|
| Gitee Pages | ⭐⭐⭐⭐⭐ | ✅ | 不需要 | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Coding Pages | ⭐⭐⭐⭐⭐ | ✅ | 不需要 | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 阿里云 OSS | ⭐⭐⭐⭐⭐ | 有额度 | 不需要 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 腾讯云 COS | ⭐⭐⭐⭐⭐ | 有额度 | 不需要 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 自建 VPS | ⭐⭐⭐⭐⭐ | ❌ | 需要 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 💡 我的推荐

**首选：Gitee Pages**
- 完全免费
- 国内访问飞快
- 操作简单
- 适合个人作品集展示

**备选：阿里云 OSS**
- 如果 Gitee Pages 开通困难
- 免费额度足够用
- 更稳定可靠

---

## 🔧 修改网站内容

### 替换你的照片
1. 创建 `images` 文件夹
2. 放入你的摄影作品（建议压缩到 500KB 以内）
3. 修改 `index.html` 中的图片链接

### 修改个人信息
编辑 `index.html`：
- 标题：`<title>我的摄影作品</title>`
- 介绍：`<section id="about">` 部分
- 联系方式：`<section id="contact">` 部分

---

## ❓ 常见问题

**Q: Gitee Pages 开通被拒绝怎么办？**
A: 可以尝试 Coding Pages 或阿里云 OSS

**Q: 需要备案吗？**
A: Gitee/Coding 的免费 Pages 不需要备案（使用他们的域名）

**Q: 可以绑定自己的域名吗？**
A: 可以，但需要备案

**Q: 图片太大加载慢怎么办？**
A: 使用 TinyPNG 压缩图片，或使用云存储 CDN

---

## 📞 需要帮助？

如果遇到任何问题，告诉我：
- 具体卡在哪一步
- 报错信息是什么
- 我可以帮你解决

---

**祝你部署顺利！📸**
