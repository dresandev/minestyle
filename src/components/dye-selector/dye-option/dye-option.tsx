"use client"

import { useState } from "react"
import type { BasicArmorPartName } from "@/types"
import { useArmorItemsStore } from "@/store/use-armor-items-store"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { OptionPopover } from "@/components/popover-option"
import { ItemImage } from "@/components/item-image"
import { TextureButton } from "@/components/texture-button"

export interface DyeOptionData {
  label: string
  itemPath: string
  dye: string
  dyeName: string
}

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
  const dyeItem = useArmorItemsStore(state => state[armorPart].dyeItem)
  const isLeather = useArmorDataStore(state => state[armorPart].armor.isLeather)

  const closePopover = () => setIsOpen(false)

  const handleSelectArmor = (data: DyeOptionData) => {
    setArmorItems({ [armorPart]: { dyeItem: data.itemPath } })
    onSelect(data)
    closePopover()
  }

  const iconSize = 48

  return (
    <OptionPopover
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={{
        label,
        icon: (
          <ItemImage
            src={dyeItem!}
            alt={`${label} armor item`}
            size={iconSize}
          />
        ),
        disabled: !isLeather
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
            alt={`${data.dyeName} dye item`}
            size={iconSize}
          />
        </TextureButton>
      ))}
    </OptionPopover>
  )
}
