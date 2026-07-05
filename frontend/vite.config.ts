import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('@stellar') || id.includes('stellar-sdk')) return 'stellar'
          if (id.includes('@creit.tech')) return 'wallet'
          if (id.includes('motion')) return 'motion'
          if (id.includes('react')) return 'react'
        },
      },
    },
  },
})
