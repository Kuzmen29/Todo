import styles from './SortSelect.module.scss';
import {useState} from "react";


export function SortSelect() {

    const [sort, setSort] = useState({
        title: 'Сортировка',
        type: 'default',
    })

    const [isSortSelect, setIsSortSelect] = useState<boolean>(false);
    function setSortHandle(title:string, type: string){
        setSort({
            title,
            type,
        })
        setIsSortSelect(false);
    }
    return (
        <div className={styles['sort-select']}>
            <h2 className={styles['sort-select__title']} onClick={()=> setIsSortSelect(!isSortSelect)}>
                <span className={styles['sort-select__title-arrow']} >{sort.title}</span>
            </h2>
            {
                isSortSelect && <ul className={styles['sort-select__select']}>
                    <li className={styles['sort-select__select-item']} onClick={()=>setSortHandle('По названию', 'title')}>По названию</li>
                    <li className={styles['sort-select__select-item']} onClick={()=>setSortHandle('По дате', 'date')}>По дате</li>
                    <li className={styles['sort-select__select-item']} onClick={()=>setSortHandle('По важности', 'importance')}>По важности</li>
                </ul>
            }
        </div>
    )
}