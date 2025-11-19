"use client";
import React, { useState } from 'react'

function Counter() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-22'>{value}</h1>
            <button className='py-2 px-6 border' onClick={() => setValue(value + 1)}>Increamet</button>
            <button className='py-2 px-6 border' onClick={() => setValue(value - 1)}>Decreament</button>
        </div>
    )
}

export default Counter;
