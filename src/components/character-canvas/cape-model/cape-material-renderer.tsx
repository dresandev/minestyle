import { DoubleSide } from "three"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { MinecraftMaterial } from "../minecraft-material"

export const CapeMaterialRenderer = () => {
  const capeUrl = useBackEquipmentDataStore(state => state.cape.url)

  if (!capeUrl) return

  return (
    <MinecraftMaterial
      textureUrl={capeUrl}
      transparent
      alphaTest={1e-5}
      side={DoubleSide}
    />
  )
}
