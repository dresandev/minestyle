import { type RefObject, createRef } from "react"
import type { Group } from "three"
import type { BodyPartName } from "@/types"

const bodyPartNames: BodyPartName[] = [
  "head",
  "body",
  "leftArm",
  "rightArm",
  "leftLeg",
  "rightLeg",
]

export const useMcModelRefs = () => ({
  characterWrapperRef: createRef<Group>(),
  capeRef: createRef<Group>(),
  bodyPartRefs: Object.fromEntries(
    bodyPartNames.map(name => [name, createRef<Group>()])
  ) as Record<BodyPartName, RefObject<Group>>,
})
