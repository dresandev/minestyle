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
        boxData: {
          size: [8.8, 13, 4.9],
          uvs: [16, 16, 8, 12, 4],
        },
        partName: "innerChestplate"
      },
      {
        boxData: {
          size: [9.4, 13.5, 5.3],
          uvs: [16, 16, 8, 12, 4],
        },
        partName: "chestplate"
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
        boxData: {
          size: [5.5, 13.5, 5.5],
          uvs: [40, 16, 4, 12, 4],
        },
        partName: "chestplate",
      }
    ],
    pivotPosition: [-6, -2, 0],
    position: [0, -4, 0],
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
        boxData: {
          size: [5.5, 13.5, 5.5],
          uvs: [32, 48, 4, 12, 4],
        },
        partName: "chestplate",
      }
    ],
    pivotPosition: [6, -2, 0],
    position: [0, -4, 0],
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
        boxData: {
          size: [4.6, 12.6, 4.6],
          uvs: [0, 16, 4, 12, 4],
        },
        partName: "leggins",
      },
      {
        boxData: {
          size: [5.5, 13.5, 5.3],
          uvs: [0, 16, 4, 12, 4],
        },
        partName: "boots",
      },
    ],
    pivotPosition: [-2, -12, 0],
    position: [0, -6, 0],
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
        boxData: {
          size: [4.6, 12.6, 4.65],
          uvs: [16, 48, 4, 12, 4],
        },
        partName: "leggins",
      },
      {
        boxData: {
          size: [5.5, 13.5, 5.35],
          uvs: [16, 48, 4, 12, 4],
        },
        partName: "boots",
      },
    ],
    pivotPosition: [2, -12, 0],
    position: [0, -6, 0],
  },
]
