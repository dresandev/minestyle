import { DoubleSide } from "three"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { Material } from "../minecraft-material"

export const CapeMaterialRenderer = () => {
  const capeUrl = useBackEquipmentDataStore(state => state.cape.url)

  if (!capeUrl) return

  return (
    <Material
      textureUrl={capeUrl}
      transparent
      alphaTest={1e-5}
      side={DoubleSide}
    />
  )
}
