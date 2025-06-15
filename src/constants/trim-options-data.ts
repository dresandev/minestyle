import type { TrimOptionData } from "@/components/armor-option-selectors/trim-selector/trim-option"
import { TRIM_TEXTURES } from "@/constants/trim-textures"
import { toLabel } from "@/utils/to-label"
import { toKebabCase } from "@/utils/to-kebab-case"
import { getTrimItemPath } from "@/helpers/get-item-path"

export const TRIM_OPTIONS_DATA: TrimOptionData[] = TRIM_TEXTURES.map(({ name, texturePath }) => ({
  label: toLabel(name),
  itemPath: getTrimItemPath(toKebabCase(name)),
  texturePath,
}))
