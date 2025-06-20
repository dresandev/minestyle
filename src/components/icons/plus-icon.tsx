import type { Icon } from "@/types"

export const PlusIcon = ({ size = 24, ...props }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 5v14M5 12h14" />
  </svg>
)
