import { RefObject } from "react"
import { Group } from "three"
import { ELYTRA_MODEL_DATA } from "@/constants/elytra-model-data"
import { setCapeUVs } from "@/utils/set-uvs"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { BoxGeometry } from "@/components/box-geometry"
import { ElytraMaterialRenderer } from "./elytra-model-renderer"

interface Props {
  ref?: RefObject<Group | null>
}

export const ElytraModel: React.FC<Props> = ({ ref }) => {
  const { wingsData, pivotPosition } = ELYTRA_MODEL_DATA

  const isVisible = useBackEquipmentDataStore(state => state.elytra.isVisible)

  return (
    <group
      ref={ref}
      visible={isVisible}
      position={pivotPosition}
    >
      {wingsData.map((data) => {
        const { name,
          box: { size, uvs },
          position,
          rotation,
          scale
        } = data

        return (
          <BoxGeometry
            key={name}
            size={size}
            uvs={uvs}
            setUvs={setCapeUVs}
            position={position}
            rotation={rotation}
            scale={scale}
          >
            <ElytraMaterialRenderer />
          </BoxGeometry>
        )
      })}
    </group>
  )
}
