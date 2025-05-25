import { clsx } from "clsx"
import styles from "./TextureButton.module.css"

interface Props {
  children: React.ReactNode
  className?: string
  label: string
  isSelected?: boolean
  onClick: () => void
}

export const TextureButton: React.FC<Props> = ({
  children,
  className,
  // label,
  isSelected = false,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        className,
        styles.button,
        { [styles.selected]: isSelected }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
