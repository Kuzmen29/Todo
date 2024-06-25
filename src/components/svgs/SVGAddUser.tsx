import * as React from "react"

export default function SVGAddUser({width, height}: { width: number, height: number }) {
    return (
        <svg
            height={height}
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 473.935 473.935"
            xmlSpace="preserve"
            fill="#000"
        >
            <circle cx={236.967} cy={236.967} r={236.967} fill="#337180"/>
            <path
                d="M236.952 473.935c78.533 0 148.115-38.222 191.232-97.058-8.011-11.48-39.525-45.025-145.593-70.548 0-24.082-2.398-38.507-2.398-38.507s31.289-43.337 33.691-103.513c0-9.568 4.7-77.436-77.017-80.508V83.7c-.202 0-.382.045-.602.045-.21 0-.385-.045-.595-.045v.101c-81.702 3.068-77.017 70.941-77.017 80.505 2.398 60.175 33.691 103.513 33.691 103.513s-2.417 14.425-2.417 38.507C86.664 331.174 54.08 363.623 45.044 375.908c43.06 59.378 112.953 98.027 191.908 98.027z"
                fill="#448a96"
            />
            <circle cx={332.233} cy={363.515} r={57.062} fill="#00a31f"/>
            <g fill="#fff">
                <path
                    d="M370.572 363.361c0 4.962-4.022 8.988-8.999 8.988h-58.559c-4.965 0-8.995-4.026-8.995-8.988a8.996 8.996 0 018.995-8.995h58.559a8.99 8.99 0 018.999 8.995z"/>
                <path
                    d="M332.293 401.632c-4.965 0-8.992-4.026-8.992-8.995v-58.559a8.993 8.993 0 018.992-8.995c4.969 0 8.999 4.026 8.999 8.995v58.559c0 4.969-4.03 8.995-8.999 8.995z"/>
            </g>
        </svg>
    )
}

