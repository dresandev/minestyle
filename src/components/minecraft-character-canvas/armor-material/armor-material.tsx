import { useRef, useLayoutEffect } from "react"
import {
  Color,
  DoubleSide,
  MeshStandardMaterial,
} from "three"
import { useMCTexture } from "@/hooks/use-mc-texture"

interface Props {
  armorUrl: string
  trimUrl: string
  trimMaterialUrl: string
  armorColor?: string
}

export const ArmorMaterial: React.FC<Props> = ({
  armorUrl,
  trimUrl,
  trimMaterialUrl,
  armorColor = "#ffffff",
}) => {
  const materialRef = useRef<MeshStandardMaterial>(null)
  const armorTexture = useMCTexture(armorUrl)
  const trimTexture = useMCTexture(trimUrl)
  const trimMaterialTexture = useMCTexture(trimMaterialUrl)

  useLayoutEffect(() => {
    const material = materialRef.current
    if (!material) return

    const { r, g, b } = new Color(armorColor)

    material.onBeforeCompile = (shader) => {
      shader.uniforms.trimTexture = { value: trimTexture }
      shader.uniforms.materialTexture = { value: trimMaterialTexture }
      shader.uniforms.armorTexture = { value: armorTexture }
      shader.uniforms.armorColor = { value: [r, g, b] }

      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `#include <common>
         varying vec2 vUv;`
      )

      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
         vUv = uv;`
      )

      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <common>",
        `#include <common>
         uniform sampler2D trimTexture;
         uniform sampler2D materialTexture;
         uniform sampler2D armorTexture;
         uniform vec3 armorColor;
         varying vec2 vUv;`
      )

      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `#include <color_fragment>
         vec4 baseColor = texture2D(armorTexture, vUv);
         vec4 trimColor = texture2D(trimTexture, vUv);

         vec3 colorizedArmorRgb = baseColor.rgb * armorColor;

         if (trimColor.a > 0.01) {
           float rawIndex = floor(trimColor.r * 10.0);
           float index = 7.0 - rawIndex;
           float u = index / 8.0;

           vec4 materialColor = texture2D(materialTexture, vec2(u, 0.5));
           vec3 finalRgb = mix(colorizedArmorRgb, materialColor.rgb, trimColor.a);
           diffuseColor = vec4(finalRgb, 1.0);
         } else {
           diffuseColor = vec4(colorizedArmorRgb, baseColor.a);
         }`
      )
    }
  }, [armorColor, armorTexture, trimMaterialTexture, trimTexture])

  const materialKey = `${armorUrl}-${trimUrl}-${trimMaterialUrl}-${armorColor}`

  return (
    <meshStandardMaterial
      key={materialKey}
      ref={materialRef}
      side={DoubleSide}
      transparent
      alphaTest={1e-5}
    />
  )
}
