import React, {useEffect, useState} from 'react';

import classes from './RegistrationForm.module.scss';
import {useAddUserMutation, useCheckUserMutation} from "../../store/api/api";
import {Loading} from "../Loading/Loading";
import {MiniLoading} from "../MiniLoading/MiniLoading";
import {useNavigate} from "react-router-dom";

export interface INewUser {
    nickname: string,
    email: string,
    birthday: Date,
    password: string,
    checkPassword?: string
}

interface IFormDataValidation {
    nickname: {
        flag: boolean,
        message: string,
        hasNickname?: boolean
    },
    email: {
        flag: boolean,
        message: string
    },
    birthday: {
        flag: boolean,
        message: string
    },
    password: {
        flag: boolean,
        message: string
    },
    checkPassword: {
        flag: boolean,
        message: string
    }
}

export default function RegistrationForm() {

    const [checkUser] = useCheckUserMutation();
    const [addUser, {isLoading, isSuccess}] = useAddUserMutation();
    const [addUserProcess, setAddUserProcess] = useState<boolean>(false)

    const navigate = useNavigate();

    const [formData, setFormData] = useState<INewUser>({
        nickname: '',
        email: '',
        birthday: new Date(),
        password: '',
        checkPassword: ''
    })
    const [formDataValidation, setFormDataValidation] = useState<IFormDataValidation>({

        nickname: {
            flag: false,
            message: 'Обязательно для заполнения',
        },
        email: {
            flag: false,
            message: 'Обязательно для заполения'
        },
        birthday: {
            flag: true,
            message: ''
        },
        password: {
            flag: false,
            message: 'Обязательно для заполения'
        },
        checkPassword: {
            flag: false,
            message: 'Обязательно для заполения'
        }
    })

    useEffect(() => {

        if (formData.nickname === '') {
            setFormDataValidation({
                    ...formDataValidation, nickname: {
                        flag: false,
                        message: "Обязательно для заполнения!"
                    }
                }
            )
        } else if (!((/^[a-z0-9_]{5,15}$/i).test(formData.nickname))) {
            setFormDataValidation({
                ...formDataValidation, nickname: {
                    flag: false,
                    message: "Псевдоним должен быть длиной от 5 до 15 символов и содержать ТОЛЬКО латинские буквы, цифры и знак _ "
                }
            })
        } else {
            checkUser({nickname: formData.nickname}).then(result => {
                const flag = result.data;
                if (flag) {
                    setFormDataValidation({
                        ...formDataValidation, nickname: {
                            flag: false,
                            message: "Пользователь с таким псевдонимом уже существует"
                        }
                    })
                } else {
                    setFormDataValidation({
                        ...formDataValidation, nickname: {
                            flag: true,
                            message: ""
                        }
                    })
                }
            });
        }
    }, [formData.nickname])

    useEffect(() => {

        if (formData.email === '') {
            setFormDataValidation({
                ...formDataValidation, email: {
                    flag: false,
                    message: "Обязательно для заполнения"
                }
            })
        } else if (!((/\w+@\w+\.\w+/).test(formData.email))) {

            setFormDataValidation({
                ...formDataValidation, email: {
                    flag: false,
                    message: "Электронная почта в формате name@name.ru"
                }
            })
        } else {
            setFormDataValidation({
                ...formDataValidation, email: {
                    flag: true,
                    message: ""
                }
            })
        }
    }, [formData.email])

    useEffect(() => {

    }, [formData.birthday])

    useEffect(() => {
        if (formData.password === '') {
            setFormDataValidation({
                ...formDataValidation, password: {
                    flag: false,
                    message: "Обязательно для заполнения"
                }
            })
        } else if (!((/^[0-9a-z_!@#]{8,}$/i).test(formData.password))) {
            setFormDataValidation({
                ...formDataValidation, password: {
                    flag: false,
                    message: "Пароль должен быть длиной не менее 8 символов и содержать ТОЛЬКО латинские буквы, цифры и знак _ ! @ # "
                }
            })
        } else {
            setFormDataValidation({
                ...formDataValidation, password: {
                    flag: true,
                    message: ""
                }
            })
        }
    }, [formData.password])

    useEffect(() => {
        if (formData.checkPassword === '') {
            setFormDataValidation({
                ...formDataValidation, checkPassword: {
                    flag: false,
                    message: "Обязательно для заполнения"
                }
            })
        } else if (formData.password !== formData.checkPassword) {
            setFormDataValidation({
                ...formDataValidation, checkPassword: {
                    flag: false,
                    message: "Пароли не совпадают"
                }
            })
        } else {
            setFormDataValidation({
                ...formDataValidation, checkPassword: {
                    flag: true,
                    message: ""
                }
            })
        }
    }, [formData.checkPassword])

    return (
        <form className={classes['registration-form']}>

            <div className={classes['registration-form__element']}>
                <input type="text"
                       className={classes['registration-form__input']}
                       placeholder='Введите желаемый псевдоним'
                       onChange={(event) => setFormData({...formData, nickname: event.target.value})}
                />
                {
                    !formDataValidation.nickname.flag && <div className={classes['registration-form__error']}>
                        {formDataValidation.nickname.message}
                    </div>
                }
            </div>

            <div className={classes['registration-form__element']}>
                <input type="text"
                       className={classes['registration-form__input']}
                       placeholder='Введите адрес электронной почты'
                       onChange={(event) => setFormData({...formData, email: event.target.value})}
                />
                {
                    !formDataValidation.email.flag && <div className={classes['registration-form__error']}>
                        {formDataValidation.email.message}
                    </div>
                }
            </div>

            <div className={classes['registration-form__element']}>
                <input type="date"
                       className={classes['registration-form__input']}
                       placeholder='Введите дату рождения'
                       onChange={(event: any) => setFormData({...formData, birthday: event.target.value})}
                />
                {
                    !formDataValidation.birthday.flag && <div className={classes['registration-form__error']}>
                    </div>
                }
            </div>

            <div className={classes['registration-form__element']}>
                <input type="password"
                       className={classes['registration-form__input']}
                       placeholder='Введите пароль'
                       onChange={(event) => setFormData({...formData, password: event.target.value})}
                />
                {
                    !formDataValidation.password.flag && <div className={classes['registration-form__error']}>
                        {formDataValidation.password.message}
                    </div>
                }
            </div>

            <div className={classes['registration-form__element']}>
                <input type="password"
                       className={classes['registration-form__input']}
                       placeholder='Повторите пароль'
                       onChange={(event) => setFormData({...formData, checkPassword: event.target.value})}
                />
                {
                    !formDataValidation.checkPassword.flag && <div className={classes['registration-form__error']}>
                        {formDataValidation.checkPassword.message}
                    </div>
                }
            </div>

            {
                addUserProcess
                    ? isLoading
                        ? <MiniLoading width={64} height={64}/>
                        : isSuccess
                            ? <div style={{display: 'flex', flexDirection: 'column', gap: "10px"}}>
                                <h2>Успешно</h2>
                                <button
                                    type='button'
                                    className={classes['registration-form__button']}
                                    onClick={() => navigate('/login')}
                                >Войти
                                </button>
                            </div>
                            : <div style={{display: 'flex', flexDirection: 'column', gap: "10px"}}>
                                <h2>НЕ успешно</h2>
                                <button
                                    type='button'
                                    className={classes['registration-form__button']}
                                    onClick={() => setAddUserProcess(false)}
                                >Попробовать снова
                                </button>
                            </div>
                    : <button
                        disabled={
                            !(formDataValidation.nickname.flag && formDataValidation.email.flag
                                && formDataValidation.birthday.flag && formDataValidation.password.flag && formDataValidation.checkPassword.flag)
                        }
                        type='button'
                        className={classes['registration-form__button']}
                        onClick={() => {
                            setAddUserProcess(true);

                            let obj = {...formData};
                            delete obj['checkPassword'];
                            addUser(obj)
                        }}
                    >Регистрация
                    </button>
            }

        </form>
    );
}