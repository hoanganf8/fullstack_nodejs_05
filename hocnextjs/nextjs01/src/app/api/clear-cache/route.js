import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
export async function POST(request) {
  const body = await request.json();
  if (!body) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 400,
      }
    );
  }

  revalidateTag(body.tag);
  return NextResponse.json({ success: true });
}
