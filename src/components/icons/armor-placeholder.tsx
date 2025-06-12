import type { Icon } from "@/types"

export const ArmorPlaceholder = ({ size, ...props }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M7 9h2V6h1V5h4v1h1v3h2V3h-1V2h-1V1H9v1H8v1H7v6Z" />
    <path fill="#E0E0E0" d="M8 10h2V9h4v1h2V9h-1V6h-1V5h-4v1H9v3H8v1Z" />
    <path
      fill="currentColor"
      d="M10 13v-2H5v6h2v5h1v1h1v1h6v-1h1v-1h1v-5h2v-6h-5v2h-1v1h-2v-1h-1Z"
    />
  </svg>
)
