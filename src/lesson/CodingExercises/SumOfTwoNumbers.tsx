import React, { useState } from "react";

export interface ISumOfRwoNumberProps {}

export default function SumOfRwoNumber(props: ISumOfRwoNumberProps) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div>
      num1
      <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
      num2
      <input type="number" value={num1} onChange={(e) => setNum2(parseInt(e.target.value))} />
      <span>{total}</span>
      <button onClick={() => setTotal(num1 + num2)}>Sum</button>
    </div>
  );
}
