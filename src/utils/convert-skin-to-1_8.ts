import { getCachedCanvas } from "@/utils/cached-canvas"

export const convertSkinTo1_8 = (image: HTMLImageElement): string => {
  const ctx = getCachedCanvas(image.width, image.width)
  const canvas = ctx.canvas

  ctx.drawImage(image, 0, 0, image.width, image.width / 2.0)

  ctx.save()
  ctx.scale(-1, 1)

  const scale = image.width / 64.0
  const copySkin = (
    sX: number,
    sY: number,
    w: number,
    h: number,
    dX: number,
    dY: number,
  ) => {
    ctx.drawImage(
      ctx.canvas,
      sX * scale, sY * scale, w * scale, h * scale,
      -dX * scale, dY * scale, -w * scale, h * scale
    )
  }

  copySkin(4, 16, 4, 4, 20, 48)
  copySkin(8, 16, 4, 4, 24, 48)
  copySkin(0, 20, 4, 12, 24, 52)
  copySkin(4, 20, 4, 12, 20, 52)
  copySkin(8, 20, 4, 12, 16, 52)
  copySkin(12, 20, 4, 12, 28, 52)
  copySkin(44, 16, 4, 4, 36, 48)
  copySkin(48, 16, 4, 4, 40, 48)
  copySkin(40, 20, 4, 12, 40, 52)
  copySkin(44, 20, 4, 12, 36, 52)
  copySkin(48, 20, 4, 12, 32, 52)
  copySkin(52, 20, 4, 12, 44, 52)

  return canvas.toDataURL()
}
