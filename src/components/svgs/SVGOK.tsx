import * as React from "react"

export default function SVGOK( {width, height}: { width: number, height: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width={width}
            height={height}
        >
            <path
                d="M455.3 61.5C395.6 69.1 300.9 153.7 222 276c-6.1 9.4-11.9 18.8-17.4 28.1l-.1-.1c-.1.1-.1.2-.2.3-12.8-12.8-26.6-25.6-41.2-38.1-6.8-5.8-13.6-11.4-20.3-16.9L40.2 314.2c46.9 22 87.8 48.2 119.6 75.3 0-.1.1-.2.1-.3 19.1 16.3 35 33 46.8 49.3 5.2-7.7 10.5-15.4 16-23.2 12-17.1 24.2-33.5 36.4-49.1l.1.1c81.4-104.5 162.3-173.5 200.6-170.6l-4.5-134.2z"
                fill="#fff"
                stroke="#fff"
                strokeWidth={10}
                strokeMiterlimit={10}
            />
            <path
                d="M455.3 61.5C395.6 69.1 300.9 153.7 222 276c-6.1 9.4-11.9 18.8-17.4 28.1l-.1-.1c-.1.1-.1.2-.2.3-12.8-12.8-26.6-25.6-41.2-38.1-6.8-5.8-13.6-11.4-20.3-16.9L40.2 314.2c46.9 22 87.8 48.2 119.6 75.3 0-.1.1-.2.1-.3 19.1 16.3 35 33 46.8 49.3 5.2-7.7 10.5-15.4 16-23.2 12-17.1 24.2-33.5 36.4-49.1l.1.1c81.4-104.5 162.3-173.5 200.6-170.6l-4.5-134.2z"
                fill="#5dab5b"
            />
        </svg>
    )
}