import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"
import { Mesh } from "three"

interface PivotHelperProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  size?: number
  color?: string
}

export function PivotHelper({
  position,
  rotation = [0, 0, 0],
  size = 0.3,
  color = "red"
}: PivotHelperProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  const xAxisPoints: [number, number, number][] = [[-size, 0, 0], [size, 0, 0]]
  const yAxisPoints: [number, number, number][] = [[0, -size, 0], [0, size, 0]]
  const zAxisPoints: [number, number, number][] = [[0, 0, -size], [0, 0, size]]

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <sphereGeometry args={[0.05]} />
        <meshBasicMaterial color={color} />
      </mesh>

      <Line points={xAxisPoints} color="red" lineWidth={3} />
      <Line points={yAxisPoints} color="green" lineWidth={3} />
      <Line points={zAxisPoints} color="blue" lineWidth={3} />
    </group>
  )
}
