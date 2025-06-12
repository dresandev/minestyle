import { getCachedCanvas } from "@/utils/cached-canvas"
import { hexToRGB } from "@/utils/to-rgb"

interface Props {
  itemImage: HTMLImageElement
  color: string
  overlayImage?: HTMLImageElement
}

export const colorLeatherArmorItem = async ({
  itemImage,
  color,
  overlayImage
}: Props): Promise<string> => {
  const width = itemImage.width
  const height = itemImage.height

  const ctx = getCachedCanvas(width, height)
  ctx.drawImage(itemImage, 0, 0)

  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data
  const { r, g, b } = hexToRGB(color)

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3]
    if (alpha > 0) {
      data[i] = (data[i] / 255) * r
      data[i + 1] = (data[i + 1] / 255) * g
      data[i + 2] = (data[i + 2] / 255) * b
    }
  }

  ctx.putImageData(imageData, 0, 0)

  if (overlayImage) {
    ctx.drawImage(overlayImage, 0, 0, width, height)
  }

  return ctx.canvas.toDataURL("image/png")
}
