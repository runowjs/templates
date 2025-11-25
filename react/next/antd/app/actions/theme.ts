'use server';

import { cookies } from 'next/headers';

export async function setTheme(mode: string) {
  const cookie = await cookies();
  cookie.set({
    name: 'theme',
    value: mode,
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
  });
}
