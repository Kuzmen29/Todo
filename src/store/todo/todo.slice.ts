import {createSlice} from "@reduxjs/toolkit";
import {ITodoItem} from "../../types/todoItem.type";

const initialState: ITodoItem[] = [];

export const TodoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodoItem : function (state, action){
            state.push(action.payload)
        },
        addTodoItemsFromDB : function (state, action) {
            state.splice(0);
            state.push(...action.payload)
        },
        removeTodoItem : function (state, action) {
            let s = state.filter(item=>item.id !== action.payload.id);
            state.splice(0);
            state.push(...s);
        }

    }
})

export const TodoActions = TodoSlice.actions;
export const TodoReducer = TodoSlice.reducer;