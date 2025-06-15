import type { TextureLayer, TrimName } from "@/types"
import { getTrimTexturePath } from "@/helpers/get-texture-path"

export interface TrimTexture {
  name: TrimName
  texturePath: Record<TextureLayer, string>
}

export const TRIM_TEXTURES: TrimTexture[] = [
  {
    name: "bolt",
    texturePath: {
      "layer-1": getTrimTexturePath("bolt", "layer-1"),
      "layer-2": getTrimTexturePath("bolt", "layer-2"),
    },
  },
  {
    name: "coast",
    texturePath: {
      "layer-1": getTrimTexturePath("coast", "layer-1"),
      "layer-2": getTrimTexturePath("coast", "layer-2"),
    },
  },
  {
    name: "dune",
    texturePath: {
      "layer-1": getTrimTexturePath("dune", "layer-1"),
      "layer-2": getTrimTexturePath("dune", "layer-2"),
    },
  },
  {
    name: "eye",
    texturePath: {
      "layer-1": getTrimTexturePath("eye", "layer-1"),
      "layer-2": getTrimTexturePath("eye", "layer-2"),
    },
  },
  {
    name: "flow",
    texturePath: {
      "layer-1": getTrimTexturePath("flow", "layer-1"),
      "layer-2": getTrimTexturePath("flow", "layer-2"),
    },
  },
  {
    name: "host",
    texturePath: {
      "layer-1": getTrimTexturePath("host", "layer-1"),
      "layer-2": getTrimTexturePath("host", "layer-1"),
    },
  },
  {
    name: "raiser",
    texturePath: {
      "layer-1": getTrimTexturePath("raiser", "layer-1"),
      "layer-2": getTrimTexturePath("raiser", "layer-2"),
    },
  },
  {
    name: "rib",
    texturePath: {
      "layer-1": getTrimTexturePath("rib", "layer-1"),
      "layer-2": getTrimTexturePath("rib", "layer-2"),
    },
  },
  {
    name: "sentry",
    texturePath: {
      "layer-1": getTrimTexturePath("sentry", "layer-1"),
      "layer-2": getTrimTexturePath("sentry", "layer-2"),
    },
  },
  {
    name: "shaper",
    texturePath: {
      "layer-1": getTrimTexturePath("shaper", "layer-1"),
      "layer-2": getTrimTexturePath("shaper", "layer-2"),
    },
  },
  {
    name: "silence",
    texturePath: {
      "layer-1": getTrimTexturePath("silence", "layer-1"),
      "layer-2": getTrimTexturePath("silence", "layer-2"),
    },
  },
  {
    name: "snout",
    texturePath: {
      "layer-1": getTrimTexturePath("snout", "layer-1"),
      "layer-2": getTrimTexturePath("snout", "layer-2"),
    },
  },
  {
    name: "spire",
    texturePath: {
      "layer-1": getTrimTexturePath("spire", "layer-1"),
      "layer-2": getTrimTexturePath("spire", "layer-2"),
    },
  },
  {
    name: "tide",
    texturePath: {
      "layer-1": getTrimTexturePath("tide", "layer-1"),
      "layer-2": getTrimTexturePath("tide", "layer-2"),
    },
  },
  {
    name: "vex",
    texturePath: {
      "layer-1": getTrimTexturePath("vex", "layer-1"),
      "layer-2": getTrimTexturePath("vex", "layer-2"),
    },
  },
  {
    name: "ward",
    texturePath: {
      "layer-1": getTrimTexturePath("ward", "layer-1"),
      "layer-2": getTrimTexturePath("ward", "layer-2"),
    },
  },
  {
    name: "wayfinder",
    texturePath: {
      "layer-1": getTrimTexturePath("wayfinder", "layer-1"),
      "layer-2": getTrimTexturePath("wayfinder", "layer-2"),
    },
  },
  {
    name: "wild",
    texturePath: {
      "layer-1": getTrimTexturePath("wild", "layer-1"),
      "layer-2": getTrimTexturePath("wild", "layer-2"),
    },
  },
]
