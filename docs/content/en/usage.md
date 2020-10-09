---
title: Usage
description: 'How to use this module'
position: 3
category: Getting Started
---

## Making Requests

See the [API reference](/api/#http-methods) for a list of available HTTP methods

Calling a HTTP methods returns a Promise that resolves to a [Reponse](https://developer.mozilla.org/en-US/docs/Web/API/Response) object or rejects in case of network errors.

You can use methods to convert response stream into usable data:

- `json`
- `text`
- `formData`
- `arrayBuffer`
- `blob`

See [ky](https://github.com/sindresorhus/ky#options) docs for all available options.

**Example: GET JSON data**

```js
const res = await $http.get('https://unpkg.com/nuxt/package.json')
const data = await res.json()
```

Alternatively for json only you can use `$` prefixed shortcut that smartly parses response using [destr](https://github.com/nuxt-contrib/destr).

```js
await $http.$get('https://unpkg.com/nuxt/package.json')
```

**Example: POST with JSON body**

```js
await $http.post('http://api.con', { foo: 'bar' })
```

## Using in `asyncData`

For `asyncData` and `fetch` you can access instance from context:

```js
async asyncData({ $http }) {
  const res = await $http.get('http://icanhazip.com')
  const ip = await res.text()
  return { ip }
}
```

**Example: GET JSON data using prefixed**

```js
async asyncData({ $http }) {
  const users = await $http.$get('https://reqres.in/api/users')
  return { users }
```


## Using in Component Methods

<alert type="warning">

`this` is not available in Nuxt's `asyncData` method, see [using in `asyncData`](#using-in-asyncdata) for how to use this module in `asyncData`

</alert>

When you have access to `this`, you can use `this.$http`:

```js
methods: {
  async fetchSomething() {
    const res = await this.$http.get('http://icanhazip.com')
    const ip = await res.text()
    this.ip = ip
  }
}
```

## Using in Store

For store actions you can also use `this.$http`:

```js
// In store
{
  actions: {
    async getIP ({ commit }) {
      const res = await this.$http.get('http://icanhazip.com')
      const ip = await res.text()
      commit('SET_IP', ip)
    }
  }
}
```