import type { TextureData, TrimName } from "@/types"
import { TRIM_TEXTURES } from "@/constants/trim-textures"
import { toLabel } from "@/utils/to-label"
import { getTrimItemPath } from "@/helpers/get-item-path"

export interface TrimOptionData {
  label: string
  itemPath: string
  texturePath: string
}

const { helmet, chestplate, leggings, boots } = TRIM_TEXTURES

const getArmorOptionsData = (data: TextureData<TrimName>[]): TrimOptionData[] => (
  data.map(({ name, texturePath }) => ({
    label: toLabel(name),
    itemPath: getTrimItemPath(name),
    texturePath
  }))
)

export const HELMET_TRIM_OPTIONS_DATA = getArmorOptionsData(helmet)
export const CHESTPLATE_TRIM_OPTIONS_DATA = getArmorOptionsData(chestplate)
export const LEGGINS_TRIM_OPTIONS_DATA = getArmorOptionsData(leggings)
export const BOOTS_TRIM_OPTIONS_DATA = getArmorOptionsData(boots)
