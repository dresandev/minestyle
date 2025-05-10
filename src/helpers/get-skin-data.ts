import { outerLayerRegions } from "@/constants/outer-layer-regions"
import { type Region, hasOuterLayerInRegion } from "@/utils/has-outer-layer-in-region"
import { inferModelType } from "@/utils/infer-model-type"

export const getSkinData = (image: HTMLImageElement) => {
  const type = inferModelType(image)
  const isSlim = type === "slim"
  const outerLayerRegion = isSlim
    ? outerLayerRegions.slim
    : outerLayerRegions.normal

  const checkOuterLayer = (region: Region[]) => (
    hasOuterLayerInRegion(image, region)
  )

  return {
    isSlim,
    hasOuterLayer: {
      head: checkOuterLayer(outerLayerRegion.head),
      body: checkOuterLayer(outerLayerRegion.body),
      rightArm: checkOuterLayer(outerLayerRegion.rightArm),
      leftArm: checkOuterLayer(outerLayerRegion.leftArm),
      rightLeg: checkOuterLayer(outerLayerRegion.rightLeg),
      leftLeg: checkOuterLayer(outerLayerRegion.leftLeg),
    }
  }
}
