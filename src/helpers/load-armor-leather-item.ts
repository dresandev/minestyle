import type { PluralBasicArmorPartName } from "@/types"
import { dyeLeatherArmorItem } from "@/helpers/dye-leather-armor-item"

interface Props {
  pluralArmorPart: PluralBasicArmorPartName
  itemPath: string
  dye: string
}

export const loadLeatherArmorItem = async ({
  pluralArmorPart,
  itemPath,
  dye,
}: Props): Promise<string> => {
  return new Promise((resolve, reject) => {
    const itemImage = new Image()
    itemImage.src = itemPath
    itemImage.onerror = reject
    itemImage.onload = async () => {
      if (pluralArmorPart === "chestplates") {
        const base64 = await dyeLeatherArmorItem({
          itemImage,
          dye,
        })
        return resolve(base64)
      }

      const overlayImage = new Image()
      overlayImage.src = `/images/items/armors/${pluralArmorPart}/leather-overlay.png`
      overlayImage.onload = async () => {
        const base64 = await dyeLeatherArmorItem({
          itemImage,
          dye,
          overlayImage,
        })
        resolve(base64)
      }
    }
  })
}
