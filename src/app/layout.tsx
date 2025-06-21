import type { Metadata } from "next"
import { Toaster } from "sonner"
import { Noto_Sans } from "next/font/google"
import { HOST_URL } from "@/constants/app"
import { Header } from "@/components/header"
import { PanoramaCanvas } from "@/components/panorama-canvas"
import { LoadingScreen } from "@/components/loading-screen"
import "@/styles/reset.css"
import "@/styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(HOST_URL),
  title: "MineStyle",
  description: "App to view your Minecraft skin with armor and armor trims, focused on great look and feel 😎",
  authors: [{ name: "Javier Andres - Dresan" }],
  creator: "Javier Andres - Dresan",
}

const notoSans = Noto_Sans({
  subsets: ["latin"],
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
        <PanoramaCanvas />
        <LoadingScreen />
        <Toaster
          position="top-center"
          swipeDirections={["left", "right"]}
        />
      </body>
    </html>
  )
}
