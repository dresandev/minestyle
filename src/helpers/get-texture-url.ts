import { BASE_ARMOR_TEXTURE_URL } from "@/constants/texture-urls"
import type {  ArmorType } from "@/types"

export const getArmorTextureUrl = (type: ArmorType, layer: "layer-1" | "layer-2") => {
  return `${BASE_ARMOR_TEXTURE_URL}/${type}/${layer}.png`
}
