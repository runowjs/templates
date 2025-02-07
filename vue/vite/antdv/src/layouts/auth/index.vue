<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <a-layout class="root">
    <a-layout class="wrap">
      <a-layout-header class="header">
        <a-avatar shape="square">LOGO</a-avatar>
      </a-layout-header>
      <a-layout-content class="content">
        <div class="container">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a-typography-text type="secondary">
          © {{ new Date().getFullYear() }} {{ appName }}
        </a-typography-text>
      </a-layout-footer>
    </a-layout>
    <a-layout-sider
      class="banner"
      breakpoint="lg"
      :collapsed-width="0"
      width="33%"
    >
      <div class="backdrop"></div>
    </a-layout-sider>
  </a-layout>
</template>

<style scoped>
.root {
  min-height: 100vh;
  background: transparent;
}
.wrap {
  background: transparent;
}
.header {
  background: transparent;
  padding: 32px;
  height: auto;
  line-height: 1;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 400px;
  width: 100%;
  padding: 16px;
}
.footer {
  text-align: center;
  background: transparent;
}
.backdrop {
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('@/assets/images/sso.jpg');
}
</style>
