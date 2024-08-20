import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const getUser = async (token) => {
  const response = await fetch(
    `${process.env.SERVER_API}/api/v1/auth/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    return false;
  }
  return response.json();
};
export const middleware = async (request) => {
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith("/auth")) {
    //Lấy token từ cookie
    let isAuth = false;
    const token = cookies().get("token");
    if (token) {
      const accessToken = token.value;
      if (accessToken) {
        const user = await getUser(accessToken);
        if (user) {
          isAuth = true;
          const requestHeaders = new Headers(request.headers);
          requestHeaders.set("x-user", JSON.stringify(user.data));
          return NextResponse.next({
            request: {
              headers: requestHeaders,
            },
          });
        }
      }
    }

    if (!isAuth) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
