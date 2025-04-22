import { BoxGeometry } from "three"
import type { Geometry, Position, Rotation, Scale } from "@/types"

interface Props {
  children: React.ReactNode
  size: Geometry
  uvs: number[]
  position?: Position
  rotation?: Rotation
  scale?: Scale
  setUvs: (geometry: BoxGeometry, boxUvs: number[]) => void
}

export const Box: React.FC<Props> = ({
  children,
  size,
  uvs,
  position,
  setUvs,
  rotation,
  scale,
}) => {
  const box = new BoxGeometry(...size)
  setUvs(box, uvs)

  return (
    <mesh
      geometry={box}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {children}
    </mesh>
  )
}
