
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const AUTH_CALLBACK_PATHS = ['/confirm'];

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

	

  const {
    data: { user },
  } = await supabase.auth.getUser()

	// Unauth: Confirm/Auth callbacks
	if (!user && AUTH_CALLBACK_PATHS.some((p) => request.nextUrl.pathname.startsWith(p))) {
		return NextResponse.next();
	}

	// Unauthed: direct to login
  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/login') &&
    !request.nextUrl.pathname.startsWith('/error')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

	// Authed: / - navigates to /dashboard
	if (user && request.nextUrl.pathname === '/') {
		const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
		return NextResponse.redirect(url)
	}

  return supabaseResponse
}