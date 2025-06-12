import { useEffect, useRef } from "react"
import { CHARACTER_CONTAINER_ID } from "@/constants/dom-selectors"
import { isTouchDevice } from "@/utils/is-touch-device"
import { Group, MathUtils } from "three"
import { useFrame } from "@react-three/fiber"

interface Props {
  headRef: React.RefObject<Group | null>
  characterWrapperRef: React.RefObject<Group | null>
}

export const useCharacterLookAtCursor = ({
  headRef,
  characterWrapperRef,
}: Props) => {
  const referencePointRef = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })
  const hasTouch = isTouchDevice()

  useEffect(() => {
    const container = document.getElementById(CHARACTER_CONTAINER_ID)
    if (!container) return

    const updateRefPoint = () => {
      const rect = container.getBoundingClientRect()
      referencePointRef.current = {
        x: rect.left + rect.width - 200,
        y: rect.top + rect.height * 0.25,
      }
    }

    updateRefPoint()
    window.addEventListener("resize", updateRefPoint)
    return () => window.removeEventListener("resize", updateRefPoint)
  }, [])

  useEffect(() => {
    if (hasTouch) return

    const sensitivity = 400

    const handleMouseMove = (e: MouseEvent) => {
      const refPoint = referencePointRef.current
      mouse.current.x = (e.clientX - refPoint.x) / sensitivity
      mouse.current.y = -(e.clientY - refPoint.y) / sensitivity
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [hasTouch])

  useFrame(() => {
    if (
      hasTouch ||
      !headRef.current ||
      !characterWrapperRef.current
    ) return

    const mx = mouse.current.x
    const my = mouse.current.y

    const targetY = mx * 0.4
    const targetX = my * 0.3

    const clampedX = MathUtils.clamp(targetX, -0.4, 0.4)
    const clampedY = MathUtils.clamp(targetY, -0.3, 0.3)

    characterWrapperRef.current.rotation.y += (clampedY * 1.6 - characterWrapperRef.current.rotation.y) * 0.1

    headRef.current.rotation.y += (clampedY - headRef.current.rotation.y) * 0.1
    headRef.current.rotation.x += (-clampedX - headRef.current.rotation.x) * 0.1
  })
}
