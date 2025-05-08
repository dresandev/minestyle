import { TEXTURE_PATHS } from "@/constants/texture-urls"
import { useArmorDataStore } from "@/store/use-armor-data-store"
import { useBackEquipmentDataStore } from "@/store/use-back-equipment-data-store"

export const Button = () => {
  const setArmorPart = useArmorDataStore(state => state.setArmorPart)
  const setTrimPart = useArmorDataStore(state => state.setTrimPart)
  const setArmorPartVisibility = useArmorDataStore(state => state.setArmorPartVisibility)
  const setBackEquipment = useBackEquipmentDataStore(state => state.setBackEquipment)

  const handleChainmail = () => {
    setArmorPart({
      helmet: {
        isVisible: true,
        armorData: {
          isLeather: false,
          armorUrl: "/images/armors/chainmail/layer-1.png",
        },
      },
      chestplate: {
        isVisible: true,
        armorData: {
          isLeather: false,
          armorUrl: "/images/armors/chainmail/layer-1.png",
        },
      },
      innerChestplate: {
        isVisible: true,
        armorData: {
          isLeather: false,
          armorUrl: "/images/armors/chainmail/layer-2.png",
        },
      },
      leggins: {
        isVisible: true,
        armorData: {
          isLeather: false,
          armorUrl: "/images/armors/chainmail/layer-2.png",
        },
      },
      boots: {
        isVisible: true,
        armorData: {
          isLeather: false,
          armorUrl: "/images/armors/chainmail/layer-1.png",
        },
      },
    })
  }
  const handleDiamond = () => {
    setArmorPart({
      helmet: {
        isVisible: true,
        armorData: {
          isLeather: true,
          armorColor: "#9D9D97",
          armorUrl: "/images/armors/leather/layer-1.png",
        },
      },
      chestplate: {
        isVisible: true,
        armorData: {
          isLeather: true,
          armorColor: "#9D9D97",
          armorUrl: "/images/armors/leather/layer-1.png",
        },
      },
      innerChestplate: {
        isVisible: true,
        armorData: {
          isLeather: true,
          armorColor: "#9D9D97",
          armorUrl: "/images/armors/leather/layer-2.png",
        },
      },
      leggins: {
        isVisible: true,
        armorData: {
          isLeather: true,
          armorColor: "#9D9D97",
          armorUrl: "/images/armors/leather/layer-2.png",
        },
      },
      boots: {
        isVisible: true,
        armorData: {
          isLeather: true,
          armorColor: "#9D9D97",
          armorUrl: "/images/armors/leather/layer-1.png",
        },
      },
    })
  }
  const handleTwoClick = () => {
    setArmorPartVisibility({ helmet: { isVisible: false } })
  }
  const handleCoast = () => {
    setTrimPart({
      helmet: {
        trimData: {
          trimUrl: "/images/trims/coast/layer-1.png",
          trimMaterialUrl: "/images/materials/copper.png"
        }
      },
      chestplate: {
        trimData: {
          trimUrl: "/images/trims/coast/layer-1.png",
          trimMaterialUrl: "/images/materials/copper.png"
        }
      },
      leggins: {
        trimData: {
          trimUrl: "/images/trims/coast/layer-2.png",
          trimMaterialUrl: "/images/materials/copper.png"
        }
      },
      boots: {
        trimData: {
          trimUrl: "/images/trims/coast/layer-1.png",
          trimMaterialUrl: "/images/materials/copper.png"
        }
      },
    })
  }
  const handleBolt = () => {
    setTrimPart({
      helmet: {
        trimData: {
          trimUrl: TEXTURE_PATHS.TRIMS.BOLT.LAYER_1,
          trimMaterialUrl: TEXTURE_PATHS.MATERIALS.AMETHYST
        }
      },
      chestplate: {
        trimData: {
          trimUrl: TEXTURE_PATHS.TRIMS.BOLT.LAYER_1,
          trimMaterialUrl: TEXTURE_PATHS.MATERIALS.AMETHYST
        }
      },
      leggins: {
        trimData: {
          trimUrl: TEXTURE_PATHS.TRIMS.BOLT.LAYER_2,
          trimMaterialUrl: TEXTURE_PATHS.MATERIALS.AMETHYST
        }
      },
      boots: {
        trimData: {
          trimUrl: TEXTURE_PATHS.TRIMS.BOLT.LAYER_1,
          trimMaterialUrl: TEXTURE_PATHS.MATERIALS.AMETHYST
        }
      },
    })
  }
  const handleCape = () => {
    setBackEquipment({
      cape: {
        isVisible: true,
        url: "/images/capes/cape.png"
      },
      elytra: {
        url: "/images/capes/cape.png"
      }
    })
  }

  return (
    <>
      <button onClick={handleChainmail}>cota de malla</button>
      <button onClick={handleDiamond}>Diamante</button>
      <button onClick={handleTwoClick}>Quitar casco</button>
      <button onClick={handleCoast}>coast</button>
      <button onClick={handleBolt}>bolt</button>
      <button onClick={handleCape}>Change cape</button>
    </>
  )
}
