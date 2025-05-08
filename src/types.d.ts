// src/types.d.ts
import { ReactThreeFiber } from "@react-three/fiber"
import { ShaderMaterial, Texture } from "three"

declare module "@react-three/fiber" {
  interface ThreeElements {
    trimMaterial: ReactThreeFiber.Object3DNode<TrimMaterialType, typeof TrimMaterialType>
  }
}

type TrimMaterialType = ShaderMaterial & {
  trimTexture: Texture
  materialTexture: Texture
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      trimMaterial: ReactThreeFiber.Node<ShaderMaterial, typeof ShaderMaterial> & {
        trimTexture?: Texture
        materialTexture?: Texture
      }
    }
  }
}