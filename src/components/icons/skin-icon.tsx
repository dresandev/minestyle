import type { Icon } from "@/types"

export const SkinIcon = ({ size = 24, ...props }: Icon) => (
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
      d="M9.992 2h4.988v5.116H9.992V2ZM9.992 7.581h4.988v6.977H9.992V7.581ZM9.992 15.023h2.267V22H9.992v-6.977ZM12.713 15.023h2.267V22h-2.267v-6.977ZM15.434 7.581h2.4v6.977h-2.4V7.581ZM7 7.556l2.538.025v6.977H7V7.556Z"
    />
  </svg>
)
