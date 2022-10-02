import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  css: [
    // SCSS file in the project
    '@/assets/main.scss',
  ],

  tailwindcss: {
    configPath: '@/config/tailwind.js',
  },

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
