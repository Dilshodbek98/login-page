import React, { useState } from 'react'

export const ToggleContext = React.createContext()
const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true)
  return (
    <ToggleContext.Provider value={[toggle, setToggle]}>
      {children}
    </ToggleContext.Provider>
  )
}

export default Toggle