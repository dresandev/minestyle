import { clsx } from "clsx"
import { type ButtonProps, Button } from "@/components/ui/button"
import { PopoverTrigger } from "@/components/ui/popover"
import { ConditionalWrapper } from "@/components/conditional-wrapper"
import styles from "./texture-button.module.css"

interface Props extends ButtonProps {
  label: string
  asPopoverTrigger?: boolean
}

export const TextureButton: React.FC<Props> = ({
  children,
  className,
  label,
  asPopoverTrigger = false,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <ConditionalWrapper
        condition={asPopoverTrigger}
        wrapperTrue={(children) => (
          <PopoverTrigger asChild>
            {children}
          </PopoverTrigger>
        )}
      >
        <Button
          className={clsx(
            className,
            styles.button
          )}
          variant="outline"
          square
          squareSize={64}
          {...props}
        >
          {children}
        </Button>
      </ConditionalWrapper>
      <span className={styles.label}>
        {label}
      </span>
    </div>
  )
}
