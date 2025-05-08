import { RefObject } from "react"
import { Group } from "three"
import { ELYTRA_MODEL_DATA } from "@/constants/elytra-model-data"
import { setCapeUVs } from "@/utils/set-uvs"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { Box } from "@/components/Box"
import { ElytraMaterialRenderer } from "./ElytraMaterialRenderer"

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
          <Box
            key={name}
            size={size}
            uvs={uvs}
            setUvs={setCapeUVs}
            position={position}
            rotation={rotation}
            scale={scale}
          >
            <ElytraMaterialRenderer />
          </Box>
        )
      })}
    </group>
  )
}
