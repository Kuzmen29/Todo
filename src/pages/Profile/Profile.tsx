import styles from './Profile.module.scss';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Profile() {

    const user = useSelector((state: any) => state.login)
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])

    return (
        user
            ? <section>
                <h1>{user.nickname}</h1>
            </section>
            : <h1></h1>
    )

}