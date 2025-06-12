import {
  NearestFilter,
  SRGBColorSpace,
  Texture,
} from "three"

export const applyMcTextureSettings = (texture: Texture) => {
  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.colorSpace = SRGBColorSpace
  texture.generateMipmaps = false
}
