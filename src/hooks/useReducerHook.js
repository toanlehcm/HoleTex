import { useState } from "react";

export const useReducerHook = (reducer, initValue) => {
  const [state, setState] = useState(initValue);

  // Khi dispatch sẽ truyền 1 action vào đây.
  function dispatch(action) {
    const newState = reducer(state, action); // action gửi đi từ phía UI.
    setState(newState);
  }

  // state: kho state chung
  // dispatch: dispatch data từ UI.
  return [state, dispatch]
}
