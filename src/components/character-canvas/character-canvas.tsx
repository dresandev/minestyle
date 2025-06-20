"use client"

import { Canvas } from "@react-three/fiber"
import clsx from "clsx"
import { Scene } from "./scene"
import { MinecraftModels } from "./minecraft-models"
import styles from "./character-canvas.module.css"

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
