"use client"

import { convertSkinTo1_8 } from "@/utils/convert-skin-to-1_8"
import { useSkinDataStore } from "@/store/use-skin-data-store"
import { getSkinData } from "@/helpers/get-skin-data"
import { validateTextureFile } from "@/helpers/validate-texture-file"
import { toast } from "@/helpers/toast"
import { TextureInput } from "@/components/texture-input"
import { validations } from "./validations"

export const SkinInput = () => {
  const setSkinData = useSkinDataStore(state => state.setSkinData)

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

      image.onload = async () => {
        try {
          const { width, height } = image
          const isValidWidth = width === 64
          const isValidHeight = height === 64 || height === 32
          const isOldFormat = width === 2 * height

          if (!isValidWidth || !isValidHeight && !isOldFormat) {
            throw new Error(`Invalid skin dimensions: ${width}x${height}`)
          }

          let finalImage = image
          let finalBase64 = base64

          if (isOldFormat) {
            finalBase64 = convertSkinTo1_8(image)
            finalImage = await new Promise<HTMLImageElement>((resolve, reject) => {
              const img = new Image()
              img.onload = () => resolve(img)
              img.onerror = reject
              img.src = finalBase64
            })
            toast({
              title: "Legacy skin format detected",
              description: "Converted to 1.8 format"
            })
          }

          const skinData = getSkinData(finalImage)

          setSkinData({
            skin: finalBase64,
            ...skinData
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          toast({
            title: "Loading Error",
            description: err.message || "An error occurred while loading the skin."
          })
        }
      }

      image.src = base64
    }

    reader.readAsDataURL(file)
  }

  return (
    <TextureInput
      label="Upload Skin"
      onChange={handleOnChange}
    />
  )
}
