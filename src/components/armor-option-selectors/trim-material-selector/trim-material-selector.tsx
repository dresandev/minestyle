"use client"

import type { BasicArmorPartName } from "@/types"
import {
  type TrimMaterialOptionData,
  TRIM_MATERIAL_OPTIONS_DATA,
} from "@/constants/trim-material-options-data"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { TrimMaterialOption } from "./trim-material-option"

export const TrimMaterialSelector = () => {
  const setTrimPart = useArmorDataStore(state => state.setTrimPart)

  const handleSelectTrimMaterialPart = (part: BasicArmorPartName) => {
    return (data: TrimMaterialOptionData) => {
      setTrimPart({
        [part]: { trim: { materialUrl: data.texturePath } }
      })
    }
  }

  return (
    <>
      <TrimMaterialOption
        label="Material"
        armorPart="helmet"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={handleSelectTrimMaterialPart("helmet")}
      />
      <TrimMaterialOption
        label="Material"
        armorPart="chestplate"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={handleSelectTrimMaterialPart("chestplate")}
      />
      <TrimMaterialOption
        label="Material"
        armorPart="leggings"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={handleSelectTrimMaterialPart("leggings")}
      />
      <TrimMaterialOption
        label="Material"
        armorPart="boots"
        optionsData={TRIM_MATERIAL_OPTIONS_DATA}
        onSelect={handleSelectTrimMaterialPart("boots")}
      />
    </>
  )
}
