import { useRef } from "react"
import { toast } from "sonner"
import { convertSkinTo1_8 } from "@/utils/convert-skin-to-1_8"
import { getSkinData } from "@/helpers/get-skin-data"
import { useSkinDataStore } from "@/store/use-skin-data-store"

export const SkinInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setSkinData = useSkinDataStore(state => state.setSkinData)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (file.type !== "image/png") {
      return toast.error("Only PNG images are allowed.")
    }

    if (file.size > 20 * 1024) {
      return toast.error("The file size must be 20KB or less.")
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
            toast("Legacy skin format detected. Converted to 1.8 format.")
          }

          const skinData = getSkinData(finalImage)

          setSkinData({ skin: finalBase64, ...skinData })

          if (inputRef.current) {
            inputRef.current.value = ""
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          toast.error(err.message || "An error occurred while loading the skin.")
        }
      }

      image.src = base64
    }

    reader.readAsDataURL(file)
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
