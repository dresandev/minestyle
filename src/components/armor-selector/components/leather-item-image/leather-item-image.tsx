import { useEffect, useState } from "react"
import type { PluralBasicArmorPartName } from "@/types"
import { loadLeatherArmorItem } from "@/helpers/load-armor-leather-item"
import { ItemImage } from "@/components/item-image"

interface Props {
  alt: string
  size: number
  pluralArmorPart: PluralBasicArmorPartName
  itemPath: string
  color: string
}

export const LeatherItemImage: React.FC<Props> = ({
  alt,
  size,
  pluralArmorPart,
  itemPath,
  color,
}) => {
  const [src, setSrc] = useState("")

  useEffect(() => {
    const colorItemImage = async () => {
      const itemImage = await loadLeatherArmorItem({
        pluralArmorPart,
        itemPath,
        color
      })

      setSrc(itemImage)
    }

    colorItemImage()
  }, [color, itemPath, pluralArmorPart])

  if (src === "") return

  return (
    <ItemImage
      src={src}
      alt={alt}
      size={size}
    />
  )
}
