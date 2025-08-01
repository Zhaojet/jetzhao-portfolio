# jetzhao.top 个人博客部署指南

## 🚀 部署到你的域名 jetzhao.top

### 方案一：使用 Vercel 部署（推荐）

#### 1. 准备 GitHub 仓库
```bash
# 初始化 Git 仓库
git init
git add .
git commit -m "个人博客初始版本"
git branch -M main

# 在 GitHub 创建新仓库后，添加远程仓库
git remote add origin https://github.com/你的用户名/jetzhao-portfolio.git
git push -u origin main
```

#### 2. 部署到 Vercel
1. 访问 https://vercel.com 并用 GitHub 账号登录
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. 构建设置会自动检测，确认以下配置：
   - Framework Preset: Vue.js
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. 点击 "Deploy" 开始部署

#### 3. 配置自定义域名
1. 部署成功后，进入项目设置页面
2. 点击 "Domains" 选项卡
3. 添加域名：`jetzhao.top`
4. 配置 DNS 记录（在你的域名注册商处）：
   ```
   类型: A
   名称: @
   值: 76.76.19.61
   
   类型: CNAME
   名称: www
   值: cname.vercel-dns.com
   ```

### 方案二：使用 Netlify 部署

#### 1. 部署到 Netlify
1. 访问 https://netlify.com 并用 GitHub 账号登录
2. 点击 "New site from Git"
3. 选择你的 GitHub 仓库
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
5. 点击 "Deploy site"

#### 2. 配置自定义域名
1. 进入站点设置
2. 点击 "Domain management"
3. 添加自定义域名：`jetzhao.top`
4. 配置 DNS 记录：
   ```
   类型: A
   名称: @
   值: 75.2.60.5
   
   类型: CNAME
   名称: www
   值: 你的站点名.netlify.app
   ```

### 方案三：使用 GitHub Pages 部署

#### 1. 安装 gh-pages
```bash
npm install --save-dev gh-pages
```

#### 2. 修改 package.json
在 scripts 中添加：
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

#### 3. 部署
```bash
npm run deploy
```

#### 4. 配置自定义域名
1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 在 `public` 目录下创建 `CNAME` 文件，内容为：`jetzhao.top`
3. 配置 DNS 记录：
   ```
   类型: A
   名称: @
   值: 185.199.108.153
   值: 185.199.109.153
   值: 185.199.110.153
   值: 185.199.111.153
   
   类型: CNAME
   名称: www
   值: 你的用户名.github.io
   ```

## 🔧 DNS 配置说明

### 在域名注册商处配置
1. 登录你的域名注册商管理面板
2. 找到 DNS 管理或域名解析设置
3. 根据选择的部署平台添加相应的 DNS 记录
4. 等待 DNS 生效（通常需要几分钟到几小时）

### 验证 DNS 配置
```bash
# 检查 A 记录
nslookup jetzhao.top

# 检查 CNAME 记录
nslookup www.jetzhao.top
```

## 📝 部署后的优化

### 1. 性能优化
当前构建有一些性能警告，可以通过以下方式优化：

#### 代码分割
在 `vue.config.js` 中添加：
```javascript
module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          }
        }
      }
    }
  }
}
```

#### 移除 console 警告
在生产环境中移除 console 语句：
```javascript
// 在 .eslintrc.js 中
rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
}
```

### 2. SEO 优化
- 添加 meta 标签
- 配置 sitemap.xml
- 添加 robots.txt

### 3. 监控和分析
- 集成 Google Analytics
- 配置错误监控
- 性能监控

## 🎉 部署完成

部署成功后，你可以通过以下地址访问你的个人博客：
- https://jetzhao.top
- https://www.jetzhao.top

## 🔄 更新部署

每次更新代码后，只需要推送到 GitHub：
```bash
git add .
git commit -m "更新内容"
git push
```

Vercel 和 Netlify 会自动重新部署。

## 📞 技术支持

如果在部署过程中遇到问题，可以：
1. 检查构建日志
2. 验证 DNS 配置
3. 确认域名状态
4. 联系平台技术支持

---

**恭喜！你的个人博客即将上线到 jetzhao.top！** 🎊