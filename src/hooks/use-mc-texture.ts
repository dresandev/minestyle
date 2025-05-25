import { useTexture } from "@react-three/drei"
import { applyMCTextureSettings } from "@/helpers/apply-mc-texture-settings"

export function useMCTexture(url: string) {
  const texture = useTexture(url)
  applyMCTextureSettings(texture)
  return texture
}
