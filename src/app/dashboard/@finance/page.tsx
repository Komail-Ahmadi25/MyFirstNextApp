import Link from "next/link";

function page() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-8">Finance Section</h1>
      <Link href="/dashboard/personal">Go to Personal Finance</Link>
    </div>
  );
}

export default page;
