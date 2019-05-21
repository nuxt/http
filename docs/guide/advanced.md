# Advanced

## Hooks

Hooks can be used to globally intercept HTTP request and responses. E.g. if you wish to log errors, display a toast on error or need to dynamically modify requests.

See the [API reference](/api/#hooks) for the list of lifecycle hooks the HTTP module provides

These functions don't have to return anything by default.

### Register Hooks

For registering hooks, you have to create a nuxt plugin:

**nuxt.config.js**

```js
{
  modules: [
    '@nuxt/http',
  ],

  plugins: [
    '~/plugins/http'
  ]
}
```

**plugins/http.js**

```js
export default function ({ $http }) {
  $http.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $http.onError(error => {
    if(error.response.status === 500) {
      alert('Request Error!')
    }
  })
}
```

## Header Helpers

### `setHeader(name, value)`

Globally set a header to all subsequent requests.

:::warning
This method should probably not be called inside hooks as it is global and will apply to all future requests
:::

:::tip
Please note that HTTP headers are case-insensitive. Therefore all header names will be converted to lower-case to make sure that if you set the same header twice but with different casing the last one set will be used.

See also [this comment](https://github.com/sindresorhus/ky/issues/105#issuecomment-470169100) in the Ky repository for more information
:::

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

:::tip Note
This is a global method, you only have to call it once after which all future requests will include the token
:::

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

// Adds header: `Authorization: Bearer 123` to only post and delete requests
this.$http.setToken('123', 'Bearer', ['post', 'delete'])

// Removes default Authorization header
this.$http.setToken(false)
```
