# Hooks

Sometimes we want to globally intercept HTTP request and responses.

For example display a toast on error or log them or dynamically modify requests.

HTTP module provides helpers to register these:

- `onRequest(config)`
- `onResponse(response)`
- `onError(err)` (`err.response` may be available on response errors)

These functions don't have to return anything by default. We will see how to register them.

## Register Hooks

For hooks, you have to first create a nuxt plugin: (Name can be anything other than `http`)

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
export default function ({ $http, redirect }) {
  $http.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $http.onError(error => {
    if(error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
```
