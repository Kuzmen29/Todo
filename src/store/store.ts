import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TodoReducer} from "./todo/todo.slice";
import {api} from "./api/api";
import {LoginReducer} from "./login/login.slice";

const reducers = combineReducers({
    todo : TodoReducer,
    login : LoginReducer,
    [api.reducerPath] : api.reducer,
})

export const store = configureStore({
    reducer : reducers,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})