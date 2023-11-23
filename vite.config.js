import { resolve } from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy'
import { ViteAliases } from 'vite-aliases';
import handlebars from 'vite-plugin-handlebars';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import data from './vitejs/data.js';
import pages from './vitejs/pages.config.js';


const pagesInput = {};
pages.forEach((page => {
  pagesInput[page.name] = page.path
}));

export default defineConfig({
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        ...pagesInput
      }
    }
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    ViteAliases({
      prefix: '@',
    }),
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      reloadOnPartialChange: true,
      context: data,
    }),
    ViteImageOptimizer({
      exclude: /\.(svg)$/i,
    }),
  ],
});