import React from 'react'

async function page({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = (await params);
    if (slug?.length === 2) {
        return (
            <div>
                <h1>This is the feature {slug[0]} and the concept of {slug[1]}</h1>
            </div>
        )
    } else if (slug?.length === 1) {
        return (
            <div>
                <h1>This is the feature {slug[0]}</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>this the page that can be visited on any link</h1>
        </div>
    )
}

export default page;
