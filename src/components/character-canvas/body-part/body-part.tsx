import { DoubleSide } from "three"
import type { BodyPartData } from "@/types"
import { useSkinDataStore } from "@/store/use-skin-data-store"
import { setBodyUVs } from "@/utils/set-uvs"
import { loadMCTexture } from "@/helpers/load-mc-texture"
import { BoxGeometry } from "@/components/box-geometry"

interface Props {
  data: BodyPartData
}

export const BodyPart: React.FC<Props> = ({ data }) => {
  const {
    skin,
    isSlim,
    hasOuterLayer,
  } = useSkinDataStore()

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

  const texture = loadMCTexture(skin)

  const innerBox = (isSlim && slimInnerBoxData)
    ? slimInnerBoxData
    : innerBoxData
  const outerBox = (isSlim && slimOuterBoxData)
    ? slimOuterBoxData
    : outerBoxData

  return (
    <group position={isSlim ? position : [0, 0, 0]}>
      <BoxGeometry
        size={innerBox.size}
        uvs={innerBox.uvs}
        setUvs={setBodyUVs}
      >
        <meshStandardMaterial map={texture} />
      </BoxGeometry>
      {hasOuterLayer[name] && (
        <BoxGeometry
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
        </BoxGeometry>
      )}
    </group>
  )
}
