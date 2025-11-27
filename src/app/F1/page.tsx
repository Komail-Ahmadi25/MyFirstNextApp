import Link from "next/link";
import React from "react";

export default function page(   ) {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="p-10 text-center flex flex-col border">
        <h1>This is the Folder 1</h1>
        <Link href="F1/F2">Folder 2</Link>
        <Link href="/F3">Folder 3</Link>
      </div>
    </div>
  );
}
