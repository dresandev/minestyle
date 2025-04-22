import { useLoader } from "@react-three/fiber"
import { NearestFilter, TextureLoader } from "three"

export const useTextureLoader = (url: string) => {
  const texture = useLoader(TextureLoader, url)
  texture.magFilter = NearestFilter
  texture.minFilter = NearestFilter
  texture.generateMipmaps = false

  return texture
}
