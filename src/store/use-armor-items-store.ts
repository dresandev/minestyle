import { create } from "zustand"
import type { BasicArmorPartName } from "@/types"
import { DEFAULT_DYE_ITEM, DEFAULT_MATERIAL_ITEM } from "@/constants/image-paths"

interface ArmorItems {
  armorItem?: string
  dyeItem?: string
  trimItem?: string
  materialItem?: string
}

type State = Record<BasicArmorPartName, ArmorItems>

interface Actions {
  setArmorItems: (data: Partial<State>) => void
}

const INIT_STATE = {
  set: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: DEFAULT_MATERIAL_ITEM,
  },
  helmet: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: DEFAULT_MATERIAL_ITEM,
  },
  chestplate: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: DEFAULT_MATERIAL_ITEM,
  },
  leggings: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: DEFAULT_MATERIAL_ITEM,
  },
  boots: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: DEFAULT_MATERIAL_ITEM,
  }
}

export const useArmorItemsStore = create<State & Actions>()(set => ({
  ...INIT_STATE,
  setArmorItems: (data) => set((state) => {
    const updatedState: Partial<State> = {}

    for (const key in data) {
      const part = key as BasicArmorPartName
      updatedState[part] = {
        ...state[part],
        ...data[part],
      }
    }

    return updatedState
  })
}))
