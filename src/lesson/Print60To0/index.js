import React, { useEffect, useMemo, useRef, useState } from 'react';

// const getArrayNumber = () => {
//   const arrayLoop = []

//   console.log('loop');
//   for (let index = 60; index >= 0; index--) {
//     arrayLoop.push(index)
//   }

//   return arrayLoop
// }

function Print60To0(props) {
  const [count, setCount] = useState(3)
  const [count2, setCount2] = useState(3)

  // const [arrayNumber, setArrayNumber] = useState(() => {
  //   return getArrayNumber()
  // })

  // const arrayNumber2 = useMemo(() => getArrayNumber(), [])
  // console.log('arrayNumber2', arrayNumber2);

  /*------------ setTimeout ----------------*/
  useEffect(() => {
    if (count === 0) {
      // console.log('return ');
      return
    }

    const setTimeoutCount = setTimeout(() => {
      setCount(count - 1)
    }, 1000)

    return () => { clearTimeout(setTimeoutCount) }
  }, [count])

  /*------------ setInterval ----------------*/
  useEffect(() => {
    const setIntervalCount = setInterval(() => {
      setCount2((prev) => {
        if (prev === 0) {
          // console.log('return 2');
          clearInterval(setIntervalCount)
          return prev
        }

        return prev - 1
      })
    }, 1000)

    return () => { clearInterval(setIntervalCount) }
  }, [])



  return (
    <div>
      Print 60 To 0
      <p>Count: {count}</p>
      <p>Count 2: {count2}</p>

      {/* <button onClick={() => setCount(count + 1)}>click</button>  */}

      {/* <p>
        {arrayNumber.map((item, index) => (<span key={index}>{item}, </span>))}
      </p>

      <p>
        {arrayNumber2.map((item, index) => (<span key={index}>{item}, </span>))}
      </p> */}
    </div>
  );
}

export default Print60To0;