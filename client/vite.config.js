import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: "0.0.0.0", // This is like super important or whatever https://dev.to/mandrasch/vite-is-suddenly-not-working-anymore-due-to-cors-error-ddev-3673
    cors: true,
    port: 3000
  }
})
