"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  function reload() {
    router.refresh();
    startTransition(() => {
      reset();
    });
  }
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-12">{error.message}</h1>
      <div className="p-8">
        <button
          className="py-4 px-5 ml-[535px] mt-11 rounded-md hover:cursor-pointer w-[30%] hover:scale-110 scale-100 border-0 transition-all duration-700 bg-gray-500 hover:bg-gray-600  text-2xl font-bold"
          onClick={() => reload()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
