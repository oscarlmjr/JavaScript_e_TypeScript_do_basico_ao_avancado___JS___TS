import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true  // Abre o navegador automaticamente
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: 'dist' // Pasta de saída para o build de produção
  }
})