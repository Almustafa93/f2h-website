import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check if maintenance mode is enabled
    const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

    if (isMaintenanceMode) {
        // Return the maintenance page for all routes except static assets
        // Using rewrite so the user stays on the same URL and can refresh to see the page when maintenance is done
        if (request.nextUrl.pathname !== '/maintenance') {
            return NextResponse.rewrite(new URL('/maintenance', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
