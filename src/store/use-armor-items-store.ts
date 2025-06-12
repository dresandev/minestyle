import type { BasicArmorPartName } from "@/types"
import { create } from "zustand"

interface ArmorItems {
  armorItem?: string
  colorItem?: string
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
    colorItem: "",
    trimItem: "",
    materialItem: "",
  },
  helmet: {
    armorItem: "",
    colorItem: "",
    trimItem: "",
    materialItem: "",
  },
  chestplate: {
    armorItem: "",
    colorItem: "",
    trimItem: "",
    materialItem: "",
  },
  leggings: {
    armorItem: "",
    colorItem: "",
    trimItem: "",
    materialItem: "",
  },
  boots: {
    armorItem: "",
    colorItem: "",
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
