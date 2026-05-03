import React, { children, createContext, useState } from 'react'

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const[user, setUser] = useState('');

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
       {children}
      </UserContext.Provider>
    </div>
  )
}
