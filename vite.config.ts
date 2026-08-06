import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Warn if any chunk exceeds 500 KB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split vendor libraries into a separate chunk for better caching
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['motion'],
          gsap: ['gsap'],
        },
      },
    },
  },
  // Inline assets smaller than 8KB as base64 to save HTTP requests
  assetsInlineLimit: 8192,
})
