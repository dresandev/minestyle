import { useRef } from "react"
import type { Mesh } from "three"
import { useFrame } from "@react-three/fiber"

export const useAutoRotate = (speed: number = 0.0002): React.RefObject<Mesh | null> => {
  const elementRef = useRef<Mesh>(null)

  useFrame(() => {
    if (elementRef.current) {
      elementRef.current.rotation.y += speed
    }
  })

  return elementRef
}
