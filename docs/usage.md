## Usage

### Component

**`asyncData`**

```js
async asyncData({ $http }) {
  const ip = await $http.$get('http://icanhazip.com')
  return { ip }
}
```

**`methods`/`created`/`mounted`/etc**

```js
methods: {
  async fetchSomething() {
    const ip = await this.$http.$get('http://icanhazip.com')
    this.ip = ip
  }
}
```

### Store actions (including `nuxtServerInit`)

```js
// In store
{
  actions: {
    async getIP ({ commit }) {
      const ip = await this.$http.$get('http://icanhazip.com')
      commit('SET_IP', ip)
    }
  }
}
```
