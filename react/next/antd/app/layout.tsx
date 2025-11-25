import { ThemeProvider } from '@/providers/theme';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'React + Next.js + Antd',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = await cookies();
  const theme = cookie.get('theme')?.value || 'auto';
  return (
    <html lang="en" className={theme}>
      <body>
        <AntdRegistry>
          <ThemeProvider initMode={theme}>{children}</ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
