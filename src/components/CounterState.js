import React, { useState } from "react";

function CounterState() {
  const [count, setCount] = useState(0);

  //UseState is used to create some new internal state within React
  function handleClick() {
    setCount((count) => count + 1);
    console.log("Count-Before-Render:", count)
  }
  console.log("Count-After-Render:", count)
  return (
    <div>
      <h1>CounterState</h1>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default CounterState;
