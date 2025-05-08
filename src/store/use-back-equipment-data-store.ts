import { create } from "zustand"

interface BackEquipmentData {
  isVisible?: boolean
  url: string
}

interface BackEquipmentState {
  cape: BackEquipmentData
  elytra: BackEquipmentData
  setBackEquipment: ({ cape, elytra }: { cape?: BackEquipmentData, elytra?: BackEquipmentData }) => void
}

function shallowEqual(a: BackEquipmentData, b: BackEquipmentData) {
  return a.isVisible === b.isVisible && a.url === b.url
}

export const useBackEquipmentDataStore = create<BackEquipmentState>()((set, get) => ({
  cape: {
    isVisible: true,
    url: "/images/capes/common-cape.png",
  },
  elytra: {
    isVisible: true,
    url: "/images/capes/common-cape.png",
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
