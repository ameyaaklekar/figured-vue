<template>
  <p class="error-message">{{ message }}</p>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: String
  }
}
</script>

<style scoped>
  .error-message {
    color: red;
  }
</style>