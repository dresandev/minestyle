import { TRIM_MATERIAL_TEXTURES } from "@/constants/trim-material-textures"
import { toLabel } from "@/utils/to-label"
import { toKebabCase } from "@/utils/to-kebab-case"
import { getTrimMaterialItemPath } from "@/helpers/get-item-path"

export interface TrimMaterialOptionData {
  label: string
  itemPath: string
  texturePath: string
}

export const TRIM_MATERIAL_OPTIONS_DATA: TrimMaterialOptionData[] = TRIM_MATERIAL_TEXTURES.map(({ name, texturePath }) => ({
  label: toLabel(name),
  itemPath: getTrimMaterialItemPath(toKebabCase(name)),
  texturePath,
}))
