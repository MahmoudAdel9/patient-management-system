import React from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import { LanguageToggle } from '../language-toggle'
import { Locale } from '@/types/global'
import Logo from '../logo'

const Header = ({ locale }: { locale: Locale }) => {
  return (
    <header className='flex items-center justify-center py-5 md:justify-between'>
      <Logo />

      <nav>
        <ul className='flex items-center gap-10'>
          <li>
            <ModeToggle />
          </li>
          <li>
            <LanguageToggle locale={locale} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
