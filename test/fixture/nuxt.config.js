const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    require('../..')
  ],
  serverMiddleware: [
    '~/api.js'
  ],
  http: {
    prefix: '/test_api',
    timeout: 25000,
    proxy: true,
    retry: 1
  },
  build: {
    terser: false
  },
  plugins: ['~/plugins/http']
}
