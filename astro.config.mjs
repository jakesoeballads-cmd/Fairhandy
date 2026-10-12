import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fairhandy.eu',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
