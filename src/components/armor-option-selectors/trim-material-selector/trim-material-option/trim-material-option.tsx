"use client"

import { useState } from "react"
import type { BasicArmorPartName } from "@/types"
import { OPTIONS_ICON_SIZE } from "@/constants/ui"
import { useArmorItemsStore } from "@/store/use-armor-items-store"
import { OptionPopover } from "@/components/popover-option"
import { ItemImage } from "@/components/item-image"
import { TextureButton } from "@/components/texture-button"

export interface TrimMaterialOptionData {
  label: string
  itemPath: string
  texturePath: string
}

interface Props {
  label: string
  icon: React.ReactNode
  armorPart: BasicArmorPartName
  optionsData: TrimMaterialOptionData[]
  onSelect: (data: TrimMaterialOptionData) => void
}

export const TrimMaterialOption: React.FC<Props> = ({
  label,
  icon,
  armorPart,
  optionsData,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const setArmorItems = useArmorItemsStore(state => state.setArmorItems)
  const materialItem = useArmorItemsStore(state => state[armorPart].materialItem)

  const closePopover = () => setIsOpen(false)

  const handleSelectArmor = (data: TrimMaterialOptionData) => {
    setArmorItems({ [armorPart]: { materialItem: data.itemPath } })
    onSelect(data)
    closePopover()
  }

  const triggerIcon = materialItem ? (
    <ItemImage
      src={materialItem}
      alt={`${label} armor item`}
      size={OPTIONS_ICON_SIZE}
    />
  ) : icon

  return (
    <OptionPopover
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={{
        label,
        icon: triggerIcon,
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
