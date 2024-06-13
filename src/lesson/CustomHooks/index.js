import React, { useEffect } from 'react';
import { useReducerHook } from '../../hooks/useReducerHook';

function fetchReducer(state, action) {
  switch (action.type) {
    case 'fetchAPI/request':
      return { ...state, isLoading: action.isLoading };

    case 'fetchAPI/success':
    case 'fetchAPI /error':
      return {
        ...state, isLoading: action.isLoading, error: action.error, data: action.data,
      };

    default:
      return state
  }
}

function CustomHooks() {
  const [state, dispatch] = useReducerHook(fetchReducer, {
    data: [],
    isLoading: false,
    error: null
  })

  const { data: users, isLoading, error } = state
  // const [users, setUsers] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)

  const fetchUsers = async () => {
    // setIsLoading(true)
    dispatch({ type: 'fetchAPI/request' })

    try {
      const res = await fetch(`https://reqres.in/api/users`)
      const { data } = await res.json()

      // setUsers(data)
      // setError(null)
      // setIsLoading(false)
      dispatch({ type: 'fetchAPI/success', isLoading: false, data, error: null })
    } catch (error) {
      // setIsLoading(false)
      // setUsers([])
      // setError(error)
      dispatch({ type: 'fetchAPI/error', isLoading: false, data: [], error: error })
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  if (error) {
    return 'something wrong!'
  }

  return isLoading ? (
    <div > Loading... </div>
  ) : (
    users.map((user, index) => (
      <p key={index}>
        {user.first_name} {user.last_name}
      </p>
    ))
  );
}

export default CustomHooks;
