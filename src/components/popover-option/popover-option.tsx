import { PropsWithChildren } from "react"
import { Popover, PopoverContent } from "@/components/ui/popover"
import { TextureButton } from "@/components/texture-button"
import styles from "./popover-option.module.css"

interface Props extends PropsWithChildren {
  open?: boolean
  onOpenChange: (open: boolean) => void
  trigger: {
    label: string
    icon: React.ReactNode
  }
}

export const OptionPopover: React.FC<Props> = ({
  children,
  open,
  onOpenChange,
  trigger: {
    label,
    icon,
  }
}) => {
  return (
    <Popover
      open={open}
      onOpenChange={onOpenChange}
    >
      <TextureButton
        label={label}
        asPopoverTrigger
      >
        {icon}
      </TextureButton>
      <PopoverContent className={styles.content}>
        {children}
      </PopoverContent>
    </Popover>
  )
}
