import { useModelRefs } from "@/hooks/use-body-part-refs"
import { useAnimation } from "@/hooks/use-animation"
import { BodyModel } from "@/components/BodyModel"
import { CapeModel } from "@/components/CapeModel"
import { ElytraModel } from "@/components/ElytraModel"
import { idleAnimation } from "./animations"
import { Suspense } from "react"

export const Models3D = () => {
  const {
    bodyRef,
    bodyPartRefs,
    capeRef,
  } = useModelRefs()

  useAnimation(idleAnimation, { bodyPartRefs, capeRef }, 2)

  return (
    <group position={[0, 8, 0]}>
      <Suspense>
        <BodyModel partRefs={bodyPartRefs} />
        <CapeModel ref={capeRef} />
      </Suspense>
      {/* <ElytraModel /> */}
    </group>
  )
}
