<template>
  <div>
    <div>session-{{ axiosSessionId }}</div>
    <div>encoding-${{ axiosEncoding }}$</div>
  </div>
</template>

<script>
// This will be intentically shared across requests
let reqCtr = 1

export default {
  computed: {
    axiosSessionId() {
      return this.$http._defaults.headers.sessionId
    },

    axiosEncoding() {
      return this.$http._defaults.headers['Accept-Encoding']
    }
  },
  fetch({ app, route }) {
    const doLogin = route.query.login !== undefined
    if (doLogin) {
      app.$http.setHeader('sessionId', reqCtr++)
    }
  }
}
</script>
