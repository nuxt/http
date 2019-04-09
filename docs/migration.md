# Migration Guide

If you are migrating from [Axios Module](https://github.com/nuxt-community/axios-module) this guide may be useful. The community axios module will be supported and maintained. HTTP uses newer web technologies like fetch.

- There is no scope for `setHeader`, `setToken`. Scope is common which means being applied to all requests.
- `onRequestError` and `onResponseError` hooks unified. Use `onError` instead.
- `debug` option has been removed. You can setup a basic logger using `onRequest` hook.
- The progress bar integration is not supported. This option may be back after ky PR for support of [`onProgress`](https://github.com/sindresorhus/ky/pull/34)

**Parsing response body:**

Despite axios that does this automatically, you have to call specific methods to parse reponse body.

```diff
-- const resJson = await this.$axios.get('/url')
++ const resJson = await this.$http.get('/url').json()
```

If you are using `$` prefixed shortcuts for making requests that respond JSON, you can keep using it without need to changes.

```js
const resJson = await this.$http.$get('/url')
```
