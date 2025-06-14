export const createRecordFromKeys = <T extends string, V>(
  keys: T[],
  value: V
): Record<T, V> => {
  return keys.reduce((acc, key) => {
    acc[key] = value
    return acc
  }, {} as Record<T, V>)
}
