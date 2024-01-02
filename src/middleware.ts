import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const { origin } = req.nextUrl

  if (token != null) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(`${origin}`)
  }
}

export const config = {
  matcher: ['/user'],
}
