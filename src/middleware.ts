import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieInfo = request.cookies.get("teacherNumber");
  if (!cookieInfo) {
    response.cookies.set("teacherNumber", "5");
    return response;
  }
  return NextResponse.rewrite(new URL("/updateProductList", request.url));
  // if (
  //   request.nextUrl.pathname === "/time" ||
  //   request.nextUrl.pathname === "/welcome"
  // ) {
  //   return NextResponse.redirect(new URL("updateProductList", request.url));
  // }
}
export const config = {
  matcher: ["/time", "/welcome", "/posts"],
};
