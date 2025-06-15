"use client"

import { TRIM_OPTIONS_DATA } from "@/constants/trim-options-data"
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
        optionsData={TRIM_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="chestplate"
        optionsData={TRIM_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="leggings"
        optionsData={TRIM_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="boots"
        optionsData={TRIM_OPTIONS_DATA}
        onSelect={() => { }}
      />
    </>
  )
}
