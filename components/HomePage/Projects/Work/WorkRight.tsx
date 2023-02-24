import { ReactNode } from 'react'

export interface WorkProps {
  children: ReactNode
}

export function WorkRight({ children }: WorkProps) {
  return (
    <div
      className="flex h-screen flex-1 justify-center md:items-center "
    >
      <div className=" mx-4 mt-20 md:mt-0">{children}</div>
    </div>
  )
}
