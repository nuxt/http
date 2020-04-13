# Options

You can pass options using module options or `http` section in `nuxt.config.js`

```js
{
  http: {
    // HTTP options here
  }
}
```

## `prefix`
## `host`
## `port`

This options are used for default values of `baseURL` and `browserBaseURL`.

Can be customized with `API_PREFIX`, `API_HOST` (or `HOST`) and `API_PORT` (or `PORT`) environment variables.

Default value of `prefix` is `/`.

## `baseURL`

* Default: `http://[HOST]:[PORT][PREFIX]`

Base URL which is used and prepended to make requests in server side.

Environment variable `API_URL` can be used to **override** `baseURL`.

:::tip Note
`baseURL` and `proxy` won't work together, you will need to use [`prefix`](/api/#prefix) instead
:::

## `browserBaseURL`

* Default: `baseURL` (or `prefix` when `options.proxy` is enabled)

Base URL which is used and prepended to make requests in client side.

Environment variable `API_URL_BROWSER` can be used to **override** `browserBaseURL`.

## `https`

* Default: `false`

If set to `true`, `http://` in both `baseURL` and `browserBaseURL` will be changed into `https://`.

## `proxy`

* Default: `false`

You can easily integrate HTTP with [Proxy Module](https://github.com/nuxt-community/proxy-module) and is much recommended to prevent CORS and deployment problems.

**nuxt.config.js**

```js
{
  modules: [
    '@nuxt/http'
  ],

  http: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api/': 'http://api.example.com',
    '/api2/': 'http://api.another-website.com'
  }
}
```

:::tip Note
It is not required to manually register `@nuxtjs/proxy` module, but it does need to be in your dependencies
:::

:::tip Note
`/api/` will be added to all requests to the API end point. If you need to remove it use `pathRewrite`:

```js
proxy: {
  '/api/': {
    target: 'http://api.example.com',
    pathRewrite: { '^/api/': '' }
  }
}
```
:::

## `retry`

* Default: `false`

Automatically intercept failed requests and retry before failing.

By default, number of retries will be **2 times**, if `retry` value is set to `true`. You can change it by passing an object like this:

```js
http: {
  retry: 1
}
```

You can also pass an object to have more control! See [ky docs](https://github.com/sindresorhus/ky#retry).

## `serverTimeout`

* Default: `false`

Sets the timeout for the server requests in milliseconds.

```js
http: {
  serverTimeout: 2000
}
```

## `clientTimeout`

* Default: `false`

Sets the timeout for the client requests in milliseconds.

```js
http: {
  clientTimeout: 5000
}
```

## `proxyHeaders`

* Default: `true`

In SSR context, sets client request header as http default request headers.
This is useful for making requests which need cookie based auth on server side.
Also helps making consistent requests in both SSR and Client Side code.

:::tip Note
When directing requests at a url protected by CloudFlare's CDN you should set this to `false` to prevent CloudFlare from mistakenly detecting a reverse proxy loop and returning a 403 error.
:::

## `proxyHeadersIgnore`

* Default `['accept', 'host', 'cf-ray', 'cf-connecting-ip', 'content-length']`

Only efficient when `proxyHeaders` is set to true. Removes unwanted request headers to the API backend in SSR.
