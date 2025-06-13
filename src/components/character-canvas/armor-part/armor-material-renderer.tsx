import { Suspense } from "react"
import type { ArmorPartData } from "@/types"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { ArmorMaterial, SimpleArmorMaterial } from "../armor-material"

interface Props {
  partName: ArmorPartData["partName"]
}

export const ArmorMaterialRenderer: React.FC<Props> = ({ partName }) => {
  const {
    armor: { url: armorUrl, isLeather, dye },
    trim: { url: trimUrl, materialUrl: trimMaterialUrl },
  } = useArmorDataStore(state => state[partName])

  if (!armorUrl) return

  const hasTrim = !!(trimUrl && trimMaterialUrl)
  // TODO: hasTrim as store prop
  const color = isLeather ? dye : undefined

  return (
    <Suspense>
      {hasTrim ? (
        <ArmorMaterial
          armorUrl={armorUrl}
          trimUrl={trimUrl}
          trimMaterialUrl={trimMaterialUrl}
          armorDye={color}
        />
      ) : (
        <SimpleArmorMaterial
          armorUrl={armorUrl}
          armorDye={color}
        />
      )}
    </Suspense>
  )
}
