import React from 'react';
import './App.css'
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import TodosHome from './components/TodosHome';
import wave from './assets/wave.png';
function App() {
  const user = useSelector(selectUser);
  return (
    <div>
      
      <div className='bg-img-container'>
        <img className='bg-img' src={wave} alt=""></img>
      </div>
      {/* {user ? <TodosHome/> : <Login/>} */}
      <TodosHome/>
    </div>
  )
}

export default App
