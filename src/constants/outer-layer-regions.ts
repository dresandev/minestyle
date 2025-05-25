import type { BodyPartName } from "@/types"

type Region = { x: number; y: number; width: number; height: number }

type OuterLayerMap = Record<BodyPartName, Region[]>

// Order: Top - Bottom - Front - Left - Right - Back

export const outerLayerRegions: {
  normal: OuterLayerMap
  slim: OuterLayerMap
} = {
  normal: {
    head: [
      { x: 40, y: 0, width: 8, height: 8 },
      { x: 48, y: 0, width: 8, height: 8 },
      { x: 40, y: 8, width: 8, height: 8 },
      { x: 48, y: 8, width: 8, height: 8 },
      { x: 32, y: 8, width: 8, height: 8 },
      { x: 56, y: 8, width: 8, height: 8 },
    ],
    body: [
      { x: 20, y: 32, width: 8, height: 4 },
      { x: 28, y: 32, width: 8, height: 4 },
      { x: 20, y: 36, width: 8, height: 12 },
      { x: 28, y: 36, width: 4, height: 12 },
      { x: 16, y: 36, width: 4, height: 12 },
      { x: 32, y: 36, width: 8, height: 12 },
    ],
    rightArm: [
      { x: 44, y: 32, width: 4, height: 4 },
      { x: 48, y: 32, width: 4, height: 4 },
      { x: 44, y: 36, width: 4, height: 12 },
      { x: 48, y: 36, width: 4, height: 12 },
      { x: 40, y: 36, width: 4, height: 12 },
      { x: 52, y: 36, width: 4, height: 12 },
    ],
    leftArm: [
      { x: 52, y: 48, width: 4, height: 4 },
      { x: 56, y: 48, width: 4, height: 4 },
      { x: 52, y: 52, width: 4, height: 12 },
      { x: 48, y: 52, width: 4, height: 12 },
      { x: 48, y: 52, width: 4, height: 12 },
      { x: 60, y: 52, width: 4, height: 12 },
    ],
    rightLeg: [
      { x: 4, y: 32, width: 4, height: 4 },
      { x: 8, y: 32, width: 4, height: 4 },
      { x: 4, y: 36, width: 4, height: 12 },
      { x: 8, y: 36, width: 4, height: 12 },
      { x: 0, y: 36, width: 4, height: 12 },
      { x: 12, y: 36, width: 4, height: 12 },
    ],
    leftLeg: [
      { x: 4, y: 48, width: 4, height: 4 },
      { x: 8, y: 48, width: 4, height: 4 },
      { x: 4, y: 52, width: 4, height: 12 },
      { x: 8, y: 52, width: 4, height: 12 },
      { x: 0, y: 52, width: 4, height: 12 },
      { x: 12, y: 52, width: 4, height: 12 },
    ],
  },
  slim: {
    head: [
      { x: 40, y: 0, width: 8, height: 8 },
      { x: 48, y: 0, width: 8, height: 8 },
      { x: 40, y: 8, width: 8, height: 8 },
      { x: 48, y: 8, width: 8, height: 8 },
      { x: 32, y: 8, width: 8, height: 8 },
      { x: 56, y: 8, width: 8, height: 8 },
    ],
    body: [
      { x: 20, y: 32, width: 8, height: 4 },
      { x: 28, y: 32, width: 8, height: 4 },
      { x: 20, y: 36, width: 8, height: 12 },
      { x: 28, y: 36, width: 4, height: 12 },
      { x: 16, y: 36, width: 4, height: 12 },
      { x: 32, y: 36, width: 8, height: 12 },
    ],
    rightArm: [
      { x: 44, y: 32, width: 3, height: 4 },
      { x: 47, y: 32, width: 3, height: 4 },
      { x: 44, y: 36, width: 3, height: 12 },
      { x: 47, y: 36, width: 3, height: 12 },
      { x: 40, y: 36, width: 3, height: 12 },
      { x: 51, y: 36, width: 3, height: 12 },
    ],
    leftArm: [
      { x: 52, y: 48, width: 3, height: 4 },
      { x: 55, y: 48, width: 3, height: 4 },
      { x: 52, y: 52, width: 3, height: 12 },
      { x: 55, y: 52, width: 3, height: 12 },
      { x: 48, y: 52, width: 3, height: 12 },
      { x: 59, y: 52, width: 3, height: 12 },
    ],
    rightLeg: [
      { x: 4, y: 32, width: 4, height: 4 },
      { x: 8, y: 32, width: 4, height: 4 },
      { x: 4, y: 36, width: 4, height: 12 },
      { x: 8, y: 36, width: 4, height: 12 },
      { x: 0, y: 36, width: 4, height: 12 },
      { x: 12, y: 36, width: 4, height: 12 },
    ],
    leftLeg: [
      { x: 4, y: 48, width: 4, height: 4 },
      { x: 8, y: 48, width: 4, height: 4 },
      { x: 4, y: 52, width: 4, height: 12 },
      { x: 8, y: 52, width: 4, height: 12 },
      { x: 0, y: 52, width: 4, height: 12 },
      { x: 12, y: 52, width: 4, height: 12 },
    ],
  },
}
