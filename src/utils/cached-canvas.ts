let cachedCanvas: HTMLCanvasElement | null = null
let cachedCtx: CanvasRenderingContext2D | null = null

export const getCachedCanvas = (width: number, height: number): CanvasRenderingContext2D => {
  if (!cachedCanvas) {
    cachedCanvas = document.createElement("canvas")
    cachedCtx = cachedCanvas.getContext("2d", { willReadFrequently: true })
    if (!cachedCtx) throw new Error("Could not get 2D context of canvas.")
  }

  cachedCanvas.width = width
  cachedCanvas.height = height

  return cachedCtx!
}
