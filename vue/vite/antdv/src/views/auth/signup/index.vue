<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <a-typography-title :level="2">Welcome to {{ appName }}</a-typography-title>
  <a-typography-paragraph type="secondary">
    Have an account? <router-link to="/login">Login Here →</router-link>
  </a-typography-paragraph>
  <a-form layout="vertical">
    <a-form-item label="Username" name="username">
      <a-input size="large" placeholder="Username" />
    </a-form-item>
    <a-form-item label="Password" name="password">
      <a-input-password size="large" placeholder="Password" />
    </a-form-item>
    <a-form-item>
      <a-flex justify="space-between" align="center">
        <a-form-item name="agreement" no-style>
          <a-checkbox>
            By registering you agree to the<a> Terms of Use </a>.
          </a-checkbox>
        </a-form-item>
      </a-flex>
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" type="primary" size="large" block>
        Create Account
      </a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped></style>
