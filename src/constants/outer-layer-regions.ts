import type { BodyPartName } from "@/types"

type Region = { x: number; y: number; width: number; height: number }

type OuterLayerMap = Record<BodyPartName, Region[]>

export const outerLayerRegions: {
  normal: OuterLayerMap
  slim: OuterLayerMap
} = {
  normal: {
    head: [{ x: 32, y: 0, width: 32, height: 16 }],
    body: [{ x: 20, y: 36, width: 8, height: 12 }],
    rightArm: [{ x: 44, y: 36, width: 4, height: 12 }],
    leftArm: [{ x: 52, y: 48, width: 4, height: 12 }],
    rightLeg: [{ x: 4, y: 36, width: 4, height: 12 }],
    leftLeg: [{ x: 12, y: 48, width: 4, height: 12 }],
  },
  slim: {
    head: [{ x: 32, y: 0, width: 32, height: 16 }],
    body: [{ x: 20, y: 36, width: 8, height: 12 }],
    rightArm: [{ x: 44, y: 36, width: 3, height: 12 }],
    leftArm: [{ x: 51, y: 48, width: 3, height: 12 }],
    rightLeg: [{ x: 4, y: 36, width: 4, height: 12 }],
    leftLeg: [{ x: 12, y: 48, width: 4, height: 12 }],
  },
}
