<script setup lang="ts">
import type { ItemType } from 'ant-design-vue';
import { computed, h } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
  title?: string;
  menus?: ItemType[];
  size?: 'small' | 'medium' | 'large';
  showBack?: boolean;
}>();

const generateLabel = (item: any) => {
  return item?.href
    ? h(
        RouterLink,
        {
          to: item.href,
        },
        item.label,
      )
    : item.label;
};

const menuItems = computed(() => {
  return props.menus?.map((menu) => ({
    ...menu,
    label: generateLabel(menu),
  }));
});
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
        v-if="menuItems"
        :items="menuItems"
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
