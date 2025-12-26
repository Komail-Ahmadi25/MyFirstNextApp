"use client";
import React, { useState } from "react";

function Counter() {
  console.log("Hi From Client");
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>INC</button>
      <button onClick={() => setValue(value - 1)}>DEC</button>
    </div>
  );
}

export default Counter;
