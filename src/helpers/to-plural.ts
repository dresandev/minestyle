export const toPlural = (word: string) => (
  word.endsWith("s") ? word : word + "s"
)
