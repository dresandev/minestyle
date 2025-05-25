import type { AnimationFn } from "@/types"
import { useFrame } from "@react-three/fiber"

export const useAnimation = <K, T = null>(
  animationFn: AnimationFn<K, T>,
  refs: K,
  speed: number,
  props?: T,
) => {
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed
    animationFn(t, refs, props)
  })
}
