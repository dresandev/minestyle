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
export type TextureLayer = "layer-1" | "layer-2"

export interface TextureData<TName = string> {
  name: TName
  texturePath: string
}

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
  | "leggings"
  | "boots"

export type ArmorPartName = BasicArmorPartName | "innerChestplate"

export type ArmorType =
  | "chainmail"
  | "diamond"
  | "gold"
  | "iron"
  | "leather"
  | "netherite"
  | "turtle"

export type TrimName =
  | "bolt"
  | "coast"
  | "dune"
  | "eye"
  | "flow"
  | "host"
  | "raiser"
  | "rib"
  | "sentry"
  | "shaper"
  | "silence"
  | "snout"
  | "spire"
  | "tide"
  | "vex"
  | "ward"
  | "wayfinder"
  | "wild"

export type TrimMaterialName =
  | "amethyst-shard"
  | "copper-ingot"
  | "diamond"
  | "emerald"
  | "gold-ingot"
  | "iron-ingot"
  | "lapis-lazuli"
  | "netherite-ingot"
  | "quartz"
  | "redstone"
  | "resin-brick"

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
