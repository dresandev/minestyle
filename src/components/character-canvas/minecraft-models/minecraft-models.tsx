import { useMcModelRefs } from "@/hooks/use-mc-model-refs"
import { useAnimation } from "@/hooks/use-animation"
import { CharacterModel } from "../character-model"
import { CapeModel } from "../cape-model"
import { ElytraModel } from "../elytra-model"
import { idleAnimation } from "@/animations"
import { useCharacterLookAtCursor } from "./use-character-look-at-cursor"

export const MinecraftModels = () => {
  const {
    characterWrapperRef,
    bodyPartRefs,
    capeRef,
  } = useMcModelRefs()

  useAnimation(
    idleAnimation,
    { bodyPartRefs, capeRef },
    2,
  )
  useCharacterLookAtCursor({
    headRef: bodyPartRefs.head,
    characterWrapperRef,
  })

  return (
    <group
      ref={characterWrapperRef}
      position={[0, 7.5, 0]}
    >
      <CharacterModel partRefs={bodyPartRefs} />
      <CapeModel ref={capeRef} />
      <ElytraModel />
    </group>
  )
}
