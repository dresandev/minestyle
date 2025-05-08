import { Suspense } from "react"
import type { ArmorPartData } from "@/types"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { ArmorMaterial } from "../ArmorMaterial/ArmorMaterial"
import { Material as SimpleArmorMaterial } from "@/components/Material"
import { DoubleSide } from "three"

interface Props {
  partName: ArmorPartData["partName"]
}

export const ArmorMaterialRenderer: React.FC<Props> = ({ partName }) => {
  const {
    armorData: { armorUrl, isLeather, armorColor },
    trimData: { trimUrl, trimMaterialUrl },
  } = useArmorDataStore(state => state.data[partName])

  if (!armorUrl) return

  const hasTrim = !!(trimUrl && trimMaterialUrl)

  const color = isLeather ? armorColor : undefined

  return (
    <Suspense>
      {hasTrim ? (
        <ArmorMaterial
          armorUrl={armorUrl}
          trimUrl={trimUrl}
          trimMaterialUrl={trimMaterialUrl}
          armorColor={color}
        />
      ) : (
        <SimpleArmorMaterial
          textureUrl={armorUrl}
          side={DoubleSide}
          transparent={true}
          alphaTest={1e-5}
          color={color}
        />
      )}
    </Suspense>
  )
}
