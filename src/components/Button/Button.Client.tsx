'use client'

import { PropsWithChildren, ReactNode } from 'react'
import { signOut } from 'next-auth/react'

interface ButtonProps {
  children: PropsWithChildren<ReactNode>
}

export default function ButtonClient({ ...props }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        signOut({
          callbackUrl: 'http://localhost:3003',
        })
      }}
      className="button"
    >
      {props.children}
    </button>
  )
}
