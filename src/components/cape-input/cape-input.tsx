"use client"

import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"
import { validateTextureFile } from "@/helpers/validate-texture-file"
import { toast } from "@/helpers/toast"
import { TextureInput } from "@/components/texture-input"
import { validations } from "./validations"

export const CapeInput = () => {
  const setBackEquipment = useBackEquipmentDataStore(state => state.setBackEquipment)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const { isValid, message } = validateTextureFile(file, validations)

    if (!isValid) {
      return toast({
        title: "Invalid file format",
        description: message
      })
    }

    const reader = new FileReader()
    reader.onload = async (e) => {
      const base64 = e.target?.result as string
      const image = new Image()

      image.onload = () => {
        try {
          const { width, height } = image
          const isValidSize = width === 64 && height === 32

          if (!isValidSize) {
            throw new Error(`Invalid skin dimensions: ${width}x${height}`)
          }

          setBackEquipment({
            cape: { url: base64 },
            elytra: { url: base64 }
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          toast({
            title: "Loading Error",
            description: err.message || "An error occurred while loading the skin."
          })
        }
        // } finally {
        //   clearInput()
        // }
      }

      image.src = base64
    }

    reader.readAsDataURL(file)
  }

  return (
    <TextureInput
      label="Upload Cape"
      onChange={handleOnChange}
    />
  )
}
