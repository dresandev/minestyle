import { useTextureUrlStore } from "@/store/use-texture-url-store"

export const Button = () => {
  const setTextureUrl = useTextureUrlStore(state => state.setTextureUrl)

  const handleClick = () => {
    setTextureUrl("chestplate", "images/armors/diamond_layer_1.png")
  }
  return <button onClick={handleClick}>Click aqui</button>
}
