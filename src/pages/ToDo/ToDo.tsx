import react, {useEffect, useState} from 'react'

import {v4 as uuid} from 'uuid';

import styles from './ToDo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addTodoItem, getTodoItemsFromDB} from "../../store/todo/todo.actions";
import {ITodoItem} from "../../types/todoItem.type";
import TodoItem from "../../components/TodoItem/TodoItem";

import {Loading} from "../../components/Loading/Loading";
import {ServerNotAvailable} from "../../components/ServerNotAvailable/ServerNotAvailable";
import {Sort} from "../../components/Sort/Sort";
import {TodoAdd} from "../../components/TodoAdd/TodoAdd";
import {useGetItemsFromDBQuery} from "../../store/api/todos.api";


export default function ToDo() {

    // const {data : todo} = useGetItemsFromDBQuery(null, {
    //     pollingInterval: 5000,
    // });
    const {data: todo, isLoading, error} = useGetItemsFromDBQuery(null);

    // const todo = useSelector((state: any) => state.todo);
    //
    // const dispatch: any = useDispatch()

    // useEffect(() => {
    //     dispatch(getTodoItemsFromDB())
    // }, [])
    //
    // function addItem(value: string) {
    //     dispatch(addTodoItem(value))
    // }


    return (
        isLoading
            ? <Loading/>
            : error
                ? <ServerNotAvailable/>
                : <section className={styles.todo}>

                    <div className={styles.todo__sort}>
                        <Sort/>
                    </div>

                    <div className={styles['todo__todo-list']}>
                        <section className={styles['todo-list']}>
                            {
                                todo && todo.map((item: ITodoItem) => <TodoItem key={item.id} todoItem={item}/>)
                            }
                        </section>
                    </div>


                    <div className={styles['todo__todo-add']}>
                        <TodoAdd/>
                    </div>

                </section>
    )
}