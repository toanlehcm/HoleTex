import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user, isLoading, error } = useFetch('https://reqres.in/api/users/2')

  return <AppContext.Provider value={{ user, isOpen, setIsOpen }}>{children}</AppContext.Provider>
}