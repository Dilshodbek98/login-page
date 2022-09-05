import React from 'react'
import Toggle from './toggle'

const Context = ({children}) => {
  return (
    <Toggle>
        {children}
    </Toggle>
  )
}

export default Context