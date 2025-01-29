<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <a-flex align="center" justify="space-between">
    <a-typography-text type="secondary">
      © {{ new Date().getFullYear() }} {{ appName }}
    </a-typography-text>
    <a-typography-text type="secondary"> Powered by Runow </a-typography-text>
  </a-flex>
</template>

<style scoped></style>
