import type { CSSProperties } from "react"
import styles from "./slime.module.css"

interface Props {
  size: number
}

export const Slime: React.FC<Props> = ({ size }) => {
  return (
    <div
      style={{ "--size": `${size}px` } as CSSProperties}
      className={styles.slime}
    >
      <div className={`${styles.innerLayer} ${styles.innerFront}`}></div>
      <div className={`${styles.innerLayer} ${styles.innerRight}`}></div>
      <div className={`${styles.innerLayer} ${styles.innerLeft}`}></div>
      <div className={`${styles.innerLayer} ${styles.innerBack}`}></div>
      <div className={`${styles.innerLayer} ${styles.innerTop}`}></div>
      <div className={`${styles.innerLayer} ${styles.innerBottom}`}></div>

      <div className={`${styles.outerLayer} ${styles.outerFront}`}></div>
      <div className={`${styles.outerLayer} ${styles.outerRight}`}></div>
      <div className={`${styles.outerLayer} ${styles.outerLeft}`}></div>
      <div className={`${styles.outerLayer} ${styles.outerBack}`}></div>
      <div className={`${styles.outerLayer} ${styles.outerTop}`}></div>
      <div className={`${styles.outerLayer} ${styles.outerBottom}`}></div>
    </div>
  )
}
