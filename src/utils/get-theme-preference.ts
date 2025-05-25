import { STORAGE_KEY } from "@/constants/theme"

export const getThemePreference = () => {
  const storePreferredTheme = localStorage.getItem(STORAGE_KEY)
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  const devicePreferredTheme = prefersDarkTheme ? "dark" : "light"

  return storePreferredTheme || devicePreferredTheme
}
