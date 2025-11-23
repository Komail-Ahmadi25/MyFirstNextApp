import { notFound } from 'next/navigation';
import React from 'react'

function randomNumber(num: number) {
    return Math.floor(Math.random() * num)
}
async function page({ params }: { params: Promise<{ post: string, postid: string }> }) {
    const postid = (await params).postid;
    const getrandomnum = randomNumber(2);
    if (getrandomnum === 1) {
        throw new Error("❌ Post Page Error")
    }
    if (+postid > 1000) {
        return notFound();
    }
    return (
        <div>
            <h1 className='text-4xl font-bold mt-8 text-center'>This is th post {postid}</h1>
        </div>
    )
}

export default page
