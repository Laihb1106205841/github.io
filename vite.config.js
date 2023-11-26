import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import {defineConfig} from "vite";



export default defineConfig({
  build: {
    rollupOptions: {
      external: ['vuex'], // Remove or adjust this line
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8082, // 指定前端端口号
    host: '0.0.0.0',

    outputDir:"course-analysis", //打包后的项目目录名称
    publicPath: './',

    proxy: {
      '/api': {
        target: 'http://10.32.61.211:8085',//后端端口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});



