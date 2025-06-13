import { useRef } from "react"
import { Group } from "three"
import { Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

interface Props {
  name: string
}

export const NameTag: React.FC<Props> = ({ name }) => {
  const groupRef = useRef<Group>(null!)
  const { camera } = useThree()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }
  })

  return (
    <group ref={groupRef} position={[0, 11.5, 0]}>
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[name.length * 1.5, 2.5]} />
        <meshBasicMaterial
          color="black"
          transparent
          opacity={0.5}
        />
      </mesh>
      <Text
        font="/fonts/Minecraft.woff"
        fontSize={2}
        color="white"
      >
        {name}
      </Text>
    </group>
  )
}
