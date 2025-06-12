import type { ArmorType, PluralBasicArmorPartName } from "@/types"

export const getArmorItemPath = (part: PluralBasicArmorPartName, type: ArmorType): string => (
  `/images/items/armors/${part}/${type}.png`
)
