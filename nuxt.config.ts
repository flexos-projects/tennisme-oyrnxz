// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Nuxt 4 compatibility
  future: { compatibilityVersion: 4 },

  // No magic — explicit imports only
  imports: { autoImport: false },
  components: false,

  // CSS — tokens and components loaded globally
  css: ['~/assets/css/main.css'],

  // SSR for portal/placeholder/marketing
  // SPA for authenticated app screens (added by flexos-build)
  routeRules: {
    '/': { ssr: true },
    '/preview/**': { ssr: false },
  },

  modules: ['@pinia/nuxt'],
})
