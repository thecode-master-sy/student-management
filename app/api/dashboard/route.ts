import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();

  const access_token = cookieStore.get("access_token");

  console.log(access_token);
}
