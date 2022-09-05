import React, { useContext, useRef, useState } from 'react'
import { Container, Title } from './styledLogin'
import google from '../../accets/icons/google.svg'
import facebook from '../../accets/icons/facebook.svg'
import x from '../../accets/icons/x.svg'
import hide from '../../accets/icons/hide.svg'
import { ToggleContext } from '../context/toggle'

const Login = () => {
  const [toggle, setToggle] = useContext(ToggleContext)
  const [data, setData] = useState({});

  const save = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }
  console.log(data);
  const onLogin = () => {
    fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => alert(response.status))
  }

  return (
    <Container>
      <header>
        <img className='iks' src={x} alt="" />
      </header>

      <div className="heading">
        <Title color='#46A358'>Login</Title>
        <div className="line-vertical"></div>
        <Title color='#3D3D3D'  onClick={() => setToggle(!toggle)}>Register</Title>
      </div>

      <p className="label">Enter your username and password to login.</p>
      <input name="email" type="text" onChange={save} placeholder='almamun_uxui@outlook.com' />
      <input name="password" type="password" onChange={save} className='password' />
      <img src={hide} alt="" className='hide'/>
      <p className='forgot'>Forgot Password?</p>
      
      <button className='loginBtn' onClick={() => onLogin()}>Login</button>
      
      <div className='or'>
        <div className='line-horizontal'></div>
        <p>Or login with</p>
        <div className='line-horizontal'></div>
      </div>

      <div className="google">
        <img src={google} alt="" />
        <p className='text'>Login with Google</p>
      </div>

      <div className="google facebook">
        <img src={facebook} alt="" />
        <p className='text'>Login with Facebook</p>
      </div>
      <div className='footer'></div>
    </Container>
  )
}

export default Login