import { NextResponse } from "next/server";

/*
HTTP METHOD
- GET
- POST
- PUT
- PATCH
- DELETE
*/
export function GET(request) {
  //   console.log(request.nextUrl);
  return NextResponse.json({
    params: request.nextUrl.searchParams.get("name"),
    data: [
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      },
      {
        id: 3,
        name: "User 3",
      },
    ],
  });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({
    success: true,
    data: body,
  });
}
