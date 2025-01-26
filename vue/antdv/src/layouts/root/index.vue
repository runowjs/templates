<script setup lang="ts">
import Header from '@/layouts/root/components/header.vue';
import Sidebar from '@/layouts/root/components/sidebar.vue';
import { ref } from 'vue';

const collapsed = ref<boolean>(false);
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider
      class="ghost"
      breakpoint="lg"
      :collapsed-width="64"
      :width="208"
      v-model:collapsed="collapsed"
      collapsible
    />
    <a-layout-sider
      class="sider"
      breakpoint="lg"
      :collapsed-width="64"
      :width="208"
      v-model:collapsed="collapsed"
      collapsible
    >
      <Sidebar v-model:collapsed="collapsed" />
    </a-layout-sider>
    <a-layout class="wrap">
      <a-layout-header class="ghost" />
      <a-layout-header
        class="header"
        :style="{
          left: collapsed ? '64px' : '208px',
        }"
      >
        <Header />
      </a-layout-header>
      <a-layout-content class="container">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}
.ghost {
  visibility: hidden;
}
.sider {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
}
.header {
  background: #fff;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.2s;
  z-index: 1000;
}
.ant-layout-header {
  height: 48px;
  line-height: 48px;
  padding-inline: 16px 4px;
}
.container {
  padding: 32px;
}
.footer {
  padding: 0 32px 32px;
}

[data-theme='dark'] .header {
  background: #000;
}
</style>
