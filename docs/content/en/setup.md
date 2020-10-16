---
title: Setup
description: 'How to setup your module'
position: 2
category: Getting Started
---

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

```js{}[nuxt.config.js]
export default {
  modules: [
    '@nuxt/http',
  ],

  http: {
    // proxyHeaders: false
  }
}
```

See [http's options](/options).

<alert type="warning">

Note that this module does not currently support IE 11 because of using [ky](https://github.com/sindresorhus/ky) ([open issue](https://github.com/nuxt/http/issues/126))

</alert>
