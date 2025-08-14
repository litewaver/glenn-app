import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(),  tailwindcss(), postcss(), autoprefixer()],
    server: {
      historyApiFallback: true}
    });
