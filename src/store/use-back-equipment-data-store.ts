import { create } from "zustand"
import { DEFAULT_CAPE } from "@/constants/texture-urls"

interface BackEquipmentData {
  isVisible?: boolean
  url: string
}

interface BackEquipmentState {
  cape: BackEquipmentData
  elytra: BackEquipmentData
  setBackEquipment: ({
    cape,
    elytra,
  }: {
    cape?: BackEquipmentData,
    elytra?: BackEquipmentData,
  }) => void
}

function shallowEqual(a: BackEquipmentData, b: BackEquipmentData) {
  return a.isVisible === b.isVisible && a.url === b.url
}

export const useBackEquipmentDataStore = create<BackEquipmentState>()((set, get) => ({
  cape: {
    isVisible: true,
    url: DEFAULT_CAPE,
  },
  elytra: {
    isVisible: false,
    url: DEFAULT_CAPE,
  },
  setBackEquipment: ({ cape, elytra }) => {
    const state = get()
    const updates: Partial<BackEquipmentState> = {}

    if (cape && !shallowEqual(state.cape, cape)) {
      updates.cape = cape
    }

    if (elytra && !shallowEqual(state.elytra, elytra)) {
      updates.elytra = elytra
    }

    if (Object.keys(updates).length > 0) {
      set(updates)
    }
  },
}))
