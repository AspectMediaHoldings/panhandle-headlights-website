import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://panhandleheadlights.com',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
