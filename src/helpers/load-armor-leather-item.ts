import type { PluralBasicArmorPartName } from "@/types"
import { colorLeatherArmorItem } from "@/helpers/color-leather-armor-item"

interface Props {
  pluralArmorPart: PluralBasicArmorPartName
  itemPath: string
  color: string
}

export const loadLeatherArmorItem = async ({
  pluralArmorPart,
  itemPath,
  color,
}: Props): Promise<string> => {
  return new Promise((resolve, reject) => {
    const itemImage = new Image()
    itemImage.src = itemPath
    itemImage.onerror = reject
    itemImage.onload = async () => {
      if (pluralArmorPart === "chestplates") {
        const base64 = await colorLeatherArmorItem({
          itemImage,
          color
        })
        return resolve(base64)
      }

      const overlayImage = new Image()
      overlayImage.src = `/images/items/armors/${pluralArmorPart}/leather-overlay.png`
      overlayImage.onload = async () => {
        const base64 = await colorLeatherArmorItem({
          itemImage,
          color,
          overlayImage,
        })
        resolve(base64)
      }
    }
  })
}
