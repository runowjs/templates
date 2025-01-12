import type { RouteConfig } from '@react-router/dev/routes';
export default [
  {
    path: '/',
    file: './layouts/app/index.tsx',
    children: [
      {
        index: true,
        file: './pages/index.tsx',
      },
      {
        path: 'users',
        file: './pages/users/index.tsx',
      },
      {
        path: 'settings',
        file: './pages/settings/index.tsx',
        children: [
          {
            path: 'profile',
            file: './pages/settings/profile/index.tsx',
          },
          {
            path: 'security',
            file: './pages/settings/security/index.tsx',
          },
        ],
      },
    ],
  },
  {
    file: './layouts/auth/index.tsx',
    children: [
      {
        path: '/login',
        file: './pages/auth/login/index.tsx',
      },

      {
        path: '/signup',
        file: './pages/auth/signup/index.tsx',
      },
    ],
  },
  {
    path: '*',
    file: './pages/exception/404/index.tsx',
  },
] satisfies RouteConfig;