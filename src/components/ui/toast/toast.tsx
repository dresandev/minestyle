import { useEffect } from "react"
import Image from "next/image"
import useSound from "use-sound"
import type { ToastProps } from "@/helpers/toast"
import styles from "./toast.module.css"

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  iconUrl,
}) => {
  const [playToast] = useSound("/sounds/toast.ogg", { volume: .4 })

  useEffect(() => {
    playToast()
  }, [playToast])

  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.icon}
        width={36}
        height={36}
        src={iconUrl || "/images/avatars/default.png"}
        alt="Character avatar"
        draggable={false}
        unoptimized
      />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
