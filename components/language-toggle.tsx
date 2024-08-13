'use client'

import { cn } from '@/lib/utils'
import { cairo, plusJakartaSans } from '@/public/fonts/fonts'
import { Locale } from '@/types/global'
import { usePathname, useRouter } from 'next/navigation'

export function LanguageToggle({ locale }: { locale: Locale }) {
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newPathname =
      locale === 'ar'
        ? pathname.replace(/^\/ar/, `/en`)
        : pathname.replace(/^\/en/, `/ar`)

    router.replace(newPathname)
  }

  return (
    <div>
      <div
        className='flex cursor-pointer items-center gap-x-2'
        onClick={toggleLanguage}
      >
        {locale === 'ar' ? (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
              />
            </svg>

            <span className={plusJakartaSans.className}>English</span>
          </>
        ) : (
          <>
            <span className={cn('font-semibold', cairo.className)}>
              العربية
            </span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
              />
            </svg>
          </>
        )}
      </div>
    </div>
  )
}
