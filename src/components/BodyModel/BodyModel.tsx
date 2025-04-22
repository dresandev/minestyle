import { RefObject, Suspense } from "react"
import { Group } from "three"
import type { BodyPartName } from "@/types"
import { characterModelData } from "@/constants/character-model-data"
import { BodyPart } from "@/components/BodyPart"
import { ArmorPart } from "@/components/ArmorPart"

interface Props {
  partRefs: Record<BodyPartName, RefObject<Group>>
}

export const BodyModel: React.FC<Props> = ({ partRefs }) => {
  return (
    <>
      {characterModelData.map((data) => {
        const { pivotPosition, position, bodyPart, armorPart } = data

        return (
          <group
            ref={partRefs[bodyPart.name]}
            key={bodyPart.name}
            position={pivotPosition}
          >
            <group position={position}>
              <Suspense>
                <BodyPart data={bodyPart} />
              </Suspense>
              {/* {armorPart.map((data) => (
                <Suspense key={data.name}>
                  <ArmorPart data={data} />
                </Suspense>
              ))} */}
            </group>
          </group >
        )
      })}
    </>
  )
}
