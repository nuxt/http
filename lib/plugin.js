import KY from 'ky-universal'
import defu from 'defu'

class HTTP {
  constructor(defaults, ky = KY) {
    this._defaults = {
      hooks: {},
      ...defaults
    }

    this._ky = ky
  }

  setBaseURL (baseURL) {
    this._defaults.prefixUrl = baseURL
  }

  setHeader(name, value) {
    if (!value) {
      delete this._defaults.headers[name];
    } else {
      this._defaults.headers[name] = value
    }
  }

  setToken(token, type) {
    const value = !token ? null : (type ? type + ' ' : '') + token
    this.setHeader('Authorization', value)
  }

  _hook(name, fn) {
    if (!this._defaults.hooks[name]) {
      this._defaults.hooks[name] = []
    }
    this._defaults.hooks[name].push(fn)
  }

  onRequest(fn) {
    this._hook('beforeRequest', fn)
  }

  onRetry(fn) {
    this._hook('beforeRetry', fn)
  }

  onResponse(fn) {
    this._hook('afterResponse', fn)
  }

  onError(fn) {
    this._hook('onError', fn)
  }

  onDownloadProgress(fn) {
    this._defaults.onDownloadProgress = fn
  }

  create(options) {
    const { retry, timeout, prefixUrl, headers } = this._defaults

    return createHttpInstance(defu(options, { retry, timeout, prefixUrl, headers }))
  }
}

for (let method of ['get', 'head', 'delete', 'post', 'put', 'patch']) {
  const hasBody = ['post', 'put', 'patch'].includes(method)

  HTTP.prototype[method] = async function (url, arg1, arg2) {
    let options

    if (!hasBody) {
      options = arg1
    } else {
      options = arg2 || {}
      if (arg1 !== undefined) {
        if (arg1.constructor === Object || Array.isArray(arg1)) {
          options.json = arg1
        } else {
          options.body = arg1
        }
      }
    }

    const _options = { ...this._defaults, ...options }

    if (/^https?/.test(url)) {
      delete _options.prefixUrl
    } else if (_options.prefixUrl && typeof url === 'string' && url.startsWith('/')) {
      // Prevents `ky` from throwing "`input` must not begin with a slash when using `prefixUrl`"
      url = url.substr(1)
    }

    try {
      const response = await this._ky[method](url, _options)
      return response
    } catch (error) {
      // Call onError hook
      if (_options.hooks.onError) {
        _options.hooks.onError.forEach(fn => fn(error))
      }
      // Throw error
      throw error
    }
  }

  HTTP.prototype['$' + method] = function (url, arg1, arg2) {
    return this[method](url, arg1, arg2).then(res => res.json())
  }
}

const createHttpInstance = options => {
  // Create new HTTP instance
  const http = new HTTP(options)

  // Setup interceptors
  <% if (options.progress) { %>setupProgress(http) <% } %>

  return http
}

<% if (options.progress) { %>
const setupProgress = (http) => {
  if (process.server) {
    return
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => { },
    start: () => { },
    fail: () => { },
    set: () => { }
  }

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$<%= options.globalName %>']
    return ($nuxt && $nuxt.$loading && $nuxt.$loading.set) ? $nuxt.$loading : noopLoading
  }

  let currentRequests = 0

  http.onRequest(config => {
    if (config && config.progress === false) {
      return
    }

    currentRequests++
  })

  http.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return
    }

    currentRequests--
    if (currentRequests <= 0) {
      currentRequests = 0
      $loading().finish()
    }
  })

  http.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return
    }

    currentRequests--

    $loading().fail()
    $loading().finish()
  })

  http.onDownloadProgress(e => {
    if (!currentRequests) {
      return
    }
    const progress = ((e.transferredBytes * 100) / (e.totalBytes * currentRequests))
    $loading().set(Math.min(100, progress))
  })
}<% } %>

export default (ctx, inject) => {
  // prefixUrl
  const prefixUrl = process.browser
      ? '<%= options.browserBaseURL %>'
      : (process.env._HTTP_BASE_URL_ || '<%= options.baseURL %>')

  const headers = <%= JSON.stringify(options.headers, null, 2) %>

  // Defaults
  const defaults = {
    retry: <%= options.retry %>,
    timeout: process.server ? <%= options.serverTimeout %> : <%= options.clientTimeout %>,
    prefixUrl,
    headers
  }

  <% if (options.proxyHeaders) { %>
  // Proxy SSR request headers headers
  if (process.server && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers }
    for (let h of <%= serialize(options.proxyHeadersIgnore) %>) {
      delete reqHeaders[h]
    }
    defaults.headers = { ...reqHeaders, ...defaults.headers }
  }
  <% } %>

  if (process.server) {
    // Don't accept brotli encoding because Node can't parse it
    defaults.headers['accept-encoding'] = 'gzip, deflate'
  }

  const http = createHttpInstance(defaults)

  // Inject http to the context as $http
  ctx.$http = http
  inject('http', http)
}
