import React, { useEffect, useRef } from 'react';
import ImperativeForm from './form';

export default function LearnUseImperativeHandle() {
  const myRef = useRef()

  useEffect(() => {
    myRef.current.test()
  })

  return (
    <div>
      LearnUseImperativeHandle
      <ImperativeForm ref={myRef} />
      <button onClick={() => { myRef.current.submitForm() }}>Login parent</button>
    </ div>
  )
}
