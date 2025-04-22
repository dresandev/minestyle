import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
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
        position={[0, 0, 35]}
        fov={90}
        zoom={1.6}
        near={0.1}
        far={100.0}
      >
        <ambientLight intensity={1} />
        <directionalLight intensity={2} position={[10, 0, 8]} />
      </PerspectiveCamera>
      {children}
      <OrbitControls
        enableDamping={false}
        enableZoom={false}
        rotateSpeed={1}
      />
      <EffectComposer multisampling={0}>
        <SMAA preset={SMAAPreset.ULTRA} />
      </EffectComposer>
    </>
  )
}
