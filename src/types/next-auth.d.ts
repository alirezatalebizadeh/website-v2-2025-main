import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    jwt?: string;
  }

  interface User {
    jwt?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    jwt?: string;
  }
}
