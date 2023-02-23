import { ReactNode } from 'react'

export interface WorkProps {
  children: ReactNode
}

export function WorkRight({ children }: WorkProps) {
  return (
    <div
      className="flex h-screen flex-1 justify-center md:items-center"
    >
      <div className="  ">{children}</div>
    </div>
  )
}
