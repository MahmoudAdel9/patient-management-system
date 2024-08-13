import Image from 'next/image'
import React from 'react'
import { fullLogo } from '@/public/assets/index'

const Logo = () => {
  return (
    <Image
      src={fullLogo}
      width={161}
      height={32}
      quality={70}
      alt='The app logo'
    />
  )
}

export default Logo
