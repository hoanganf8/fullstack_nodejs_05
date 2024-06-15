const isAuthenticated = true;
import { NextResponse } from "next/server";
export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  //Không hợp lệ ==> Chuyển hướng về trang login
  if (pathname.startsWith("/admin") && !isAuthenticated) {
    const loginUrl = new URL("/auth/login", request.url); //Trả về đường dẫn đầy đủ
    //http://localhost:3000/auth/login
    return NextResponse.redirect(loginUrl);
  }
  //Hợp lệ ==> Cho phép đi tiếp
  const requestHeaders = new Headers(request.headers); //Clone header cũ
  requestHeaders.set("x-api-token", "ahihi");
  console.log(request.cookies.get("username"));

  //Trả về response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("x-abc", "nextjs");
  response.cookies.set("username", "hoangan");
  return response;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

//request => middleware => next() => layout => page
