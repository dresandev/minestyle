import {
  BackSide,
  MeshBasicMaterial,
  SRGBColorSpace,
  TextureLoader,
} from "three"
import type { BoxSidesImage } from "@/types"
import { useAutoRotate } from "./use-auto-rotate"

interface Props {
  images: BoxSidesImage
}

export const SkyBox: React.FC<Props> = ({ images }) => {
  const meshRef = useAutoRotate()
  const loader = new TextureLoader()

  const materials = images.map((url) => {
    const texture = loader.load(url)
    texture.colorSpace = SRGBColorSpace
    return (
      new MeshBasicMaterial({
        map: texture,
        side: BackSide,
      })
    )
  })

  return (
    <mesh ref={meshRef} scale={[-1, 1, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      {materials.map((material, index) => (
        <primitive
          attach={`material-${index}`}
          object={material}
          key={index}
        />
      ))}
    </mesh>
  )
}
