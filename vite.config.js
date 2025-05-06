import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          streamChat: ['stream-chat-react'],
          // Add other chunks as needed
        }
      }
    }
  },
  // Add this section for SPA routing
  server: {
    historyApiFallback: true,
  }
})