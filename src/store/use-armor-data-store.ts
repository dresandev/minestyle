import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import type { ArmorPartName, BasicArmorPartName } from "@/types"
import { DYE_COLORS } from "@/constants/dye-colors"
import { DEFAULT_TRIM_MATERIAL_TEXTURE } from "@/constants/image-paths"

export interface ArmorPartData {
  isVisible?: boolean
  armor: {
    hasArmor?: boolean
    isLeather?: boolean
    dye?: string
    url: string
  }
  trim: {
    hasTrim?: boolean
    url: string
    materialUrl?: string
  }
}

export type ArmorData = Record<ArmorPartName, ArmorPartData>
export type PartialArmorData = Record<
  ArmorPartName,
  Pick<ArmorPartData, "isVisible" | "armor">
>
export type PartialTrimData = Record<
  BasicArmorPartName,
  Pick<ArmorPartData, "trim">
>
export type PartialVisibilityData = Record<
  ArmorPartName,
  Pick<ArmorPartData, "isVisible">
>

export type State = ArmorData

export interface Actions {
  setArmorPart: (data: Partial<PartialArmorData>) => void
  setArmorPartVisibility: (data: Partial<Record<ArmorPartName, boolean>>) => void
  setTrimPart: (data: Partial<PartialTrimData>) => void
  setArmorPartIsLeather: (data: Partial<Record<ArmorPartName, boolean>>) => void
  setArmorPartDye: (data: Partial<Record<ArmorPartName, string>>) => void
}

const INIT_STATE = {
  helmet: {
    isVisible: false,
    armor: {
      hasArmor: false,
      isLeather: false,
      url: "",
      dye: DYE_COLORS.brown
    },
    trim: {
      hasTrim: false,
      url: "",
      materialUrl: DEFAULT_TRIM_MATERIAL_TEXTURE
    },
  },
  chestplate: {
    isVisible: false,
    armor: {
      hasArmor: false,
      isLeather: false,
      url: "",
      dye: DYE_COLORS.brown
    },
    trim: {
      hasTrim: false,
      url: "",
      materialUrl: DEFAULT_TRIM_MATERIAL_TEXTURE
    },
  },
  innerChestplate: {
    isVisible: false,
    armor: {
      hasArmor: false,
      isLeather: false,
      url: "",
      dye: DYE_COLORS.brown
    },
    trim: {
      url: "",
      materialUrl: DEFAULT_TRIM_MATERIAL_TEXTURE
    },
  },
  leggings: {
    isVisible: false,
    armor: {
      hasArmor: false,
      isLeather: false,
      url: "",
      dye: DYE_COLORS.brown
    },
    trim: {
      hasTrim: false,
      url: "",
      materialUrl: DEFAULT_TRIM_MATERIAL_TEXTURE
    },
  },
  boots: {
    isVisible: false,
    armor: {
      hasArmor: false,
      isLeather: false,
      url: "",
      dye: DYE_COLORS.brown
    },
    trim: {
      hasTrim: false,
      url: "",
      materialUrl: DEFAULT_TRIM_MATERIAL_TEXTURE
    },
  },
}

export const useArmorDataStore = create<State & Actions>()(
  immer((set) => ({
    ...INIT_STATE,
    setArmorPart: (newParts) => {
      set((state) => {
        for (const partKey in newParts) {
          const partName = partKey as ArmorPartName
          const newData = newParts[partName]

          if (!newData) continue

          if (newData.isVisible) {
            state[partName].isVisible = newData.isVisible
          }

          const armor = {
            ...newData.armor,
            hasArmor: !!newData.armor.url,
          }

          if (newData.armor) {
            Object.assign(state[partName].armor, armor)
          }
        }
      })
    },
    setArmorPartVisibility: (newParts) => {
      set((state) => {
        for (const partKey in newParts) {
          const partName = partKey as ArmorPartName
          const isVisible = newParts[partName]
          state[partName].isVisible = isVisible
          state[partName].armor.hasArmor = false
        }
      })
    },
    setTrimPart: (newParts) => {
      set((state) => {
        for (const partKey in newParts) {
          const partName = partKey as BasicArmorPartName
          const newData = newParts[partName]

          if (!newData?.trim) continue

          if (typeof newData?.trim.url === "string") {
            state[partName].trim.hasTrim = !!newData.trim.url
          }

          Object.assign(state[partName].trim, newData.trim)
        }
      })
    },
    setArmorPartIsLeather: (newParts) => {
      set((state) => {
        for (const partKey in newParts) {
          const partName = partKey as ArmorPartName
          const isLeather = newParts[partName]
          state[partName].armor.isLeather = isLeather
        }
      })
    },
    setArmorPartDye: (newParts) => {
      set((state) => {
        for (const partKey in newParts) {
          const partName = partKey as ArmorPartName
          const dye = newParts[partName]
          state[partName].armor.dye = dye
        }
      })
    },
  }))
)
