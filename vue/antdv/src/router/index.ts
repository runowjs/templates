import { AUTH_LAYOUT, ROOT_LAYOUT } from '@/layouts';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: ROOT_LAYOUT,
      redirect: {
        name: 'home',
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      component: AUTH_LAYOUT,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/auth/login/index.vue'),
        },
      ],
    },
  ],
});

export default router;
