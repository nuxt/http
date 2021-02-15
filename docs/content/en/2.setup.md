---
title: Setup
description: 'How to setup your module'
position: 2
category: Getting Started
---

Checkout the [Nuxt documentation](https://nuxtjs.org/api/configuration-modules#the-modules-property) for more information about installing and using modules.

## Install

Add `@nuxt/http` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/http
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/http
  ```

  </code-block>
</code-group>

Then add it to the modules section in your `nuxt.config.js`:

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxt/http']
}
```

<alert type="success">

That's it! You can now use [$http](/usage) in your Nuxt app ✨

</alert>

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
