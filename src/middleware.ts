import { NextRequest, NextResponse } from 'next/server';

// Define supported languages
const supportedLanguages = ['en', 'ro'] as const;
const defaultLanguage = 'ro';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname already has a language prefix
  const pathnameHasLanguage = supportedLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  // If pathname already has a language prefix, continue
  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // Check if this is the root path
  if (pathname === '/') {
    // Redirect root to default language
    return NextResponse.redirect(
      new URL(`/${defaultLanguage}`, request.url)
    );
  }

  // For other paths without language prefix, redirect to default language
  // This handles cases like /about -> /ro/about
  return NextResponse.redirect(
    new URL(`/${defaultLanguage}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}; 