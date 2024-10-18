import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'stats.html',
      open: true,
    }),
  ],
  build: {
    minify: 'terser', // Specify terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove all console logs
        drop_debugger: true, // Remove all debugger statements
      },
      output: {
        comments: false, // Remove comments
      },
    },
  },
});
