import { toLabel } from "@/utils/to-label"
import { toKebabCase } from "@/utils/to-kebab-case"
import { type DyeOptionData } from "@/components/dye-selector/dye-option"
import { DYE_COLORS } from "@/constants/dye-colors"

export const DYE_OPTIONS_DATA: DyeOptionData[] = Object.entries(DYE_COLORS).map(
  ([dyeName, dye]) => ({
    label: toLabel(dyeName),
    itemPath: `/images/items/dyes/${toKebabCase(dyeName)}.png`,
    dye,
    dyeName
  })
)
