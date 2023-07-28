import express from 'express';
import { addTodo } from '../controller/todo-controller.js';
import { getAllTodos } from '../../todos-app/src/redux/actions/index.js';
const route = express.Router();
route.post('/todos', addTodo) //function that posts todo on database
route.get('/todos', getAllTodos) //function that gets todos
export default route