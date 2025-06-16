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

const HELMET_TYPES: ArmorType[] = [
  ...COMMON_ARMOR_TYPES,
  "turtle"
]

const getArmorLayerTexture = (data: ArmorType[], layer: TextureLayer,) => (
  data.map((name) => ({
    name,
    texturePath: getArmorTexturePath(name, layer)
  }))
)

export const ARMOR_TEXTURES: Record<BasicArmorPartName, TextureData<ArmorType>[]> = {
  helmet: getArmorLayerTexture(HELMET_TYPES, "layer-1"),
  chestplate: getArmorLayerTexture(COMMON_ARMOR_TYPES, "layer-1"),
  leggings: getArmorLayerTexture(COMMON_ARMOR_TYPES, "layer-2"),
  boots: getArmorLayerTexture(COMMON_ARMOR_TYPES, "layer-1")
}
