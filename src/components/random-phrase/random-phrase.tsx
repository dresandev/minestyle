import {
  MOTIVATIONAL_PHRASES,
  MOTIVATIONAL_PHRASES_LAST_INDEX,
} from "@/constants/motivational-phrases"
import { getRandomNumber } from "@/utils/get-random-number"
import styles from "./random-phrase.module.css"

export const RandomPhrase = () => {
  const randomIndex = getRandomNumber(0, MOTIVATIONAL_PHRASES_LAST_INDEX)
  const { phrase, by, cite } = MOTIVATIONAL_PHRASES[randomIndex]

  return (
    <div className={styles.wrapper}>
      <q className={styles.quote} cite={cite}>
        {phrase}
      </q>
      <span className={styles.by}>{by}</span>
    </div>
  )
}
