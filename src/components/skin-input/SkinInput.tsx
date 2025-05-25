"use client"

import { useRef } from "react"
import { convertSkinTo1_8 } from "@/utils/convert-skin-to-1_8"
import { getSkinData } from "@/helpers/get-skin-data"
import { toast } from "@/helpers/toast"
import { useSkinDataStore } from "@/store/use-skin-data-store"
import { validateFile } from "./validations"

export const SkinInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setSkinData = useSkinDataStore(state => state.setSkinData)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const isValidFile = validateFile(file)

    if (!isValidFile) {
      return clearInput()
    }

    const reader = new FileReader()
    reader.onload = async (e) => {
      const base64 = e.target?.result as string
      const image = new Image()

      image.onload = async () => {
        try {
          const { width, height } = image
          const isSquare = width === height
          const isOldFormat = width === 2 * height

          if (!isSquare && !isOldFormat) {
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

          setSkinData({ skin: finalBase64, ...skinData })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          toast({
            title: "Loading Error",
            description: err.message || "An error occurred while loading the skin."
          })
        } finally {
          clearInput()
        }
      }

      image.src = base64
    }

    reader.readAsDataURL(file)
  }

  const clearInput = () => {
    if (!inputRef.current) return
    inputRef.current.value = ""
  }

  return (
    <input
      ref={inputRef}
      type="file"
      accept="image/png"
      onChange={handleFileChange}
    />
  )
}
