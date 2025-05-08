import { useEffect } from "react"

export const useBeforeUnload = (event: () => void) => {
  useEffect(() => {
    window.addEventListener("beforeunload", event)
    return () => {
      window.removeEventListener("beforeunload", event)
    }
  }, [event])
}
