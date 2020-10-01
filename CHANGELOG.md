# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.6.0](https://github.com/nuxt/http/compare/v0.5.13...v0.6.0) (2020-10-01)


### ⚠ BREAKING CHANGES

* **deps:** (ky) remove response property for the first argument passed to `beforeRetry` hook. You can access it on `error.response` instead.

### Features

* **deps:** update dependency ky to ^0.24.0 ([#131](https://github.com/nuxt/http/issues/131)) ([6d16a87](https://github.com/nuxt/http/commit/6d16a87d3c94e190312fc292c074be40a28bd1fe))

### [0.5.13](https://github.com/nuxt/http/compare/v0.5.12...v0.5.13) (2020-09-26)


### Bug Fixes

* use regex to avoid falsely replacing ports starting with 80 ([#124](https://github.com/nuxt/http/issues/124)) ([e981e62](https://github.com/nuxt/http/commit/e981e622891a347ad0ba651bf7c48db29a989f84))

### [0.5.12](https://github.com/nuxt/http/compare/v0.5.11...v0.5.12) (2020-09-01)


### Bug Fixes

* **types:** add missing types for `create` and `setBaseURL` ([#122](https://github.com/nuxt/http/issues/122)) ([c002aaa](https://github.com/nuxt/http/commit/c002aaa97c45fa5dfd91325a005fd5cc18a55b57))

### [0.5.11](https://github.com/nuxt/http/compare/v0.5.10...v0.5.11) (2020-08-20)


### Bug Fixes

* **ky-universal:** server importing es bundle ([#121](https://github.com/nuxt/http/issues/121)) ([029dea6](https://github.com/nuxt/http/commit/029dea6f04f82f8df36459a200751af683788302))

### [0.5.10](https://github.com/nuxt/http/compare/v0.5.9...v0.5.10) (2020-07-16)


### Bug Fixes

* **plugin:** debug option broken ([#117](https://github.com/nuxt/http/issues/117)) ([6bc1295](https://github.com/nuxt/http/commit/6bc12959a59b855dc9020e56fa0d0acb7f0e54d0))

### [0.5.9](https://github.com/nuxt/http/compare/v0.5.8...v0.5.9) (2020-07-14)


### Bug Fixes

* set default host ([18e9b11](https://github.com/nuxt/http/commit/18e9b11c395d7ef362ca75dee1ab97c939121864))

### [0.5.8](https://github.com/nuxt/http/compare/v0.5.7...v0.5.8) (2020-07-14)


### Features

* handle runtimeConfig and static target ([b9f5e05](https://github.com/nuxt/http/commit/b9f5e053d393d6a2f695df04d1d3bbc0ac54123f))


### Bug Fixes

* build.transpile should be an array ([823204c](https://github.com/nuxt/http/commit/823204c399149cc149f7a5c31bf93bd6fd729e28)), closes [#115](https://github.com/nuxt/http/issues/115)

### [0.5.7](https://github.com/nuxt/http/compare/v0.5.6...v0.5.7) (2020-06-29)

### [0.5.6](https://github.com/nuxt/http/compare/v0.5.5...v0.5.6) (2020-06-29)


### Bug Fixes

* **plugin:** allow reusing error.response.json ([77b084b](https://github.com/nuxt/http/commit/77b084bc01ae9f95a33ad49a84d99c8765c8725a))

### [0.5.5](https://github.com/nuxt/http/compare/v0.5.4...v0.5.5) (2020-06-17)

### [0.5.4](https://github.com/nuxt/http/compare/v0.5.3...v0.5.4) (2020-06-17)


### Features

* improve `$` helpers and error object ([#113](https://github.com/nuxt/http/issues/113)) ([ada7387](https://github.com/nuxt/http/commit/ada73879f7891fbec712e41188bba70ee829adc2))

### [0.5.3](https://github.com/nuxt/http/compare/v0.5.2...v0.5.3) (2020-06-12)


### Features

* `debug` option ([#109](https://github.com/nuxt/http/issues/109)) ([874b668](https://github.com/nuxt/http/commit/874b668e1e98774e9ad0ef12d402605d00397fb4))
* https detection ([#106](https://github.com/nuxt/http/issues/106)) ([8ae0cd5](https://github.com/nuxt/http/commit/8ae0cd5655752e15d6d5296ef9fed53a843f0fca)), closes [nuxt-community/axios-module#260](https://github.com/nuxt-community/axios-module/issues/260)


### Bug Fixes

* ignore proxy headers `content-md4` and `content-type` ([#107](https://github.com/nuxt/http/issues/107)) ([4152f87](https://github.com/nuxt/http/commit/4152f874a168dcdbceadd92b178b6213b535856b))
* use local version of ky-universal ([#111](https://github.com/nuxt/http/issues/111)) ([e7cb647](https://github.com/nuxt/http/commit/e7cb64704788e38fe0dc685b415b92b90b61df3f))

### [0.5.2](https://github.com/nuxt/http/compare/v0.5.1...v0.5.2) (2020-06-05)


### Features

* allow adding custom headers with nuxt config ([#101](https://github.com/nuxt/http/issues/101)) ([2839260](https://github.com/nuxt/http/commit/2839260ea97b18f259f79bb3ea0e97b0aa7228c3))
* support baseUrl and remove port :443 and :80 when http or https ([#103](https://github.com/nuxt/http/issues/103)) ([fc3e78e](https://github.com/nuxt/http/commit/fc3e78e1307455df506dbc8f6ba5269f28f6e364))

### [0.5.1](https://github.com/nuxt/http/compare/v0.5.0...v0.5.1) (2020-04-29)


### Bug Fixes

* remove leading slash when using prefixUrl ([#96](https://github.com/nuxt/http/issues/96)) ([10fbd67](https://github.com/nuxt/http/commit/10fbd679664c533e8a5fa45afb1f56ac945d8cfa))

## [0.5.0](https://github.com/nuxt/http/compare/v0.4.0...v0.5.0) (2020-04-13)


### New Features

- Allow creating new instances with `$http.create(kyOptions)` (#3) (#94) ([docs](https://http.nuxtjs.org/guide/advanced.html#create-new-instance-based-on-defaults))
- ‍Allow changing baseURL on runtime `$http.setBaseURL(baseURL)‍‍` (#82) (#94)

### Docs

#### Restructure sidebar (#94)

- API > Hooks: https://http.nuxtjs.org/api/#hooks
- API > HTTP methods: https://http.nuxtjs.org/api/#http-methods

### Types

- fix(types): update types for `HTTPError` to `ky.HTTPError` (#91)

### Chore

- Switch to Github Actions ([6205fdaa](https://github.com/nuxt/http/commit/6205fdaa5e1552797fc8f743952cafc44169716f))
- Use [tib](https://github.com/nuxt/tib) for testing ([5c693a04](https://github.com/nuxt/http/commit/5c693a04b93dc7bb29f6f63c0e38c3db24c8e5a3))

## [0.4.0](https://github.com/nuxt/http/compare/v0.3.9...v0.4.0) (2020-03-27)


### ⚠ BREAKING CHANGES

* **deps:** Require Node.js 10+

### Bug Fixes

* **module:** always set protocol to https when `https: true` is set ([50ef8e0](https://github.com/nuxt/http/commit/50ef8e05f7958a5270fdad7dc0f543f5af5bf9fd))


* **deps:** update all non-major dependencies ([#90](https://github.com/nuxt/http/issues/90)) ([2f1411b](https://github.com/nuxt/http/commit/2f1411b64d742fbc8d1372ada5543ebc83629e1a))

### [0.3.9](https://github.com/nuxt/http/compare/v0.3.8...v0.3.9) (2020-01-30)


### Features

* enable advanced retry options ([#80](https://github.com/nuxt/http/issues/80)) ([bdae0c0](https://github.com/nuxt/http/commit/bdae0c0aab93e1e402747f949045acea31613aab))


### Bug Fixes

* use json serialization for plain array ([#87](https://github.com/nuxt/http/issues/87)) ([febf265](https://github.com/nuxt/http/commit/febf2658dc605dfae8762ce0f147cce192c1c0cb))
* **module:** read port and host from options/cli before fallback ([bc58738](https://github.com/nuxt/http/commit/bc58738c6b1158bd6e6efd45372da9765b8da577))

### [0.3.8](https://github.com/nuxt/http/compare/v0.3.7...v0.3.8) (2019-11-02)


### Features

* add `onRetry` hook ([#79](https://github.com/nuxt/http/issues/79)) ([3d0aa27](https://github.com/nuxt/http/commit/3d0aa27))

### [0.3.7](https://github.com/nuxt/http/compare/v0.3.6...v0.3.7) (2019-11-01)

### [0.3.6](https://github.com/nuxt/http/compare/v0.3.5...v0.3.6) (2019-11-01)


### Features

* **types:** provide nuxt 2.9 compatible types ([#78](https://github.com/nuxt/http/issues/78)) ([a6bab0f](https://github.com/nuxt/http/commit/a6bab0f))

### [0.3.5](https://github.com/nuxt/http/compare/v0.3.4...v0.3.5) (2019-09-05)


### Bug Fixes

* **types:** fix argument of onError ([#67](https://github.com/nuxt/http/issues/67)) ([be10314](https://github.com/nuxt/http/commit/be10314))

## [0.3.4](https://github.com/nuxt/http/compare/v0.3.3...v0.3.4) (2019-08-12)


### Bug Fixes

* **types:** replace `JSONValue import from ky to `unknown` ([#63](https://github.com/nuxt/http/issues/63)) ([aff7a35](https://github.com/nuxt/http/commit/aff7a35))



## [0.3.3](https://github.com/nuxt/http/compare/v0.3.2...v0.3.3) (2019-07-24)


### Bug Fixes

* transpile ky ([#61](https://github.com/nuxt/http/issues/61)) ([2ce08de](https://github.com/nuxt/http/commit/2ce08de))



## [0.3.2](https://github.com/nuxt/http/compare/v0.3.1...v0.3.2) (2019-06-05)


### Bug Fixes

* ignore content-length header ([185dabb](https://github.com/nuxt/http/commit/185dabb))



## [0.3.1](https://github.com/nuxt/http/compare/v0.3.0...v0.3.1) (2019-05-30)


### Bug Fixes

* handle false timeout ([d965efa](https://github.com/nuxt/http/commit/d965efa))



# [0.3.0](https://github.com/nuxt/http/compare/v0.2.0...v0.3.0) (2019-05-29)


### Features

* support setting timeout and disable by default ([#51](https://github.com/nuxt/http/issues/51)) ([53287dd](https://github.com/nuxt/http/commit/53287dd))


### Reverts

* revert converting header names to lowercase ([2b0f463](https://github.com/nuxt/http/commit/2b0f463))



# [0.2.0](https://github.com/nuxt/http/compare/v0.1.2...v0.2.0) (2019-05-22)


### Bug Fixes

* lowercase `accept-encoding` header ([#43](https://github.com/nuxt/http/issues/43)) ([454807c](https://github.com/nuxt/http/commit/454807c))


### Features

* convert header names to lowercase ([#45](https://github.com/nuxt/http/issues/45)) ([7ad6645](https://github.com/nuxt/http/commit/7ad6645))



## [0.1.2](https://github.com/nuxt/http/compare/v0.1.1...v0.1.2) (2019-04-28)


### Bug Fixes

* **types:** add missing `JSONValue` import ([#28](https://github.com/nuxt/http/issues/28)) ([60e3370](https://github.com/nuxt/http/commit/60e3370))



## [0.1.1](https://github.com/nuxt/http/compare/v0.1.0...v0.1.1) (2019-04-18)


### Bug Fixes

* correctly handle `proxyHeaders: false` ([#17](https://github.com/nuxt/http/issues/17)) ([15274cb](https://github.com/nuxt/http/commit/15274cb))



# [0.1.0](https://github.com/nuxt/http/compare/v5.4.1...v0.1.0) (2019-04-09)


### Bug Fixes

* default retry to 1 ([7bc50f8](https://github.com/nuxt/http/commit/7bc50f8))
* prefixUrl ([09a5382](https://github.com/nuxt/http/commit/09a5382))


### Features

* allow passing body as argument ([57b8a8b](https://github.com/nuxt/http/commit/57b8a8b))
* http class ([61fb627](https://github.com/nuxt/http/commit/61fb627))
* migrate to http and ky-universal ([d3e2c08](https://github.com/nuxt/http/commit/d3e2c08))
