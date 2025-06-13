import { TextureLoader } from "three"
import { applyMcTextureSettings } from "./apply-mc-texture-settings"

export const loadMcTexture = (url: string) => {
  return new TextureLoader().load(url, applyMcTextureSettings)
}
