import { NextRequest, NextResponse } from "next/server";
import { DOMAIN_URL } from "./app/config/server";

export default async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;

  if (pathName === "/profile" || pathName === "/") {
    return NextResponse.redirect(DOMAIN_URL + "/home");
  }
}
