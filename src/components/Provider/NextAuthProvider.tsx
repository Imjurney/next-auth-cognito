import { PropsWithChildren, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface NextAuthProvider {
  children: PropsWithChildren<ReactNode>
}
export default function NextAuthProvider({ ...props }: NextAuthProvider) {
  return <SessionProvider>{props.children}</SessionProvider>
}
