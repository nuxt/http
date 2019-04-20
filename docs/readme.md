# Introduction

HTTP module for Nuxt.js provides a universal way to make HTTP requests to the API backend.

This module is an alternative to [Axios Module](https://github.com/nuxt-community/axios-module). Behind the scenes it use [ky-universal](https://github.com/sindresorhus/ky-universal) and [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make HTTP requests. Please see the [migration guide](./guide/migration) if you are currently using axios module and wish to migrate.

Starting from `v2.5.0`, Nuxt.js has built-in support for universal fetch. However, this module provides several advantages:

- The fluent [ky](https://github.com/sindresorhus/ky) API has been extended with enhancements and shortcuts
- Highly customizable options support for [`BaseURL`](/api/#baseurl)
- Automatically proxy cookies and headers when making requests from server side
- Best practices to avoid token sharing when making server side requests
- Easy proxy support to avoid CORS problems and making deployment easier
