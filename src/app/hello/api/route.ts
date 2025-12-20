import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headersContent = await headers();
  console.log(headersContent.get("authorization"));
  const cookieInfo = request.cookies.get("them");
  console.log(cookieInfo);
  const newCookie = await cookies();
  newCookie.set("isloggedIn", "komail");
  console.log(newCookie.get("isloggedIn"));
  return new Response("<h1>Hello From API</h1>", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "them=light" },
  });
}
