import { create } from "zustand"
import type { BodyPartName } from "@/types"
import { DEFAULT_SKIN } from "@/constants/image-paths"

interface SkinData {
  skin: string
  isSlim: boolean
  hasOuterLayer: Record<BodyPartName, boolean>
}

type State = SkinData

type Actions = { setSkinData: (skinData: SkinData) => void }

const INIT_STATE = {
  skin: DEFAULT_SKIN,
  isSlim: true,
  hasOuterLayer: {
    head: true,
    body: false,
    rightArm: true,
    leftArm: true,
    rightLeg: true,
    leftLeg: true
  }
}

export const useSkinDataStore = create<State & Actions>()(set => ({
  ...INIT_STATE,
  setSkinData: (skinData) => set((state) => ({
    ...state,
    ...skinData
  }))
}))
