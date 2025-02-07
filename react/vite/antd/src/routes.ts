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
    ],
  },
  {
    path: '*',
    file: './pages/not-found.tsx',
  },
] satisfies RouteConfig;
