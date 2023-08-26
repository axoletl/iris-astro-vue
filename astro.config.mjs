import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url'

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [vue()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: { 
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import '@/assets/styles/_vars.scss';
          @import '@/assets/styles/_mixins.scss';
          `
        }
      }
    }
  }
});