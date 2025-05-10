import { useModelRefs } from "@/hooks/use-body-part-refs"
import { useAnimation } from "@/hooks/use-animation"
import { CharacterModel } from "@/components/CharacterModel"
import { CapeModel } from "@/components/CapeModel"
import { ElytraModel } from "@/components/ElytraModel"
import { idleAnimation } from "@/animations"

export const Models3D = () => {
  const {
    bodyPartRefs,
    capeRef,
  } = useModelRefs()

  useAnimation(idleAnimation, { bodyPartRefs, capeRef }, 2)

  return (
    <group position={[0, 7, 0]}>
      <CharacterModel partRefs={bodyPartRefs} />
      <CapeModel ref={capeRef} />
      <ElytraModel />
    </group>
  )
}
