import React, { useRef, useState } from "react";

function CounterRef() {
  const [ count, setCount] = useState(0);
  const countRef = useRef(0);

  function handleClick() {
    setCount ( count + 1)
    countRef.current++
    console.log("CountRef-Before:", countRef.current);
  }
  console.log("CountRef-After:", countRef.current);
  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{countRef.current}</button>
    </div>
  );
}

export default CounterRef;
