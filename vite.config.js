import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    allowedHosts: [
      "booking-system-production-6550.up.railway.app"
    ]
  }
})
