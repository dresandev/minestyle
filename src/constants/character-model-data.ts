import type {
  Position,
  BodyPartData,
  ArmorPartData,
} from "@/types"

export interface CharacterPartData {
  bodyPart: BodyPartData,
  armorPart: ArmorPartData[]
  position: Position
  pivotPosition?: Position
}

export const characterModelData: CharacterPartData[] = [
  {
    bodyPart: {
      name: "head",
      innerBoxData: {
        size: [8, 8, 8],
        uvs: [0, 0, 8, 8, 8],
      },
      outerBoxData: {
        size: [9, 9, 9],
        uvs: [32, 0, 8, 8, 8],
      },
      outerBoxPolygonOffset: true,
    },
    armorPart: [
      {
        name: "helmet",
        boxData: {
          size: [9.5, 9.5, 9.5],
          uvs: [0, 0, 8, 8, 8],
        },
        partName: "helmet",
      }
    ],
    position: [0, 4, 0],
  },
  {
    bodyPart: {
      name: "body",
      innerBoxData: {
        size: [8.05, 12.05, 4.05],
        uvs: [16, 16, 8, 12, 4],
      },
      outerBoxData: {
        size: [8.5, 12.5, 4.5],
        uvs: [16, 32, 8, 12, 4],
      },
    },
    armorPart: [
      {
        name: "chestplate",
        boxData: {
          size: [9.4, 13.5, 5.5],
          uvs: [16, 16, 8, 12, 4],
        },
        partName: "chestplate"
      },
      {
        name: "innerChestplate",
        boxData: {
          size: [8.8, 13, 5],
          uvs: [16, 16, 8, 12, 4],
        },
        partName: "innerChestplate"
      },
    ],
    position: [0, -6, 0],
  },
  {
    bodyPart: {
      name: "rightArm",
      innerBoxData: {
        size: [4, 12, 4],
        uvs: [40, 16, 4, 12, 4],
      },
      slimInnerBoxData: {
        size: [3, 12, 4],
        uvs: [40, 16, 3, 12, 4],
      },
      outerBoxData: {
        size: [4.5, 12.5, 4.5],
        uvs: [40, 32, 4, 12, 4],
      },
      slimOuterBoxData: {
        size: [3.5, 12.5, 4.5],
        uvs: [40, 32, 3, 12, 4],
      },
      position: [.5, 0, 0],
      outerBoxPolygonOffset: true,
    },
    armorPart: [
      {
        name: "rightShoulder",
        boxData: {
          size: [5.5, 13.5, 5.7],
          uvs: [40, 16, 4, 12, 4],
        },
        partName: "chestplate",
      }
    ],
    position: [-2, -4, 0],
    pivotPosition: [-4, -2, 0],
  },
  {
    bodyPart: {
      name: "leftArm",
      innerBoxData: {
        size: [4, 12, 4],
        uvs: [32, 48, 4, 12, 4],
      },
      slimInnerBoxData: {
        size: [3, 12, 4],
        uvs: [32, 48, 3, 12, 4],
      },
      outerBoxData: {
        size: [4.5, 12.5, 4.5],
        uvs: [48, 48, 4, 12, 4],
      },
      slimOuterBoxData: {
        size: [3.5, 12.5, 4.5],
        uvs: [48, 48, 3, 12, 4],
      },
      position: [-.5, 0, 0],
      outerBoxPolygonOffset: true,
    },
    armorPart: [
      {
        name: "leftShoulder",
        boxData: {
          size: [5.5, 13.5, 5.7],
          uvs: [32, 48, 4, 12, 4],
        },
        partName: "chestplate",
      }
    ],
    position: [2, -4, 0],
    pivotPosition: [4, -2, 0],
  },
  {
    bodyPart: {
      name: "rightLeg",
      innerBoxData: {
        size: [4, 12, 4],
        uvs: [0, 16, 4, 12, 4],
      },
      outerBoxData: {
        size: [4.5, 12.5, 4.5],
        uvs: [0, 32, 4, 12, 4],
      },
      outerBoxPolygonOffset: true,
      outerBoxDepthWrite: false,
    },
    armorPart: [
      {
        name: "rightLeggin",
        boxData: {
          size: [4.6, 12.6, 4.6],
          uvs: [0, 16, 4, 12, 4],
        },
        partName: "leggins",
      },
      {
        name: "rightBoot",
        boxData: {
          size: [5.5, 13.5, 5.5],
          uvs: [0, 16, 4, 12, 4],
        },
        partName: "boots",
      },
    ],
    position: [-2, -6, 0],
    pivotPosition: [0, -12, 0],
  },
  {
    bodyPart: {
      name: "leftLeg",
      innerBoxData: {
        size: [4, 12, 4],
        uvs: [16, 48, 4, 12, 4],
      },
      outerBoxData: {
        size: [4.5, 12.5, 4.5],
        uvs: [0, 48, 4, 12, 4],
      },
      outerBoxPolygonOffset: true,
      outerBoxDepthWrite: false,
    },
    armorPart: [
      {
        name: "leftLeggin",
        boxData: {
          size: [4.6, 12.6, 4.6],
          uvs: [16, 48, 4, 12, 4],
        },
        partName: "leggins",
      },
      {
        name: "leftBoot",
        boxData: {
          size: [5.5, 13.5, 5.5],
          uvs: [16, 48, 4, 12, 4],
        },
        partName: "boots",
      },
    ],
    position: [2, -6, 0],
    pivotPosition: [0, -12, 0],
  },
]
