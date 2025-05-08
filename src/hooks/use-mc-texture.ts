import {
  NearestFilter,
  SRGBColorSpace,
  Texture,
} from "three"
import { useTexture } from "@react-three/drei"

const applyTextureSettings = (texture: Texture) => {
  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.colorSpace = SRGBColorSpace
  texture.generateMipmaps = false
}

export function useMCTexture(url: string) {
  const texture = useTexture(url)
  applyTextureSettings(texture)
  return texture
}
