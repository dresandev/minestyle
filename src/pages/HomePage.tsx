import { useRef } from "react"
import { Cache } from "three"
import { Canvas } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import { TEXTURES } from "@/constants/texture-urls"
import { useBeforeUnload } from "@/hooks/use-before-unload"
import { Layout } from "@/layouts/Layout"
import { SkinInput } from "@/components/SkinInput"
import { Scene } from "@/components/Scene"
import { Models3D } from "@/components/Models3D"

TEXTURES.forEach(useTexture.preload)
Cache.enabled = true

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
    </Layout>
  )
}

export default HomePage
