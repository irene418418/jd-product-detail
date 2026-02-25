# GitHub 发布配置说明

本文档说明了为 jd-product-detail 项目添加的所有 GitHub 发布配置文件。

## 📁 已创建的文件清单

### 核心配置文件

#### 1. LICENSE
- **位置**: `/LICENSE`
- **说明**: MIT 许可证文件
- **用途**: 定义项目的开源许可协议

#### 2. .gitignore
- **位置**: `/.gitignore`
- **说明**: Git 忽略文件配置（已更新）
- **包含内容**:
  - node_modules
  - dist 构建产物
  - 环境变量文件
  - 编辑器配置
  - 日志文件
  - 临时文件

#### 3. .gitattributes
- **位置**: `/.gitattributes`
- **说明**: Git 属性配置
- **功能**:
  - 统一换行符处理（LF）
  - 配置语言统计
  - 二进制文件识别

### GitHub Actions 工作流

#### 4. deploy.yml
- **位置**: `/.github/workflows/deploy.yml`
- **说明**: 自动部署到 GitHub Pages 的工作流
- **触发条件**: 推送到 main 分支或手动触发
- **功能**:
  - 自动安装依赖
  - 构建项目
  - 部署到 GitHub Pages

### 文档文件

#### 5. CONTRIBUTING.md
- **位置**: `/CONTRIBUTING.md`
- **说明**: 贡献指南（中文）
- **内容**:
  - 如何报告问题
  - 如何提交代码
  - 开发规范
  - 代码风格
  - 提交规范

#### 6. CODE_OF_CONDUCT.md
- **位置**: `/CODE_OF_CONDUCT.md`
- **说明**: 贡献者行为准则（中文）
- **内容**: 社区行为标准和规范

#### 7. 部署指南.md
- **位置**: `/部署指南.md`
- **说明**: 详细的部署说明文档
- **内容**:
  - 自动部署步骤
  - 手动部署方法
  - 配置说明
  - 常见问题解决

#### 8. 发布检查清单.md
- **位置**: `/发布检查清单.md`
- **说明**: 发布前的完整检查清单
- **内容**:
  - 代码准备检查
  - 文档更新检查
  - 配置文件检查
  - 部署测试检查

### GitHub 模板

#### 9. Pull Request 模板
- **位置**: `/.github/pull_request_template.md`
- **说明**: PR 提交模板
- **用途**: 规范化 Pull Request 的提交格式

#### 10. Issue 模板 - Bug 报告
- **位置**: `/.github/ISSUE_TEMPLATE/bug_report.md`
- **说明**: Bug 报告模板
- **用途**: 帮助用户规范地报告问题

#### 11. Issue 模板 - 功能请求
- **位置**: `/.github/ISSUE_TEMPLATE/feature_request.md`
- **说明**: 功能请求模板
- **用途**: 帮助用户提出新功能建议

### 更新的文件

#### 12. README.md（已更新）
- **位置**: `/README.md`
- **更新内容**:
  - ✅ 添加项目徽章（构建状态、许可证、版本等）
  - ✅ 添加在线演示链接占位符
  - ✅ 添加项目截图占位符
  - ✅ 增强技术栈说明（添加链接）
  - ✅ 添加环境要求说明
  - ✅ 添加贡献指南链接
  - ✅ 添加许可证信息
  - ✅ 添加联系方式

#### 13. package.json（已更新）
- **位置**: `/package.json`
- **更新内容**:
  - ✅ 添加项目描述
  - ✅ 添加关键字
  - ✅ 添加许可证信息
  - ✅ 添加仓库地址（占位符）
  - ✅ 添加 bugs 地址
  - ✅ 添加主页地址

#### 14. vite.config.ts（已更新）
- **位置**: `/vite.config.ts`
- **更新内容**:
  - ✅ 添加 base 路径配置
  - ✅ 支持 GitHub Pages 部署

## 🔧 需要手动配置的内容

在发布到 GitHub 之前，请替换以下占位符：

### 1. README.md
```markdown
# 将 "你的用户名" 替换为实际的 GitHub 用户名
https://ç.github.io/jd-product-detail/
```

### 2. package.json
```json
{
  "author": "",  // 填写作者信息
  "repository": {
    "url": "https://github.com/irene418418/jd-product-detail.git"  // 替换用户名
  },
  "bugs": {
    "url": "https://github.com/irene418418/jd-product-detail/issues"  // 替换用户名
  },
  "homepage": "https://irene418418.github.io/jd-product-detail/"  // 替换用户名
}
```

### 3. vite.config.ts
```typescript
// 如果仓库名不是 jd-product-detail，需要修改
base: process.env.NODE_ENV === 'production' ? '/你的仓库名/' : '/'
```

## 📋 发布步骤

### 第一步：更新配置
1. 替换所有占位符（见上方）
2. 填写 package.json 中的作者信息
3. 确认 vite.config.ts 中的 base 路径正确

### 第二步：推送到 GitHub
```bash
git add .
git commit -m "添加 GitHub 发布配置"
git push origin main
```

### 第三步：启用 GitHub Pages
1. 进入仓库的 Settings
2. 找到 Pages 设置
3. Source 选择 "GitHub Actions"
4. 保存设置

### 第四步：验证部署
1. 查看 Actions 标签页，确认工作流运行成功
2. 访问 `https://你的用户名.github.io/jd-product-detail/`
3. 验证所有功能正常工作

## 📊 项目徽章说明

README.md 中添加了以下徽章：

1. **构建状态徽章**: 显示 GitHub Actions 部署状态
2. **许可证徽章**: 显示 MIT 许可证
3. **Node.js 版本徽章**: 显示所需的 Node.js 版本
4. **React 版本徽章**: 显示使用的 React 版本
5. **TypeScript 版本徽章**: 显示使用的 TypeScript 版本

## 🎯 配置特点

### 自动化部署
- ✅ 推送到 main 分支自动触发部署
- ✅ 支持手动触发部署
- ✅ 自动构建和发布到 GitHub Pages

### 规范化流程
- ✅ PR 模板规范代码提交
- ✅ Issue 模板规范问题报告
- ✅ 贡献指南明确开发流程
- ✅ 行为准则维护社区环境

### 完整文档
- ✅ 中文文档，易于理解
- ✅ 详细的部署指南
- ✅ 完整的检查清单
- ✅ 清晰的使用说明

## 🔍 验证清单

使用以下命令验证配置：

```bash
# 检查代码规范
npm run lint

# 测试构建
npm run build

# 预览构建结果
npm run preview

# 检查依赖安全性
npm audit
```

## 📚 相关文档

- [部署指南.md](./部署指南.md) - 详细的部署说明
- [发布检查清单.md](./发布检查清单.md) - 发布前检查项
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 贡献指南
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - 行为准则

## ⚠️ 注意事项

1. **首次部署**: 首次推送后需要在 GitHub 仓库设置中启用 Pages
2. **Base 路径**: 确保 vite.config.ts 中的 base 路径与仓库名一致
3. **占位符**: 发布前务必替换所有 "你的用户名" 占位符
4. **环境变量**: 如果使用环境变量，需要在 GitHub Secrets 中配置

## 🎉 完成

所有 GitHub 发布所需的配置文件已创建完成！按照上述步骤操作即可将项目发布到 GitHub 并自动部署到 GitHub Pages。

---

**最后更新**: 2024
**维护者**: 项目团队
