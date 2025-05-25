import { SVGProps } from "react"

export const Trim = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M9 20.75V22h6v-1.25h1.2v-2.5h1.2v-2.5h1.2v-2.5h1.2v-2.5H21V7h-1.2V5.75h-2.4V4.5H15V3.25h-2.4V2H9v1.25H7.8v2.5H6.6v2.5H5.4v2.5H4.2v2.5H3v5h1.2v1.25h2.4v1.25H9Zm0-12.5h2.4V12H9V8.25Zm6 2.5h-2.4v3.75H15v-3.75Z"
      clipRule="evenodd"
    />
  </svg>
)
