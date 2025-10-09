import { Provider } from '@/components/ui/provider';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'React + Next.js + Chakra',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
