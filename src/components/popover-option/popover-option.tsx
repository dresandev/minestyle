import { CSSProperties, PropsWithChildren } from "react"
import { Popover, PopoverContent } from "@/components/ui/popover"
import { TextureButton } from "@/components/texture-button"
import styles from "./popover-option.module.css"

interface Props extends PropsWithChildren {
  open?: boolean
  onOpenChange: (open: boolean) => void
  trigger: {
    label: string
    icon: React.ReactNode
    disabled?: boolean
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
    disabled
  },
  contentColumns = 4
}) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
    >
      <TextureButton
        label={label}
        disabled={disabled}
        asPopoverTrigger
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
