// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  // matcher: ["/booking/:path*", "/admin/:path*"],
  matcher: ["/admin/:path*"],
};
