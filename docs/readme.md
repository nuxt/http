# Introduction

HTTP module for Nuxt.js provides a universal way to make HTTP requests to the API backend.

This module is an alternative of [Axios Module](https://github.com/nuxt-community/axios-module) and behind the scenes use [ky-universal](https://github.com/sindresorhus/ky-universal) and [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make HTTP requests. Please see [migration guide](./migration) if currently using axios module and want to migrate.

Starting with v2.5.0, Nuxt.js has built-in support for universal fetch, However using this module has serveral advantages:

- Fluent [ky](https://github.com/sindresorhus/ky) API with more enhancenments and shortcuts
- Highly customizable options support for BaseURL
- Automatically proxy cookies and headers when making requests from server side
- Best practices to avoid token sharing while making server side requests
- Easy proxy support to avoid CORS problems and making deployment easier
