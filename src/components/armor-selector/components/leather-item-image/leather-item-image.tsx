import { useEffect, useState } from "react"
import type { PluralBasicArmorPartName } from "@/types"
import { loadLeatherArmorItem } from "@/helpers/load-armor-leather-item"
import { ItemImage } from "@/components/item-image"

interface Props {
  alt: string
  size: number
  pluralArmorPart: PluralBasicArmorPartName
  itemPath: string
  dye: string
}

export const LeatherItemImage: React.FC<Props> = ({
  alt,
  size,
  pluralArmorPart,
  itemPath,
  dye,
}) => {
  const [src, setSrc] = useState("")

  useEffect(() => {
    const dyeItemImage = async () => {
      const itemImage = await loadLeatherArmorItem({
        pluralArmorPart,
        itemPath,
        dye
      })

      setSrc(itemImage)
    }

    dyeItemImage()
  }, [dye, itemPath, pluralArmorPart])

  if (src === "") return

  return (
    <ItemImage
      src={src}
      alt={alt}
      size={size}
    />
  )
}
