import { cookies } from "next/headers";

export const dynamic = "force-static";

export const revalidate = 10;
export async function GET() {
  const cookie = await cookies();
  cookie.set("theme", "light");
  return Response.json({ time: new Date().toLocaleTimeString() });
}
