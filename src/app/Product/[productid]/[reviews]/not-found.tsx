"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
function NotFound() {
  const pathname = usePathname();
  const productid = pathname.split("/")[2]
  const reviewId = pathname.split("/")[3]
  return (
    <div>
      <h1 className='text-3xl text-center font-bold mt-17'>
        Sory, the page you are looking not found for product {productid} with reviews {reviewId}
      </h1>
    </div>
  );
}
// server side
// client side
export default NotFound
