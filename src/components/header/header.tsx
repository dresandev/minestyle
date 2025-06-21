import { Button } from "@/components/ui/button"
import { UserIcon } from "@/components/icons/user-icon"
import { MusicButton } from "@/components/music-button"
import { ThemeChanger } from "@/components/theme-changer"
import styles from "./header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button
        aria-label="Login"
        disabled
        square
      >
        <UserIcon />
      </Button>

      <div className={styles.options}>
        <ThemeChanger />
        <MusicButton />
      </div>
    </header>
  )
}
