"use client"

import type { ArmorPartName } from "@/types"
import { DYE_OPTIONS_DATA } from "@/constants/dye-options-data"
import { createRecordFromKeys } from "@/helpers/create-record-from-keys"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { type DyeOptionData, DyeOption } from "./dye-option"

export const DyeSelector = () => {
  const setArmorPartDye = useArmorDataStore(state => state.setArmorPartDye)

  const handleSelectDye = (parts: ArmorPartName[]) => {
    return (data: DyeOptionData) => {
      const armorPartsDye = createRecordFromKeys(parts, data.dye)
      setArmorPartDye(armorPartsDye)
    }
  }

  const label = "Dye"

  return (
    <>
      <DyeOption
        label={label}
        armorPart="helmet"
        optionsData={DYE_OPTIONS_DATA}
        onSelect={handleSelectDye(["helmet"])}
      />
      <DyeOption
        label={label}
        armorPart="chestplate"
        optionsData={DYE_OPTIONS_DATA}
        onSelect={handleSelectDye(["chestplate"])}
      />
      <DyeOption
        label={label}
        armorPart="leggings"
        optionsData={DYE_OPTIONS_DATA}
        onSelect={handleSelectDye(["leggings", "innerChestplate"])}
      />
      <DyeOption
        label={label}
        armorPart="boots"
        optionsData={DYE_OPTIONS_DATA}
        onSelect={handleSelectDye(["boots"])}
      />
    </>
  )
}
