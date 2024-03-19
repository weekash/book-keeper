import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

const env = loadEnv(
  'all',
  process.cwd()
);

export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      "^/api/*":env.VITE_API_BASE_URL
    }
  },
})
