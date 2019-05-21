---
sidebar: auto
---

# API Reference

:::tip Note
When a method `resolves` instead of `returns` the method is async and returns a Promise
:::

## Options

You can pass options using module options or `http` section in `nuxt.config.js`

```js
{
  http: {
    // HTTP options here
  }
}
```

### `prefix`
### `host`
### `port`

This options are used for default values of `baseURL` and `browserBaseURL`.

Can be customized with `API_PREFIX`, `API_HOST` (or `HOST`) and `API_PORT` (or `PORT`) environment variables.

Default value of `prefix` is `/`.

### `baseURL`

* Default: `http://[HOST]:[PORT][PREFIX]`

Base URL which is used and prepended to make requests in server side.

Environment variable `API_URL` can be used to **override** `baseURL`.

:::tip Note
`baseURL` and `proxy` won't work together, you will need to use [`prefix`](/api/#prefix) instead
:::

### `browserBaseURL`

* Default: `baseURL` (or `prefix` when `options.proxy` is enabled)

Base URL which is used and prepended to make requests in client side.

Environment variable `API_URL_BROWSER` can be used to **override** `browserBaseURL`.

### `https`

* Default: `false`

If set to `true`, `http://` in both `baseURL` and `browserBaseURL` will be changed into `https://`.

### `proxy`

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

### `retry`

* Default: `false`

Automatically intercept failed requests and retry before failing.

By default, number of retries will be **2 times**, if `retry` value is set to `true`. You can change it by passing an object like this:

```js
http: {
  retry: 1
}
```

### `proxyHeaders`

* Default: `true`

In SSR context, sets client request header as http default request headers.
This is useful for making requests which need cookie based auth on server side.
Also helps making consistent requests in both SSR and Client Side code.

:::tip Note
When directing requests at a url protected by CloudFlare's CDN you should set this to `false` to prevent CloudFlare from mistakenly detecting a reverse proxy loop and returning a 403 error
:::

### `proxyHeadersIgnore`

* Default `['accept', 'host', 'cf-ray', 'cf-connecting-ip']`

Only efficient when `proxyHeaders` is set to true. Removes unwanted request headers to the API backend in SSR.

## Methods

### `setHeader`

- arguments: `(name, value)`

Globally set a header to all subsequent requests

See [here](/guide/advanced.html#header-helpers) for usage info

### `setToken`

- arguments: `(token, type)`

Globally set a `Authorization` header for all subsequent requests

See [here](/guide/advanced.html#settoken-token-type) for usage info

## Hooks

The `arguments` listed below are those your hook will receive when it's called

### `onRequest`

- arguments: `(config)`

See [here](/guide/advanced.html#hooks) for usage info

### `onResponse`

- arguments: `(response)`

See [here](/guide/advanced.html#hooks) for usage info

### `onError`

- arguments: `(error)`

If the error originated from a request, the property `err.response` might be available

See [here](/guide/advanced.html#hooks) for usage info

## HTTP Methods

:::tip Usage
See [here](/guide/usage.html#making-requests) for usage information for below methods
:::

### `delete`
### `get`
### `head`

- arguments: `(url, options?)`
- resolves: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- rejects: `Error`

These methods corresponds to the similar named HTTP/1.1 methods

### `patch`
### `post`
### `put`

- arguments: `(url, body?, options?)`
- resolves: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- rejects: `Error`

These methods corresponds to the similar named HTTP/1.1 methods

### `$delete`
### `$get`
### `$head`

- arguments: `(url, options?)`
- resolves: `JSON`
- rejects: `Error`

These `$`-prefixed convenience methods always return the requested content as [`JSON`](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)

### `$patch`
### `$post`
### `$put`

- arguments: `(url, body?, options?)`
- resolves: `JSON`
- rejects: `Error`

These `$`-prefixed convenience methods always return the requested content as [`JSON`](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
