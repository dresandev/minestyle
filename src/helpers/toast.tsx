import { toast as sonnerToast } from "sonner"
import { Toast } from "@/components/ui/toast"

export interface ToastProps {
  id: string | number
  title: string
  description: string
  iconUrl?: string
}

export function toast(toast: Omit<ToastProps, "id">) {
  return (
    sonnerToast.custom((id) => (
      <Toast
        id={id}
        title={toast.title}
        description={toast.description}
        iconUrl={toast.iconUrl}
      />
    ))
  )
}
