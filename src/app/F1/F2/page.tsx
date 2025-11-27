import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="p-10 text-center border flex flex-col">
        <h1>This is the Folder 2</h1>
        <Link href="/F5">Folder 5</Link>
      </div>
    </div>
  );
}
