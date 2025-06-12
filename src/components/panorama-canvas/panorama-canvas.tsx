"use client"

import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import { BrightnessContrast, EffectComposer, } from "@react-three/postprocessing"
import type { BoxSidesImage } from "@/types"
import { useDisableZoom } from "@/hooks/use-disable-zoom"
import { useMobile } from "@/hooks/use-mobile"
import { SkyBox } from "@/components/sky-box"
import styles from "./panorama-canvas.module.css"

export const PanoramaCanvas = () => {
  useDisableZoom()
  const isMobile = useMobile()
  const dynamicFolder = isMobile ? "mobile" : "desktop"
  const panoramaName = "simply-vanilla-spawn"

  const images: BoxSidesImage = [
    `/images/panoramas/${panoramaName}/${dynamicFolder}/right.webp`,
    `/images/panoramas/${panoramaName}/${dynamicFolder}/left.webp`,
    `/images/panoramas/${panoramaName}/${dynamicFolder}/top.webp`,
    `/images/panoramas/${panoramaName}/${dynamicFolder}/bottom.webp`,
    `/images/panoramas/${panoramaName}/${dynamicFolder}/front.webp`,
    `/images/panoramas/${panoramaName}/${dynamicFolder}/back.webp`,
  ]

  return (
    <div className={styles.wrapper}>
      <Canvas
        resize={{
          debounce: {
            resize: 200,
            scroll: 200,
          }
        }}
      >
        <PerspectiveCamera
          makeDefault
          fov={80}
          zoom={.7}
          near={0.1}
          far={1}
        />
        <SkyBox images={images} />
        <EffectComposer>
          <BrightnessContrast />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
