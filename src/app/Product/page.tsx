import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>All Products</h1>
      <Link href="Product/1">Product 1</Link>
      <Link href="Product/2">Product 2</Link>
    </div>
  )
}

export default page
