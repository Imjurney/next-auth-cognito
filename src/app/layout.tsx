'use client'

import NextAuthProvider from '@/components/Provider/NextAuthProvider'
import './globals.css'
import { PropsWithChildren, ReactNode } from 'react'

export default function RootLayout({
  children,
}: {
  children: PropsWithChildren<ReactNode>
}) {
  return (
    <html lang="ko">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
