import { useTexture } from "@react-three/drei"
import { applyMcTextureSettings } from "@/helpers/apply-mc-texture-settings"

export function useMcTexture(url: string) {
  const texture = useTexture(url)
  applyMcTextureSettings(texture)
  return texture
}
