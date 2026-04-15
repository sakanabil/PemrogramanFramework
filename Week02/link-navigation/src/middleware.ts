import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const pathname = request.nextUrl.pathname;

  // Cek apakah user sudah login
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Cek apakah user mencoba akses /admin dengan role bukan admin
  if (pathname === "/admin" && token.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/produk", "/about", "/profil", "/admin"],
};
