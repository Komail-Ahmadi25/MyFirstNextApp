// import { blogs } from "./posts";

import { blogs } from "./posts";

// // import { blogs } from "./posts";
// export function GET() {
//   return new Response(JSON.stringify(blogs));
// }
// export async function POST(request: Request) {
//   const data = await request.json();
//   const newBlog = {
//     id: data.id,
//     text: data.text,
//   };
//   blogs.push();
//   // return new Response(newBlog, {});
//   return new Response(JSON.stringify(newBlog), {
//     headers: { "content-type": "application/json" },
//   });
// }
export async function GET() {
  return Response.json(blogs);
}
export async function POST(request: Request) {
  const post = await request.json();
  const newPost = {
    id: blogs.length + 1,
    text: post.text,
  };
  blogs.push(newPost);
  return new Response(JSON.stringify(newPost), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
