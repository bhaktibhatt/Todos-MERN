import React, { useState } from 'react'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
// import { selectUser } from '../features/userSlice'

import './TodosHome.css'
import { addNewTodo } from '../redux/actions'
import TodosCard from './TodosCard'

const TodosHome = () => {
  const [text,setText] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) =>{
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText('');
  }
  const onInputChange = (e) =>{
    setText(e.target.value);
  }
  // const user = useSelector(selectUser);
  return (
    <div className='todos__container' onSubmit={onFormSubmit}>
      <Header/>
      <form className='todo__form'>
        <input 
        className='input__todo' 
        placeholder="Enter new Todo..." 
        type="text" onChange={onInputChange} value={text}/>
      </form>
      <div className='todos-card-container'>
      <TodosCard/>
      </div>
    </div>
  )
}

export default TodosHome