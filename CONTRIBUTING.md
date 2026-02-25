# 贡献指南

感谢你考虑为京东商品详情页项目做出贡献！

## 如何贡献

### 报告问题

如果你发现了 bug 或有功能建议：

1. 在 [Issues](../../issues) 页面搜索，确保问题尚未被报告
2. 创建新的 Issue，清晰描述问题或建议
3. 提供复现步骤（如果是 bug）
4. 附上相关的截图或错误信息

### 提交代码

1. **Fork 项目**
   - 点击页面右上角的 "Fork" 按钮

2. **克隆仓库**
   ```bash
   git clone https://github.com/你的用户名/jd-product-detail.git
   cd jd-product-detail
   ```

3. **创建分支**
   ```bash
   git checkout -b feature/你的功能名称
   # 或
   git checkout -b fix/你的修复名称
   ```

4. **安装依赖**
   ```bash
   npm install
   ```

5. **进行开发**
   - 遵循项目的代码规范
   - 编写清晰的代码注释
   - 确保代码通过 lint 检查

6. **测试你的更改**
   ```bash
   npm run dev    # 启动开发服务器测试
   npm run build  # 确保构建成功
   npm run lint   # 检查代码规范
   ```

7. **提交更改**
   ```bash
   git add .
   git commit -m "描述你的更改"
   ```

   提交信息格式建议：
   - `feat: 添加新功能`
   - `fix: 修复某个问题`
   - `docs: 更新文档`
   - `style: 代码格式调整`
   - `refactor: 代码重构`
   - `perf: 性能优化`
   - `test: 添加测试`
   - `chore: 构建或辅助工具的变动`

8. **推送到你的仓库**
   ```bash
   git push origin feature/你的功能名称
   ```

9. **创建 Pull Request**
   - 访问你 fork 的仓库页面
   - 点击 "New Pull Request"
   - 填写 PR 描述，说明你的更改
   - 等待维护者审核

## 开发规范

### 代码风格

- 使用 TypeScript 编写代码
- 遵循 ESLint 配置规则
- 使用 Prettier 格式化代码
- 组件使用函数式组件和 Hooks
- 使用 CSS Modules 编写样式

### 命名规范

- **组件文件**: PascalCase，如 `ProductInfo.tsx`
- **工具函数**: camelCase，如 `formatPrice.ts`
- **常量**: UPPER_SNAKE_CASE，如 `MAX_QUANTITY`
- **类型/接口**: PascalCase，如 `ProductInfo`

### 目录结构

```
src/
├── components/     # 可复用组件
├── pages/          # 页面组件
├── store/          # Redux 状态管理
├── services/       # API 服务
├── types/          # 类型定义
├── utils/          # 工具函数
└── hooks/          # 自定义 Hooks
```

### TypeScript 规范

- 为所有函数参数和返回值添加类型
- 避免使用 `any` 类型
- 使用接口定义对象结构
- 导出可复用的类型定义

### 组件规范

- 每个组件一个文件夹
- 包含 `index.tsx` 和 `index.module.less`
- 使用 `React.memo` 优化性能（必要时）
- Props 使用 TypeScript 接口定义

### 提交规范

- 每次提交只做一件事
- 提交信息清晰明确
- 避免提交无关文件
- 提交前运行 lint 检查

## 开发流程

1. **本地开发**
   ```bash
   npm run dev
   ```
   访问 http://localhost:3000

2. **代码检查**
   ```bash
   npm run lint
   ```

3. **构建测试**
   ```bash
   npm run build
   npm run preview
   ```

## 需要帮助？

- 查看 [README.md](README.md) 了解项目详情
- 查看 [使用说明.md](使用说明.md) 了解功能使用
- 在 [Issues](../../issues) 中提问
- 查看现有的 Pull Requests 了解开发方向

## 行为准则

- 尊重所有贡献者
- 保持友好和专业
- 接受建设性的批评
- 关注对项目最有利的事情

再次感谢你的贡献！🎉
