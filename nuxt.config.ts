// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/content'],
  ssr: false,
  css : ['~/assets/base.css','~/assets/main.css'],
  app : {
    pageTransition: false,
  },
  devServer: {
    port: 3000,      // Change the port to 3001
  }
})