import { SVGProps } from "react"

export const ArmorSet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 24h4.816v-8.759h2.382V24H22V10.269h-1.174V9h-9.63v1.23H10V24Z"
    />
    <path
      fill="currentColor"
      d="M9 18V9.261h1.221V8H19V1h-6.435v2.629H11.28v1.285h-2.55V3.61H7.417V1H1v7.844h2.563v6.535h1.289v1.305h1.285V18H9Z"
    />
  </svg>
)
