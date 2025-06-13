"use client"

import { DYE_OPTIONS_DATA } from "@/constants/dye-options-data"
import { DyeOption } from "./dye-option"

export const DyeSelector = () => {
  const handleSelectDye = () => {

  }

  const label = "Dye"

  return (
    <>
      <DyeOption
        label={label}
        armorPart="helmet"
        optionsData={DYE_OPTIONS_DATA}
        onSelect={handleSelectDye}
      />
      <DyeOption
        label={label}
        armorPart="chestplate"
        optionsData={DYE_OPTIONS_DATA}
        onSelect={handleSelectDye}
      />
      <DyeOption
        label={label}
        armorPart="leggings"
        optionsData={DYE_OPTIONS_DATA}
        onSelect={handleSelectDye}
      />
      <DyeOption
        label={label}
        armorPart="boots"
        optionsData={DYE_OPTIONS_DATA}
        onSelect={handleSelectDye}
      />
    </>
  )
}
