# Setup

Check the [Nuxt.js documentation](https://nuxtjs.org/api/configuration-modules#the-modules-property) for more information about installing and using modules in Nuxt.js

## Install
Install with yarn:

```bash
yarn add @nuxt/http
```

Install with npm:

```bash
npm install @nuxt/http
```

## Configure

Add a `http` object to your **nuxt.config.js** to configure global options which will be applied to all requests

```js
module.exports = {
  modules: [
    '@nuxt/http',
  ],

  http: {
    // proxyHeaders: false
  }
}
```
