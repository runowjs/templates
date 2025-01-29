<script setup lang="ts">
import {
  BellIcon,
  ChevronDownIcon,
  LogOutIcon,
  MoonIcon,
  ShieldIcon,
  UserIcon,
} from 'lucide-vue-next';
</script>

<template>
  <a-flex justify="space-between" align="center" style="height: 100%">
    <span></span>
    <a-flex :gap="8" align="center">
      <a-badge dot :offset="[-8, 6]">
        <a-button type="text">
          <template #icon>
            <a-icon>
              <bell-icon :size="16" />
            </a-icon>
          </template>
        </a-button>
      </a-badge>
      <a-button type="text">
        <template #icon>
          <a-icon>
            <moon-icon :size="16" />
          </a-icon>
        </template>
      </a-button>
      <a-dropdown>
        <a-button type="text" class="profile-btn">
          <template #icon>
            <a-avatar size="small" src="https://i.pravatar.cc/128?img=12" />
          </template>
          <span>Nickname</span>
          <a-icon>
            <chevron-down-icon :size="14" />
          </a-icon>
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a-icon>
                <user-icon :size="16" />
              </a-icon>
              Profile
            </a-menu-item>
            <a-menu-item>
              <a-icon>
                <shield-icon :size="16" />
              </a-icon>
              Security
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item danger>
              <a-icon>
                <log-out-icon :size="16" />
              </a-icon>
              <router-link to="/login"> Logout </router-link>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-flex>
  </a-flex>
</template>

<style scoped>
.profile-btn {
  height: 100%;
  border-radius: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
}
</style>
