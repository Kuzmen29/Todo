import styles from './Header.module.scss'
import {NavLink, useNavigate} from "react-router-dom";
import SVGProfile from "./SVGProfile";
import {useDispatch, useSelector} from "react-redux";
import SVGLogout from "../svgs/SVGLogout";
import {logoutStore} from "../../store/login/login.slice";

export default function Header() {

    const profile = useSelector((state: any) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <header className={styles['header']}>
            <h1 className={styles.header__title}>
                <span className={styles['header__title-accent']}>ToDo</span>
            </h1>

            <div className={styles['profile']}>
                <div className={styles['profile__icon']}>
                    <SVGProfile/>
                </div>
                <div className={styles['profile__tools']}>
                    <NavLink
                        className={
                            styles['profile__nickname']
                            // ({isActive}) => isActive
                            //     ? [styles['profile__nickname'],
                            //         styles['navigation-item_active']].join(' ')
                            //     : styles['profile__nickname']
                        }
                        to={'/profile'}>
                        {profile ? profile.nickname : 'Войти'}
                    </NavLink>
                    {
                        profile && <div className={styles['profile__logout']} onClick={() => {
                            dispatch(logoutStore());
                            navigate('/')
                        }}>
                            <SVGLogout width={20} height={20}/>
                        </div>
                    }
                </div>
            </div>

            <nav className={styles['header__navigation']}>
                <ul className={styles['navigation']}>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive
                                ? [styles['navigation-item'],
                                    styles['navigation-item_active']].join(' ')
                                : styles['navigation-item']}
                            to={'/'}>Мои дела</NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive
                                ? [styles['navigation-item'],
                                    styles['navigation-item_active']].join(' ')
                                : styles['navigation-item']}
                            to={'/general'}>Общие дела</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}