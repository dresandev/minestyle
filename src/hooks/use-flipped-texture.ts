import { useEffect, useState } from "react"
import type { Texture } from "three"
import { completeTextureParts } from "@/utils/complete-texture-parts"

export const useFlippedTexture = (url: string) => {
  const [texture, setTexture] = useState<Texture | null>(null)

  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      const flipped = completeTextureParts(image)
      setTexture(flipped)
    }
    image.src = url
  }, [url])

  return texture
}
