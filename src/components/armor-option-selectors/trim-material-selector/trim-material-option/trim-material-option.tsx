"use client"

import { useState } from "react"
import type { BasicArmorPartName } from "@/types"
import type { TrimMaterialOptionData } from "@/constants/trim-material-options-data"
import { OPTIONS_ICON_SIZE } from "@/constants/ui"
import { useArmorItemsStore } from "@/store/use-armor-items-store"
import { OptionPopover } from "@/components/popover-option"
import { ItemImage } from "@/components/item-image"
import { TextureButton } from "@/components/texture-button"

interface Props {
  label: string
  armorPart: BasicArmorPartName
  optionsData: TrimMaterialOptionData[]
  onSelect: (data: TrimMaterialOptionData) => void
}

export const TrimMaterialOption: React.FC<Props> = ({
  label,
  armorPart,
  optionsData,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const setArmorItems = useArmorItemsStore(state => state.setArmorItems)
  const materialItem = useArmorItemsStore(state => state[armorPart].materialItem)!

  const closePopover = () => setIsOpen(false)

  const handleSelectArmor = (data: TrimMaterialOptionData) => {
    setArmorItems({ [armorPart]: { materialItem: data.itemPath } })
    onSelect(data)
    closePopover()
  }

  return (
    <OptionPopover
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={{
        label,
        icon: (
          <ItemImage
            src={materialItem}
            alt={`${label} armor item`}
            size={OPTIONS_ICON_SIZE}
          />
        ),
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
            alt={`${data.label} material item`}
            size={OPTIONS_ICON_SIZE}
          />
        </TextureButton>
      ))}
    </OptionPopover>
  )
}
