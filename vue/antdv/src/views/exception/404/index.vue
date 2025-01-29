<script setup lang="ts"></script>

<template>
  <a-flex class="wrap" justify="center" align="center">
    <a-result status="404" title="404" sub-title="Page Not Found">
      <template #extra>
        <a-button type="primary" href="/">Back Home</a-button>
      </template>
    </a-result>
  </a-flex>
</template>

<style scoped>
.wrap {
  min-height: 100vh;
}
</style>
