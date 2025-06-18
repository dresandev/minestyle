"use client"

import type { BasicArmorPartName } from "@/types"
import { OPTIONS_ICON_SIZE } from "@/constants/ui"
import {
  HELMET_TRIM_OPTIONS_DATA,
  CHESTPLATE_TRIM_OPTIONS_DATA,
  LEGGINS_TRIM_OPTIONS_DATA,
  BOOTS_TRIM_OPTIONS_DATA,
  TrimOptionData,
} from "@/constants/trim-options-data"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { TrimIcon } from "@/components/icons/trim-icon"
import { TrimOption } from "./trim-option"

export const TrimSelector = () => {
  const setTrimPart = useArmorDataStore(state => state.setTrimPart)

  const handleSelectTrimPart = (part: BasicArmorPartName) => {
    return (data: TrimOptionData) => {
      setTrimPart({
        [part]: { trim: { url: data.texturePath } }
      })
    }
  }

  const handleRemoveTrimPart = (part: BasicArmorPartName) => () => {
    setTrimPart({ [part]: { trim: { url: "" } } })
  }

  return (
    <>
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="helmet"
        optionsData={HELMET_TRIM_OPTIONS_DATA}
        onSelect={handleSelectTrimPart(("helmet"))}
        onRemove={handleRemoveTrimPart("helmet")}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="chestplate"
        optionsData={CHESTPLATE_TRIM_OPTIONS_DATA}
        onSelect={handleSelectTrimPart(("chestplate"))}
        onRemove={handleRemoveTrimPart("chestplate")}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="leggings"
        optionsData={LEGGINS_TRIM_OPTIONS_DATA}
        onSelect={handleSelectTrimPart(("leggings"))}
        onRemove={handleRemoveTrimPart("leggings")}
      />
      <TrimOption
        label="Trim"
        icon={<TrimIcon size={OPTIONS_ICON_SIZE} />}
        armorPart="boots"
        optionsData={BOOTS_TRIM_OPTIONS_DATA}
        onSelect={handleSelectTrimPart(("boots"))}
        onRemove={handleRemoveTrimPart("boots")}
      />
    </>
  )
}
