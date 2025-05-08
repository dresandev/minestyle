import { Suspense } from "react"
import { DoubleSide } from "three"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { Material } from "@/components/Material"

export const CapeMaterialRenderer = () => {
  const capeUrl = useBackEquipmentDataStore(state => state.cape.url)

  if (!capeUrl) return

  return (
    <Suspense fallback={<meshBasicMaterial visible={false} />}>
      <Material
        textureUrl={capeUrl}
        transparent
        alphaTest={1e-5}
        side={DoubleSide}
      />
    </Suspense>
  )
}
