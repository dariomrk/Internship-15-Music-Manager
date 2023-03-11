import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactScopedCssPlugin(),
    svgr(),
  ],
  base: '/Internship-15-Music-Manager/',
});
