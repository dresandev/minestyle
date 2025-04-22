import { FrontSide } from "three"
import type { TextureName } from "@/types"
import { useTextureUrlStore } from "@/store/use-texture-url-store"
import { useTextureLoader } from "@/hooks/use-texture-loader"

interface Props {
  textureName: TextureName
  transparent?: boolean
  alphaTest?: number
  side?: 0 | 2 | 1 | undefined
  polygonOffset?: boolean
  depthWrite?: boolean
  color?: string
}

export const Material: React.FC<Props> = ({
  textureName,
  transparent = false,
  alphaTest = 0,
  side = FrontSide,
  polygonOffset = false,
  depthWrite = true,
  color
}) => {
  const textureUrl = useTextureUrlStore(state => state[textureName])
  const texture = useTextureLoader(textureUrl!)

  return (
    <meshStandardMaterial
      map={texture}
      transparent={transparent}
      alphaTest={alphaTest}
      side={side}
      polygonOffset={polygonOffset}
      polygonOffsetFactor={1.0}
      polygonOffsetUnits={1.0}
      depthWrite={depthWrite}
      color={color}
    />
  )
}
