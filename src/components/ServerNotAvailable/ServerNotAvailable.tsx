import styles from './ServerNotAvailable.module.scss';

export function ServerNotAvailable() {


    return (
        <div className={styles.serverNotAvailable}>
            <svg className={styles.serverNotAvailable__image}
                viewBox="0 0 64 64"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
            >
                <g
                    transform="translate(-384 -96)"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={4.1}
                >
                    <path
                        d="M394 105h49v6h-49z"
                        fill="#3e4f59"
                        fillOpacity={1}
                        strokeWidth={2}
                    />
                    <path
                        d="M394 111h49v40h-49z"
                        fill="#acbec2"
                        fillOpacity={1}
                        strokeWidth={2.00001}
                    />
                    <path
                        d="M394 111v40h29.77a28.484 41.393 35.6 0018.625-40z"
                        fill="#e8edee"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={2.00002}
                    />
                    <path
                        d="M396 104c-1.645 0-3 1.355-3 3v40a1 1 0 102 0v-40c0-.564.436-1 1-1h45c.564 0 1 .436 1 1v3h-42a1 1 0 000 2h42v37c0 .564-.436 1-1 1h-49a1 1 0 000 2h49c1.645 0 3-1.355 3-3v-42c0-1.645-1.355-3-3-3z"
                        color="#000"
                        fill="#000"
                    />
                    <path
                        d="M439 107a1 1 0 100 2 1 1 0 000-2z"
                        color="#000"
                        fill="#ed7161"
                        fillOpacity={1}
                    />
                    <path
                        d="M435 107a1 1 0 100 2 1 1 0 000-2z"
                        color="#000"
                        fill="#ecba16"
                        fillOpacity={1}
                    />
                    <path
                        d="M431 107a1 1 0 100 2 1 1 0 000-2z"
                        color="#000"
                        fill="#42b05c"
                        fillOpacity={1}
                    />
                    <path
                        d="M389 150a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zM397 110a1 1 0 100 2 1 1 0 000-2z"
                        color="#000"
                        fill="#000"
                    />
                    <rect
                        height={22}
                        rx={2}
                        ry={2}
                        width={29}
                        x={404}
                        y={120}
                        fill="#0075d3"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={2}
                    />
                    <path
                        d="M406 120c-1.108 0-2 .892-2 2v18c0 1.108.892 2 2 2h19.584a19.317 16.375 0 004.637-10.633A19.317 16.375 0 00424.803 120z"
                        fill="#0588e2"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={2}
                    />
                    <path
                        fill="#fe73c5"
                        fillOpacity={1}
                        strokeWidth={2}
                        d="M404 120H433V126H404z"
                    />
                    <path
                        d="M404 120v6h24.59a14 8.5 0 00.11-1 14 8.5 0 00-2.68-5z"
                        fill="#fe93d3"
                        fillOpacity={1}
                        strokeWidth={2}
                    />
                    <g color="#000">
                        <path
                            d="M404 130h29"
                            fill="#918383"
                            strokeWidth={2}
                            transform="translate(0 -4)"
                        />
                        <path
                            d="M406 123c-1.645 0-3 1.355-3 3v5.916a1 1 0 002 0V131h27v6a1 1 0 002 0v-11c0-1.645-1.355-3-3-3zm0 2h25c.571 0 1 .429 1 1v3h-27v-3c0-.571.429-1 1-1zm-2 10a1 1 0 00-1 1v8c0 1.645 1.355 3 3 3h25c1.645 0 3-1.355 3-3v-3a1 1 0 00-2 0v3c0 .571-.429 1-1 1h-25c-.571 0-1-.429-1-1v-8a1 1 0 00-1-1z"
                            fill="#000"
                            transform="translate(0 -4)"
                        />
                    </g>
                    <path
                        d="M409.936 129.002a1 1 0 00-.916.803l-1 5A1 1 0 00409 136h3v2a1 1 0 002 0v-5a1 1 0 00-2 0v1h-1.781l.761-3.805a1 1 0 00-1.044-1.193z"
                        color="#000"
                        fill="#000"
                    />
                    <path
                        d="M419 130c1.108 0 2 .892 2 2v3c0 1.108-.892 2-2 2s-2-.892-2-2v-3c0-1.108.892-2 2-2z"
                        fill="#ffc343"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={2}
                    />
                    <path
                        d="M419 129c-1.645 0-3 1.355-3 3v3c0 1.645 1.355 3 3 3s3-1.355 3-3v-3a1 1 0 00-1-1 1 1 0 00-1 1v3c0 .571-.429 1-1 1s-1-.429-1-1v-3c0-.571.429-1 1-1a1 1 0 001-1 1 1 0 00-1-1zM425.936 129.002a1 1 0 00-.916.803l-1 5A1 1 0 00425 136h3v2a1 1 0 002 0v-5a1 1 0 00-2 0v1h-1.781l.761-3.805a1 1 0 00-1.044-1.193z"
                        color="#000"
                        fill="#000"
                    />
                </g>
            </svg>
            <h1 className={styles.serverNotAvailable__inscription}>Сервер не найден!</h1>
        </div>
    )
}