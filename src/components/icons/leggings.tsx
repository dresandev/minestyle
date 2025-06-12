import type { Icon } from "@/types"

export const Leggings = ({ size, ...props }: Icon) => (
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
      d="M6 20V6.25h1.2V5h9.6v1.25H18V20h-4.8v-8.75h-2.4V20H6Z"
    />
  </svg>
)
