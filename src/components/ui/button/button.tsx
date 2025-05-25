import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import styles from "./button.module.css"

type Variant = "primary" | "ghost"

export interface ButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean
  variant?: Variant
  square?: boolean
  squareSize?: number
}

export const Button: React.FC<ButtonProps> = ({
  ref,
  className,
  variant = "primary",
  asChild = false,
  square = false,
  squareSize = 40,
  disabled,
  onClick,
  ...props
}) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      ref={ref}
      style={{ "--square-size": `${squareSize}px` } as React.CSSProperties}
      className={clsx(
        styles.button,
        styles[variant],
        { [styles.square]: square },
        className
      )}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      {...props}
    />
  )
}
