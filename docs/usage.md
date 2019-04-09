# Usage

## Making Requests

Available HTTP methods:

- `get(url, options?)`
- `head(url, options?)`
- `delete(url, options?)`
- `post(url, body?, options?)`
- `put(url, body?, options?)`
- `patch(url, body?, options?)`

Calling these methods, returns a Promise that resolves to a [Reponse](https://developer.mozilla.org/en-US/docs/Web/API/Response) object or rejects in case of network errors.

You can use methods to convert response stream into usable data:

- `json`
- `text`
- `formData`
- `arrayBuffer`
- `blob`

See [ky](https://github.com/sindresorhus/ky#options) docs for all available options.

**Example: Get a json file**

```js
await $http.get('https://unpkg.com/nuxt/package.json').json()
```

Alternatively for json only you can use `$` prefixed shortcut:

```js
await $http.$get('https://unpkg.com/nuxt/package.json')
```

**Example: Post with JSON body**

```js
await $http.post('http://api.con', { foo: 'bar' })
```

## Using in `asyncData`

For `asyncData` and `fetch` you can access instance from context:

```js
async asyncData({ $http }) {
  const ip = await $http.get('http://icanhazip.com').text()
  return { ip }
}
```

## Using in Component Methods

Where you have access to `this`, you can use `this.$http`:

```js
methods: {
  async fetchSomething() {
    const ip = await this.$http.get('http://icanhazip.com').text()
    this.ip = ip
  }
}
```

## Using in Store

For store action you can also use `this.$http`:

```js
// In store
{
  actions: {
    async getIP ({ commit }) {
      const ip = await this.$http.get('http://icanhazip.com').text()
      commit('SET_IP', ip)
    }
  }
}
```
