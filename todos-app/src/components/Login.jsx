import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './Login.css';
const Login = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(login({
      name: name,
      email:email,
      loggedIn:true,

    })
    )
  };
  return (
    <div className='login'>
            <h1>Get Your Journey Started Here</h1>
            <div>
                <form className='login__form' onSubmit={(e)=>handleSubmit(e)}>
                  <div className='input__container'>
                    <input type="name" placeholder='your name' value={name} onChange={(e)=> setName(e.target.value)} required/>
                    <input type="email" placeholder='email'value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                  </div>
                    <div className='btn__container'>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Login