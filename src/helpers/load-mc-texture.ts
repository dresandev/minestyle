import { TextureLoader } from "three"
import { applyMcTextureSettings } from "./apply-mc-texture-settings"

export const loadMcTexture = (url?: string) => {
  if (!url) return undefined

  return new TextureLoader().load(url, applyMcTextureSettings)
}
