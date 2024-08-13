import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

import { i18n } from '@/i18n.config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { CustomMiddleware } from './chain'

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

export function middleware(request: NextRequest) {}

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const pathname = request.nextUrl.pathname

    // Check if the pathname already contains a locale
    const currentLocale = i18n.locales.find(locale =>
      pathname.startsWith(`/${locale}`)
    )

    if (!currentLocale) {
      const locale = getLocale(request) || i18n.defaultLocale
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
          request.url
        )
      )
    }

    return middleware(request, event, response)
  }
}
