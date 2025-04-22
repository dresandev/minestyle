import { Canvas } from "@react-three/fiber"
import { Layout } from "@/layouts/Layout"
import { SkinInput } from "@/components/SkinInput"
import { Scene } from "@/components/Scene"
import { Models3D } from "@/components/Models3D"
import { Button } from "@/components/Button"

function HomePage() {
  return (
    <Layout>
      <Canvas
        frameloop="demand"
        style={{
          inlineSize: 350,
          // blockSize: 500,
          aspectRatio: "1/1.7",
          touchAction: "none",
          imageRendering: "pixelated",
          border: "1px solid red"
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
