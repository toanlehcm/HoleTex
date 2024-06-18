import React, { useMemo, useState } from 'react';

const getArrayNumber = () => {
  const arrayLoop = []

  console.log('loop');
  for (let index = 60; index >= 0; index--) {
    arrayLoop.push(index)
  }

  return arrayLoop
}

function Print60To0(props) {
  const [count, setCount] = useState(0)
  const [arrayNumber, setArrayNumber] = useState(() => {
    return getArrayNumber()
  })

  const arrayNumber2 = useMemo(() => getArrayNumber(), [])
  // console.log('arrayNumber2', arrayNumber2);

  return (
    <div>
      Print 60 To 0
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>

      <p>
        {arrayNumber.map((item, index) => (<span key={index}>{item}, </span>))}
      </p>

      <p>
        {arrayNumber2.map((item, index) => (<span key={index}>{item}, </span>))}
      </p>
    </div>
  );
}

export default Print60To0;