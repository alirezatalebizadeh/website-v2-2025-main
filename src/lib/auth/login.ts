'use client';

import { signIn } from 'next-auth/react';

export async function login(identifier: string, password: string) {
  const res = await signIn('credentials', {
    redirect: false,
    identifier,
    password,
  });

  return res as {
    ok: boolean;
    error?: string | null;
    url?: string | null;
    status: number;
  };
}
