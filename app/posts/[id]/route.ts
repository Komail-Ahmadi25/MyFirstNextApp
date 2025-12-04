import { blogs } from "../posts";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  return Response.json(blog);
}
