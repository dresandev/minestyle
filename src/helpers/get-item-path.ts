import type { ArmorType, BasicArmorPartName } from "@/types"
import {
  BASE_ARMOR_ITEM_PATH,
  BASE_TRIM_MATERIAL_ITEM_PATH,
  BASE_TRIM_ITEM_PATH
} from "@/constants/image-paths"
import { toPlural } from "@/helpers/to-plural"

export const getArmorItemPath = (part: BasicArmorPartName, type: ArmorType): string => (
  `${BASE_ARMOR_ITEM_PATH}/${toPlural(part)}/${type}.png`
)

export const getTrimMaterialItemPath = (material: string) => (
  `${BASE_TRIM_MATERIAL_ITEM_PATH}/${material}.png`
)

export const getTrimItemPath = (trim: string) => (
  `${BASE_TRIM_ITEM_PATH}/${trim}.png`
)
