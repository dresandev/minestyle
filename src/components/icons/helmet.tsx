import { SVGProps } from "react"

export const Helmet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 16.667v-8h1.4V7.333h1.4V6h8.4v1.333h1.4v1.334H19v8h-1.4V18h-1.4v-5.333h-1.4v-1.334H9.2v1.334H7.8V18H6.4v-1.333H5Z"
    />
  </svg>
)
