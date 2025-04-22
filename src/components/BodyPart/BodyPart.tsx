import { DoubleSide } from "three"
import type { BodyPartData } from "@/types"
import { useSkinDataStore } from "@/store/use-skin-data-store"
import { useTextureLoader } from "@/hooks/use-texture-loader"
import { setBodyBoxUVs } from "@/utils/set-uvs"
import { Box } from "@/components/Box"

interface Props {
  data: BodyPartData
}

export const BodyPart: React.FC<Props> = ({ data }) => {
  const {
    skin,
    isSlim,
    hasOuterLayer,
  } = useSkinDataStore(state => state.skinData)
  const texture = useTextureLoader(skin)

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
        setUvs={setBodyBoxUVs}
      >
        <meshStandardMaterial map={texture} />
      </Box>
      {hasOuterLayer[name] && (
        <Box
          size={outerBox.size}
          uvs={outerBox.uvs}
          setUvs={setBodyBoxUVs}
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
