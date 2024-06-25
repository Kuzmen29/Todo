import styles from './NotExist.module.scss';
import SVGNotFound from "./SVGNotFound";

export default function NotExist() {

    return (
        <section className={styles['not-exist']}>
            <SVGNotFound/>
        </section>
    )
}