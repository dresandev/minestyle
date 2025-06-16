import type {
  BasicArmorPartName,
  TextureData,
  TextureLayer,
  TrimName,
} from "@/types"
import { getTrimTexturePath } from "@/helpers/get-texture-path"

const TRIM_NAMES: TrimName[] = [
  "bolt",
  "coast",
  "dune",
  "eye",
  "flow",
  "host",
  "raiser",
  "rib",
  "sentry",
  "shaper",
  "silence",
  "snout",
  "spire",
  "tide",
  "vex",
  "ward",
  "wayfinder",
  "wild"
]

const getTrimLayerTexture = (layer: TextureLayer) => (
  TRIM_NAMES.map((name) => ({
    name,
    texturePath: getTrimTexturePath(name, layer)
  }))
)

const TRIM_LAYER_1_TEXTURES = getTrimLayerTexture("layer-1")
const TRIM_LAYER_2_TEXTURES = getTrimLayerTexture("layer-2")

export const TRIM_TEXTURES: Record<BasicArmorPartName, TextureData<TrimName>[]> = {
  helmet: TRIM_LAYER_1_TEXTURES,
  chestplate: TRIM_LAYER_1_TEXTURES,
  leggings: TRIM_LAYER_2_TEXTURES,
  boots: TRIM_LAYER_1_TEXTURES,
}
