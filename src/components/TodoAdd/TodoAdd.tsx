import styles from './TodoAdd.module.scss';
import {v4 as uuid} from "uuid";
import {useState} from "react";
import {useAddItemsToDBMutation} from "../../store/api/todos.api";



export function TodoAdd() {

    const [newTodoItem, setNewTodoItem] = useState({
        theme : '',
        text : ''
    });
    const [addNewTodoItem] = useAddItemsToDBMutation();

    return (
        <div className={styles['todo-add']}>

            <input
                value={newTodoItem.theme}
                onChange={(event)=>setNewTodoItem({...newTodoItem, theme: event.target.value})}
                className={styles['todo-add__theme']}
                type="text"
                placeholder={'Введите тему заметки'}/>
            <textarea value={newTodoItem.text} onChange={(event) => setNewTodoItem({...newTodoItem, text: event.target.value })}
                      className={styles['todo-add__text']}></textarea>
            <button onClick={() => {
                addNewTodoItem({
                    user: 'USER',
                    id: uuid(),
                    theme: newTodoItem.theme,
                    text: newTodoItem.text,
                    date: new Date(),
                    importance: 1,
                    done: false
                });
                setNewTodoItem({
                    theme : '',
                    text : ''
                });
            }} className={styles['todo-add__button']}>Добавить
            </button>
        </div>
    )
}