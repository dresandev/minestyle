import { DoubleSide } from "three"
import { ELYTRA_MODEL_DATA } from "@/constants/elytra-model-data"
import { setCapeUVs } from "@/utils/set-uvs"
import { Box } from "@/components/Box"
import { Material } from "@/components/Material"

export const ElytraModel = () => {
  return (
    <group position={[0, -10.5, -5.9]}>
      {ELYTRA_MODEL_DATA.map((data) => {
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
            <Material
              textureName="cape"
              side={DoubleSide}
              transparent
              alphaTest={1e-5} />
          </Box>
        )
      })}
    </group>
  )
}
