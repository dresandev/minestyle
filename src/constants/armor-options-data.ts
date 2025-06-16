import type {
  ArmorType,
  BasicArmorPartName,
  TextureData,
} from "@/types"
import { ARMOR_TEXTURES } from "@/constants/armor-textures"
import { toLabel } from "@/utils/to-label"
import { getArmorItemPath } from "@/helpers/get-item-path"

export interface ArmorOptionData {
  label: string
  itemPath: string
  isLeather: boolean
  texturePath: string
}

const { helmet, chestplate, leggings, boots } = ARMOR_TEXTURES

const getArmorOptionsData = (data: TextureData<ArmorType>[], part: BasicArmorPartName): ArmorOptionData[] => (
  data.map(({ name, texturePath }) => ({
    label: toLabel(name),
    isLeather: name === "leather",
    itemPath: getArmorItemPath(part, name),
    texturePath
  }))
)

export const HELMET_ARMOR_OPTIONS_DATA = getArmorOptionsData(helmet, "helmet")
export const CHESTPLATE_ARMOR_OPTIONS_DATA = getArmorOptionsData(chestplate, "chestplate")
export const LEGGINS_ARMOR_OPTIONS_DATA = getArmorOptionsData(leggings, "leggings")
export const BOOTS_ARMOR_OPTIONS_DATA = getArmorOptionsData(boots, "boots")
