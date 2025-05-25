import { SVGProps } from "react"

export const MusicOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M14 2v20h-3v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H1V8h5V7h1V6h1V5h1V4h1V3h1V2h3ZM17 15v-1h-1v-1h1v-2h-1v-1h1V9h1v1h1v4h-1v1h-1Z"
    />
    <path
      fill="currentColor"
      d="M23 10v4h-1v2h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-4h-1V9h-1V8h-1V7h1V6h1v1h1v1h1v2h1Z"
    />
  </svg>
)
