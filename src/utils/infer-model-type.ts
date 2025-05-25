import type { ModelType } from "@/types"
import { getCachedCanvas } from "@/utils/cached-canvas"

export function inferModelType(image: HTMLImageElement): ModelType {
  const ctx = getCachedCanvas(image.width, image.height)

  ctx.drawImage(image, 0, 0)

  const scale = image.width / 64.0
  const checkTransparency = (x: number, y: number, w: number, h: number): boolean =>
    hasTransparency(ctx, x * scale, y * scale, w * scale, h * scale)

  const checkBlack = (x: number, y: number, w: number, h: number): boolean =>
    isAreaColor(ctx, x * scale, y * scale, w * scale, h * scale, "black")

  const checkWhite = (x: number, y: number, w: number, h: number): boolean =>
    isAreaColor(ctx, x * scale, y * scale, w * scale, h * scale, "white")

  const isSlim =
    (
      checkTransparency(50, 16, 2, 4) ||
      checkTransparency(54, 20, 2, 12) ||
      checkTransparency(42, 48, 2, 4) ||
      checkTransparency(46, 52, 2, 12)
    ) ||
    (
      checkBlack(50, 16, 2, 4) &&
      checkBlack(54, 20, 2, 12) &&
      checkBlack(42, 48, 2, 4) &&
      checkBlack(46, 52, 2, 12)
    ) ||
    (
      checkWhite(50, 16, 2, 4) &&
      checkWhite(54, 20, 2, 12) &&
      checkWhite(42, 48, 2, 4) &&
      checkWhite(46, 52, 2, 12)
    )

  return isSlim ? "slim" : "default"
}

function hasTransparency(context: CanvasImageData, x0: number, y0: number, w: number, h: number): boolean {
  const imgData = context.getImageData(x0, y0, w, h)
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const offset = (x + y * w) * 4
      if (imgData.data[offset + 3] !== 255) {
        return true
      }
    }
  }
  return false
}

function isAreaColor(
  context: CanvasImageData,
  x0: number, y0: number,
  w: number, h: number,
  color: "black" | "white"
): boolean {
  const imgData = context.getImageData(x0, y0, w, h)
  const targetRGB = color === "black" ? [0, 0, 0] : [255, 255, 255]

  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      const offset = (x + y * w) * 4
      if (!(
        imgData.data[offset + 0] === targetRGB[0] &&
        imgData.data[offset + 1] === targetRGB[1] &&
        imgData.data[offset + 2] === targetRGB[2] &&
        imgData.data[offset + 3] === 0xff
      )) {
        return false
      }
    }
  }
  return true
}
