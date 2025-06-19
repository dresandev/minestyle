"use client"

import { useState } from "react"
import type { BasicArmorPartName } from "@/types"
import type { TrimOptionData } from "@/constants/trim-options-data"
import { OPTIONS_ICON_SIZE } from "@/constants/ui"
import { useArmorItemsStore } from "@/store/use-armor-items-store"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { OptionPopover } from "@/components/popover-option"
import { ItemImage } from "@/components/item-image"
import { TextureButton } from "@/components/texture-button"
import { CancelIcon } from "@/components/icons/cancel-icon"

interface Props {
  label: string
  icon: React.ReactNode
  armorPart: BasicArmorPartName
  optionsData: TrimOptionData[]
  onSelect: (data: TrimOptionData) => void
  onRemove: () => void
}

export const TrimOption: React.FC<Props> = ({
  label,
  icon,
  armorPart,
  optionsData,
  onSelect,
  onRemove,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const setArmorItems = useArmorItemsStore(state => state.setArmorItems)
  const trimItem = useArmorItemsStore(state => state[armorPart].trimItem)
  const hasArmor = useArmorDataStore(state => state[armorPart].armor.hasArmor)

  const closePopover = () => setIsOpen(false)

  const handleRemove = () => {
    onRemove()
    setArmorItems({ [armorPart]: { trimItem: "" } })
    closePopover()
  }

  const handleSelectArmor = (data: TrimOptionData) => {
    setArmorItems({ [armorPart]: { trimItem: data.itemPath } })
    onSelect(data)
    closePopover()
  }

  const triggerIcon = trimItem ? (
    <ItemImage
      src={trimItem}
      alt={`${label} item`}
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
        disabled: !hasArmor
      }}
      contentColumns={5}
    >
      <TextureButton
        label="Remove"
        onClick={handleRemove}
      >
        <CancelIcon size={38} />
      </TextureButton>

      {optionsData.map((data, index) => (
        <TextureButton
          key={index}
          label={data.label}
          onClick={() => handleSelectArmor(data)}
        >
          <ItemImage
            src={data.itemPath}
            alt={`${data.label} item`}
            size={OPTIONS_ICON_SIZE}
          />
        </TextureButton>
      ))}
    </OptionPopover>
  )
}
