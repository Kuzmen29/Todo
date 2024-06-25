import * as React from "react"

interface ISVGUpdateProps {
  className : string,
  onClick : ()=>void,
}

export function SvgCancel({className, onClick} : ISVGUpdateProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 128c-211.2 0-384 172.8-384 384s172.8 384 384 384 384-172.8 384-384-172.8-384-384-384zm0 85.333c66.133 0 128 23.467 179.2 59.734L273.067 691.2C236.8 640 213.333 578.133 213.333 512c0-164.267 134.4-298.667 298.667-298.667zm0 597.334c-66.133 0-128-23.467-179.2-59.734L750.933 332.8C787.2 384 810.667 445.867 810.667 512c0 164.267-134.4 298.667-298.667 298.667z"
        fill="#D50000"
      />
    </svg>
  )
}
