// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const token = req.cookies.get("access_token")?.value

  const isAuthPage =
    url.pathname === "/" || url.pathname.startsWith("/auth")

  // NOT LOGGED IN → block protected routes
  if (!token && !isAuthPage) {
    url.pathname = "/"
    return NextResponse.redirect(url)
  }

  // LOGGED IN → block login page
  if (token && isAuthPage) {
    url.pathname = "/dashboard"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Match protected routes
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/reports/:path*",
    "/settings/:path*",
    "/api/protected/:path*",
    "/benchmarks/:path*",
    "/conversational-cfo/:path*",
    "/data-collection/:path*",
    "/forecast/:path*",
    "/integrations/quickbooks/:path*",
    "/reports/:path*",
  ]
}
