import type { Icon } from "@/types"

export const ThemeIcon = ({ size = 24, ...props }: Icon) => (
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
      d="M5 12h15V3.25h-1.25V2h-5v2.5h-2.5V2H10v2.5H7.5V2H6.25v1.25H5V12ZM20 13.25H5v2.5h1.25V17H10v3.75h1.25v-2.5h2.5v2.5H15V17h3.75v-1.25H20v-2.5Z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.7}
      d="M5 2v1.25h1.25V2H5ZM20 2h-1.25v1.25H20V2ZM20 17v-1.25h-1.25V17H20ZM5 17h1.25v-1.25H5V17ZM10 20.75V22h1.25v-1.25H10ZM13.75 22H15v-1.25h-1.25V22Z"
    />
    <path fill="currentColor" d="M11.25 20.75V22h2.5v-1.25h-2.5Z" />
    <path fill="currentColor" fillOpacity={0.8} d="M11.25 18.25v2.5h2.5v-2.5h-2.5Z" />
    <path
      fill="currentColor"
      fillOpacity={0.7}
      d="M10 2H7.5v1.25H10V2ZM13.75 2h-2.5v1.25h2.5V2Z"
    />
    <path
      fill="currentColor"
      fillOpacity={0.8}
      d="M7.5 4.5H10V3.25H7.5V4.5ZM11.25 4.5h2.5V3.25h-2.5V4.5Z"
    />
  </svg>
)
