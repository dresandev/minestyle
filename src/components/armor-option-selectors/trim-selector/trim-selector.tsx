"use client"

import {
  HELMET_TRIM_OPTIONS_DATA,
  CHESTPLATE_TRIM_OPTIONS_DATA,
  LEGGINS_TRIM_OPTIONS_DATA,
  BOOTS_TRIM_OPTIONS_DATA,
} from "@/constants/trim-options-data"
import { OPTIONS_ICON_SIZE } from "@/constants/ui"
import { TrimIcon } from "@/components/icons/trim-icon"
import { TrimOption } from "./trim-option"

export const TrimSelector = () => {
  return (
    <>
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="helmet"
        optionsData={HELMET_TRIM_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="chestplate"
        optionsData={CHESTPLATE_TRIM_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="leggings"
        optionsData={LEGGINS_TRIM_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="boots"
        optionsData={BOOTS_TRIM_OPTIONS_DATA}
        onSelect={() => { }}
      />
    </>
  )
}
