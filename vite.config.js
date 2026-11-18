import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project sites are served from /<repo>/; the dev server and
  // the manual deploy script pass BASE_PATH when needed.
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    allowedHosts: [".kenalany.uk"],
  },
})
