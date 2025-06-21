import Link from "next/link"
import styles from "./not-found.module.css"

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Page not found</h1>
      <Link className={styles.homeLink} href="/">Go home</Link>
    </div>
  )
}
