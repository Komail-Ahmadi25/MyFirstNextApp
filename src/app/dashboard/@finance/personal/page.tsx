import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-8">Personal Section</h1>
      <Link href="/dashboard" className="ml-11">
        Team
      </Link>
    </div>
  );
}
