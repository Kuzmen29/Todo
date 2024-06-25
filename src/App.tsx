import React, {useEffect} from 'react';
import './styles/App.scss';
import ToDo from "./pages/ToDo/ToDo";
import Header from "./components/Header/Header";
import {Loading} from "./components/Loading/Loading";
import {Route, Routes} from "react-router-dom";
import GeneralToDo from "./pages/GeneralToDo/GeneralToDo";
import NotExist from "./pages/NotExist/NotExist";
import {useGetUserMutation} from "./store/api/api";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

function App() {

    const [login] = useGetUserMutation();
    useEffect(() => {
        let userStorage = localStorage.getItem('ToDoUser');
        if (userStorage) {
            let user = JSON.parse(userStorage);
            login(user);
        }

    }, [])

    return (
        <div className="App">

            <div className="App__header">
                <div className="container">
                    <Header/>
                </div>
            </div>

            <div className="container">
                <div className="main">
                    <Routes>
                        <Route path={'/'} element={<ToDo/>}/>
                        <Route path={'/general'} element={<GeneralToDo/>}/>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/registration'} element={<Registration/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'*'} element={<NotExist/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
}

export default App;
