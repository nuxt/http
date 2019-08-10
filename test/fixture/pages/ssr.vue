<template>
  <div>
    <div>session-{{ httpSessionId }}</div>
    <div>encoding-${{ httpEncoding }}$</div>
  </div>
</template>

<script>
// This will be intentically shared across requests
let reqCtr = 1

export default {
  computed: {
    httpSessionId() {
      return this.$http._defaults.headers.SessionId
    },

    httpEncoding() {
      return this.$http._defaults.headers['accept-encoding']
    }
  },
  fetch({ app, route }) {
    const doLogin = route.query.login !== undefined
    if (doLogin) {
      app.$http.setHeader('SessionId', reqCtr++)
    }
  }
}
</script>
