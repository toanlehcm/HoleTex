import React, { forwardRef, useImperativeHandle } from 'react';

function Form(props, ref) {
  console.log('ref', ref);

  const submitForm = () => {
    alert('submit')
  }

  // ref được xem như 1 biến.
  useImperativeHandle(ref, () => {
    return {
      test: () => {
        alert('testing')
      },
      submitForm: submitForm
    }
  })

  return (
    <div>
      <h4>Login Form</h4>
      <form>
        <label htmlFor='user-name' >USER NAME</label>
        <input id="user-name" type='text' />
        <br />
        <label htmlFor='password'>PASSWORD</label>
        <input id='password' type='password' />
        <br />
        <button onClick={submitForm}>Login</button>
      </form >
    </ div >
  )
}

export default forwardRef(Form)

