import type { Metadata } from "next"
import { Toaster } from "sonner"
import { Noto_Sans } from "next/font/google"
import { Header } from "@/components/header"
import "@/styles/reset.css"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "MineStyle",
  description: "App to customize your minecraft character with armors, armor trims, capes and elytras",
}

const notoSans = Noto_Sans({
  weight: ["400", "500"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>
        <Header />
        {children}
        <Toaster
          position="top-center"
          swipeDirections={["left", "right"]}
        />
      </body>
    </html>
  )
}
