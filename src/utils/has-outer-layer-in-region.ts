import { getCachedCanvas } from "@/utils/cached-canvas"

export interface Region {
  x: number
  y: number
  width: number
  height: number
}

export const hasOuterLayerInRegion = (
  image: HTMLImageElement,
  region: Region[],
): boolean => {
  const ctx = getCachedCanvas(image.width, image.height)

  ctx.drawImage(image, 0, 0)

  for (const { x, y, width, height } of region) {
    const imageData = ctx.getImageData(x, y, width, height).data

    for (let i = 0; i < imageData.length; i += 4) {
      if (imageData[i + 3] > 10) return true
    }
  }

  return false
}
