import React, { useCallback, useEffect, useMemo, useState } from 'react';
import HOCChild from './HOCChild';

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>count {count}</div>
      <button onClick={() => setCount(count + 1)}> click me</button>
    </>
  )
}

function ReactMemoHOC(props) {
  const [name, setName] = useState('Toan')

  const getUser = useCallback(() => {
    return fetch(`https://reqres.in/api/user`)
  }, [])

  return (
    <div >
      <Counter />
      <HOCChild name={name} getUser={getUser} />
    </div>
  );
}

export default ReactMemoHOC;