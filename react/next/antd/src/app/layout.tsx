import { MessageProvider } from '@/providers/message';
import { ThemeProvider } from '@/providers/theme';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'React + Next.js + Antd',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('themeMode')?.value || 'auto';
  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <body>
        <AntdRegistry>
          <ThemeProvider initMode={theme}>
            <MessageProvider>{children}</MessageProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
