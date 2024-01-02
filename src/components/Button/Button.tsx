import { PropsWithChildren, ReactNode } from 'react'

interface ButtonProps {
  children: PropsWithChildren<ReactNode>
}
export default function Button({ ...props }: ButtonProps) {
  return <button className="button">{props.children}</button>
}
