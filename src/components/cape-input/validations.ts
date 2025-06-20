export const validations = [
  {
    validation: (file: File) => file.type !== "image/png",
    message: "Only PNG images are allowed.",
  },
  {
    validation: (file: File) => file.size > 20 * 1024,
    message: "The file size must be 20KB or less.",
  },
]
