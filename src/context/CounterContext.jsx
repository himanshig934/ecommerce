import React, { useState } from 'react'
import { createContext } from 'react'

export const counterContext = createContext();

export default function CounterProvider({children}) {

    const [count, setCount] = useState(0);


  return (
    <div>
      <counterContext.Provider value={{count, setCount}}>
       {children}
      </counterContext.Provider>
    </div>
  )
}
