import styles from './GeneralToDo.module.scss';
import {useEffect, useState} from "react";
import {useGetUsersMutation} from "../../store/api/users.api";
import SVGAdd from "../../components/svgs/SVGAdd";
import SVGAddUser from "../../components/svgs/SVGAddUser";
import {useSelector} from "react-redux";
import {IProfile} from "../../types/todoItem.type";
import {useAddFriendMutation} from "../../store/api/user.api";
import {MiniLoading} from "../../components/MiniLoading/MiniLoading";
import SVGOK from "../../components/svgs/SVGOK";


export default function GeneralToDo() {

    const [addNewFriendProcess, setAddNewFriendProcess] = useState(false)

    const [search, setSearch] = useState<string>('');
    const [users, setUsers] = useState<IProfile[]>([]);
    const [getUsers] = useGetUsersMutation();
    const profile: IProfile = useSelector((state: any) => state.login)

    const [addFriend, {isLoading, isSuccess}] = useAddFriendMutation();

    useEffect(() => {
        if (search) {
            getUsers({search}).then(({data}) => {
                setUsers(data);
            })
        } else {
            setUsers([])
        }
    }, [search])

    return (
        <section className={styles['general-todo']}>
            <search className={styles['search']}>
                <input value={search} onChange={(event) => setSearch(event.target.value)}
                       className={styles['search__input']} type="text"
                       placeholder={'Введите имя пользователя'}/>
                <div className={styles['search__list']}>
                    {
                        users.map((item: IProfile) => {
                            if (item.id === profile.id) {
                                return undefined
                            }
                            return (
                                <div className={styles.user} key={item.id}>
                                    <h2 className={styles.user__nickname}>{item.nickname}</h2>
                                    <div className={styles.user__tools}>
                                        <div className={styles.user__tool}>
                                            <SVGAdd width={26} height={26}/>
                                        </div>

                                        {
                                            addNewFriendProcess
                                                ? isLoading
                                                    ?   <div className={styles.user__loader}>
                                                        <MiniLoading width={26} height={26}/>
                                                    </div>
                                                    : isSuccess
                                                        ? <div className={styles.user__tool}>
                                                            <SVGOK height={26} width={26}/>
                                                        </div>
                                                        : <h1></h1>
                                                : <div className={styles.user__tool} onClick={() => {
                                                    addFriend({userID:profile.id, newFriendID : item.id});
                                                    setAddNewFriendProcess(true)
                                                }}>
                                                    <SVGAddUser width={26} height={26}/>
                                                </div>
                                        }
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </search>
        </section>
    )
}