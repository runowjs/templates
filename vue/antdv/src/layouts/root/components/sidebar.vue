<script setup lang="ts">
import AntIcon from '@/components/ant-icon/index.vue';
import {
  BoltIcon,
  HomeIcon,
  TriangleAlertIcon,
  UsersIcon,
} from 'lucide-vue-next';
import { type FunctionalComponent, h, ref } from 'vue';

const props = defineProps<{
  collapsed?: boolean;
}>();

const generateIcon = (icon: FunctionalComponent) => {
  return h(AntIcon, [
    h(icon, {
      size: 18,
    }),
  ]);
};

const menus = ref([
  {
    key: 'home',
    label: 'Home',
    title: 'Home',
    icon: () => generateIcon(HomeIcon),
  },
  {
    key: 'users',
    label: 'Users',
    title: 'Users',
    icon: () => generateIcon(UsersIcon),
  },
  {
    key: 'settings',
    label: 'Settings',
    title: 'Settings',
    icon: () => generateIcon(BoltIcon),
  },
  {
    key: '404',
    label: '404',
    title: '404',
    icon: () => generateIcon(TriangleAlertIcon),
  },
]);
</script>

<template>
  <a-flex vertical class="wrap">
    <a-flex vertical flex="none">
      <a href="/" class="brand">
        <img src="/runow.svg" alt="logo" class="brand-logo" />
        <h1 v-if="!props.collapsed" class="brand-name">LOGO</h1>
      </a>
    </a-flex>
    <a-flex vertical flex="auto" class="menu-wrap">
      <a-menu
        :inline-collapsed="props.collapsed"
        mode="inline"
        :items="menus"
        theme="dark"
      />
    </a-flex>
  </a-flex>
</template>

<style scoped>
.wrap {
  height: 100%;
}
.brand {
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
}

.brand-logo {
  display: block;
  width: 32px;
  height: 32px;
}

.brand-name {
  margin: 0;
  font-size: 18px;
  color: #fff;
  line-height: 1;
}

.menu-wrap {
  padding: 0 8px;
}
</style>
