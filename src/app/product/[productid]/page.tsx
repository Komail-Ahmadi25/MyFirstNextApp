import { notFound } from "next/navigation";
import React from "react";
function randomNumber(num: number) {
  return Math.floor(Math.random() * num);
}
async function page({
  params,
}: {
  params: Promise<{ product: string; productid: string }>;
}) {
  const productid = (await params).productid;
  const getrandomnum = randomNumber(2);
  if (getrandomnum === 1) {
    throw new Error("❌ Product Page Error");
  }
  if (+productid > 1000) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-4xl font-bold mt-8 text-center">
        This is the Product {productid}
      </h1>
    </div>
  );
}

export default page;
