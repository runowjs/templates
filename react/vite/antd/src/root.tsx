import type { ReactNode } from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';

// theme and styles
import { ThemeProvider } from '@/proviers/theme';
import { Flex, Spin } from 'antd';
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
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

/**
 * On initial page load, the route component renders only after the client loader is finished.
 * If exported, a HydrateFallback can render immediately in place of the route component.
 * @constructor
 */
export function HydrateFallback() {
  return (
    <Flex justify="center" align="center" style={{ minHeight: '100vh' }}>
      <Spin percent="auto" size="large" />
    </Flex>
  );
}

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
        <ThemeProvider>{children}</ThemeProvider>
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
