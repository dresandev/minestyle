import type { Icon } from "@/types"

export const MaterialIcon = ({ size, ...props }: Icon) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0  24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 9.667V15.5h1.188v1.167h1.187v1.166h1.188V19h4.75v-1.167h3.562v-1.166h3.563V15.5h2.375v-1.167H21V9.667h-1.188V8.5h-1.187V7.333h-1.188V6.167H16.25V5h-2.375v1.167h-3.563v1.166H6.75V8.5H3.187v1.167H2Z"
    />
  </svg>
)
