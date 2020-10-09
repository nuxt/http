---
title: Hooks
description: 'Hooks with arguments.'
position: 8
category: API
---

The `arguments` listed below are those your hook will receive when it's called.

## `onRequest`

- arguments: `(config)`

See [here](/guide/advanced.html#hooks) for usage.

## `onResponse`

- arguments: `(response)`

See [here](/guide/advanced.html#hooks) for usage.

## `onError`

- arguments: `(error)`

If the error originated from a request.

Available properties:

- `error.statusCode` (may be undefined)
- `error.response?.data`(may be undefined)

You can optionally return a value or promise that can resolve for fallback response. If hook returns any value, other hooks **won't** be called.

See [here](/guide/advanced.html#hooks) for usage.
