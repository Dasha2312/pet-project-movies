import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@mui/icons-material'],
    exclude: [
      'chunk-3ISELJEO.js',  // Add the name of the problematic file or dependency
      // You can add more dependencies here if needed
    ],
  }
})
