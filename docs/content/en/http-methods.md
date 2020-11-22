---
title: HTTP Methods
description: 'HTTP Methods'
position: 9
category: API
---

<alert type="info">

See [here](/usage#making-requests) for usage information for below methods.

</alert>

<alert type="info">

Each http method returns a `Promise`

</alert>

### `$head`
- arguments: `(url, options?)`
  - url: `String`
  - options: [options](/options)
- resolves: [JSON](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
- rejects: `Error`

**Example: **
```js
const jsonResponse = await $http.$head('https://unpkg.com/nuxt/package.json')
```

### `$get`
- arguments: `(url, options?)`
  - url: `String`
  - options: [options](/options)
- resolves: [JSON](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
- rejects: `Error`

**Examples: **
```js
const jsonResponse = await $http.$get('https://unpkg.com/nuxt/package.json')
```

```js
// With prefixUrl option to call `https://example.com/items`
const jsonResponse = await $http.$get('items', { prefixUrl: 'https://example.com' })
```

### `$post`
- arguments: `(url, body?, options?)`
  - url: `String`
  - body: `Object`
  - options: [options](/options)
- resolves: [JSON](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
- rejects: `Error`

**Examples: **
```js
const jsonResponse = await $http.$post('http://api.com', { foo: 'bar' })
```

```js
// With some additional options
const jsonResponse = await $http.$post('http://api.com', { foo: 'bar' }, {
  debug: true,
  retry: 2,
  serverTimeout: 5000
})
```

### `$put`
- arguments: `(url, body?, options?)`
  - url: `String`
  - body: `Object`
  - options: [options](/options)
- resolves: [JSON](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
- rejects: `Error`

**Examples: **
```js
const jsonResponse = await $http.$put('http://api.com/{id}', { foo: 'bar' })
```

```js
// With some additional option
const jsonResponse = await $http.$put('http://api.com/{id}', { foo: 'bar' }, {
  clientTimeout: 5000
})
```

### `$delete`
- arguments: `(url, options?)`
  - url: `String`
  - options: [options](/options)
- resolves: [JSON](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
- rejects: `Error`

**Example: **

```js
await $http.$delete('https://api.example.com/item/{id}')
```

```js
// With some options to call `https://example.com/api/item`
const jsonResponse = await $http.$delete('item/{id}', { 
  baseUrl: 'https://example.com',
  prefixUrl: '/api' 
})
```

### `$patch`
- arguments: `(url, body?, options?)`
  - url: `String`
  - body: `Object`
  - options: [options](/options)
- resolves: [JSON](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
- rejects: `Error`

**Examples: **
```js
const jsonResponse = await $http.$patch('http://api.com/{id}', { foo: 'bar' })
```

```js
// With some additional option
const jsonResponse = await $http.$patch('http://api.com/{id}', { foo: 'bar' }, {
  proxyHeaders: true,
  proxyHeadersIgnore: ['content-type']
})
```

### `head`
- arguments: `(url, options?)`
  - url: `String`
  - options: [options](/options)
- resolves: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- rejects: `Error`

**Example: **
```js
await $http.head('https://unpkg.com/nuxt/package.json')
```

See [`here`](/usage#making-requests) to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

### `get`
- arguments: `(url, options?)`
  - url: `String`
  - options: [options](/options)
- resolves: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- rejects: `Error`

**Examples: **
```js
const response = await $http.get('https://unpkg.com/nuxt/package.json')
const jsonResponse = await response.json() 
```

```js
// With prefixUrl option to call `https://example.com/items`
const response = await $http.get('items', { prefixUrl: 'https://example.com' })
const textResponse = await response.text()
```

See [`here`](/usage#making-requests) to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

### `post`
- arguments: `(url, body?, options?)`
  - url: `String`
  - body: `Object`
  - options: [options](/options)
- resolves: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- rejects: `Error`

**Examples: **
```js
const response = await $http.post('http://api.com', { foo: 'bar' })
const jsonResponse = await response.json() 
```

```js
// With some additional options
const response = await $http.post('http://api.com', { foo: 'bar' }, {
  debug: true,
  retry: 2,
  serverTimeout: 5000
})
const jsonResponse = await response.json() 
```

See [`here`](/usage#making-requests) to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

### `put`
- arguments: `(url, body?, options?)`
  - url: `String`
  - body: `Object`
  - options: [options](/options)
- resolves: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- rejects: `Error`

**Examples: **
```js
const response = await $http.put('http://api.com/{id}', { foo: 'bar' })
const jsonResponse = await response.json()
```

```js
// With some additional option
const response = await $http.put('http://api.com/{id}', { foo: 'bar' }, {
  clientTimeout: 5000
})
const jsonResponse = await response.json()
```

See [`here`](/usage#making-requests) to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

### `delete`
- arguments: `(url, options?)`
  - url: `String`
  - options: [options](/options)
- resolves: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- rejects: `Error`

**Example: **

```js
await $http.delete('https://api.example.com/item/{id}')
```

```js
// With some options to call `https://example.com/api/item`
const response = await $http.delete('item/{id}', { 
  baseUrl: 'https://example.com',
  prefixUrl: '/api' 
})
```

See [`here`](/usage#making-requests) to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.

### `patch`
- arguments: `(url, body?, options?)`
  - url: `String`
  - body: `Object`
  - options: [options](/options)
- resolves: [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- rejects: `Error`

**Examples: **
```js
const response = await $http.patch('http://api.com/{id}', { foo: 'bar' })
const jsonResponse = await response.json()
```

```js
// With some additional option
const response = await $http.patch('http://api.com/{id}', { foo: 'bar' }, {
  proxyHeaders: true,
  proxyHeadersIgnore: ['content-type']
})
const jsonResponse = await response.json()
```

See [`here`](/usage#making-requests) to convert response stream into usable data.

These methods corresponds to the similar named HTTP/1.1 methods.