<template>
  <p class="success-message">{{ message }}</p>
</template>

<script>
export default {
  name: 'SuccessMessage',
  props: {
    message: String
  }
}
</script>

<style scoped>
  .success-message {
    color: green;
  }
</style>