import * as React from "react"

export default function SVGAdd({width, height} : {width : number, height:number}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 60 60"
            data-name="add comment"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
        >
            <g fillRule="evenodd">
                <path
                    d="M257.875 246a12 12 0 11-12 12 12 12 0 0112-12zM252 260h4v4a2 2 0 004 0v-4h4a2 2 0 000-4h-4v-4a2 2 0 00-4 0v4h-4a2 2 0 000 4z"
                    transform="translate(-210 -210.031)"
                    fill="#699f4c"
                />
                <path
                    d="M268.109 243.107A18 18 0 00240 258c0 .388.034.768.058 1.151H240c-1.16 0-4.375-.536-5.358-.166a5.046 5.046 0 00-.847.546c-.912.91-8.24 10.53-13.295 10.49-.31 0-2.485.251-2.5-2 .006-1.352 1.122-1.8 2.433-6.909a20.624 20.624 0 00.532-6.341 2.958 2.958 0 00-1.059-1.948c-6.082-4.495-9.906-11-9.906-18.236 0-13.568 13.431-24.566 30-24.566s30 11 30 24.566a20.571 20.571 0 01-1.891 8.52z"
                    transform="translate(-210 -210.031)"
                    fill="#a5c594"
                />
            </g>
        </svg>
    )
}

