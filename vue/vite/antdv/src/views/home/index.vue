<script setup lang="ts"></script>

<template>
  <a-flex vertical class="wrap" :gap="32" align="center" justify="center">
    <a href="https://next.antdv.com/">
      <img
        src="https://next.antdv.com/assets/logo.1ef800a8.svg"
        height="128"
        alt="ant design vue logo"
      />
    </a>
    <a-typography-title :level="2" :style="{ margin: 0 }">
      React + Vite + Ant Design Vue
    </a-typography-title>
    <a-typography-paragraph :style="{ margin: 0 }">
      Powered by
      <a href="https://runow.dev" target="_blank"> Runow </a>
    </a-typography-paragraph>
  </a-flex>
</template>

<style scoped>
.wrap {
  min-height: 100vh;
}
</style>
