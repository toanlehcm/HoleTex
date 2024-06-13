import React, { useId } from 'react';

function FormComponent() {
  const id = useId()
  console.log('id', id);
  return (
    <div>
      <h3>Form</h3>
      <label htmlFor={id}>name: </label>
      <input id={id} type='text' name='name'></input>
    </div>
  );
}

export default FormComponent;
