import type { FC, PropsWithChildren, ReactNode } from "react"

interface ConditionalWrapperProps extends PropsWithChildren {
  condition: boolean
  wrapperTrue: (children: ReactNode) => ReactNode
  wrapperFalse?: (children: ReactNode) => ReactNode
}

export const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  condition,
  wrapperTrue,
  wrapperFalse,
  children,
}) => {
  if (condition) {
    return wrapperTrue(children)
  }

  if (wrapperFalse) {
    return wrapperFalse(children)
  }

  return <>{children}</>
}
