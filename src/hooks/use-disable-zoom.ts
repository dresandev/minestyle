import { useEffect } from "react"

export const useDisableZoom = () => {
  useEffect(() => {
    const preventZoom = (e: KeyboardEvent | WheelEvent) => {
      const isZoomKeyboardEvent =
        e instanceof KeyboardEvent &&
        (e.ctrlKey || e.metaKey) &&
        ["+", "-", "="].includes(e.key)

      const isZoomWheelEvent =
        e instanceof WheelEvent &&
        e.ctrlKey

      if (!(isZoomKeyboardEvent || isZoomWheelEvent)) return

      e.preventDefault()
    }

    window.addEventListener("keydown", preventZoom)
    window.addEventListener("wheel", preventZoom, { passive: false })

    return () => {
      window.removeEventListener("keydown", preventZoom)
      window.removeEventListener("wheel", preventZoom)
    }
  }, [])
}
