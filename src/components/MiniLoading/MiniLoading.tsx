import styles from './MiniLoading.module.scss'

export function MiniLoading ({width, height} : {width : number, height:number}) {

    return (
        <div style={{width: width, height:height}} className={styles['mini-loading']}>
            <div style={{width: width, height:height}}></div>
            <div style={{width: width, height:height}}></div>
            <div style={{width: width, height:height}}></div>
            <div style={{width: width, height:height}}></div>
        </div>
    )
}