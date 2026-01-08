import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth-token');

    // If no token is found, redirect to the login page
    if (!token) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/farmer/:path*',
        '/partner/:path*',
        '/admin/:path*',
    ],
};
