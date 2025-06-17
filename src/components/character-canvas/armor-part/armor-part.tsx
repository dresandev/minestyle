import type { ArmorPartData } from "@/types"
import { setBodyUVs } from "@/utils/set-uvs"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { BoxGeometry } from "@/components/box-geometry"
import { ArmorMaterialRenderer } from "../armor-material/armor-material-renderer"

interface Props {
  data: ArmorPartData
}

export const ArmorPart: React.FC<Props> = ({ data }) => {
  const { boxData, partName } = data

  const isVisible = useArmorDataStore(state => state[partName].isVisible)

  return (
    <BoxGeometry
      isVisible={isVisible}
      size={boxData.size}
      uvs={boxData.uvs}
      setUvs={setBodyUVs}
    >
      <ArmorMaterialRenderer partName={partName} />
    </BoxGeometry>
  )
}
