<script setup lang="ts">
import type { ItemType } from 'ant-design-vue';

const props = defineProps<{
  title?: string;
  menus?: ItemType[];
  size?: 'small' | 'medium' | 'large';
  showBack?: boolean;
}>();
</script>

<template>
  <a-flex vertical :gap="16">
    <slot name="title">
      <a-typography-title v-if="props.title" :level="3" class="title">
        {{ props.title }}
      </a-typography-title>
    </slot>
    <slot name="menu">
      <a-menu
        v-if="props.menus"
        :items="props.menus"
        mode="horizontal"
        class="menu"
      />
    </slot>
    <slot />
  </a-flex>
</template>

<style scoped>
.title {
  margin: 0;
}
.menu {
  background: transparent;
}
</style>
