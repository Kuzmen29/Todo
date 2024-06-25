import styles from './Loading.module.scss'

export function Loading () {

    return (
        <div className={styles.loading}>
            <div className={styles.solar_system}>
                <div className={[styles.earth_orbit, styles.orbit].join(' ')}>
                    <div className={[styles.planet, styles.earth ].join(' ')}></div>
                    <div className={[styles.venus_orbit, styles.orbit].join(' ')}>
                        <div className={[styles.planet, styles.venus].join(' ')}></div>
                        <div className={[styles.mercury_orbit, styles.orbit].join(' ')}>
                            <div className={[styles.planet, styles.mercury ].join(' ')}></div>
                            <div className={styles.sun}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}