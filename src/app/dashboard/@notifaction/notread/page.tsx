import Link from "next/link";
import React from "react";
export default function page() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-8">
        Not Readed Notifaction
      </h1>
      <Link href="/dashboard" className="ml-12">
        Readed Notifaction
      </Link>
    </div>
  );
}
