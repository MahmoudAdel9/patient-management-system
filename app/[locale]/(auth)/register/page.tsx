import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

type RegisterPageProps = {
  params: {
    locale: 'ar' | 'en'
  }
}

const RegisterPage = ({ params: { locale } }: RegisterPageProps) => {
  unstable_setRequestLocale(locale)

  return <div>RegisterPage</div>
}

export default RegisterPage
