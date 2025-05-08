import { create } from "zustand"
import type { BodyPartName } from "@/types"
import { DEFAULT_SKIN } from "@/constants/texture-urls"

interface SkinData {
  skin: string
  isSlim: boolean
  hasOuterLayer: Record<BodyPartName, boolean>
}

interface SkinDataState {
  data: SkinData
  setSkinData: (skinData: SkinData) => void
}

export const useSkinDataStore = create<SkinDataState>()(set => ({
  data: {
    skin: DEFAULT_SKIN,
    isSlim: false,
    hasOuterLayer: {
      head: true,
      body: false,
      rightArm: false,
      leftArm: false,
      rightLeg: false,
      leftLeg: false
    }
  },
  setSkinData: (skinData) => set((state) => ({
    data: {
      ...state.data,
      ...skinData
    }
  }))
}))
