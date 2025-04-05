import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/guinness-tracker/',
  plugins: [react()],
  assetsInclude: ['**/*.svg']
})
