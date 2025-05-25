import { PerspectiveCamera, PresentationControls } from "@react-three/drei"
import { EffectComposer, SMAA } from "@react-three/postprocessing"
import { SMAAPreset } from "postprocessing"

interface Props {
  children: React.ReactNode
}

export const Scene: React.FC<Props> = ({ children }) => {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 50]}
        fov={65}
        zoom={1.5}
        near={0.1}
        far={70}
      >
        <directionalLight
          intensity={2}
          position={[10, 0, 8]}
        />
        <ambientLight intensity={1} />
      </PerspectiveCamera>
      <PresentationControls
        polar={[-Math.PI / 2, Math.PI / 2]}
        azimuth={[-Infinity, Infinity]}
        damping={0.01}
        speed={1.5}
      >
        {children}
      </PresentationControls>
      <EffectComposer multisampling={0}>
        <SMAA preset={SMAAPreset.ULTRA} />
      </EffectComposer>
    </>
  )
}
