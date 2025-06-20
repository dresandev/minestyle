import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import type { BodyPartName } from "@/types"
import { DEFAULT_SKIN } from "@/constants/image-paths"

interface SkinData {
  skin: string
  isSlim: boolean
  hasOuterLayer: Record<BodyPartName, boolean>
}

type State = SkinData

type Actions = {
  setSkinData: (data: SkinData) => void
}

const INIT_STATE: SkinData = {
  skin: DEFAULT_SKIN,
  isSlim: true,
  hasOuterLayer: {
    head: true,
    body: true,
    rightArm: true,
    leftArm: true,
    rightLeg: true,
    leftLeg: true,
  },
}

export const useSkinDataStore = create<State & Actions>()(
  immer((set) => ({
    ...INIT_STATE,
    setSkinData: (data) =>
      set((state) => {
        state.skin = data.skin
        state.isSlim = data.isSlim
        Object.assign(state.hasOuterLayer, data.hasOuterLayer)
      }),
  }))
)
