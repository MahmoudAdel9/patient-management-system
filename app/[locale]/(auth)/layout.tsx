import React, { ReactNode } from 'react'

type AuthLayoutProps = {
  children: ReactNode
  params: {
    locale: 'ar' | 'en'
  }
}

const AuthLayout = ({ children, params: { locale } }: AuthLayoutProps) => {
  return <div className='h-full w-full'>{children}</div>
}

export default AuthLayout
