import { BoxData, Position, Rotation, TextureName } from "@/types"

interface CapeModelData {
  box: BoxData
  position: Position
  pivotPosition: Position
  rotation: Rotation
  textureName: TextureName
}

export const CAPE_MODEL_DATA: CapeModelData = {
  box: {
    size: [10, 16, 1],
    uvs: [0, 0, 10, 16, 1],
  },
  position: [0, -7.8, -2],
  pivotPosition: [0, .03, -1.95],
  rotation: [(10.8 * Math.PI) / 180, Math.PI, 0],
  textureName: "cape"
}
