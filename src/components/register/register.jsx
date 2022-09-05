import React, { useContext, useState } from 'react'
import google from '../../accets/icons/google.svg'
import facebook from '../../accets/icons/facebook.svg'
import x from '../../accets/icons/x.svg'
import hide from '../../accets/icons/hide.svg'
import { Container } from './styledRegister'
import { ToggleContext } from '../context/toggle';



const Register = () => {
  const [toggle, setToggle] = useContext(ToggleContext);
  const [data, setData] = useState({})
  const save = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  const send = () => {
    fetch(`https://houzing-app.herokuapp.com/api/public/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => alert(response.status))
  }

  return (
    <Container>
      <div className="iks">
        <img src={x} alt="" />
      </div>

      <div className="heading">
        <p  onClick={() => setToggle(!toggle)}>Login</p>
        <div className="line-vertical"></div>
        <p>Register</p>
      </div>

      <p className="label">
        Enter your email and password to register.
      </p>

      <div className="input-field">
        <input onChange={save} name='email' type="email" id="" placeholder='Enter your email address'/>
        <input onChange={save} name='firstname' type="text" placeholder='Enter your firstname'/>
        <input onChange={save} name='lastname' type="text"  placeholder='Enter your lastname'/>
        <input onChange={save} name='password' type="password" id="" placeholder='Password'/>
      </div>
      <img src={hide} alt="" className='hide'/>

      <button className='registerBtn' onClick={send}>Register</button>

      <div className="or">
        <div className="line-horizotal"></div>
        <p>Or register with</p>
        <div className="line-horizotal"></div>
      </div>

      <div className="google">
        <img src={google} alt="" />
        <p className="text">Continue with Google</p>
      </div>
      <div className="google facebook">
        <img src={google} alt="" />
        <p className="text">Continue with Google</p>
      </div>

      <div className="footer"></div>
    </Container>
  )
}

export default Register