import { MusicButton } from "@/components/music-button"
import { UserIcon } from "@/components/icons/user-icon"
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
        <UserIcon />
      </Button>
      <MusicButton />
    </header>
  )
}
