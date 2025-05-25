export const reflectThemePreference = (value: string) => {
  document.documentElement.setAttribute("data-theme", value)
}
