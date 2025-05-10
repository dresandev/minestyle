import { TextureLoader } from "three"
import { applyMCTextureSettings } from "./apply-mc-texture-settings"

export const loadMCTexture = (url: string) => {
  return new TextureLoader().load(url, applyMCTextureSettings)
}
