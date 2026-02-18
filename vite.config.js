// vite.config.js  (must be in root of repo)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // ← Root domain – no subfolder
})