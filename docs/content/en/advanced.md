---
title: Advanced
description: 'Advanced concepts'
position: 4
category: Getting Started
---

## Hooks

Hooks can be used to globally intercept HTTP request and responses. E.g. if you wish to log errors, display a toast on error or need to dynamically modify requests.

See the [API reference](/hooks) for the list of lifecycle hooks the HTTP module provides

These functions don't have to return anything by default.

### Register Hooks

For registering hooks, you have to create a nuxt plugin:

```js{}[nuxt.config.js]
export default {
  plugins: [
    '~/plugins/http'
  ]
}
```

```js{}[plugins/http.js]
import ky from 'ky-universal'

export default function ({ $http }) {
  $http.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $http.onRetry(async (request, options, errors, retryCount) => {
    const token = await ky('https://example.com/refresh-token')
    options.header.set('Authorization', `Bearer ${token}`)
  })

  $http.onError(error => {
    if (error.statusCode === 500) {
      alert('Request Error!')
    }
    // Tip: error.response will be undefined if the connection dropped to the server
    // Tip: You can use error.response.data to get response message
    // Tip: You can return an object or Promise as fallback response to avoid rejection
  })
}
```

## Header Helpers

### `setHeader(name, value)`

Globally set a header to all subsequent requests.

<alert type="warning">

This method should probably not be called inside hooks as it is global and will apply to all future requests

</alert>

<alert type="tip">

Please note that HTTP headers are case-insensitive. Therefore all header names will be converted to lower-case to make sure that if you set the same header twice but with different casing the last one set will be used.

See also [this comment](https://github.com/sindresorhus/ky/issues/105#issuecomment-470169100) in the Ky repository for more information

</alert>

Parameters:

* **name**: Name of the header
* **value**: Value of the header

```js
// Add header `Authorization: 123` to all requests
this.$http.setHeader('Authorization', '123')

// Override `Authorization` header with new value
this.$http.setHeader('Authorization', '456')

// Add header `Content-Type: application/x-www-form-urlencoded`
this.$http.setHeader('Content-Type', 'application/x-www-form-urlencoded')

// Remove default Content-Type header
this.$http.setHeader('Content-Type', false)
```

### `setToken(token, type)`

Globally set `Authorization` header to all subsequent requests.

<alert type="tip">

This is a global method, you only have to call it once after which all future requests will include the token

</alert>

Parameters:

* **token**: Authorization token
* **type**: Authorization token prefix, usually `Bearer`. Defaults to nothing

```js
// Adds header: `Authorization: 123` to all requests
this.$http.setToken('123')

// Overrides `Authorization` header with new value
this.$http.setToken('456')

// Adds header: `Authorization: Bearer 123` to all requests
this.$http.setToken('123', 'Bearer')

// Removes default Authorization header
this.$http.setToken(false)
```

## Create new instance based on defaults

If you need to create your own [ky instance](https://github.com/sindresorhus/ky#kycreatedefaultoptions) which based on `$http` defaults, you can use the `create(options)` method.

```js{}[plugins/github.js]
export default function ({ $http, env }, inject) {
  // Create a custom HTTP instance
  const $github = $http.create({
    // See https://github.com/sindresorhus/ky#options
  })

  // Set baseURL to something different
  $github.setBaseURL('https://api.github.com')
  $github.setToken(env.GITHUB_TOKEN, 'token')

  // Inject to context as $github
  inject('github', $github)
}
```
