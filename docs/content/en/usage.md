---
title: Usage
description: 'How to use this module'
position: 3
category: Getting Started
---

## Making Requests

See the list of [available HTTP methods](/http-methods).

Calling a HTTP methods returns a `Promise` that resolves to a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object or rejects in case of network errors.

You can use methods to convert response stream into usable data:
- `json`
- `text`
- `formData`
- `arrayBuffer`
- `blob`

See [ky](https://github.com/sindresorhus/ky#options) docs for all available options.

**Example: GET JSON data**

```js
const package = await $http.$get('https://unpkg.com/nuxt/package.json')

console.log(package.name) // log "nuxt"
```

In most of the case, you want to get the JSON response. You can use `$` prefixed shortcut that smartly parses response using [destr](https://github.com/nuxt-contrib/destr).


Alternatively for other response type, you can use the methods mentioned above:

```js
const res = await $http.get('https://unpkg.com/nuxt/package.json')
const responseText = await res.text()
```

**Example: POST with JSON body**

```js
const data = await $http.$post('http://api.com', { foo: 'bar' })
```

## Using in `asyncData`

For `asyncData` and `fetch` you can access instance from context:

```js
async asyncData({ $http }) {
  const res = await $http.get('https://icanhazip.com')
  const ip = await res.text()

  return { ip }
}
```

**Example: GET JSON data using $ helper**

```js
async asyncData({ $http }) {
  const users = await $http.$get('https://reqres.in/api/users')

  return { users }
}
```

## Using in Component Methods

When you have access to `this`, you can use `this.$http`:

```js
methods: {
  async fetchSomething() {
    this.ip = await this.$http.$get('https://icanhazip.com')
  }
}
```

<alert type="info">

`this` is not available in Nuxt's `asyncData` method, see [using in `asyncData`](#using-in-asyncdata) for how to use this module in `asyncData`

</alert>

## Using in Store

For store actions you can also use `this.$http`:

```js
// In store
{
  actions: {
    async getIP ({ commit }) {
      const ip = await this.$http.$get('https://icanhazip.com')

      commit('SET_IP', ip)
    }
  }
}
```
