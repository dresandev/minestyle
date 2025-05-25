import { RefObject } from "react"
import type { Group } from "three"
import type { BodyPartName } from "@/types"
import { characterModelData } from "@/constants/character-model-data"
import { BodyPart } from "../body-part"
import { ArmorPart } from "../armor-part"

interface Props {
  partRefs: Record<BodyPartName, RefObject<Group>>
}

export const CharacterModel: React.FC<Props> = ({ partRefs }) => {
  return (
    <>
      {characterModelData.map((data) => {
        const {
          pivotPosition,
          position,
          bodyPart,
          armorPart,
        } = data

        return (
          <group
            ref={partRefs[bodyPart.name]}
            key={bodyPart.name}
            position={pivotPosition}
          >
            <group position={position}>
              <BodyPart data={bodyPart} />
              {armorPart.map((data, index) => (
                <ArmorPart key={index} data={data} />
              ))}
            </group>
          </group>
        )
      })}
    </>
  )
}
