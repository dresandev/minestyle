import { RefObject } from "react"
import { DoubleSide, Group } from "three"
import { CAPE_MODEL_DATA } from "@/constants/cape-model-data"
import { setCapeUVs } from "@/utils/set-uvs"
import { Box } from "@/components/Box"
import { Material } from "@/components/Material"

interface Props {
  ref?: RefObject<Group | null>
}

export const CapeModel: React.FC<Props> = ({ ref }) => {
  const {
    box: { size, uvs },
    position,
    pivotPosition,
    rotation,
    textureName,
  } = CAPE_MODEL_DATA

  return (
    <group
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
        <Material
          textureName={textureName}
          side={DoubleSide}
          transparent
          alphaTest={1e-5}
        />
      </Box>
    </group >
  )
}
