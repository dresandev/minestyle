import { toast } from "sonner"
import { useSkinDataStore } from "@/store/use-skin-data-store"
import { outerLayerRegions } from "@/constants/outer-layer-regions"
import { inferModelType } from "@/utils/infer-model-type"
import { hasOuterLayerInRegion, Region } from "@/utils/has-outer-layer-in-region"

export const SkinInput = () => {
  const setCharacterData = useSkinDataStore(state => state.setSkinData)

  const handleImageLoad = (image: HTMLImageElement, file: File) => {
    const { width, height } = image

    if (!((width === 64 && height === 64) || (width === 64 && height === 32))) {
      return toast.error("Only 64x64 and 64x32 PNG images are allowed.")
    }

    const type = inferModelType(image)
    const isSlim = type === "slim"
    const outerLayerRegion = isSlim ? outerLayerRegions.slim : outerLayerRegions.normal
    const checkOuterLayer = (region: Region[]) => (
      hasOuterLayerInRegion(image, region)
    )

    setCharacterData({
      skin: URL.createObjectURL(file),
      isSlim,
      hasOuterLayer: {
        head: checkOuterLayer(outerLayerRegion.head),
        body: checkOuterLayer(outerLayerRegion.body),
        rightArm: checkOuterLayer(outerLayerRegion.rightArm),
        leftArm: checkOuterLayer(outerLayerRegion.leftArm),
        rightLeg: checkOuterLayer(outerLayerRegion.rightLeg),
        leftLeg: checkOuterLayer(outerLayerRegion.leftLeg)
      },
    })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.type !== "image/png") {
      return toast.error("Only PNG images are allowed.")
    }

    if (file.size > 20 * 1024) {
      return toast.error("The file size must be 20KB or less.")
    }

    const image = new Image()

    image.onload = () => handleImageLoad(image, file)
    image.src = URL.createObjectURL(file)
  }

  return (
    <input
      type="file"
      accept="image/png"
      onChange={handleFileChange}
    />
  )
}
