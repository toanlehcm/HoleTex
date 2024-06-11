import React, { useState } from 'react';

function ExampleFunctional(props) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevState) => {
      console.log('prevState ', prevState);
      return prevState + 1
    })

    setCount((prevState) => {
      console.log('prevState *', prevState);
      return prevState + 1
    })
  }

  return (
    <div>
      <div>count {count}</div>
      <button onClick={handleClick}> click me</button>
    </div>
  );
}

export default ExampleFunctional;