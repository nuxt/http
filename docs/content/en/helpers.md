---
title: Helpers
description: 'Helpers available on $http instance.'
position: 7
category: API
--- 

<alert type="tip">

Helpers available on `$http` instance.

</alert>

## `setBaseURL`

- arguments: `(baseURL)`

Globally set a header to all subsequent requests

```js
// Set baseURL (both client and server)
this.$http.setBaseURL('http://api.example.com')

// Change URL only for client
if (process.client) {
  this.$http.setBaseURL('http://api.example.com')
}

// Change URL only for server
if (process.server) {
  this.$http.setBaseURL('http://api.example.com')
}
```

## `setHeader`

- arguments: `(name, value)`

Globally set a header to all subsequent requests

See [here](/advanced#header-helpers) for usage.

## `setToken`

- arguments: `(token, type)`

Globally set a `Authorization` header for all subsequent requests.

See [here](/advanced#settokentoken-type) for usage.

## `create`

- arguments: `(kyOptions)`

Create a new KY instance based on defaults, see [create new instance based on defaults](/guide/advanced.html#create-new-instance-based-on-defaults) for usage.
