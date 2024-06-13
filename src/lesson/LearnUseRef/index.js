import React, { useEffect, useRef, useState } from 'react';

function LearnUseRef(props) {
  const [count, setCount] = useState(0)
  // const countRef = useRef(0)
  // const obj = { current: 0 }

  const handleClick = () => {
    // setCount(count + 1);
    // countRef.current = countRef.current + 1;
    // obj.current = obj.current + 1;
  }

  // console.log(count, countRef); //, obj

  // useEffect(() => {
  //   setInterval(() => {
  //     // setCount(count + 1)
  //     countRef.current = countRef.current + 1
  //     console.log('countRef', countRef.current);
  //   }, 1000)
  // }, [])

  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [])

  console.log('ref', ref);

  return (
    <div >
      <div>count {count}</div>
      <button onClick={handleClick}> click me</button>

      <input type='text' ref={ref} />
      <button> click </button>
    </div>
  );
}

export default LearnUseRef;