// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
        '@componentes': new URL('./src/components', import.meta.url).pathname,
        '@layout': new URL('./src/layouts', import.meta.url).pathname,
        '@pages': new URL('./src/pages', import.meta.url).pathname,
        '@lib': new URL('./src/lib', import.meta.url).pathname,
      },
    },
  },
});
