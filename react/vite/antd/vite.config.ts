import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
  ssr: {
    noExternal: ['lucide-react'], // 确保 SSR 期间不会外部化 lucide-react
  },
});
