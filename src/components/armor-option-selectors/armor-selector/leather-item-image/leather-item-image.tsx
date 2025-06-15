import { useEffect, useState } from "react"
import type { BasicArmorPartName } from "@/types"
import { loadLeatherArmorItem } from "@/helpers/load-armor-leather-item"
import { toPlural } from "@/helpers/to-plural"
import { ItemImage } from "@/components/item-image"

interface Props {
  alt: string
  size: number
  armorPart: BasicArmorPartName
  dye: string
}

export const LeatherItemImage: React.FC<Props> = ({
  alt,
  size,
  armorPart,
  dye,
}) => {
  const [src, setSrc] = useState("")

  const itemPath = `/images/items/armors/${toPlural(armorPart)}/leather.png`

  useEffect(() => {
    const dyeItemImage = async () => {
      const itemImage = await loadLeatherArmorItem({
        armorPart,
        itemPath,
        dye
      })

      setSrc(itemImage)
    }

    dyeItemImage()
  }, [dye, armorPart, itemPath])

  if (src === "") return

  return (
    <ItemImage
      src={src}
      alt={alt}
      size={size}
    />
  )
}
