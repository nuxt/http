export default {
  actions: {
    nuxtServerInit ({ commit }, ctx) {
      if (!ctx.$http) {
        throw new Error('$http is not defined!')
      }

      if (!ctx.app.$http) {
        throw new Error('$http is not defined!')
      }
    }
  }
}
