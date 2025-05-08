import { RefObject } from "react"
import { Group } from "three"
import { CAPE_MODEL_DATA } from "@/constants/cape-model-data"
import { setCapeUVs } from "@/utils/set-uvs"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { Box } from "@/components/Box"
import { CapeMaterialRenderer } from "./CapeMaterialRenderer"

interface Props {
  ref?: RefObject<Group | null>
}

export const CapeModel: React.FC<Props> = ({ ref }) => {
  const {
    box: { size, uvs },
    position,
    pivotPosition,
    rotation,
  } = CAPE_MODEL_DATA

  const isVisible = useBackEquipmentDataStore(state => state.cape.isVisible)

  return (
    <group
      visible={isVisible}
      ref={ref}
      position={pivotPosition}
    >
      <Box
        size={size}
        uvs={uvs}
        setUvs={setCapeUVs}
        position={position}
        rotation={rotation}
      >
        <CapeMaterialRenderer />
      </Box>
    </group >
  )
}
