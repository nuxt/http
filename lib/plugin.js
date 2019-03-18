import KY from 'ky-universal'

export default (ctx, inject) => {
  // Set baseURL
  const baseURL = process.browser
      ? '<%= options.browserBaseURL %>'
      : (process.env._HTTP_BASE_URL_ || '<%= options.baseURL %>')

  const kyDefaults = {
    baseURL,
    headers
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

  // Inject http to the context as $http
  ctx.$http = ky
  inject('http', http)
}
