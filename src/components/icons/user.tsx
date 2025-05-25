import { SVGProps } from "react"

export const User = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 9H6V5h1V3h1V2h2V1h4v1h2v1h1v2h1v4h-1v2h-1v1h-2v1h-4v-1H8v-1H7V9ZM22 19v3h-1v1H3v-1H2v-3h1v-1h1v-1h1v-1h2v-1h10v1h2v1h1v1h1v1h1Z"
    />
  </svg>
)
