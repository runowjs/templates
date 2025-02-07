<script setup lang="ts"></script>

<template>
  <a-typography-title :level="2">Welcome Back</a-typography-title>
  <a-typography-paragraph type="secondary">
    Don't have an account? <router-link to="/signup">Signup Now →</router-link>
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
        <a-form-item name="remember" no-style>
          <a-checkbox>Remember me</a-checkbox>
        </a-form-item>
        <router-link to="/forgot-password">Forgot password?</router-link>
      </a-flex>
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" type="primary" size="large" block>
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped></style>
