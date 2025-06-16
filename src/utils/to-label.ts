export const toLabel = (str: string) => (
  str
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, s => s.toUpperCase())
)
