import { useRef, useEffect } from "react"
import {
  Color,
  DoubleSide,
  WebGLProgramParametersWithUniforms,
} from "three"
import { useMcTexture } from "@/hooks/use-mc-texture"

interface Props {
  armorUrl: string
  trimUrl: string
  trimMaterialUrl: string
  armorDye?: string
}

export const ArmorMaterial: React.FC<Props> = ({
  armorUrl,
  trimUrl,
  trimMaterialUrl,
  armorDye = "#ffffff",
}) => {
  const shaderRef = useRef<WebGLProgramParametersWithUniforms>(null)
  const armorTexture = useMcTexture(armorUrl)
  const trimTexture = useMcTexture(trimUrl)
  const trimMaterialTexture = useMcTexture(trimMaterialUrl)

  const { r, g, b } = new Color(armorDye)

  useEffect(() => {
    const shader = shaderRef.current

    if (!shader || !shader.uniforms) return

    const uniforms = shader.uniforms

    uniforms.trimTexture.value = trimTexture
    uniforms.materialTexture.value = trimMaterialTexture
    uniforms.armorTexture.value = armorTexture
    uniforms.armorDye.value = [r, g, b]
  }, [armorTexture, trimTexture, trimMaterialTexture, r, g, b])

  const onBeforeCompile = (shader: WebGLProgramParametersWithUniforms) => {
    shaderRef.current = shader

    shader.uniforms.trimTexture = { value: trimTexture }
    shader.uniforms.materialTexture = { value: trimMaterialTexture }
    shader.uniforms.armorTexture = { value: armorTexture }
    shader.uniforms.armorDye = { value: [r, g, b] }

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
       uniform vec3 armorDye;
       varying vec2 vUv;`
    )

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>
       vec4 baseColor = texture2D(armorTexture, vUv);
       vec4 trimColor = texture2D(trimTexture, vUv);

       vec3 colorizedArmorRgb = baseColor.rgb * armorDye;

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

  return (
    <meshStandardMaterial
      side={DoubleSide}
      transparent
      alphaTest={1e-5}
      onBeforeCompile={onBeforeCompile}
    />
  )
}
