"use client"

import { TRIM_MATERIAL_OPTIONS_DATA } from "@/constants/trim-material-options-data"
import { TrimMaterialOption } from "./trim-material-option"

export const TrimMaterialSelector = () => {
  return (
    <>
      <TrimMaterialOption
        label="Material"
        armorPart="helmet"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimMaterialOption
        label="Material"
        armorPart="chestplate"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimMaterialOption
        label="Material"
        armorPart="leggings"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={() => { }}
      />
      <TrimMaterialOption
        label="Material"
        armorPart="boots"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={() => { }}
      />
    </>
  )
}
