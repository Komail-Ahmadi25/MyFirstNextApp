import Link from "next/link";

function page() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-8">
        Notifaction Section
      </h1>
      <Link href="/dashboard/notread">Go to Not Readed Notifaction</Link>
    </div>
  );
}

export default page;
