const path = require('path')
const consola = require('consola')

const logger = consola.withScope('nuxt:http')

function httpModule (_moduleOptions) {
  // Combine options
  const moduleOptions = { ...this.options.http, ..._moduleOptions }

  // Default port
  const defaultPort =
    process.env.API_PORT ||
    moduleOptions.port ||
    process.env.PORT ||
    process.env.npm_package_config_nuxt_port ||
    (this.options.server && this.options.server.port) ||
    3000

  // Default host
  let defaultHost =
    process.env.API_HOST ||
    moduleOptions.host ||
    process.env.HOST ||
    process.env.npm_package_config_nuxt_host ||
    (this.options.server && this.options.server.host) ||
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
  const https = Boolean(this.options.server && this.options.server.https)

  // Apply defaults
  const options = {
    baseURL: `http://${defaultHost}:${defaultPort}${prefix}`,
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

  // ENV overrides

  /* istanbul ignore if */
  if (process.env.API_URL) {
    options.baseURL = process.env.API_URL
  }

  /* istanbul ignore if */
  if (process.env.API_URL_BROWSER) {
    options.browserBaseURL = process.env.API_URL_BROWSER
  }

  // Default browserBaseURL
  if (typeof options.browserBaseURL === 'undefined') {
    options.browserBaseURL = options.proxy ? prefix : options.baseURL
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

  // Remove port 443 when https
  if (options.baseURL.includes('https://')) {
    options.baseURL = options.baseURL.replace(':443', '')
  }

  // Remove port 80 when http
  if (options.baseURL.includes('http://')) {
    options.baseURL = options.baseURL.replace(':80', '')
  }

  // Convert http:// to https:// if https option is on
  if (options.https === true) {
    const https = s => s.replace('http://', 'https://')
    options.baseURL = https(options.baseURL)
    options.browserBaseURL = https(options.browserBaseURL)
  }

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'http.js',
    options
  })

  // Proxy integration
  if (options.proxy) {
    this.requireModule([
      '@nuxtjs/proxy',
      typeof options.proxy === 'object' ? options.proxy : {}
    ])
  }

  // Alias ky-universal
  this.options.alias['ky-universal'] = path.resolve(__dirname, '../ky-universal')

  // Transpile ky and ky-universal
  this.options.build.transpile = this.options.build.transpile || {}
  this.options.build.transpile.push('ky')
  this.options.build.transpile.push('@nuxt/http')

  // Set _HTTP_BASE_URL_ for dynamic SSR baseURL
  process.env._HTTP_BASE_URL_ = options.baseURL

  logger.debug(`baseURL: ${options.baseURL}`)
  logger.debug(`browserBaseURL: ${options.browserBaseURL}`)
}

module.exports = httpModule
module.exports.meta = require('../package.json')
