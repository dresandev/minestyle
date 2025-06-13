import { DoubleSide, MeshStandardMaterial } from "three"
import { useRef, useEffect } from "react"
import { useMcTexture } from "@/hooks/use-mc-texture"

interface Props {
  armorUrl: string
  armorDye?: string
}

export const SimpleArmorMaterial: React.FC<Props> = ({
  armorUrl,
  armorDye = "#ffffff",
}) => {
  const materialRef = useRef<MeshStandardMaterial>(null)
  const texture = useMcTexture(armorUrl)

  useEffect(() => {
    const material = materialRef.current
    if (!material) return
    material.color.set(armorDye)
  }, [armorDye])

  return (
    <meshStandardMaterial
      ref={materialRef}
      map={texture}
      side={DoubleSide}
      transparent={true}
      alphaTest={1e-5}
    />
  )
}
