import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if(pathname === "/"){
        console.log("the hompage");

        return NextResponse.redirect(new URL('/login', request.url));
    }

    //checking protected routes
    const protectedRoutes = ["/dashboard"]

    const isProtected = protectedRoutes.some((path) => pathname === path);

    if(isProtected){
        console.log("protected");
        const id = request.cookies.get("id");
        
        if(!id){
            return NextResponse.redirect(new URL('/login', request.url))
        }

    }
}