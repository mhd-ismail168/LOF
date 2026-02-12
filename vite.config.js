import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteCompression({ algorithm: 'brotliCompress' }),
    // viteCompression({ algorithm: 'gzip' })
  ],
  assetsInclude: ['**/*.PNG'],
  build: {
    minify: 'esbuild',
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       vendor: ['react', 'react-dom'],
    //       three: ['three', 'ogl', '@react-three/fiber', '@react-three/drei'],
    //       animations: ['framer-motion', 'gsap']
    //     }
    //   }
    // }
  }
})
