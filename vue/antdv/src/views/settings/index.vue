<script setup lang="ts"></script>

<template>
  <page-container
    title="Settings"
    :menus="[
      {
        key: 'profile',
        label: 'profile',
        title: 'profile',
        href: '/settings/profile',
      },
      {
        key: 'security',
        label: 'Security',
        title: 'security',
        href: '/settings/security',
      },
    ]"
  >
    <RouterView />
  </page-container>
</template>

<style scoped></style>
