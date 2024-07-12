import React, { useRef } from "react";

export default function UseRefAfterClicked() {
  const ref = useRef(0);

  function handleClick() {
    console.log("handleClick", ref.current);
    ref.current = ref.current + 1;
    console.log("handleClick *", ref.current);
  }
  console.log("render", ref.current);

  return (
    <>
      <div>Clicked + {ref.current} + times</div>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
