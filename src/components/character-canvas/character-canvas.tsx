"use client"

import { Cache } from "three"
import { Canvas } from "@react-three/fiber"
import clsx from "clsx"
import { Scene } from "./scene"
import { MinecraftModels } from "./minecraft-models"
import styles from "./character-canvas.module.css"

Cache.enabled = true

interface Props {
  className?: string
}

export const CharacterCanvas: React.FC<Props> = ({ className }) => {
  return (
    <Canvas
      className={clsx(className, styles.canvas)}
      resize={{
        debounce: {
          resize: 200,
          scroll: 200,
        }
      }}
    >
      <Scene>
        <MinecraftModels />
      </Scene>
    </Canvas>
  )
}
