import type { BasicArmorPartName } from "@/types"
import { dyeLeatherArmorItem } from "@/helpers/dye-leather-armor-item"
import { toPlural } from "@/helpers/to-plural"

interface Props {
  armorPart: BasicArmorPartName
  itemPath: string
  dye: string
}

export const loadLeatherArmorItem = async ({
  armorPart,
  itemPath,
  dye,
}: Props): Promise<string> => {
  return new Promise((resolve, reject) => {
    const itemImage = new Image()
    itemImage.src = itemPath
    itemImage.onerror = reject
    itemImage.onload = async () => {
      const pluralArmorPart = toPlural(armorPart)

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
