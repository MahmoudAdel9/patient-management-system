import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

import { getToken } from 'next-auth/jwt'
import { Locale, i18n } from '@/i18n.config'
import { CustomMiddleware } from './chain'

// '' this is the "/" route
const protectedPaths = ['']

function getProtectedRoutes(protectedPaths: string[], locales: Locale[]) {
  let protectedPathsWithLocale: string[] = []

  protectedPaths.forEach(route => {
    locales.forEach(locale => {
      protectedPathsWithLocale.push(`/${locale}${route}`)
    })
  })

  return protectedPathsWithLocale
}
export function withAuthMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next()

    const token = await getToken({
      req: request,
      salt: process.env.NEXTAUTH_SALT!,
      secret: process.env.AUTH_SECRET!
    })

    // @ts-ignore
    request.nextauth = request.nextauth || {}
    // @ts-ignore
    request.nextauth.token = token

    const pathname = request.nextUrl.pathname

    const protectedPathsWithLocale = getProtectedRoutes(protectedPaths, [
      ...i18n.locales
    ])

    if (!token && protectedPathsWithLocale.includes(pathname)) {
      // Extract the current locale from the pathname
      const currentLocale =
        i18n.locales.find(locale => pathname.startsWith(`/${locale}`)) ||
        i18n.defaultLocale

      const signInUrl = new URL(`/${currentLocale}/login`, request.url)
      // signInUrl.searchParams.set('callbackUrl', pathname)

      return NextResponse.redirect(signInUrl)
    }

    return middleware(request, event, response)
  }
}
