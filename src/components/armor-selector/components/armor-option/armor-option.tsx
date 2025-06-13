"use client"

import { useState } from "react"
import type { BasicArmorPartName, PluralBasicArmorPartName } from "@/types"
import { loadLeatherArmorItem } from "@/helpers/load-armor-leather-item"
import { toPlural } from "@/helpers/to-plural"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { useArmorItemsStore } from "@/store/use-armor-items-store"
import { TextureButton } from "@/components/texture-button"
import { CancelIcon } from "@/components/icons/cancel-icon"
import { OptionPopover } from "@/components/popover-option"
import { ItemImage } from "@/components/item-image"
import { LeatherItemImage } from "../../components/leather-item-image"

export interface ArmorOptionData {
  label: string
  itemPath: string
  isLeather: boolean
  texturePath: {
    layer1: string
    layer2: string
  }
}

interface ExtraOption {
  label: string
  itemPath: string
  onSelect: () => void
}

interface Props {
  label: string
  armorPart: BasicArmorPartName
  optionsData: ArmorOptionData[]
  icon: React.ReactNode
  onSelect: (data: ArmorOptionData) => void
  onRemove: () => void
  extraOption?: ExtraOption
}

export const ArmorOption = ({
  label,
  armorPart,
  optionsData,
  icon,
  onSelect,
  onRemove,
  extraOption,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const setArmorItems = useArmorItemsStore(state => state.setArmorItems)
  const armorItem = useArmorItemsStore(state => state[armorPart].armorItem)
  const dye = useArmorDataStore(state => state[armorPart].armor.dye)!

  const closePopover = () => setIsOpen(false)

  const handleRemove = () => {
    onRemove()
    setArmorItems({ [armorPart]: { armorItem: "" } })
    closePopover()
  }

  const handleSelectArmor = async (data: ArmorOptionData) => {
    let itemImage = data.itemPath

    if (data.isLeather) {
      itemImage = await loadLeatherArmorItem({
        pluralArmorPart,
        itemPath: data.itemPath,
        dye
      })
    }

    setArmorItems({ [armorPart]: { armorItem: itemImage } })
    onSelect(data)
    closePopover()
  }

  const handleSelectExtra = () => {
    if (!extraOption) return

    setArmorItems({ [armorPart]: { armorItem: extraOption.itemPath } })
    extraOption.onSelect()
    closePopover()
  }

  const iconSize = 48
  const pluralArmorPart = toPlural(armorPart) as PluralBasicArmorPartName
  const triggerIcon = armorItem ? (
    <ItemImage
      src={armorItem}
      alt={`${label} armor item`}
      size={iconSize}
    />
  ) : icon

  return (
    <OptionPopover
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={{
        label,
        icon: triggerIcon
      }}
    >
      <TextureButton
        label="Remove"
        onClick={handleRemove}
      >
        <CancelIcon size={38} />
      </TextureButton>

      {optionsData.map((data, index) => {
        const alt = `${data.label} ${label.toLowerCase()} armor item`
        return (
          <TextureButton
            key={index}
            label={data.label}
            onClick={() => handleSelectArmor(data)}
          >
            {data.isLeather ? (
              <LeatherItemImage
                pluralArmorPart={pluralArmorPart}
                itemPath={data.itemPath}
                dye={dye}
                alt={alt}
                size={iconSize}
              />
            ) : (
              <ItemImage
                src={data.itemPath}
                alt={alt}
                size={iconSize}
              />
            )}
          </TextureButton>
        )
      })}
      {extraOption && (
        <TextureButton
          label={extraOption.label}
          onClick={handleSelectExtra}
        >
          <ItemImage
            src={extraOption.itemPath}
            alt={`${extraOption.label} item`}
            size={iconSize}
          />
        </TextureButton>
      )}
    </ OptionPopover>
  )
}
