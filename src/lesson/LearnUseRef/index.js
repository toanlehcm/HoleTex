import React, { useEffect, useRef, useState } from 'react';

function LearnUseRef(props) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  // const obj = { current: 0 }

  const handleClick = () => {
    // setCount(count + 1);
    countRef.current = countRef.current + 1;
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

  return (
    <div >
      <div>count {count}</div>
      <button onClick={handleClick}> click me</button>

    </div>
  );
}

export default LearnUseRef;