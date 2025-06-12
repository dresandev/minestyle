import { Slime } from "@/components/slime"
import { RandomPhrase } from "@/components/random-phrase"
import styles from "./loading-screen.module.css"

export const LoadingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <Slime size={170} />
      <RandomPhrase />
    </div>
  )
}
