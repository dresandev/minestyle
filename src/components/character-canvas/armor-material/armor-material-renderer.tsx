import type { ArmorPartName } from "@/types"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { ArmorMaterial } from "./armor-material"

interface Props {
  partName: ArmorPartName
}

export const ArmorMaterialRenderer: React.FC<Props> = ({ partName }) => {
  const {
    armor: { url: armorUrl, isLeather, dye },
    trim: { url: trimUrl, materialUrl: trimMaterialUrl },
  } = useArmorDataStore(state => state[partName])

  if (!armorUrl) return

  const color = isLeather ? dye : undefined

  return (
    <ArmorMaterial
      armorUrl={armorUrl}
      trimUrl={trimUrl}
      trimMaterialUrl={trimMaterialUrl}
      armorDye={color}
    />
  )
}
