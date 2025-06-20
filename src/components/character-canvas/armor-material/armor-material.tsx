import { useRef, useEffect } from "react"
import {
  Color,
  DoubleSide,
  WebGLProgramParametersWithUniforms,
} from "three"
import { useMcTexture } from "@/hooks/use-mc-texture"
import { TRANSPARENT_TEXTURE_PATH } from "@/constants/image-paths"

interface Props {
  armorUrl: string
  trimUrl?: string
  trimMaterialUrl?: string
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
  const trimTexture = useMcTexture(trimUrl || TRANSPARENT_TEXTURE_PATH)
  const trimMaterialTexture = useMcTexture(trimMaterialUrl || TRANSPARENT_TEXTURE_PATH)

  const { r, g, b } = new Color(armorDye)

  useEffect(() => {
    const shader = shaderRef.current
    if (!shader || !shader.uniforms) return

    const uniforms = shader.uniforms
    uniforms.armorTexture.value = armorTexture
    uniforms.armorDye.value = [r, g, b]
    uniforms.trimTexture.value = trimTexture
    uniforms.materialTexture.value = trimMaterialTexture
    uniforms.hasTrim.value = !!trimUrl
  }, [armorTexture, trimTexture, trimMaterialTexture, r, g, b, trimUrl])

  const onBeforeCompile = (shader: WebGLProgramParametersWithUniforms) => {
    shaderRef.current = shader

    shader.uniforms.armorTexture = { value: armorTexture }
    shader.uniforms.armorDye = { value: [r, g, b] }
    shader.uniforms.trimTexture = { value: trimTexture }
    shader.uniforms.materialTexture = { value: trimMaterialTexture }
    shader.uniforms.hasTrim = { value: !!trimUrl }

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
       uniform sampler2D armorTexture;
       uniform sampler2D trimTexture;
       uniform sampler2D materialTexture;
       uniform vec3 armorDye;
       uniform bool hasTrim;
       varying vec2 vUv;`
    )

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>

      vec4 baseColor = texture2D(armorTexture, vUv);
      vec3 colorizedArmorRgb = baseColor.rgb * armorDye;

      vec3 finalColor = colorizedArmorRgb;

      if (hasTrim) {
        vec4 trimSample = texture2D(trimTexture, vUv);

        float rawIndex = floor(trimSample.r * 10.0);
        float index = 7.0 - rawIndex;
        float u = index / 8.0;
        vec4 materialSample = texture2D(materialTexture, vec2(u, 0.5));

        finalColor = mix(colorizedArmorRgb, materialSample.rgb, trimSample.a);
      }

      diffuseColor = vec4(finalColor, baseColor.a);`
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
