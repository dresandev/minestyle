import { CSSProperties, PropsWithChildren } from "react"
import type { ButtonProps } from "@/components/ui/button"
import { Popover, PopoverContent } from "@/components/ui/popover"
import { TextureButton } from "@/components/texture-button"
import styles from "./option-popover.module.css"

interface Props extends PropsWithChildren {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger: ButtonProps & {
    label: string
    icon: React.ReactNode
  },
  contentColumns?: number
}

export const OptionPopover: React.FC<Props> = ({
  children,
  open,
  onOpenChange,
  trigger: {
    label,
    icon,
    ...buttonProps
  },
  contentColumns = 4
}) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
    >
      <TextureButton
        className={styles.button}
        label={label}
        asPopoverTrigger
        {...buttonProps}
      >
        {icon}
      </TextureButton>
      <PopoverContent
        style={{ "--columns": contentColumns } as CSSProperties}
        className={styles.content}
      >
        {children}
      </PopoverContent>
    </Popover>
  )
}
