import { Suspense } from "react"
import type { ArmorPartData } from "@/types"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { ArmorMaterial, SimpleArmorMaterial } from "../armor-material"

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
          armorUrl={armorUrl}
          armorColor={color}
        />
      )}
    </Suspense>
  )
}
