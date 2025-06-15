import { create } from "zustand"
import type { BasicArmorPartName } from "@/types"
import { BASE_DYE_ITEM_PATH } from "@/constants/image-paths"

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

const DEFAULT_DYE_ITEM = `${BASE_DYE_ITEM_PATH}/brown.png`

const INIT_STATE = {
  set: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: "",
  },
  helmet: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: "",
  },
  chestplate: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: "",
  },
  leggings: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: "",
  },
  boots: {
    armorItem: "",
    dyeItem: DEFAULT_DYE_ITEM,
    trimItem: "",
    materialItem: "",
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
