import { Suspense } from "react"
import { DoubleSide } from "three"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { MinecraftMaterial } from "../minecraft-material"

export const ElytraMaterialRenderer = () => {
  const elytraUrl = useBackEquipmentDataStore(state => state.elytra.url)

  if (!elytraUrl) return

  return (
    <Suspense fallback={<meshBasicMaterial visible={false} />}>
      <MinecraftMaterial
        textureUrl={elytraUrl}
        side={DoubleSide}
        transparent
        alphaTest={1e-5}
      />
    </Suspense>
  )
}
