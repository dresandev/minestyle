import type {
  ArmorType,
  BasicArmorPartName,
  TextureData,
  TextureLayer,
} from "@/types"
import { getArmorTexturePath } from "@/helpers/get-texture-path"

const COMMON_ARMOR_TYPES: Exclude<ArmorType, "turtle">[] = [
  "leather",
  "gold",
  "chainmail",
  "iron",
  "diamond",
  "netherite"
]

const HELMET_EXTRA_TYPES: ArmorType[] = [
  "turtle"
]

const getArmorLayerTextures = (data: ArmorType[], layer: TextureLayer) => (
  data.map((name) => ({
    name,
    texturePath: getArmorTexturePath(name, layer)
  }))
)

export const COMMON_ARMOR_LAYER_1_TEXTURES = getArmorLayerTextures(COMMON_ARMOR_TYPES, "layer-1")
export const COMMON_ARMOR_LAYER_2_TEXTURES = getArmorLayerTextures(COMMON_ARMOR_TYPES, "layer-2")
export const HELMET_EXTRA_TEXTURES = getArmorLayerTextures(HELMET_EXTRA_TYPES, "layer-1")

const HELMET_TEXTURES = [
  ...COMMON_ARMOR_LAYER_1_TEXTURES,
  ...HELMET_EXTRA_TEXTURES
]

export const ARMOR_TEXTURES: Record<BasicArmorPartName, TextureData<ArmorType>[]> = {
  helmet: HELMET_TEXTURES,
  chestplate: COMMON_ARMOR_LAYER_1_TEXTURES,
  leggings: COMMON_ARMOR_LAYER_2_TEXTURES,
  boots: COMMON_ARMOR_LAYER_1_TEXTURES,
}
