"use client"

import { Cache } from "three"
import { useTexture } from "@react-three/drei"
import {
  COMMON_ARMOR_LAYER_1_TEXTURES,
  COMMON_ARMOR_LAYER_2_TEXTURES,
  HELMET_EXTRA_TEXTURES,
} from "@/constants/armor-textures"
import {
  TRIM_LAYER_1_TEXTURES,
  TRIM_LAYER_2_TEXTURES,
} from "@/constants/trim-textures"
import { TRIM_MATERIAL_TEXTURES } from "@/constants/trim-material-textures"

// The app uses a combination of the Three JS native cache and the React Three Fiber implementation, which is why the native cache is enabled.
Cache.enabled = true

const TEXTURES = [
  ...TRIM_LAYER_1_TEXTURES,
  ...TRIM_LAYER_2_TEXTURES,
  ...COMMON_ARMOR_LAYER_1_TEXTURES,
  ...COMMON_ARMOR_LAYER_2_TEXTURES,
  ...HELMET_EXTRA_TEXTURES,
  ...TRIM_MATERIAL_TEXTURES,
  { texturePath: "/images/textures/transparent.png" }
]

export const PreloadTextures = () => {
  TEXTURES.forEach(({ texturePath }) => { useTexture.preload(texturePath) })
  return null
}
