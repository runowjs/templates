import { ConfigProvider } from 'antd';
import { StyleProvider, ThemeProvider } from 'antd-style';
import type { ReactNode } from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { Route } from './+types/root';

// theme and styles
import theme from '@/config/theme';
import SystemError from '@/pages/error';
import './global.css';

// i18n config
// import zhCN from 'antd/locale/zh_CN';
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

/**
 * Route links define <link> elements to be rendered in the document <head>
 */
export const links: Route.LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/runow.svg',
  },
];

/**
 * When other route module APIs throw, the route module ErrorBoundary will render instead of the route component.
 * @param error
 * @constructor
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <SystemError error={error} />;
}

/**
 * On initial page load, the route component renders only after the client loader is finished.
 * If exported, a HydrateFallback can render immediately in place of the route component.
 * @param children
 * @constructor
 */
// export function HydrateFallback() {
//   return <>loading...</>;
// }

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <StyleProvider speedy>
      <ConfigProvider theme={theme}>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
      </ConfigProvider>
    </StyleProvider>
  );
}
