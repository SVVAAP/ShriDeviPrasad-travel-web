import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  
  plugins: [react()],
  server: {
    port: 3000,  
    open: true  ,
    proxy: {
      '/apis': {
          target: 'https://jobhunt4u.in/public_html/api',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
      },
  },
  }
})


