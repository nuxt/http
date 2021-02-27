const path = require('path')
const consola = require('consola')

const logger = consola.withScope('nuxt:http')

function httpModule (_moduleOptions) {
  const { nuxt, addPlugin, requireModule } = this

  // Combine options
  const moduleOptions = { ...nuxt.options.http, ..._moduleOptions }

  // Default port
  const defaultPort =
    process.env.API_PORT ||
    moduleOptions.port ||
    process.env.PORT ||
    process.env.npm_package_config_nuxt_port ||
    (nuxt.options.server && nuxt.options.server.port) ||
    3000

  // Default host
  let defaultHost =
    process.env.API_HOST ||
    moduleOptions.host ||
    process.env.HOST ||
    process.env.npm_package_config_nuxt_host ||
    (nuxt.options.server && nuxt.options.server.host) ||
    'localhost'

  /* istanbul ignore if */
  if (defaultHost === '0.0.0.0') {
    defaultHost = 'localhost'
  }

  // Support baseUrl
  if (moduleOptions.baseUrl && !moduleOptions.baseURL) {
    moduleOptions.baseURL = moduleOptions.baseUrl

    delete moduleOptions.baseUrl
  }

  // Default prefix
  const prefix = process.env.API_PREFIX || moduleOptions.prefix || '/'

  // HTTPS
  const https = Boolean(nuxt.options.server && nuxt.options.server.https)

  // Apply defaults
  const options = {
    baseURL: undefined,
    browserBaseURL: undefined,
    debug: false,
    proxyHeaders: true,
    proxyHeadersIgnore: ['accept', 'host', 'cf-ray', 'cf-connecting-ip', 'content-length', 'content-md5', 'content-type'],
    proxy: false,
    retry: false,
    serverTimeout: false,
    clientTimeout: false,
    https,
    headers: {},
    ...moduleOptions
  }
  const toHttps = s => options.https ? s.replace('http://', 'https://') : s

  // ENV overrides
  /* istanbul ignore if */
  if (process.env.API_URL) {
    options.baseURL = process.env.API_URL
  }

  /* istanbul ignore if */
  if (process.env.API_URL_BROWSER) {
    options.browserBaseURL = process.env.API_URL_BROWSER
  }

  // If no baseURL defined, get it from Nuxt server
  if (!options.baseURL) {
    options.baseURL = `http://${defaultHost}:${defaultPort}${prefix}`

    // Update auto generated baseURL after listen for static target as we use random port
    const publicRuntimeConfig = nuxt.options.publicRuntimeConfig = nuxt.options.publicRuntimeConfig || {}
    publicRuntimeConfig.http = publicRuntimeConfig.http || {}

    const privateRuntimeConfig = nuxt.options.privateRuntimeConfig = nuxt.options.privateRuntimeConfig || {}
    privateRuntimeConfig.http = privateRuntimeConfig.http || {}

    // For static exporting
    if (nuxt.options.target === 'static') {
      nuxt.hook('listen', (_, { host = 'localhost', port }) => {
        publicRuntimeConfig.http.browserBaseURL = toHttps(publicRuntimeConfig.http.browserBaseURL || prefix || '/')
        privateRuntimeConfig.http.baseURL = toHttps(privateRuntimeConfig.http.baseURL || `http://${host}:${port}${prefix}`)
      })
    }
  }

  // Normalize options
  if (options.retry === true) {
    options.retry = 2
  } else if (!options.retry) {
    options.retry = 0
  } else if (!isNaN(options.retry)) {
    options.retry = parseInt(options.retry)
  } else if (typeof options.retry === 'object') {
    options.retry = JSON.stringify(options.retry)
  }

  // Default browserBaseURL
  if (typeof options.browserBaseURL === 'undefined') {
    options.browserBaseURL = options.proxy ? prefix : options.baseURL
  }

  // Remove port 443 when https
  if (options.baseURL.includes('https://')) {
    options.baseURL = options.baseURL.replace(':443', '')
  }

  // Remove port 80 when http
  if (/^http:\/\/.*:80(\/|$)/.test(options.baseURL)) {
    options.baseURL = options.baseURL.replace(':80', '')
  }

  // Convert http:// to https:// if https option is on
  options.baseURL = toHttps(options.baseURL)
  options.browserBaseURL = toHttps(options.browserBaseURL)

  // Register plugin
  addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'http.js',
    options
  })
  addPlugin({
    src: path.resolve(__dirname, 'plugin.server.js'),
    fileName: 'http.server.js',
    options
  })

  // Proxy integration
  if (options.proxy) {
    requireModule([
      '@nuxtjs/proxy',
      typeof options.proxy === 'object' ? options.proxy : {}
    ])
  }

  // Transpile ky and ky-universal
  nuxt.options.build.transpile = nuxt.options.build.transpile || []
  nuxt.options.build.transpile.push('ky')

  // Set _HTTP_BASE_URL_ for dynamic SSR baseURL
  process.env._HTTP_BASE_URL_ = options.baseURL

  logger.debug(`baseURL: ${options.baseURL}`)
  logger.debug(`browserBaseURL: ${options.browserBaseURL}`)
}

module.exports = httpModule
module.exports.meta = require('../package.json')
