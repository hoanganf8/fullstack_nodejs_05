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
  // const requestHeaders = new Headers(request.headers); //Clone header cũ
  // requestHeaders.set("x-api-token", "ahihi");
  // console.log(request.cookies.get("username"));

  //Trả về response
  const response = NextResponse.next();
  // response.headers.set("x-abc", "nextjs");
  // response.cookies.set("username", "hoangan");
  //Rewrite URL
  if (pathname === "/san-pham") {
    return NextResponse.rewrite(new URL("/products", request.url));
    //Khi người dùng truy cập: /san-pham ==> Ánh xạ tới /products
  }

  if (pathname === "/products") {
    return NextResponse.redirect(new URL("/san-pham", request.url));
  }

  // return response;
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

//Rewrite URL = Viết lại đường dẫn
// Đường dẫn URL gọi đường dẫn ảo ==> Khi client truy cập đường dẫn ảo ==> Mapping với đường dẫn thật trên Server
