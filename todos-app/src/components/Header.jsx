import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './Header.css';
const Header = () => {
    const user = useSelector(selectUser);
  return (
    <div className='header__container'>
        <h1>TODOS APP</h1><br/>
        <h3>Welcome ! 
          <span>{user.name}</span>
          </h3> 
    </div>
  )
}

export default Header