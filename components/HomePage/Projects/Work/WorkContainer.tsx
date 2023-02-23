import { ReactNode } from 'react';

interface WorkProps {
  children: ReactNode
}

export function WorkContainer({ children }: WorkProps) {
  return <div className="grid min-h-screen w-full grid-cols-2 md:grid-cols-2 ">{children}</div>
}
