import Link from "next/link";

function page() {
  return (
    <div>
      <h1>Profile Section</h1>
      <Link href="/dashboard/private">Private Profile</Link>
    </div>
  );
}

export default page;
