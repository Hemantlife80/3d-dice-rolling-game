import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3d-dice-rolling-game/', // यह लाइन ज़रूरी है
  plugins: [react()],
})