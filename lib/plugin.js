import KY from 'ky-universal'

// KY.prototype cannot be modified
const KYExtra = {
  setHeader(name, value, scopes = 'common') {
    // for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
    //   if (!value) {
    //     delete this.defaults.headers[scope][name];
    //     return
    //   }
    //   this.defaults.headers[scope][name] = value
    // }
  },
  setToken(token, type, scopes = 'common') {
    // const value = !token ? null : (type ? type + ' ' : '') + token
    // this.setHeader('Authorization', value, scopes)
  },
  onRequest(fn) {
    // this.interceptors.request.use(config => fn(config) || config)
  },
  onResponse(fn) {
    // this.interceptors.response.use(response => fn(response) || response)
  },
  onRequestError(fn) {
    // this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error))
  },
  onResponseError(fn) {
    // this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error))
  },
  onError(fn) {
    // this.onRequestError(fn)
    // this.onResponseError(fn)
  }
}

// Request helpers ($get, $post, ...)
for (let method of ['get', 'post', 'put', 'patch', 'head', 'delete']) {
  KYExtra['$' + method] = function () { return this[method].apply(this, arguments).then(res => res.json()) }
}

const extendKYInstance = instance => {
  for (let key in KYExtra) {
    instance[key] = KYExtra[key].bind(instance)
  }
}

export default (ctx, inject) => {
  // Set prefixUrl
  const prefixUrl = process.browser
      ? '<%= options.browserBaseURL %>'
      : (process.env._HTTP_BASE_URL_ || '<%= options.baseURL %>')

  const kyDefaults = {
    prefixUrl,
    headers: {},
    retry: 1,
  }

  <% if (options.proxyHeaders) { %>
  // Proxy SSR request headers headers
  kyDefaults.headers = (ctx.req && ctx.req.headers) ? { ...ctx.req.headers } : {}
  <% for (let h of options.proxyHeadersIgnore) { %> delete kyDefaults.headers['<%= h %>']
  <% } %><% } %>

  if (process.server) {
    // Don't accept brotli encoding because Node can't parse it
    kyDefaults.headers['Accept-Encoding'] = 'gzip, deflate'
  }

  // Extend ky with defaults
  const ky = KY.extend(kyDefaults)

  // Extend instance proto
  extendKYInstance(ky)

  // Inject http to the context as $http
  ctx.$http = ky
  inject('http', ky)
}
