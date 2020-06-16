<template>
  <div>
    Response: {{ res }}
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    const res = await app.$http.$get('error')
    return { res }
  }
}
</script>
