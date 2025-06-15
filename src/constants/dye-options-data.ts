// TODO: to global types or individual files
import type { DyeOptionData } from "@/components/armor-option-selectors/dye-selector/dye-option"
import { DYE_COLORS } from "@/constants/dye-colors"
import { toLabel } from "@/utils/to-label"
import { toKebabCase } from "@/utils/to-kebab-case"

export const DYE_OPTIONS_DATA: DyeOptionData[] = Object.entries(DYE_COLORS).map(
  ([dyeName, dye]) => ({
    label: toLabel(dyeName),
    itemPath: `/images/items/dyes/${toKebabCase(dyeName)}.png`,
    dye,
  })
)
