import { RefObject } from "react"
import { PlusIcon } from "@/components/icons/plus-icon"
import styles from "./texture-input.module.css"

interface Props {
  ref?: RefObject<HTMLInputElement | null>
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextureInput: React.FC<Props> = ({
  ref,
  label,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.input}>
        <PlusIcon size={36} />
        <input
          ref={ref}
          type="file"
          accept="image/png"
          onChange={onChange}
        />
      </label>
      <span className={styles.label}>
        {label}
      </span>
    </div>
  )
}
