## Helpers

### Interceptors

HTTP plugin provides helpers to register http interceptors easier and faster.

- `onRequest(config)`
- `onResponse(response)`
- `onError(err)`
- `onRequestError(err)`
- `onResponseError(err)`

These functions don't have to return anything by default.

Example: (`plugins/http.js`)

```js
export default function ({ $http, redirect }) {
  $http.onError(error => {
    if(error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
```

### Fetch Style requests

HTTP plugin also supports fetch style requests with `$` prefixed methods:

```js
// Normal usage with http
let data = (await $http.get('...')).data

// Fetch Style
let data = await $http.$get('...')
```

### `setHeader(name, value, scopes='common')`

HTTP instance has a helper to easily set any header.

Parameters:

* **name**: Name of the header
* **value**: Value of the header
* **scopes**: Send only on specific type of requests. Defaults
  * Type: _Array_ or _String_
  * Defaults to `common` meaning all types of requests
  * Can be `get`, `post`, `delete`, ...

```js
// Adds header: `Authorization: 123` to all requests
this.$http.setHeader('Authorization', '123')

// Overrides `Authorization` header with new value
this.$http.setHeader('Authorization', '456')

// Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
this.$http.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
  'post'
])

// Removes default Content-Type header from `post` scope
this.$http.setHeader('Content-Type', false, ['post'])
```

### `setToken(token, type, scopes='common')`

HTTP instance has an additional helper to easily set global authentication header.

Parameters:

* **token**: Authorization token
* **type**: Authorization token prefix(Usually `Bearer`).
* **scopes**: Send only on specific type of requests. Defaults
  * Type: _Array_ or _String_
  * Defaults to `common` meaning all types of requests
  * Can be `get`, `post`, `delete`, ...

```js
// Adds header: `Authorization: 123` to all requests
this.$http.setToken('123')

// Overrides `Authorization` header with new value
this.$http.setToken('456')

// Adds header: `Authorization: Bearer 123` to all requests
this.$http.setToken('123', 'Bearer')

// Adds header: `Authorization: Bearer 123` to only post and delete requests
this.$http.setToken('123', 'Bearer', ['post', 'delete'])

// Removes default Authorization header from `common` scope (all requests)
this.$http.setToken(false)
```
