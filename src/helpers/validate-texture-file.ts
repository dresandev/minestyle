import type { Validation } from "@/types"

export const validateTextureFile = (file: File, validations: Validation[]) => {
  for (const { validation, message } of validations) {
    if (validation(file)) {
      return { isValid: false, message }
    }
  }

  return { isValid: true, message: "" }
}
