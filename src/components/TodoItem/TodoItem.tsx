import styles from './TodoItem.module.scss';
import {ITodoItem} from "../../types/todoItem.type";
import {getDate} from "../../utils/getDate.util";
import {useDispatch} from "react-redux";
import {useRemoveItemInDBMutation, useUpdateItemInDBMutation} from "../../store/api/todos.api";
import {useState} from "react";
import SvgUpdate from "./SvgUpdate";
import {SvgRemove} from "./SvgRemove";

import {SvgCancel} from "./SvgCancel";
import SVGOK from '../svgs/SVGOK';


interface ITodoItemProps {
    todoItem: ITodoItem,
}

export default function TodoItem({todoItem}: ITodoItemProps) {

    const [theme, setTheme] = useState(todoItem.theme)
    const [text, setText] = useState(todoItem.text)

    const [removeItem] = useRemoveItemInDBMutation();
    const [updateItem] = useUpdateItemInDBMutation();

    const [isUpdate, setIsUpdate] = useState<boolean>(false)

    return (
        <article className={styles.todoItem}>
            <header className={styles.todoItem__header}>
                {
                    isUpdate
                        ? <input type="text"
                                 placeholder={'Введите тему'}
                                 className={styles.update__theme}
                                 value={theme}
                                 onChange={event => setTheme(event.target.value)}/>
                        : <h2 className={styles.content__theme}>{theme ? theme :
                            <span className={styles['content__theme-missing']}>Тема отсутствует</span>}</h2>
                }
                <time dateTime={getDate(todoItem.date)}>{getDate(todoItem.date)}</time>
            </header>
            <div className={styles.todoItem__content}>
                {
                    isUpdate
                        ? <textarea value={text}
                                    placeholder={'Введите текст'}
                                    className={styles.update__text}
                                    onChange={event => setText(event.target.value)}></textarea>
                        : <p className={styles.content__text}>{text ? text :
                            <span className={styles['content__text-missing']}>Текст отсутствует</span>}</p>
                }

            </div>
            <div className={styles.utils}>
                {
                    isUpdate
                        ? <>
                            <div className={styles.utils__ok}
                            onClick={()=> {
                                updateItem({
                                    ...todoItem,
                                    theme,
                                    text
                                });
                                setIsUpdate(false);
                            }}>
                                <SVGOK width={32} height={32}/>
                            </div>
                            <SvgCancel className={styles.utils__cancel} onClick={()=> {
                                setIsUpdate(false);
                                setTheme(todoItem.theme)
                                setText(todoItem.text)
                            }}/>
                        </>
                        : <>
                            <SvgUpdate className={styles.utils__update} onClick={() => {
                                setIsUpdate(true);
                            }}/>
                            <SvgRemove className={styles.utils__remove} onClick={() => removeItem({id: todoItem.id})}/>
                        </>
                }

            </div>
        </article>
    )
}