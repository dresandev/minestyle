import type { TrimMaterialName } from "@/types"
import { getTrimMaterialTexturePath } from "@/helpers/get-texture-path"

export interface TrimMaterial {
  name: TrimMaterialName,
  texturePath: string
}

export const TRIM_MATERIAL_TEXTURES: TrimMaterial[] = [
  {
    name: "amethyst-shard",
    texturePath: getTrimMaterialTexturePath("amethyst-shard"),
  },
  {
    name: "copper-ingot",
    texturePath: getTrimMaterialTexturePath("copper-ingot"),
  },
  {
    name: "diamond",
    texturePath: getTrimMaterialTexturePath("diamond"),
  },
  {
    name: "emerald",
    texturePath: getTrimMaterialTexturePath("emerald"),
  },
  {
    name: "gold-ingot",
    texturePath: getTrimMaterialTexturePath("gold-ingot"),
  },
  {
    name: "iron-ingot",
    texturePath: getTrimMaterialTexturePath("iron-ingot"),
  },
  {
    name: "lapis-lazuli",
    texturePath: getTrimMaterialTexturePath("lapis-lazuli"),
  },
  {
    name: "netherite-ingot",
    texturePath: getTrimMaterialTexturePath("netherite-ingot"),
  },
  {
    name: "quartz",
    texturePath: getTrimMaterialTexturePath("quartz"),
  },
  {
    name: "redstone",
    texturePath: getTrimMaterialTexturePath("redstone"),
  },
  {
    name: "resin-brick",
    texturePath: getTrimMaterialTexturePath("resin-brick"),
  },
]
