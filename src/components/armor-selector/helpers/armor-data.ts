import type {
  ArmorPartName,
  PluralBasicArmorPartName,
  TextureLayer,
} from "@/types"
import type { PartialArmorData } from "@/store/use-armor-data-store"
import {
  COMMON_ARMOR_OPTIONS_DATA,
  HELMET_OPTIONS_DATA,
  PartialArmorOptionData,
} from "@/constants/armor-option-data"
import { getArmorItemPath } from "@/helpers/get-item-path"
import type { ArmorOptionData } from "../components/armor-option"

export const createArmorData = (
  parts: ArmorPartName[],
  layer: TextureLayer,
  data: ArmorOptionData
) => {
  const armorData = parts.reduce((acc, key) => {
    acc[key] = {
      isVisible: true,
      armor: {
        isLeather: data.isLeather,
        url: data.texturePath[layer],
      }
    }
    return acc
  }, {} as PartialArmorData)

  return armorData
}

const createArmorOptionData = (part: PluralBasicArmorPartName, data: PartialArmorOptionData[]): ArmorOptionData[] => {
  const armorOptionData = data.map(({ type, label, isLeather }) => ({
    label,
    isLeather,
    itemPath: getArmorItemPath(part, type,),
    texturePath: {
      layer1: `/images/textures/armors/${type}/layer-1.png`,
      layer2: `/images/textures/armors/${type}/layer-2.png`,
    },
  }))

  return armorOptionData
}

export const armorOptionData = {
  helmets: createArmorOptionData("helmets", HELMET_OPTIONS_DATA),
  chestplates: createArmorOptionData("chestplates", COMMON_ARMOR_OPTIONS_DATA),
  leggings: createArmorOptionData("leggings", COMMON_ARMOR_OPTIONS_DATA),
  boots: createArmorOptionData("boots", COMMON_ARMOR_OPTIONS_DATA),
}
