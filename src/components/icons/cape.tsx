import type { Icon } from "@/types"

export const Cape = ({ size = 24, ...props }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 1H5v22h15V1Zm-6.429 10.45H11.43v1.1H9.82v3.85h1.608v-1.65h2.142v1.65h1.608v-3.85H13.57v-1.1Zm0-3.3v2.75h3.215V8.15H13.57Zm-2.142 0H8.214v2.75h3.215V8.15Z"
      clipRule="evenodd"
    />
  </svg>
)
