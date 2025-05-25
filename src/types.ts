import type { RefObject } from "react"
import type { Group } from "three"

export type ModelType = "default" | "slim"
export type Geometry = [width: number, height: number, depth: number]
export type Position = [x: number, y: number, z: number]
export type Rotation = [x: number, y: number, z: number]
export type Scale = [x: number, y: number, z: number]
export type ElytraPartName = "leftWing" | "rightWing"
export type Model3DRefs<K extends string> = Record<K, RefObject<Group>>
export type Model3DRef = RefObject<Group | null>
export type AnimationFn<K, T = null> = (t: number, refs: K, props?: T) => void
export type BoxSidesImage = [
  right: string,
  left: string,
  top: string,
  bottom: string,
  front: string,
  back: string,
]
export type Icon = { size?: number } & React.SVGProps<SVGSVGElement>

export interface BoxData {
  size: Geometry
  uvs: number[]
}

export type BodyPartName =
  | "head"
  | "body"
  | "rightArm"
  | "leftArm"
  | "rightLeg"
  | "leftLeg"

export type BasicArmorPartName =
  | "helmet"
  | "chestplate"
  | "leggins"
  | "boots"

export type ArmorPartName = BasicArmorPartName | "innerChestplate"

export type TrimName =
  | "sentry"
  | "bolt"
  | "dune"
  | "coast"
  | "wild"
  | "ward"
  | "eye"
  | "vex"
  | "tide"
  | "snout"
  | "rib"
  | "spire"
  | "wayfinder"
  | "shaper"
  | "host"
  | "silence"
  | "raiser"
  | "flow"

export type ArmorType =
  | "chainmail"
  | "diamond"
  | "gold"
  | "iron"
  | "leather"
  | "netherite"
  | "turtle-scute"

export interface BodyPartData {
  name: BodyPartName
  innerBoxData: BoxData
  slimInnerBoxData?: BoxData
  outerBoxData: BoxData
  slimOuterBoxData?: BoxData
  position?: Position
  outerBoxPolygonOffset?: boolean
  outerBoxDepthWrite?: boolean
}

export interface ArmorPartData {
  boxData: BoxData
  partName: ArmorPartName
}
