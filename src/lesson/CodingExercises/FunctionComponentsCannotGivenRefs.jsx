import React, { forwardRef, useRef } from "react";

// function MyCustomInput(props) {
//   return <input {...props} />;
// }

const MyCustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export default function FunctionComponentsCannotGivenRefs() {
  const inputRef = useRef(null);

  function handleInputFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyCustomInput ref={inputRef} />
      <button onClick={handleInputFocus}>Click Me</button>
    </>
  );
}
