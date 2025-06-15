import { ARMOR_TEXTURES } from "@/constants/armor-textures"
import { toLabel } from "@/utils/to-label"
import { getArmorItemPath } from "@/helpers/get-item-path"

const { helmet, chestplate, leggings, boots } = ARMOR_TEXTURES

export const HELMET_OPTIONS_DATA = helmet.map(({ name, texture }) => ({
  label: toLabel(name),
  isLeather: name === "leather",
  itemPath: getArmorItemPath("helmet", name),
  texturePath: texture
}))

export const CHESTPLATE_OPTIONS_DATA = chestplate.map(({ name, texture }) => ({
  label: toLabel(name),
  isLeather: name === "leather",
  itemPath: getArmorItemPath("chestplate", name),
  texturePath: texture
}))

export const LEGGINS_OPTIONS_DATA = leggings.map(({ name, texture }) => ({
  label: toLabel(name),
  isLeather: name === "leather",
  itemPath: getArmorItemPath("leggings", name),
  texturePath: texture
}))

export const BOOTS_OPTIONS_DATA = boots.map(({ name, texture }) => ({
  label: toLabel(name),
  isLeather: name === "leather",
  itemPath: getArmorItemPath("boots", name),
  texturePath: texture
}))
