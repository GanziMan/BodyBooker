import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;

  if (pathName === "/profile" || pathName === "/") {
    return NextResponse.redirect("http://localhost:3000/home");
  }
}
