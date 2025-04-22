import type {
  BoxData,
  ElytraPartName,
  Position,
  Rotation,
  Scale,
  TextureName,
} from "@/types"

export interface ElytraPartData {
  name: ElytraPartName
  box: BoxData
  position: Position
  rotation: Rotation
  scale?: Scale
  textureName: TextureName
}

export const ELYTRA_MODEL_DATA: ElytraPartData[] = [
  {
    name: "leftWing",
    box: {
      size: [12, 22, 4],
      uvs: [22, 0, 10, 20, 2],
    },
    position: [2.8, 0, 0],
    rotation: [0.2617994, 0.01, 0.2617994],
    textureName: "cape"
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
    textureName: "cape"
  }
]
