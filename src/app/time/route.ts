import { cookies } from "next/headers";
export const dynamic = "force-static";

export const revalidate = 10;
export async function GET() {
  const cookieInfo = await cookies();
  cookieInfo.set("result", "20");
  return Response.json(
    { time: new Date().toLocaleTimeString() },
    { headers: { "Set-Cookie": "theme=dark" } }
  );
}
