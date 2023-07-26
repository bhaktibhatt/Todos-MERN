import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/userSlice";
import {applyMiddleware, createStore, combineReducers} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducers } from "./reducers/todoReducer";
import thunk from 'redux-thunk'
const reducer = combineReducers({
    todos:todosReducers,
    user: userReducer, //slice
})

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;