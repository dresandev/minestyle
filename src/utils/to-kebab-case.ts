export const toKebabCase = (str: string) => (
  str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
)
