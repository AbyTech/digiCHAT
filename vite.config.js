export default defineConfig({
  // ...other config
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
  }
})