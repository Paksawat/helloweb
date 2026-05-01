import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://helloweb.dk',
  integrations: [tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
