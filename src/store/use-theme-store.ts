import { create } from "zustand"
import type { Theme } from "@/types"

interface State {
  theme: Theme
}

interface Actions {
  setTheme: (theme: Theme) => void
}

const INIT_STATE: State = {
  theme: "caves-and-cliffs"
}

export const useThemeStore = create<State & Actions>()(set => ({
  ...INIT_STATE,
  setTheme: (theme) => set(() => ({
    theme
  })),
}))
