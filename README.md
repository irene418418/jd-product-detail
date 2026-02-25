# 京东商品详情页

[![构建状态](https://github.com/你的用户名/jd-product-detail/workflows/部署到%20GitHub%20Pages/badge.svg)](https://github.com/你的用户名/jd-product-detail/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.2.2-blue.svg)](https://www.typescriptlang.org/)

这是一个完整的京东商品详情页实现，包含商品信息展示、规格选择、购物车集成等核心功能。

## 📺 在线演示

🔗 [查看在线演示](https://你的用户名.github.io/jd-product-detail/)

> 注意：请将上面的 URL 替换为你的实际 GitHub Pages 地址

## 📸 项目截图

<!-- 在这里添加项目截图 -->
<!-- ![商品详情页](./screenshots/product-detail.png) -->
<!-- ![规格选择](./screenshots/spec-selector.png) -->
<!-- ![购物车](./screenshots/cart.png) -->

_截图待添加_

## 技术栈

- **前端框架**: [React 18](https://reactjs.org/)
- **状态管理**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **UI组件库**: [Ant Design](https://ant.design/)
- **HTTP客户端**: [Axios](https://axios-http.com/)
- **路由**: [React Router v6](https://reactrouter.com/)
- **样式方案**: CSS Modules + [Less](https://lesscss.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)

## 功能特性

### 核心功能

1. **商品信息展示**
   - 商品标题、品牌、评分、评价数量
   - 商品标签展示
   - 完整的商品参数表格

2. **图片浏览**
   - 主图展示
   - 缩略图切换
   - 大图预览功能
   - 图片加载状态管理

3. **规格选择**
   - 多规格组支持
   - 规格联动计算
   - 无库存规格自动禁用
   - SKU自动匹配

4. **购买面板**
   - 实时价格显示
   - 库存状态提示
   - 数量选择器（带验证）
   - 加入购物车
   - 立即购买

5. **商品详情**
   - 商品描述（支持HTML，XSS防护）
   - 规格参数表格
   - 售后服务列表
   - 标签页切换

6. **用户认证**
   - 登录状态检查
   - 登录拦截
   - 登录后状态恢复

7. **错误处理**
   - 统一错误处理机制
   - 用户友好的错误提示
   - 错误边界组件
   - 重试功能

8. **响应式设计**
   - 桌面端布局（>1200px）
   - 平板布局（768px-1200px）
   - 移动端布局（<768px）

9. **性能优化**
   - React.memo优化组件重渲染
   - useMemo缓存计算结果
   - useCallback优化回调函数
   - 图片懒加载

## 项目结构

```
jd-product-detail/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── ErrorBoundary/   # 错误边界
│   │   ├── ImageGallery/    # 图片浏览
│   │   ├── ProductInfo/     # 商品信息
│   │   ├── SpecSelector/    # 规格选择器
│   │   ├── PurchasePanel/   # 购买面板
│   │   └── ProductDescription/ # 商品详情
│   ├── pages/               # 页面组件
│   │   └── ProductDetail/   # 商品详情页
│   ├── store/               # Redux状态管理
│   │   ├── slices/          # Redux slices
│   │   │   ├── productSlice.ts
│   │   │   ├── cartSlice.ts
│   │   │   └── userSlice.ts
│   │   ├── hooks.ts         # 类型化的hooks
│   │   └── index.ts         # Store配置
│   ├── services/            # API服务层
│   │   ├── apiClient.ts     # Axios配置
│   │   ├── productService.ts
│   │   ├── cartService.ts
│   │   └── userService.ts
│   ├── types/               # TypeScript类型定义
│   │   └── product.ts
│   ├── utils/               # 工具函数
│   │   ├── dataTransform.ts # 数据转换
│   │   ├── validation.ts    # 数据验证
│   │   └── errorHandler.ts  # 错误处理
│   ├── hooks/               # 自定义Hooks
│   │   └── useAuthGuard.ts  # 认证守卫
│   ├── App.tsx              # 应用根组件
│   ├── main.tsx             # 应用入口
│   └── index.css            # 全局样式
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 使用说明

### 访问商品详情页

访问路由 `/product/:productId`，例如：
- http://localhost:3000/product/123

### 模拟数据

当前使用模拟数据进行展示。要接入真实API，需要：

1. 修改 `src/services/productService.ts` 中的API调用
2. 修改 `src/services/cartService.ts` 中的API调用
3. 修改 `src/services/userService.ts` 中的API调用
4. 更新 `src/services/apiClient.ts` 中的 `baseURL`

### 核心业务逻辑

#### 规格联动

规格选择时会自动计算其他规格的可用状态：
- 只有能组成有效SKU的规格组合才可选
- 无库存的规格会被禁用
- 选择完整规格后自动匹配对应SKU

#### 数量验证

购买数量会自动验证并调整到有效范围：
- 最小值：1
- 最大值：min(库存, 最大购买限制)

#### 购物车操作

加入购物车和立即购买前会进行验证：
1. 检查登录状态
2. 检查规格是否完整选择
3. 检查库存是否充足

## 代码规范

- 使用TypeScript严格模式
- 遵循ESLint配置
- 使用Prettier格式化代码
- 组件使用函数式组件和Hooks
- 样式使用CSS Modules避免冲突

## 性能优化

- 使用React.memo优化组件重渲染
- 使用useMemo缓存计算结果
- 使用useCallback优化回调函数
- 图片懒加载
- 代码分割

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](CONTRIBUTING.md) 了解如何开始。

### 贡献者

感谢所有为这个项目做出贡献的开发者！

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](../../issues)
- 发起 [Pull Request](../../pulls)

## ⭐ Star History

如果这个项目对你有帮助，请给它一个 Star！

---

**注意**: 本项目仅用于学习和演示目的。
