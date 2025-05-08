import { DoubleSide } from "three"
import type { BodyPartData } from "@/types"
import { useSkinDataStore } from "@/store/use-skin-data-store"
import { useMCTexture } from "@/hooks/use-mc-texture"
import { setBodyUVs } from "@/utils/set-uvs"
import { Box } from "@/components/Box"

interface Props {
  data: BodyPartData
}

export const BodyPart: React.FC<Props> = ({ data }) => {
  const {
    name,
    position,
    slimInnerBoxData,
    innerBoxData,
    slimOuterBoxData,
    outerBoxData,
    outerBoxPolygonOffset,
    outerBoxDepthWrite
  } = data

  const {
    skin,
    isSlim,
    hasOuterLayer,
  } = useSkinDataStore(state => state.data)
  const texture = useMCTexture(skin)

  const innerBox = (isSlim && slimInnerBoxData)
    ? slimInnerBoxData
    : innerBoxData
  const outerBox = (isSlim && slimOuterBoxData)
    ? slimOuterBoxData
    : outerBoxData

  return (
    <group position={isSlim ? position : [0, 0, 0]}>
      <Box
        size={innerBox.size}
        uvs={innerBox.uvs}
        setUvs={setBodyUVs}
      >
        <meshStandardMaterial map={texture} />
      </Box>
      {hasOuterLayer[name] && (
        <Box
          size={outerBox.size}
          uvs={outerBox.uvs}
          setUvs={setBodyUVs}
        >
          <meshStandardMaterial
            map={texture}
            transparent={true}
            alphaTest={1e-5}
            side={DoubleSide}
            polygonOffset={outerBoxPolygonOffset}
            polygonOffsetFactor={1.0}
            polygonOffsetUnits={1.0}
            depthWrite={outerBoxDepthWrite}
          />
        </Box>
      )}
    </group>
  )
}
