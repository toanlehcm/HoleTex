import { useEffect } from "react";
import { useReducerHook } from "./useReducerHook";

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

export const useFetch = (url) => {
  const [state, dispatch] = useReducerHook(fetchReducer, {
    data: [],
    isLoading: true,
    error: null
  })

  // const { data: users, isLoading, error } = state 
  // const [users, setUsers] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null)

  // const fetchUsers = async () => {
  //   // setIsLoading(true)
  // }

  useEffect(() => {
    (async () => {
      dispatch({ type: 'fetchAPI/request', isLoading: true })

      try {
        const res = await fetch(url)
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
    })()
  }, [url])

  // return { data: state.data, isLoading: state.isLoading, error: state.error }
  return { ...state }
}