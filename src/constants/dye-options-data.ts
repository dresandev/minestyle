import { DYE_COLORS } from "@/constants/dye-colors"
import { toLabel } from "@/utils/to-label"
import { toKebabCase } from "@/utils/to-kebab-case"

export interface DyeOptionData {
  label: string
  itemPath: string
  dye: string
}

export const DYE_OPTIONS_DATA: DyeOptionData[] = Object.entries(DYE_COLORS).map(
  ([dyeName, dye]) => ({
    label: toLabel(dyeName),
    itemPath: `/images/items/dyes/${toKebabCase(dyeName)}.png`,
    dye,
  })
)
