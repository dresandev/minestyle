"use client"

import type { ArmorPartName, TextureLayer } from "@/types"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { armorOptionData, createArmorData, createVisibilityData } from "./helpers/armor-data"
import { BootsIcon } from "@/components/icons/boots-icon"
import { ChestplateIcon } from "@/components/icons/chestplate-icon"
import { HelmetIcon } from "@/components/icons/helmet-icon"
import { LeggingsIcon } from "@/components/icons/leggings-icon"
import { type ArmorOptionData, ArmorOption } from "./components/armor-option"

export const ArmorSelector = () => {
  const setArmorPart = useArmorDataStore(state => state.setArmorPart)
  const setArmorPartVisibility = useArmorDataStore(state => state.setArmorPartVisibility)
  const setBackEquipment = useBackEquipmentDataStore(state => state.setBackEquipment)

  const handleSelectArmorPart = (parts: ArmorPartName[], layer: TextureLayer) => {
    return (data: ArmorOptionData) => {
      const armorPartData = createArmorData(parts, layer, data)
      setArmorPart(armorPartData)

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
  }

  const handleRemoveArmorPart = (parts: ArmorPartName[]) => () => {
    const visibilityData = createVisibilityData(parts, false)
    setArmorPartVisibility(visibilityData)

    if (parts.includes("chestplate")) {
      setBackEquipment({
        elytra: { isVisible: false },
        cape: { isVisible: true }
      })
    }
  }

  const iconSize = 48

  return (
    <>
      <ArmorOption
        label="Helmet"
        armorPart="helmet"
        optionsData={armorOptionData.helmets}
        icon={<HelmetIcon size={iconSize} />}
        onSelect={handleSelectArmorPart(["helmet"], "layer1")}
        onRemove={handleRemoveArmorPart(["helmet"])}
      />
      <ArmorOption
        label="Chestplate"
        armorPart="chestplate"
        optionsData={armorOptionData.chestplates}
        icon={<ChestplateIcon size={iconSize} />}
        onSelect={handleSelectArmorPart(["chestplate"], "layer1")}
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
        optionsData={armorOptionData.leggings}
        icon={<LeggingsIcon size={iconSize} />}
        onSelect={handleSelectArmorPart(["leggings", "innerChestplate"], "layer2")}
        onRemove={handleRemoveArmorPart(["leggings", "innerChestplate"])}
      />
      <ArmorOption
        label="Boots"
        armorPart="boots"
        optionsData={armorOptionData.boots}
        icon={<BootsIcon size={iconSize} />}
        onSelect={handleSelectArmorPart(["boots"], "layer1")}
        onRemove={handleRemoveArmorPart(["boots"])}
      />
    </>
  )
}
