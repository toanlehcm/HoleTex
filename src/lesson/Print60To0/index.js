import React, { useState } from 'react';

const getArrayNumber = () => {
  const arrayLoop = []

  for (let index = 60; index >= 0; index--) {
    console.log(index);
    arrayLoop.push(index)
  }

  return arrayLoop
}

function Print60To0(props) {
  const [arrayNumber, setArrayNumber] = useState(getArrayNumber())

  return (
    <div>
      Print 60 To 0
      <p>
        {arrayNumber.map((item) => (<span>{item}, </span>))}
      </p>
    </div>
  );
}

export default Print60To0;