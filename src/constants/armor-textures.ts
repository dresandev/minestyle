import { getArmorTexturePath } from "@/helpers/get-texture-path"
import { ArmorType, BasicArmorPartName } from "@/types"

const LEATHER_TEXTURE_LAYER_1 = getArmorTexturePath("leather", "layer-1")
const GOLD_TEXTURE_LAYER_1 = getArmorTexturePath("gold", "layer-1")
const CHAINMAIL_TEXTURE_LAYER_1 = getArmorTexturePath("chainmail", "layer-1")
const IRON_TEXTURE_LAYER_1 = getArmorTexturePath("iron", "layer-1")
const DIAMOND_TEXTURE_LAYER_1 = getArmorTexturePath("diamond", "layer-1")
const NETHERITE_TEXTURE_LAYER_1 = getArmorTexturePath("netherite", "layer-1")
const TURTLE_TEXTURE_LAYER_1 = getArmorTexturePath("turtle", "layer-1")

const LEATHER_TEXTURE_LAYER_2 = getArmorTexturePath("leather", "layer-2")
const GOLD_TEXTURE_LAYER_2 = getArmorTexturePath("gold", "layer-2")
const CHAINMAIL_TEXTURE_LAYER_2 = getArmorTexturePath("chainmail", "layer-2")
const IRON_TEXTURE_LAYER_2 = getArmorTexturePath("iron", "layer-2")
const DIAMOND_TEXTURE_LAYER_2 = getArmorTexturePath("diamond", "layer-2")
const NETHERITE_TEXTURE_LAYER_2 = getArmorTexturePath("netherite", "layer-2")

interface ArmorTexture {
  name: ArmorType,
  texture: string
}

export const ARMOR_TEXTURES: Record<BasicArmorPartName, ArmorTexture[]> = {
  helmet: [
    {
      name: "leather",
      texture: LEATHER_TEXTURE_LAYER_1,
    },
    {
      name: "gold",
      texture: GOLD_TEXTURE_LAYER_1,
    },
    {
      name: "chainmail",
      texture: CHAINMAIL_TEXTURE_LAYER_1,
    },
    {
      name: "iron",
      texture: IRON_TEXTURE_LAYER_1,
    },
    {
      name: "diamond",
      texture: DIAMOND_TEXTURE_LAYER_1,
    },
    {
      name: "netherite",
      texture: NETHERITE_TEXTURE_LAYER_1,
    },
    {
      name: "turtle",
      texture: TURTLE_TEXTURE_LAYER_1,
    },
  ],
  chestplate: [
    {
      name: "leather",
      texture: LEATHER_TEXTURE_LAYER_1,
    },
    {
      name: "gold",
      texture: GOLD_TEXTURE_LAYER_1,
    },
    {
      name: "chainmail",
      texture: CHAINMAIL_TEXTURE_LAYER_1,
    },
    {
      name: "iron",
      texture: IRON_TEXTURE_LAYER_1,
    },
    {
      name: "diamond",
      texture: DIAMOND_TEXTURE_LAYER_1,
    },
    {
      name: "netherite",
      texture: NETHERITE_TEXTURE_LAYER_1,
    },
  ],
  leggings: [
    {
      name: "leather",
      texture: LEATHER_TEXTURE_LAYER_2,
    },
    {
      name: "gold",
      texture: GOLD_TEXTURE_LAYER_2,
    },
    {
      name: "chainmail",
      texture: CHAINMAIL_TEXTURE_LAYER_2,
    },
    {
      name: "iron",
      texture: IRON_TEXTURE_LAYER_2,
    },
    {
      name: "diamond",
      texture: DIAMOND_TEXTURE_LAYER_2,
    },
    {
      name: "netherite",
      texture: NETHERITE_TEXTURE_LAYER_2,
    },
  ],
  boots: [
    {
      name: "leather",
      texture: LEATHER_TEXTURE_LAYER_1,
    },
    {
      name: "gold",
      texture: GOLD_TEXTURE_LAYER_1,
    },
    {
      name: "chainmail",
      texture: CHAINMAIL_TEXTURE_LAYER_1,
    },
    {
      name: "iron",
      texture: IRON_TEXTURE_LAYER_1,
    },
    {
      name: "diamond",
      texture: DIAMOND_TEXTURE_LAYER_1,
    },
    {
      name: "netherite",
      texture: NETHERITE_TEXTURE_LAYER_1,
    },
  ]
}
