export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],

  buildModules: ['nuxt-plausible'],

  plausible: {
    domain: 'http.nuxtjs.org'
  }
})
