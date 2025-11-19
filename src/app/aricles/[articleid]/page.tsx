import React from 'react'

async function page({
    params,
    searchParams
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: string }>;
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10">This is article {articleId}</h1>
            <h1 className="text-center font-bold text-4xl mt-10">You are reading this in {lang}</h1>
        </div>
    )
}

export default page
