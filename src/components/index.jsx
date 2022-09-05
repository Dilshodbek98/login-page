import React, { useContext } from 'react'
import { ToggleContext } from './context/toggle'
import Login from './login/login'
import Register from './register/register'

const Root = () => {
  const [toggle,setToggle] = useContext(ToggleContext)
  return (
    <div>{toggle ? <Login/> : <Register/>}</div>
  )
}

export default Root