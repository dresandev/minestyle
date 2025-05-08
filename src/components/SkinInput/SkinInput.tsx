import { toast } from "sonner"
import { useSkinDataStore } from "@/store/use-skin-data-store"
import { outerLayerRegions } from "@/constants/outer-layer-regions"
import { inferModelType } from "@/utils/infer-model-type"
import { hasOuterLayerInRegion, Region } from "@/utils/has-outer-layer-in-region"
import { convertSkinTo1_8 } from "@/utils/convert-skin-to-1_8"

export const SkinInput = () => {
  const setCharacterData = useSkinDataStore(state => state.setSkinData)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.type !== "image/png") {
      return toast.error("Only PNG images are allowed.")
    }

    if (file.size > 20 * 1024) {
      return toast.error("The file size must be 20KB or less.")
    }

    const reader = new FileReader()
    reader.onload = () => {
      const image = new Image()
      image.onload = () => handleImageLoad(image, file)
      image.src = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleImageLoad = async (image: HTMLImageElement, file: File) => {
    try {
      const { width, height } = image
      const isSquare = width === height
      const isOldFormat = width === 2 * height

      if (!isSquare && !isOldFormat) {
        throw new Error(`Invalid skin dimensions: ${width}x${height}`)
      }

      let finalImage = image

      if (isOldFormat) {
        const convertedDataUrl = convertSkinTo1_8(image)
        finalImage = await new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image()
          img.onload = () => resolve(img)
          img.onerror = reject
          img.src = convertedDataUrl
        })
        toast("Legacy skin format detected. Converted to 1.8 format.")
      }

      const type = inferModelType(finalImage)
      const isSlim = type === "slim"
      const outerLayerRegion = isSlim ? outerLayerRegions.slim : outerLayerRegions.normal

      const checkOuterLayer = (region: Region[]) => (
        hasOuterLayerInRegion(finalImage, region)
      )

      setCharacterData({
        skin: isOldFormat ? finalImage.src : URL.createObjectURL(file),
        isSlim,
        hasOuterLayer: {
          head: checkOuterLayer(outerLayerRegion.head),
          body: checkOuterLayer(outerLayerRegion.body),
          rightArm: checkOuterLayer(outerLayerRegion.rightArm),
          leftArm: checkOuterLayer(outerLayerRegion.leftArm),
          rightLeg: checkOuterLayer(outerLayerRegion.rightLeg),
          leftLeg: checkOuterLayer(outerLayerRegion.leftLeg),
        },
      })
    } catch (err: any) {
      toast.error(err.message || "An error occurred while loading the skin.")
    }
  }

  return (
    <input
      type="file"
      accept="image/png"
      onChange={handleFileChange}
    />
  )
}
