import type { Icon } from "@/types"

export const Helmet = ({ size, ...props }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M5 17.556h2.8v-4.334h1.4v-1.444h5.6v1.444h1.4v4.334H19V8.889h-1.4V7.444h-1.4V6H7.8v1.444H6.4V8.89H5v8.667Z"
    />
    <path
      fill="#E0E0E0"
      d="M6.4 19h2.8v-1.444h5.6V19h2.8v-1.444h-1.4v-4.334h-1.4v-1.444H9.2v1.444H7.8v4.334H6.4V19Z"
    />
  </svg>
)
