<template>
  <div>
    Json Response:
    <pre>{{ res }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: ''
    }
  },

  async mounted() {
    // Simple request to get data and parse it to json
    const response = await this.$http.get('foo/bar')
    this.res = await response.json()
  }
}
</script>
