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
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            if (id.includes('motion')) {
              return 'motion';
            }
            if (id.includes('gsap')) {
              return 'gsap';
            }
            return 'vendor'; // All other vendor libraries go to 'vendor' chunk
          }
        },
      },
    },
  },
  // Inline assets smaller than 8KB as base64 to save HTTP requests
  assetsInlineLimit: 8192,
})
