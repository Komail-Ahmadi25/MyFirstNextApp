import Link from "next/link";

function page() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-8">Profile Section</h1>
      <Link href="/dashboard/private">Go to Private Profile</Link>
    </div>
  );
}

export default page;
