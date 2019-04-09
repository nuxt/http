# Migration Guide

If you are migrating from [axios-module](https://github.com/nuxt-community/axios-module) this guide may be useful.

- There is no scope for `setHeader`, `setToken`. Scope is common which means being applied to all requests.
- `onRequestError` and `onResponseError` hooks removed. Use `onError` instead.
- `debug` option has been removed. You can setup a basic logger using `onRequest` hook.
- The is no longer progress bar integration due to the lack of support from `fetch` spec. This option may be back after KY support of [`onProgress`](https://github.com/sindresorhus/ky/pull/34)

This module is using [ky](https://github.com/sindresorhus/ky) amd [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). There are breaking changes for usage and making requests.

## Parsing response body

Despite axios that does this automatically, you have to call specific methods to parse reponse body.

```diff
-- const resJson = await this.$axios.get('/url')
++ const resJson = await this.$http.get('/url').json()
```

There is also a shortcut for JSON by using `$` prefix on request method name.

```js
const resJson = await this.$http.$get('/url')
```

Supported response types:

- `json`
- `text`
- `formData`
- `arrayBuffer`
- `blob`
