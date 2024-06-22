import React, { useState, useTransition } from 'react';


function LearnDeferredValue(props) {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(0)
  const [isPending, startTransition] = useTransition()



  let setTimeoutValue;

  console.log('setTimeoutValue', setTimeoutValue);

  const onChangeValue = (e) => {
    // console.log(e);
    // clearTimeout(setTimeoutValue)
    // setTimeoutValue = setTimeout(() => { setValue(e.target.value)}, 2000);


    startTransition(() => {
      setValue(e.target.value)
    });
  }

  return (
    <div>
      <p>Value: {isPending ? 'loading ' : value}</p>
      <input type='text'
        // onChange={(e) => {
        //   startTransition(() => {
        //     onChangeValue(e)
        //   })
        // }} 

        onClick={(e) => {
          startTransition(() => {
            onChangeValue(e)
          });
        }}
      />

      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default LearnDeferredValue;