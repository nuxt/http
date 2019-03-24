# Usage

## Page Components

For `asyncData` and `fetch` you can access instance from context:

```js
async asyncData({ $http }) {
  const ip = await $http.get('http://icanhazip.com').text()
  return { ip }
}
```

## Component methods

Where you have access to `this`, you can use `this.$http`:

```js
methods: {
  async fetchSomething() {
    const ip = await this.$http.get('http://icanhazip.com').text()
    this.ip = ip
  }
}
```

## Store

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
