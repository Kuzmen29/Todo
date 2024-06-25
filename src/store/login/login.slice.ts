import {createSlice} from "@reduxjs/toolkit";
import {useGetUserMutation} from "../api/api";

const LOCAL_STORAGE_KEY = 'TodoUser';

function InitialState() {
    const user = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (user) {
        return JSON.parse(user);
    } else {
        return null;
    }
}

function setLocalStorage(data: any) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function deleteLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export const LoginSlice = createSlice({
    name: 'login',
    initialState: InitialState(),
    reducers: {
        login: (state, {payload}) => {
            setLocalStorage(payload);
            return payload;
        },
        logout: (state) => {
            deleteLocalStorage();
            return null;
        }
    }
})

export const LoginActions = LoginSlice.actions;
export const LoginReducer = LoginSlice.reducer;

export const {login: loginStore, logout: logoutStore} = LoginActions;