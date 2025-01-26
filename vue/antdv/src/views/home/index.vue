<script setup lang="ts"></script>

<template>
  <page-container title="Welcome back, Runow">
    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :sm="12" :md="12" :lg="6">
        <a-card class="card"></a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="6">
        <a-card class="card"></a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="6">
        <a-card class="card"></a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="6">
        <a-card class="card"></a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="24" :lg="18">
        <a-card class="card2"></a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="24" :lg="6">
        <a-card class="card2"></a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12">
        <a-card class="card"></a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12">
        <a-card class="card"></a-card>
      </a-col>
    </a-row>
  </page-container>
</template>

<style scoped>
.card {
  height: 200px;
}
.card2 {
  height: 400px;
}
</style>
