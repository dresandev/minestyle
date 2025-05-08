import { create } from "zustand"
import type { ArmorPartName, BasicArmorPartName } from "@/types"

interface ArmorPartData {
  isVisible?: boolean
  armorData: {
    isLeather: boolean
    armorColor?: string
    armorUrl: string
  }
  trimData: {
    trimUrl: string
    trimMaterialUrl: string
  }
}

type ArmorData = Record<ArmorPartName, ArmorPartData>
type PartialArmorData = Record<ArmorPartName, Pick<ArmorPartData, "isVisible" | "armorData">>
type PartialTrimData = Record<BasicArmorPartName, Pick<ArmorPartData, "trimData">>
type PartialVisibilityData = Record<ArmorPartName, Pick<ArmorPartData, "isVisible">>

interface ArmorDataState {
  data: ArmorData
  setArmorPart: (data: Partial<PartialArmorData>) => void
  setTrimPart: (data: Partial<PartialTrimData>) => void
  setArmorPartVisibility: (data: Partial<PartialVisibilityData>) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true
  if (!obj1 || !obj2) return false
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  if (keys1.length !== keys2.length) return false
  return keys1.every(key => obj1[key] === obj2[key])
}

export const useArmorDataStore = create<ArmorDataState>()((set, get) => ({
  data: {
    helmet: {
      isVisible: false,
      armorData: {
        isLeather: false,
        armorUrl: ""
      },
      trimData: {
        trimUrl: "",
        trimMaterialUrl: ""
      },
    },
    chestplate: {
      isVisible: false,
      armorData: {
        isLeather: false,
        armorUrl: ""
      },
      trimData: {
        trimUrl: "",
        trimMaterialUrl: ""
      },
    },
    innerChestplate: {
      isVisible: false,
      armorData: {
        isLeather: false,
        armorUrl: ""
      },
      trimData: {
        trimUrl: "",
        trimMaterialUrl: ""
      },
    },
    leggins: {
      isVisible: false,
      armorData: {
        isLeather: false,
        armorUrl: ""
      },
      trimData: {
        trimUrl: "",
        trimMaterialUrl: ""
      },
    },
    boots: {
      isVisible: false,
      armorData: {
        isLeather: false,
        armorUrl: ""
      },
      trimData: {
        trimUrl: "",
        trimMaterialUrl: ""
      },
    },
  },

  setArmorPart: (newParts) => {
    const current = get().data
    let hasChanged = false

    const merged = Object.entries(newParts).reduce((acc, [partKey, newData]) => {
      const part = partKey as ArmorPartName
      const existing = current[part]

      const mergedArmorData = {
        ...existing.armorData,
        ...newData?.armorData,
      }

      const shouldUpdate =
        existing.isVisible !== newData?.isVisible ||
        !shallowEqual(existing.armorData, mergedArmorData)

      if (shouldUpdate) {
        hasChanged = true
        acc[part] = {
          ...existing,
          ...newData,
          armorData: mergedArmorData,
        }
      }

      return acc
    }, {} as Partial<ArmorData>)

    if (hasChanged) {
      set({ data: { ...current, ...merged } })
    }
  },

  setTrimPart: (newParts) => {
    const current = get().data
    let hasChanged = false

    const merged = Object.entries(newParts).reduce((acc, [partKey, newData]) => {
      const part = partKey as ArmorPartName
      const existing = current[part]

      const mergedTrimData = {
        ...existing.trimData,
        ...newData?.trimData,
      }

      if (!shallowEqual(existing.trimData, mergedTrimData)) {
        hasChanged = true
        acc[part] = {
          ...existing,
          trimData: mergedTrimData,
        }
      }

      return acc
    }, {} as Partial<ArmorData>)

    if (hasChanged) {
      set({ data: { ...current, ...merged } })
    }
  },

  setArmorPartVisibility: (newParts) => {
    const current = get().data
    let hasChanged = false

    const merged = Object.entries(newParts).reduce((acc, [partKey, newData]) => {
      const part = partKey as ArmorPartName
      const existing = current[part]

      if (existing.isVisible !== newData?.isVisible) {
        hasChanged = true
        acc[part] = {
          ...existing,
          isVisible: newData?.isVisible,
        }
      }

      return acc
    }, {} as Partial<ArmorData>)

    if (hasChanged) {
      set({ data: { ...current, ...merged } })
    }
  },
}))
