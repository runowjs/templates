import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'React + Next.js + Shadcn/ui',
  description: 'Powered by Runow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster />
    </html>
  );
}
