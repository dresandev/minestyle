import type { ArmorPartData } from "@/types"
import { setBodyUVs } from "@/utils/set-uvs"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { Box } from "@/components/Box"
import { ArmorMaterialRenderer } from "./ArmorMaterialRenderer"

interface Props {
  data: ArmorPartData
}

export const ArmorPart: React.FC<Props> = ({ data }) => {
  const { boxData, partName } = data

  const isVisible = useArmorDataStore(state => state.data[partName].isVisible)

  return (
    <Box
      isVisible={isVisible}
      size={boxData.size}
      uvs={boxData.uvs}
      setUvs={setBodyUVs}
    >
      <ArmorMaterialRenderer partName={partName} />
    </Box>
  )
}
