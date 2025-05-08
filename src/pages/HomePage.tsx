import { useRef } from "react"
import { useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { TEXTURES } from "@/constants/texture-urls"
import { useBeforeUnload } from "@/hooks/use-before-unload"
import { Layout } from "@/layouts/Layout"
import { SkinInput } from "@/components/SkinInput"
import { Scene } from "@/components/Scene"
import { Models3D } from "@/components/Models3D"
import { Button } from "@/components/Button"

TEXTURES.forEach(useTexture.preload)

function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useBeforeUnload(() => {
    const currentCanvas = canvasRef.current
    if (!currentCanvas) return
    currentCanvas.style.opacity = "0"
  })

  return (
    <Layout>
      <Canvas
        ref={canvasRef}
        style={{
          inlineSize: 350,
          aspectRatio: "1/1.8",
          touchAction: "none",
          imageRendering: "pixelated",
        }}
      >
        <Scene>
          <Models3D />
        </Scene>
      </Canvas>
      <SkinInput />
      <Button />
    </Layout>
  )
}

export default HomePage
