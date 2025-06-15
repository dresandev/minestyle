import type {
  ArmorType,
  TextureLayer,
  TrimMaterialName,
  TrimName,
} from "@/types"
import {
  BASE_ARMOR_TEXTURE_PATH,
  BASE_TRIM_MATERIAL_TEXTURE_PATH,
  BASE_TRIM_TEXTURE_PATH,
} from "@/constants/image-paths"

export const getArmorTexturePath = (type: ArmorType, layer: TextureLayer) => (
  `${BASE_ARMOR_TEXTURE_PATH}/${type}/${layer}.png`
)

export const getTrimMaterialTexturePath = (material: TrimMaterialName) => (
  `${BASE_TRIM_MATERIAL_TEXTURE_PATH}/${material}.png`
)

export const getTrimTexturePath = (trim: TrimName, layer: TextureLayer) => (
  `${BASE_TRIM_TEXTURE_PATH}/${trim}/${layer}.png`
)
