import { AUTH_LAYOUT, ROOT_LAYOUT } from '@/layouts';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: ROOT_LAYOUT,
      redirect: {
        name: 'Home',
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/index.vue'),
        },
        {
          path: 'users',
          name: 'Users',
          component: () => import('@/views/users/index.vue'),
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('@/views/settings/index.vue'),
          redirect: {
            name: 'ProfileSettings',
          },
          children: [
            {
              path: 'profile',
              name: 'ProfileSettings',
              component: () => import('@/views/settings/profile/index.vue'),
            },
            {
              path: 'security',
              name: 'SecuritySettings',
              component: () => import('@/views/settings/security/index.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AUTH_LAYOUT,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/auth/login/index.vue'),
        },
        {
          path: '/signup',
          name: 'SignUp',
          component: () => import('@/views/auth/signup/index.vue'),
        },
        {
          path: '/forgot-password',
          name: 'ForgotPassword',
          component: () => import('@/views/auth/forgot-password/index.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/exception/404/index.vue'),
    },
  ],
});

export default router;
