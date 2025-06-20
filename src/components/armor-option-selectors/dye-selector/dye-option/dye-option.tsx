"use client"

import { useState } from "react"
import type { BasicArmorPartName } from "@/types"
import type { DyeOptionData } from "@/constants/dye-options-data"
import { OPTIONS_ICON_SIZE } from "@/constants/ui"
import { useArmorItemsStore } from "@/store/use-armor-items-store"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { OptionPopover } from "@/components/popover-option"
import { ItemImage } from "@/components/item-image"
import { TextureButton } from "@/components/texture-button"

interface Props {
  label: string
  armorPart: BasicArmorPartName
  optionsData: DyeOptionData[]
  onSelect: (data: DyeOptionData) => void
}

export const DyeOption: React.FC<Props> = ({
  label,
  armorPart,
  optionsData,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const setArmorItems = useArmorItemsStore(state => state.setArmorItems)
  const dyeItem = useArmorItemsStore(state => state[armorPart].dyeItem)!
  const isLeather = useArmorDataStore(state => state[armorPart].armor.isLeather)

  const closePopover = () => setIsOpen(false)

  const handleSelectArmor = (data: DyeOptionData) => {
    setArmorItems({ [armorPart]: { dyeItem: data.itemPath } })
    onSelect(data)
    closePopover()
  }

  const icon = (
    <ItemImage
      src={dyeItem}
      alt={`${label} armor item`}
      size={OPTIONS_ICON_SIZE}
    />
  )

  return (
    <OptionPopover
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={{
        label,
        icon,
        disabled: !isLeather,
      }}
      contentColumns={5}
    >
      {optionsData.map((data, index) => (
        <TextureButton
          key={index}
          label={data.label}
          onClick={() => handleSelectArmor(data)}
        >
          <ItemImage
            src={data.itemPath}
            alt={`${data.label} dye item`}
            size={OPTIONS_ICON_SIZE}
          />
        </TextureButton>
      ))}
    </OptionPopover>
  )
}
