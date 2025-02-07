<script setup lang="ts"></script>

<template>
  <a-layout class="layout">
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #fff;
}
</style>
