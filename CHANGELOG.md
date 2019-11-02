# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
