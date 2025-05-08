import type {
  BoxData,
  ElytraPartName,
  Position,
  Rotation,
  Scale,
} from "@/types"

export interface ElytraPartData {
  name: ElytraPartName
  box: BoxData
  position: Position
  rotation: Rotation
  scale?: Scale
}

interface ElytraData {
  wingsData: ElytraPartData[]
  pivotPosition: Position
}

export const ELYTRA_MODEL_DATA: ElytraData = {
  pivotPosition: [0, -10.5, -5.9],
  wingsData: [
    {
      name: "leftWing",
      box: {
        size: [12, 22, 4],
        uvs: [22, 0, 10, 20, 2],
      },
      position: [2.8, 0, 0],
      rotation: [0.2617994, 0.01, 0.2617994],
    },
    {
      name: "rightWing",
      box: {
        size: [12, 22, 4],
        uvs: [22, 0, 10, 20, 2],
      },
      position: [-2.8, 0, 0],
      rotation: [0.2617994, -0.01, -0.2617994],
      scale: [-1, 1, 1],
    }
  ]
}