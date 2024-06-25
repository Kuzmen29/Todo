import {TodoActions} from "./todo.slice";
import axios from "axios";
import {Dispatch} from "@reduxjs/toolkit";


export const addTodoItem = TodoActions.addTodoItem;

export const addTodoItemsFromDB = TodoActions.addTodoItemsFromDB;

export const removeTodoItem = TodoActions.removeTodoItem;

export function getTodoItemsFromDB() {
    return async (dispatch: Dispatch) => {
        let response = await axios.get('http://localhost:4200/todo/todos');
        console.log(response.data)
        dispatch(addTodoItemsFromDB(response.data))
    }
}