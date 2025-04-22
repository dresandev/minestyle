import { Suspense } from "react"
import { DoubleSide } from "three"
import type { ArmorPartData } from "@/types"
import { setBodyBoxUVs } from "@/utils/set-uvs"
import { Box } from "@/components/Box"
import { Material } from "@/components/Material"

interface Props {
  data: ArmorPartData
}

export const ArmorPart: React.FC<Props> = ({ data }) => {
  const { boxData, textureName, polygonOffset } = data

  return (
    <Box
      size={boxData.size}
      uvs={boxData.uvs}
      setUvs={setBodyBoxUVs}
    >
      <Suspense fallback={<meshBasicMaterial visible={false} />}>
        <Material
          textureName={textureName}
          transparent={true}
          alphaTest={1e-5}
          side={DoubleSide}
          polygonOffset={polygonOffset}
          color="#C74EBD"
        />
      </Suspense>
    </Box>
  )
}
