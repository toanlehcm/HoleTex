import React, { useEffect, useReducer, useRef, useState } from 'react';

/**
 * ACTION: 'ADD_NEW_ITEM'
 * VIEW: nhan len 1 button -> dispatch('ADD_NEW_ITEM')
 * REDUCER (state, action) => {
 *  switch(action) {
 *    case 'ADD_NEW_ITEM':
 *    return  state + 1;  
 *  }
 * }
 * */

const ACTION = {
  TANG: 'TANG',
  GIAM: 'GIAM',
  XOA_HET: 'XOA_HET',
  GAN_GIA_TRI: 'GAN_GIA_TRI'
}

const reducer = (state, action) => {
  switch (action) {
    case ACTION.TANG:
      return state + 1

    case ACTION.GIAM:
      return state - 1

    case ACTION.XOA_HET:
      return 0

    default:
      return state;
  }
}

const reducer2 = (state, action) => {
  switch (action.type) {
    case ACTION.GAN_GIA_TRI:
      return action.data // Assign data of for state.

    default:
      return state;
  }
}

function LearnUseReducer(props) {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);

  return (
    <div >
      <p>Count: {count}</p>
      <button onClick={() => dispatch(ACTION.TANG)}>{ACTION.TANG}</button>
      <button onClick={() => dispatch(ACTION.GIAM)}>{ACTION.GIAM}</button>
      <button onClick={() => dispatch(ACTION.XOA_HET)}>{ACTION.XOA_HET}</button>

      <p>Count2: {count2}</p>
      <button onClick={() => dispatch2({
        type: ACTION.GAN_GIA_TRI, // type tự đặt.
        data: 10
      })}>{ACTION.GAN_GIA_TRI}</button>
    </div>
  );
}

export default LearnUseReducer;