<script setup lang="ts">
import { ChevronLeftIcon } from 'lucide-vue-next';
</script>

<template>
  <router-link to="/login">
    <chevron-left-icon :size="16" style="vertical-align: middle" />
    <span>Go back</span>
  </router-link>
  <a-typography-title :level="2" style="margin-top: 16px">
    Reset Password
  </a-typography-title>
  <a-typography-paragraph type="secondary">
    We'll email you instructions on how to reset your password.
  </a-typography-paragraph>
  <a-form layout="vertical">
    <a-form-item label="Email Address" name="email">
      <a-input size="large" placeholder="Enter email address" />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" type="primary" size="large" block>
        Send password reset link
      </a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped></style>
