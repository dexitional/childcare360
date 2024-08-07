'use client'

import { SessionProvider } from 'next-auth/react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  return (
   <SessionProvider>
    {children}
    <ProgressBar
      height="6px"
      color="#f69320"
      options={{ showSpinner: false }}
      shallowRouting
    />
  </SessionProvider>
  )
  
}

export default Provider