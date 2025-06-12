import { CHARACTER_CONTAINER_ID } from "@/constants/dom-selectors"
import { CharacterCanvas } from "@/components/character-canvas"
import { LoadingScreen } from "@/components/loading-screen"
import { PanoramaCanvas } from "@/components/panorama-canvas"
import { CharacterTabs } from "@/components/character-tabs"
import styles from "./page.module.css"

export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <div
          id={CHARACTER_CONTAINER_ID}
          className={styles.wrapper}
        >
          <CharacterTabs />
          <div className={styles.characterWrapper}>
            <CharacterCanvas className={styles.characterCanvas} />
            <p className={styles.promo}>Developed by <a href="https://www.dresan.dev/" target="_blank">Dresan</a></p>
          </div>
        </div>
      </main>
      <LoadingScreen />
      <PanoramaCanvas />
    </>
  )
}
