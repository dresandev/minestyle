import { SVGProps } from "react"

export const Material = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1 9.667v7.083h1.375v1.417H3.75v1.416h1.375V21h5.5v-1.417h4.125v-1.416h4.125V16.75h2.75v-1.417H23V9.667h-1.375V8.25H20.25V6.833h-1.375V5.417H17.5V4h-2.75v1.417h-4.125v1.416H6.5V8.25H2.375v1.417H1Z"
    />
  </svg>
)
