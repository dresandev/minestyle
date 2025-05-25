import { Slime } from "@/components/slime"
import { RandomMotivationalPhrase } from "@/components/RandomMotivationalPhrase"
import styles from "./LoadingScreen.module.css"

export const LoadingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <Slime size={170} />
      <RandomMotivationalPhrase />
    </div>
  )
}
