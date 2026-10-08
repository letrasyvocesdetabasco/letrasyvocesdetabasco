import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://letrasyvocesdetabasco.org',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap({ filter: (p) => !p.includes('/taller/') })],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
