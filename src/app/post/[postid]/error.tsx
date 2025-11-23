"use client"
import { useRouter } from 'next/navigation';
import { useTransition } from 'react'

export default function error({ error, reset }: { error: Error, reset: () => void }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    function handleClick() {
        router.refresh();
        startTransition(() => {
            reset();
        })
    }
    return (
        <div>
            <h1 className='font-bold text-4xl text-center mt-8'>{error.message}</h1>
            <div className="p-8">
                <button onClick={() => handleClick} className="py-4 px-5 border rounded-md hover:cursor-pointer w-full">Try Again</button>
            </div>
        </div>
    )
}