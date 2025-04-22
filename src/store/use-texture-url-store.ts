import { create } from "zustand"
import type { TextureName } from "@/types"
import {
  DEFAULT_CAPE,
  IRON_LAYER_1_ARMOR,
  IRON_LAYER_2_ARMOR,
} from "@/constants/texture-urls"

interface TextureUrlState {
  helmet: string
  chestplate: string
  innerChestplate: string
  leggins: string
  boots: string
  cape: string
  setTextureUrl: (textureName: TextureName, textureUrl: string) => void
}

export const useTextureUrlStore = create<TextureUrlState>()(set => ({
  helmet: IRON_LAYER_1_ARMOR,
  chestplate: IRON_LAYER_1_ARMOR,
  innerChestplate: IRON_LAYER_2_ARMOR,
  leggins: IRON_LAYER_2_ARMOR,
  boots: IRON_LAYER_1_ARMOR,
  cape: DEFAULT_CAPE,
  setTextureUrl: (textureName, textureUrl) => set((state) => ({
    ...state,
    [textureName]: textureUrl
  }))
}))
