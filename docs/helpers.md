# Helpers

## JSON Requests

HTTP plugin supports easier JSON requests with `$` prefixed methods:

```js
// Normal usage with http
let data = (await $http.get('...')).json()

// Fetch Style
let data = await $http.$get('...')
```

## `setHeader(name, value)`

HTTP instance has a helper to easily set any header.

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

> NOTE: You do NOT need to call setHeader helper in interceptors. It is a global setter.

## `setToken(token, type)`

HTTP instance has an additional helper to easily set global authentication header.

Parameters:

* **token**: Authorization token
* **type**: Authorization token prefix(Usually `Bearer`).

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
