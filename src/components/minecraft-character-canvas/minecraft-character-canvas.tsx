"use client"

import { Cache } from "three"
import { useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import clsx from "clsx"
import { TEXTURES } from "@/constants/texture-urls"
import { Scene } from "./scene"
import { MinecraftModels } from "./minecraft-models"
import styles from "./minecraft-character-canvas.module.css"

TEXTURES.forEach(useTexture.preload)
Cache.enabled = true

interface Props {
  className?: string
}

export const MinecraftCharacterCanvas: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, styles.wrapper)}>
      <Canvas
        resize={{
          debounce: {
            resize: 200,
            scroll: 200,
          }
        }}
        className={styles.canvas}
      >
        <Scene>
          <MinecraftModels />
        </Scene>
      </Canvas>
    </div>
  )
}
