import { MusicButton } from "@/components/music-button"
import { User } from "@/components/icons/user"
import { Button } from "@/components/ui/button"
import styles from "./header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Button
        aria-label="Login"
        disabled
        square
      >
        <User />
      </Button>
      <MusicButton />
    </header>
  )
}
