// import legacy from '@vitejs/plugin-legacy';
import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // target: 'static',

  typescript: {
    shim: false,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      charset: 'utf-16',
      title: 'urinest.rip',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Een workflow voor urineonderzoek' },
      ],
      link: [{ rel: 'manifest`', href: 'manifest.json' }],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' },
      ],
    },
  },

  css: [
    // SCSS file in the project
    '@/assets/main.scss',
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  // vite: {
  //   plugins: [
  //     legacy({
  //       targets: ['defaults', 'not IE 11']
  //     })
  //   ]
  // },

  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
        ],
      },
    ],
  ],
});
