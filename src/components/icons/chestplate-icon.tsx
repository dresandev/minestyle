import type { Icon } from "@/types"

export const ChestplateIcon = ({ size = 24, ...props }: Icon) => (
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
      d="M8.143 21h7.714v-1.308h1.286v-1.307h1.286v-6.539H21V4h-6.429v2.615h-1.285v1.308h-2.572V6.615H9.43V4H3v7.846h2.571v6.539h1.286v1.307h1.286V21Z"
    />
  </svg>
)
