'use client';

import { graphqlRequest } from '../graphql/client';
import { REGISTER_MUTATION } from '../graphql/auth';
import { login } from './login';

export async function signup(
  username: string,
  email: string,
  password: string
) {
  try {
    const data = await graphqlRequest<{
      register: {
        jwt: string;
        user: { id: string; email: string; username: string };
      };
    }>(REGISTER_MUTATION, { username, email, password });

    // Auto-login after registration
    return await login(email, password);
  } catch (err: any) {
    return {
      ok: false,
      error: err.message,
      status: 400,
    };
  }
}
