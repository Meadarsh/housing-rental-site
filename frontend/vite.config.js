import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    server:{
      proxy:{
       '/api':'http://localhost:8081'
      } }},
  plugins: [react()],
})
