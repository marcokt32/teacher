import { type NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// Checagem otimista: so verifica se existe cookie. A validacao real fica em cada pagina.
export function proxy(request: NextRequest) {
  if (!getSessionCookie(request)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/aluno/:path*", "/professor/:path*", "/admin/:path*", "/painel"],
};