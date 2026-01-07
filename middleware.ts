import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Simple pass-through for now. 
    // We will add role-based protection logic here once auth is fully integrated.
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
