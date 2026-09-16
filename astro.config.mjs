// import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';
// import tailwindcss from '@tailwindcss/vite';
// export default defineConfig({site:'https://veldeonix.com',integrations:[sitemap()],vite:{plugins:[tailwindcss()]}});


import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://velde.realtywire.web.id',

  integrations: [
    sitemap()
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  server: {
    host: true,
    allowedHosts: [
      'velde.realtywire.web.id'
    ]
  }
});