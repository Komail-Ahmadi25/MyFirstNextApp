import React from "react";
import Counter from "./Counter";

function page() {
  console.log("Hi From Server");
  return (
    <div>
      <Counter />
    </div>
  );
}

export default page;
