import { create } from "zustand"
import type { BodyPartName } from "@/types"
import { DEFAULT_SKIN } from "@/constants/texture-urls"

interface SkinData {
  skin: string
  isSlim: boolean
  hasOuterLayer: Record<BodyPartName, boolean>
}

interface SkinDataState {
  skinData: SkinData
  setSkinData: (skinData: SkinData) => void
}

export const useSkinDataStore = create<SkinDataState>()(set => ({
  skinData: {
    skin: DEFAULT_SKIN,
    isSlim: false,
    hasOuterLayer: {
      head: true,
      body: false,
      rightArm: true,
      leftArm: true,
      rightLeg: true,
      leftLeg: true
    }
  },
  setSkinData: (skinData) => set((state) => ({
    ...state,
    skinData
  }))
}))
