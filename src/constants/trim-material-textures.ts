import type { TrimMaterialName } from "@/types"
import { getTrimMaterialTexturePath } from "@/helpers/get-texture-path"

export interface TrimMaterial {
  name: TrimMaterialName,
  texturePath: string
}

const TRIM_MATERIAL_NAMES: TrimMaterialName[] = [
  "amethyst-shard",
  "copper-ingot",
  "diamond",
  "emerald",
  "gold-ingot",
  "iron-ingot",
  "lapis-lazuli",
  "netherite-ingot",
  "quartz",
  "redstone",
  "resin-brick"
]

const getTrimMaterialTexture = () => (
  TRIM_MATERIAL_NAMES.map((name) => ({
    name,
    texturePath: getTrimMaterialTexturePath(name)
  }))
)


export const TRIM_MATERIAL_TEXTURES = getTrimMaterialTexture()
