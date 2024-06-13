import React, { useState } from 'react';

function ExampleFunctional(props) {
  const initialValues = () => {
    let total = 0;

    for (let i = 0; i < 10; i++) {
      total += i
      // console.log('total', i, '--', total);
    }

    // console.log('initialValues');

    return total
  }

  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: 'Toan',
    age: 30
  })

  const handleClick = () => {
    setCount((prevState) => {
      // console.log('prevState ', prevState);
      return prevState + 1
    })

    setCount((prevState) => {
      // console.log('prevState *', prevState);
      return prevState + 1
    })

    setUser({ name: 'Toan 2' })
  }

  return (
    <div>
      <div>count {count}</div>
      <button onClick={handleClick}> click me</button>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}

export default ExampleFunctional;