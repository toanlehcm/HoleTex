import React, { useState } from "react";

export default function MyResearch(props) {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter((counter) => counter + 5);
          setCounter((counter) => counter + 5);
          alert(counter);
          setCounter((counter) => counter + 5);
          setCounter((counter) => counter + 5);
        }}
      >
        Increment
      </button>
    </>
  );
}
