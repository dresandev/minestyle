import { ArmorType } from "@/types"

export interface PartialArmorOptionData {
  type: ArmorType
  label: string
  isLeather: boolean
}

export const COMMON_ARMOR_OPTIONS_DATA: PartialArmorOptionData[] = [
  { type: "leather", label: "Leather", isLeather: true, },
  { type: "gold", label: "Gold", isLeather: false, },
  { type: "chainmail", label: "Chainmail", isLeather: false, },
  { type: "iron", label: "Iron", isLeather: false, },
  { type: "diamond", label: "Diamond", isLeather: false, },
  { type: "netherite", label: "Netherite", isLeather: false, },
]

export const HELMET_OPTIONS_DATA: PartialArmorOptionData[] = [
  ...COMMON_ARMOR_OPTIONS_DATA,
  {
    type: "turtle",
    label: "Turtle",
    isLeather: false,
  }
]
