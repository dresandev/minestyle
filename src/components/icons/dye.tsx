import type { Icon } from "@/types"

export const Dye = ({ size, ...props }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M12.615 15h-2.461v2.5h2.461V15Z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M4 8.75v8.75h1.23V15h2.462v2.5H5.231v1.25h1.23V20h7.385v-1.25h1.23V15h3.693v-1.25H20V10h-1.23V7.5h-1.232V6.25h-2.461V5H7.692v1.25h-1.23V7.5H5.23v1.25H4ZM13.846 15v2.5h-1.23v1.25h-2.462V17.5h-1.23V15h1.23v-1.25h2.461V15h1.231Zm-7.384-1.25v-2.5h2.461v2.5H6.462Zm1.23-6.25V10h2.462V7.5H7.692Zm6.154 0h-2.461V10h2.461V7.5Zm3.692 2.5h-2.461v2.5h2.461V10Z"
      clipRule="evenodd"
    />
  </svg>
)
