import { loadMCTexture } from "@/helpers/load-mc-texture"

interface Props {
  textureUrl: string
  transparent?: boolean
  alphaTest?: number
  side?: 0 | 1 | 2
  color?: string
}

export const Material: React.FC<Props> = ({
  textureUrl,
  transparent,
  alphaTest,
  side,
  color
}) => {
  const texture = loadMCTexture(textureUrl)

  return (
    <meshStandardMaterial
      map={texture}
      transparent={transparent}
      alphaTest={alphaTest}
      side={side}
      color={color}
    />
  )
}
