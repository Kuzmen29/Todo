import React, { useState } from 'react';

import styles from './LoginForm.module.scss';
import {useNavigate} from "react-router-dom";
import {useLoginMutation} from "../../store/api/login.api";
import {useDispatch} from "react-redux";
import {loginStore} from "../../store/login/login.slice";


export interface IUserLogin {
    nickname: string,
    password: string,
}
export default function LoginForm() {

    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<IUserLogin>({
        nickname: '',
        password: '',
    })
    const [noSuccess, setNoSuccess] = useState(false);

    const dispatch = useDispatch();

    return (
        <form className={styles['login-form']}>
            <input type="text"
                className={styles['login-form__input']}
                placeholder='Введите Ваш псевдоним'
                onChange={(event) => setFormData({ ...formData, nickname: event.target.value })}
            />
            <input type="password"
                className={styles['login-form__input']}
                placeholder='Введите пароль'
                onChange={(event) => setFormData({ ...formData, password: event.target.value })}
            />
            <button type='button'
                className={styles['login-form__button']}
                onClick={() => {
                    setNoSuccess(false);
                    login(formData).then(function({data}) {
                        if (data) {
                            dispatch(loginStore(data));
                            navigate('/profile')
                        } else {
                            setNoSuccess(true);
                        }
                    })
                }}
            >Войти</button>
            {
                noSuccess && <div className={styles['login-form__error']}>
                    Пользователь не найден
                </div>
            }
            <button type='button'
                className={styles['login-form__button']}
                onClick={()=>navigate('/registration')}
            >Регистрация</button>
        </form>
    );
}