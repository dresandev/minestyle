"use client"

import { useState } from "react"
import type { Theme } from "@/types"
import { toLabel } from "@/utils/to-label"
import { useThemeStore } from "@/store/use-theme-store"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent, } from "@/components/ui/popover"
import { ThemeIcon } from "@/components/icons/theme-icons"
import styles from "./theme-changer.module.css"

const THEMES: Theme[] = [
  "caves-and-cliffs",
  "nether",
  "vanilla-spawn",
  "vanilla-spawn-winter",
]

export const ThemeChanger = () => {
  const [open, setOpen] = useState(false)
  const setTheme = useThemeStore(state => state.setTheme)

  const closePopover = () => setOpen(false)

  const handleOnClick = (theme: Theme) => () => {
    setTheme(theme)
    closePopover()
  }

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          title="Change theme"
          square
        >
          <ThemeIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={styles.content}
      >
        {THEMES.map((theme) => (
          <button
            style={{
              backgroundImage: `url(/images/theme-thumbnails/${theme}.webp)`
            }}
            className={styles.button}
            key={theme}
            onClick={handleOnClick(theme)}
          >
            <span>{toLabel(theme)}</span>
          </button>
        ))}
      </PopoverContent>
    </Popover>
  )
}
