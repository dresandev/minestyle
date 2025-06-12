import type { Icon } from "@/types"

export const Material = ({ size, ...props }: Icon) => (
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
      d="M4 10v5h1v1h1v1h1v1h4v-1h3v-1h3v-1h2v-1h1v-4h-1V9h-1V8h-1V7h-1V6h-2v1h-3v1H8v1H5v1H4Z"
    />
  </svg>
)
