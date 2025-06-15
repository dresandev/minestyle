"use client"

import type { ArmorPartName } from "@/types"
import { OPTIONS_ICON_SIZE } from "@/constants/ui"
import {
  BOOTS_OPTIONS_DATA,
  CHESTPLATE_OPTIONS_DATA,
  HELMET_OPTIONS_DATA,
  LEGGINS_OPTIONS_DATA,
} from "@/constants/armor-options-data"
import type { PartialArmorData } from "@/store/use-armor-data-store"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { createRecordFromKeys } from "@/helpers/create-record-from-keys"
import { BootsIcon } from "@/components/icons/boots-icon"
import { ChestplateIcon } from "@/components/icons/chestplate-icon"
import { HelmetIcon } from "@/components/icons/helmet-icon"
import { LeggingsIcon } from "@/components/icons/leggings-icon"
import { type ArmorOptionData, ArmorOption } from "./armor-option"

export const ArmorSelector = () => {
  const setArmorPart = useArmorDataStore(state => state.setArmorPart)
  const setArmorPartVisibility = useArmorDataStore(state => state.setArmorPartVisibility)
  const setArmorPartIsLeather = useArmorDataStore(state => state.setArmorPartIsLeather)
  const setBackEquipment = useBackEquipmentDataStore(state => state.setBackEquipment)

  const handleSelectArmorPart = (parts: ArmorPartName[]) => {
    return (data: ArmorOptionData) => {
      const armorPartsData = parts.reduce((acc, key) => {
        acc[key] = {
          isVisible: true,
          armor: {
            isLeather: data.isLeather,
            url: data.texturePath,
          }
        }
        return acc
      }, {} as PartialArmorData)

      setArmorPart(armorPartsData)

      if (parts.includes("chestplate")) {
        setBackEquipment({
          elytra: { isVisible: false },
          cape: { isVisible: true }
        })
      }
    }
  }

  const handleSelectElytra = () => {
    setBackEquipment({
      elytra: { isVisible: true },
      cape: { isVisible: false }
    })

    setArmorPartVisibility({ chestplate: false })
    setArmorPartIsLeather({ chestplate: false })
  }

  const handleRemoveArmorPart = (parts: ArmorPartName[]) => () => {
    const setFalseData = createRecordFromKeys(parts, false)
    setArmorPartVisibility(setFalseData)

    if (parts.includes("chestplate")) {
      setBackEquipment({
        elytra: { isVisible: false },
        cape: { isVisible: true }
      })
    }

    setArmorPartIsLeather(setFalseData)
  }

  return (
    <>
      <ArmorOption
        label="Helmet"
        armorPart="helmet"
        optionsData={HELMET_OPTIONS_DATA}
        icon={<HelmetIcon size={OPTIONS_ICON_SIZE} />}
        onSelect={handleSelectArmorPart(["helmet"])}
        onRemove={handleRemoveArmorPart(["helmet"])}
      />
      <ArmorOption
        label="Chestplate"
        armorPart="chestplate"
        optionsData={CHESTPLATE_OPTIONS_DATA}
        icon={<ChestplateIcon size={OPTIONS_ICON_SIZE} />}
        onSelect={handleSelectArmorPart(["chestplate"])}
        onRemove={handleRemoveArmorPart(["chestplate"])}
        extraOption={{
          label: "Elytra",
          itemPath: "/images/items/elytra/default.png",
          onSelect: handleSelectElytra,
        }}
      />
      <ArmorOption
        label="Leggings"
        armorPart="leggings"
        optionsData={LEGGINS_OPTIONS_DATA}
        icon={<LeggingsIcon size={OPTIONS_ICON_SIZE} />}
        onSelect={handleSelectArmorPart(["leggings", "innerChestplate"])}
        onRemove={handleRemoveArmorPart(["leggings", "innerChestplate"])}
      />
      <ArmorOption
        label="Boots"
        armorPart="boots"
        optionsData={BOOTS_OPTIONS_DATA}
        icon={<BootsIcon size={OPTIONS_ICON_SIZE} />}
        onSelect={handleSelectArmorPart(["boots"])}
        onRemove={handleRemoveArmorPart(["boots"])}
      />
    </>
  )
}
