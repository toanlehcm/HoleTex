import React, { useEffect, useMemo, useState } from 'react';

function expensiveFunction(number) {
  console.log('start');

  const start = new Date();

  // Ex: complex logic .
  while ((new Date() - start) < 3000);

  console.log('end', new Date() - start, 'ms');

  return number * number
}

function LearnUseMemo(props) {
  const [count, setCount] = useState(0)
  // const [num, setNum] = useState(10)

  const number = useMemo(() => {
    console.log('useMemo');
    expensiveFunction(10)
  }, [])

  return (
    <div >
      <div>LearnUseMemo</div>
      <div>count {count}</div>
      <button onClick={() => setCount(count + 1)}> click me</button>

      <p>Number {number}</p>
    </div>
  );
}

export default LearnUseMemo;