import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  
  plugins: [react()],
  server: {
    port: 5000,  
    open: true  ,
    proxy: {
      "/api": {
        target: "https://jobhunt4u.in/public_html/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})


