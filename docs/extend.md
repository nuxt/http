## Extending HTTP

If you need to customize http by registering interceptors and changing global config, you have to create a nuxt plugin.

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
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
```
