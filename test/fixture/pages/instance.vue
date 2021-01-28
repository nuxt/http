<template>
  <div>
    <div>prefixUrl:{{ defaults.prefixUrl }}</div>
    <div>baseURL:{{ baseURL }}</div>
    <div v-for="(value, key) in defaults.headers" :key="key">
      {{ key }}:{{ value }}
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ app: { $api } }) {
    return {
      baseURL: $api.getBaseURL(),
      defaults: $api._defaults
    }
  }
}
</script>
