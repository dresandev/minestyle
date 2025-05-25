import { BoxGeometry as ThreeBoxGeometry } from "three"
import type {
  Geometry,
  Position,
  Rotation,
  Scale,
} from "@/types"

interface Props {
  children: React.ReactNode
  isVisible?: boolean
  size: Geometry
  uvs: number[]
  position?: Position
  rotation?: Rotation
  scale?: Scale
  setUvs: (geometry: ThreeBoxGeometry, boxUvs: number[]) => void
}

export const BoxGeometry: React.FC<Props> = ({
  children,
  isVisible,
  size,
  uvs,
  position,
  setUvs,
  rotation,
  scale,
}) => {
  const box = new ThreeBoxGeometry(...size)
  setUvs(box, uvs)

  return (
    <mesh
      visible={isVisible}
      geometry={box}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {children}
    </mesh>
  )
}
