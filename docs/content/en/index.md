---
title: Introduction
description: 'HTTP module for Nuxt.js provides a universal way to make HTTP requests to the API backend.'
position: 1
category: ''
menuTitle: 'Intro'
features:
  - The fluent ky API has been extended with enhancements and shortcuts
  - Highly customizable options support for `BaseURL`
  - Automatically proxy cookies and headers when making requests from server side
  - Best practices to avoid token sharing when making server side requests
  - Easy proxy support to avoid CORS problems and making deployment easier
---

<img src="/preview.png" class="light-img" />
<img src="/preview-dark.png" class="dark-img" />

HTTP module for Nuxt.js provides a universal way to make HTTP requests to the API backend.

This module is an alternative to [Axios Module](https://github.com/nuxt-community/axios-module). Behind the scenes it use [ky-universal](https://github.com/sindresorhus/ky-universal) and [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make HTTP requests. Please see the [migration guide](./migration) if you are currently using axios module and wish to migrate.

Starting from [v2.5.0](https://github.com/nuxt/nuxt.js/releases/tag/v2.5.0), Nuxt.js has built-in support for universal fetch. However, this module provides several advantages:

## Features

<list :items="features"></list>

<p class="flex items-center">Enjoy a documentation with light and dark mode:&nbsp;<app-color-switcher class="p-2"></app-color-switcher></p>

## Links

* [ky](https://github.com/sindresorhus/ky)
* [`BaseURL`](/options#baseurl)
