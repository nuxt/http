# Advanced

## Hooks

Sometimes we want to globally intercept HTTP request and responses.
for example display a toast on error or log them or dynamically modify requests.

HTTP module provides helpers to register hooks for request lifecycle:

- `onRequest(config)`
- `onResponse(response)`
- `onError(err)` (`err.response` may be available on response errors)

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

> NOTE: This method should not be called inside hooks as it is global

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
