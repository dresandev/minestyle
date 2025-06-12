import type { Icon } from "@/types"

export const Boots = ({ size, ...props }: Icon) => (
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
      d="M6.429 7.3v6.5H5.214v1.3H4V19h4.857v-1.3h2.429V6H7.643v1.3H6.429ZM17.357 6h-3.643v11.7h2.429V19H21v-3.9h-1.214v-1.3H18.57V7.3h-1.214V6Z"
      clipRule="evenodd"
    />
  </svg>
)
