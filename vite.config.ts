import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署配置
  // 如果部署到 https://<USERNAME>.github.io/<REPO>/，则设置 base 为 '/<REPO>/'
  // 如果部署到 https://<USERNAME>.github.io/，则设置 base 为 '/'
  base: process.env.NODE_ENV === 'production' ? '/jd-product-detail/' : '/',
})
