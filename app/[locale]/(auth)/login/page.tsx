import { getDictionary } from '@/lib/dictionary'
import React from 'react'

type LoginPageProps = {
  params: {
    locale: 'ar' | 'en'
  }
}

const LoginPage = async ({ params: { locale } }: LoginPageProps) => {
  const { button } = await getDictionary(locale)
  return (
    <div className='grid h-full w-full grid-cols-2'>
      <section className='col-span-1 bg-red-600'></section>
      <section className='col-span-1 bg-blue-600'></section>
    </div>
  )
}

export default LoginPage
