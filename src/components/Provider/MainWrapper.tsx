import { PropsWithChildren, ReactNode } from 'react'

interface MainWrapper {
  children: PropsWithChildren<ReactNode>
}

export default function MainWrapper({ ...props }: MainWrapper) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      {props.children}
    </main>
  )
}
