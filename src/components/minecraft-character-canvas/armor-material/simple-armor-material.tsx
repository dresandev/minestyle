import { useMCTexture } from "@/hooks/use-mc-texture"
import { DoubleSide } from "three"

interface Props {
  armorUrl: string
  armorColor?: string
}

export const SimpleArmorMaterial: React.FC<Props> = ({
  armorUrl,
  armorColor,
}) => {
  const texture = useMCTexture(armorUrl)
  const key = `${armorUrl}-${armorColor}`

  return (
    <meshStandardMaterial
      key={key}
      map={texture}
      side={DoubleSide}
      transparent={true}
      alphaTest={1e-5}
      color={armorColor}
    />
  )
}
