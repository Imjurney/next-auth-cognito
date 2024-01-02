import { JWT } from 'next-auth/jwt'
import NextAuth, { DefaultSession, CallbacksOptions } from 'next-auth'
import { SignIn } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      nickname: string
    } & DefaultSession['user']
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    idToken?: string
  }
}
