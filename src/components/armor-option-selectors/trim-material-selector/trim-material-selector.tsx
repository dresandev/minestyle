"use client"

import { TRIM_MATERIAL_OPTIONS_DATA } from "@/constants/trim-material-options-data"
import { OPTIONS_ICON_SIZE } from "@/constants/ui"
import { MaterialIcon } from "@/components/icons/material-icon"
import { TrimMaterialOption } from "./trim-material-option"

export const TrimMaterialSelector = () => {
  return (
    <>
      <TrimMaterialOption
        label="Material"
        icon={<MaterialIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="helmet"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimMaterialOption
        label="Material"
        icon={<MaterialIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="chestplate"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimMaterialOption
        label="Material"
        icon={<MaterialIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="leggings"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimMaterialOption
        label="Material"
        icon={<MaterialIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="boots"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={() => { }}
      />
    </>
  )
}
