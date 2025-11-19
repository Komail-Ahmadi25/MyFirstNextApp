import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='mt-16 p-12'>
      {/* <h1 className='text-center font-bold text-4xl mt-12'>Home Page</h1> */}
      <div className="flex justify-between mt-10 font-bold text-2xl">
        <Link className="transition-all duration-600 hover:text-black hover:bg-white hover:p-3.5 hover:rounded-xl hover:text-3xl " href="/aricles/1?lang=ENGLISH">Read Articles in ENGLISH</Link>
        <Link className="transition-all duration-600 hover:text-black hover:bg-white hover:p-3.5 hover:rounded-xl hover:text-3xl " href="/aricles/1?lang=FARSI">Read Articles in FARSI</Link>
        <Link className="transition-all duration-600 hover:text-black hover:bg-white hover:p-3.5 hover:rounded-xl hover:text-3xl " href="/aricles/1?lang=PASHTO">Read Articles in PASHTO</Link>
      </div>
    </div>
  )
}
export default page
