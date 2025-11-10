import { notFound } from 'next/navigation';
import React from 'react'

async function page({
    params,
}: {
    params: Promise<{ productid: string; reviews: string }>;
}) {
    const { productid, reviews } = await params
    if (+reviews > 100) {
        return notFound();
    }
    return (
        <div>
            <h1 className='text'>
                this is the details about product {productid} this product {reviews} times
            </h1>
        </div>
    );
}

export default page;
