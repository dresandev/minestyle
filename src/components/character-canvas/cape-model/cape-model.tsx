import { RefObject } from "react"
import { Group } from "three"
import { CAPE_MODEL_DATA } from "@/constants/cape-model-data"
import { setCapeUVs } from "@/utils/set-uvs"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { BoxGeometry } from "@/components/box-geometry"
import { CapeMaterialRenderer } from "./cape-material-renderer"

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
      <BoxGeometry
        size={size}
        uvs={uvs}
        setUvs={setCapeUVs}
        position={position}
        rotation={rotation}
      >
        <CapeMaterialRenderer />
      </BoxGeometry>
    </group >
  )
}
