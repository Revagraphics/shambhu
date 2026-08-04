import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/contact.php': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'react-icons/fa', 'react-simple-maps', 'prop-types'],
  },
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'vendor';
          } else if (id.includes('node_modules/framer-motion')) {
            return 'framer';
          } else if (id.includes('node_modules/react-icons')) {
            return 'icons';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    reportCompressedSize: false,
  },
})
