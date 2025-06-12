import { create } from "zustand"
import { DEFAULT_CAPE_PATH } from "@/constants/texture-paths"

interface BackEquipmentData {
  isVisible?: boolean
  url?: string
}

type BackEquipmentPart = "cape" | "elytra"

interface State {
  cape: BackEquipmentData
  elytra: BackEquipmentData
}

interface Actions {
  setBackEquipment: (
    data: Record<BackEquipmentPart, BackEquipmentData>
  ) => void
}

const INIT_STATE = {
  cape: {
    isVisible: true,
    url: DEFAULT_CAPE_PATH,
  },
  elytra: {
    isVisible: false,
    url: DEFAULT_CAPE_PATH,
  }
}

export const useBackEquipmentDataStore = create<State & Actions>()(set => ({
  ...INIT_STATE,
  setBackEquipment: ({ cape, elytra }) => set((state) => ({
    cape: {
      ...state.cape,
      ...cape
    },
    elytra: {
      ...state.elytra,
      ...elytra
    }
  })),
}))
